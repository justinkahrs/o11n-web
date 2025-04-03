import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Forward the email to the external endpoint
    const response = await fetch(
      "https://hook.us2.make.com/ju5tqirqxbjnwi2sj9x06vif4st2u372",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to forward email" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Email submitted successfully",
      email,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request", raw: error },
      { status: 400 }
    );
  }
}
