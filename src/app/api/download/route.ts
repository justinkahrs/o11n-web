import { NextResponse } from "next/server";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { stripe } from "../../../../lib/stripe";
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});
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
    const keyDmg =
      "bundles/o11n-macos-latest-bundle/dmg/o11n_1.0.115_aarch64.dmg";
    const keyExe =
      "bundles/o11n-windows-latest-bundle/nsis/o11n_1.0.115_x64-setup.exe";
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
