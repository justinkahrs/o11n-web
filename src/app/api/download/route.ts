import { NextResponse } from "next/server";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { stripe } from "../../../../lib/stripe";
import { ListObjectsV2Command } from "@aws-sdk/client-s3";
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});
async function getLatestKey(prefix: string) {
  const command = new ListObjectsV2Command({
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    Bucket: process.env.AWS_S3_BUCKET!,
    Prefix: prefix,
  });
  const data = await s3Client.send(command);
  if (!data.Contents || data.Contents.length === 0) {
    throw new Error(`No objects found for prefix ${prefix}`);
  }
  const filteredContents = data.Contents.filter(
    (item) => item.Key !== undefined && /\.(dmg|exe)$/.test(item.Key)
  );
  if (filteredContents.length === 0) {
    throw new Error(`No .dmg or .exe objects found for prefix ${prefix}`);
  }
  const latest = filteredContents.reduce((prev, curr) => {
    if (
      !prev.LastModified ||
      (curr.LastModified && curr.LastModified > prev.LastModified)
    ) {
      return curr;
    }
    return prev;
  });
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  return latest.Key!;
}
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get("session_id");
    if (!sessionId) {
      return new NextResponse("Session ID is required", { status: 400 });
    }
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status !== "paid") {
      return new NextResponse("Payment not completed", { status: 402 });
    }
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    const bucket = process.env.AWS_S3_BUCKET!;
    const prefixDmg = "bundles/o11n-macos-latest-bundle/dmg/";
    const prefixExe = "bundles/o11n-windows-latest-bundle/nsis/";
    const keyDmg = await getLatestKey(prefixDmg);
    const keyExe = await getLatestKey(prefixExe);
    const dmgCommand = new GetObjectCommand({ Bucket: bucket, Key: keyDmg });
    const exeCommand = new GetObjectCommand({ Bucket: bucket, Key: keyExe });
    const urlDmg = await getSignedUrl(s3Client, dmgCommand, { expiresIn: 300 });
    const urlExe = await getSignedUrl(s3Client, exeCommand, { expiresIn: 300 });
    return NextResponse.json({ dmg: urlDmg, exe: urlExe });
  } catch (error) {
    console.error("Error in GET /api/download:", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    if (!email) {
      return new NextResponse("Email is required", { status: 400 });
    }
    const customers = await stripe.customers.list({ email });
    if (!customers.data || customers.data.length === 0) {
      return new NextResponse("Customer not found", { status: 404 });
    }
    const customerId = customers.data[0].id;
    const sessions = await stripe.checkout.sessions.list({
      customer: customerId,
      limit: 1,
    });
    if (!sessions.data || sessions.data.length === 0) {
      return new NextResponse("No completed sessions found", { status: 404 });
    }
    const sessionId = sessions.data[0].id;
    const customerEmail =
      sessions.data[0].customer_details?.email ||
      sessions.data[0].customer_email;

    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    await fetch(process.env.GOOGLE_APPS_SCRIPT_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId, email: customerEmail }),
    });
    return NextResponse.json({ customerEmail });
  } catch (error) {
    console.error("Error in POST /api/download:", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
