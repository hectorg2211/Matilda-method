import { randomBytes } from "crypto";
import Stripe from "stripe";

export const PRIVATE_COACHING = {
  name: "Private 1:1 Coaching — 6 Weeks",
  description:
    "Six private coaching sessions with personalised goals, between-session practice, and brain-informed tools.",
  fullAmountPence: 149_700,
  planAmountPence: 49_900,
  planMonths: 3,
} as const;

export type CheckoutPlan = "full" | "plan";

const CHECKOUT_PLANS: readonly CheckoutPlan[] = ["full", "plan"];

export function isCheckoutPlan(value: string): value is CheckoutPlan {
  return (CHECKOUT_PLANS as readonly string[]).includes(value);
}

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

/** Tags Checkout Sessions in the Stripe Dashboard. Suffix is 8 random letters. */
export function checkoutIntegrationId(plan: CheckoutPlan) {
  const suffix = randomBytes(8)
    .reduce((letters, byte) => letters + String.fromCharCode(97 + (byte % 26)), "");
  return `matilda-coaching-${plan}-${suffix}`;
}

/**
 * Three monthly invoices: start, +1 month, +2 months.
 * Cancel during the third period so a fourth invoice is never created.
 */
export function paymentPlanCancelAt(startUnix: number) {
  const cancel = new Date(startUnix * 1000);
  cancel.setUTCMonth(cancel.getUTCMonth() + PRIVATE_COACHING.planMonths - 1);
  cancel.setUTCDate(cancel.getUTCDate() + 1);
  return Math.floor(cancel.getTime() / 1000);
}

/** Checkout can't set cancel_at — apply it once the subscription exists. */
export async function ensurePaymentPlanEnds(subscriptionId: string) {
  const stripe = getStripe();
  const subscription = await stripe.subscriptions.retrieve(subscriptionId);

  if (subscription.cancel_at || subscription.metadata?.plan !== "3_month") {
    return;
  }

  await stripe.subscriptions.update(subscriptionId, {
    cancel_at: paymentPlanCancelAt(subscription.start_date),
  });
}
