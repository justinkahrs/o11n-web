"use client";

import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const router = useRouter();

  const getStripePromise = useCallback(
    () => loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""),
    []
  );
  const stripePromise = getStripePromise();
  const fetchClientSecret = useCallback(async () => {
    const res = await fetch("/api/create-checkout-session", { method: "POST" });
    const data = await res.json();
    return data.clientSecret;
  }, []);
  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{
          fetchClientSecret,
          onComplete: () => router.push("/download"),
        }}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
