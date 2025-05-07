"use client";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { fetchClientSecret } from "../actions/stripe";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  full: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);
export default function Checkout() {
  const classes = useStyles();
  return (
    <div>
      <div id="checkout">
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{ fetchClientSecret }}
        >
          <EmbeddedCheckout className={classes.full} />
        </EmbeddedCheckoutProvider>
      </div>
    </div>
  );
}
