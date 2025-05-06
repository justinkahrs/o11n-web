"use server";

import { headers } from "next/headers";

import { stripe } from "../../../lib/stripe";

export async function fetchClientSecret(): Promise<string> {
  const origin = (await headers()).get("origin");

  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    line_items: [
      {
        price: process.env.PRICE_ID,
        quantity: 1,
      },
    ],
    mode: "payment",
    payment_intent_data: {
      description: `${origin}/download?session_id={CHECKOUT_SESSION_ID}`,
    },
    return_url: `${origin}/download?session_id={CHECKOUT_SESSION_ID}`,
    automatic_tax: { enabled: true },
  });

  const secret = session.client_secret;
  if (!secret) {
    throw new Error("No client secret returned");
  }
  return secret;
}
