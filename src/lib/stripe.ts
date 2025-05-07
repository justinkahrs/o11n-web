import "server-only";

import Stripe from "stripe";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
