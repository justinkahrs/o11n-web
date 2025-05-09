"use server";

import { headers } from "next/headers";

import { stripe } from "../../lib/stripe";

export async function fetchClientSecret() {
  const origin = (await headers()).get("origin");

  // Create Checkout Sessions from body params.
  const session = await stripe.checkout.sessions.create({
    consent_collection: {
      terms_of_service: "required",
    },
    customer_creation: "always",
    ui_mode: "embedded",
    allow_promotion_codes: true,
    line_items: [
      {
        // Provide the exact Price ID (for example, price_1234) of
        // the product you want to sell
        price: process.env.PRICE_ID,
        quantity: 1,
      },
    ],
    mode: "payment",
    return_url: `${origin}/download?session_id={CHECKOUT_SESSION_ID}`,
    automatic_tax: { enabled: true },
  });

  if (!session.client_secret) {
    throw new Error("Failed to retrieve client secret");
  }
  return session.client_secret;
}
