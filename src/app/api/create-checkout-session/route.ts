import { NextResponse } from 'next/server';
import { stripe } from '../../../../lib/stripe';
export async function POST(req: Request) {
  const origin = req.headers.get('origin') ?? '';
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: process.env.PRICE_ID!,
        quantity: 1,
      },
    ],
    mode: 'payment',
    ui_mode: 'embedded',
    payment_intent_data: {
      description: `${origin}/download?session_id={CHECKOUT_SESSION_ID}`,
    },
    return_url: `${origin}/download?session_id={CHECKOUT_SESSION_ID}`,
    automatic_tax: { enabled: true },
  });
  return NextResponse.json({ clientSecret: session.client_secret });
}