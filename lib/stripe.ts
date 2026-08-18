import Stripe from "stripe";

export const PRIVATE_COACHING = {
  name: "Private 1:1 Coaching — 6 Weeks",
  description:
    "Six private coaching sessions with personalised goals, between-session practice, and brain-informed tools.",
  fullAmountPence: 149_700,
  planAmountPence: 49_900,
  planMonths: 3,
} as const;

export function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error(
      "Missing STRIPE_SECRET_KEY. Add your Stripe secret key to .env.local.",
    );
  }

  return new Stripe(key);
}

export function getSiteOrigin(headerOrigin: string | null) {
  return (
    headerOrigin ??
    process.env.NEXT_PUBLIC_SITE_URL ??
    "http://localhost:3000"
  );
}

/** Checkout can't set cancel_at — apply it once the subscription exists. */
export async function ensurePaymentPlanEnds(subscriptionId: string) {
  const stripe = getStripe();
  const subscription = await stripe.subscriptions.retrieve(subscriptionId);

  if (subscription.cancel_at || subscription.metadata?.plan !== "3_month") {
    return;
  }

  const cancelAt =
    subscription.start_date +
    PRIVATE_COACHING.planMonths * 30 * 24 * 60 * 60;

  await stripe.subscriptions.update(subscriptionId, {
    cancel_at: cancelAt,
  });
}
