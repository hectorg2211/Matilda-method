"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import type Stripe from "stripe";
import {
  checkoutIntegrationId,
  getSiteOrigin,
  getStripe,
  isCheckoutPlan,
  PRIVATE_COACHING,
  type CheckoutPlan,
} from "@/lib/stripe";

export type { CheckoutPlan };

export async function startPrivateCoachingCheckout(plan: CheckoutPlan) {
  if (!isCheckoutPlan(plan)) {
    throw new Error("Invalid checkout plan");
  }

  const stripe = getStripe();
  const headerList = await headers();
  const origin = getSiteOrigin(headerList.get("origin"));

  const successUrl = `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${origin}/#offer`;

  const session = await stripe.checkout.sessions.create(
    plan === "plan"
      ? paymentPlanSession(successUrl, cancelUrl)
      : payInFullSession(successUrl, cancelUrl),
  );

  if (!session.url) {
    throw new Error("Stripe did not return a checkout URL");
  }

  redirect(session.url);
}

function payInFullSession(
  successUrl: string,
  cancelUrl: string,
): Stripe.Checkout.SessionCreateParams {
  return {
    mode: "payment",
    locale: "en-GB",
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "gbp",
          unit_amount: PRIVATE_COACHING.fullAmountPence,
          product_data: {
            name: PRIVATE_COACHING.name,
            description: PRIVATE_COACHING.description,
          },
        },
      },
    ],
    success_url: successUrl,
    cancel_url: cancelUrl,
    billing_address_collection: "auto",
    customer_creation: "always",
    integration_identifier: checkoutIntegrationId("full"),
    metadata: {
      offer: "private_coaching",
      plan: "full",
    },
    payment_intent_data: {
      metadata: {
        offer: "private_coaching",
        plan: "full",
      },
    },
  };
}

function paymentPlanSession(
  successUrl: string,
  cancelUrl: string,
): Stripe.Checkout.SessionCreateParams {
  return {
    mode: "subscription",
    locale: "en-GB",
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "gbp",
          unit_amount: PRIVATE_COACHING.planAmountPence,
          recurring: { interval: "month" },
          product_data: {
            name: `${PRIVATE_COACHING.name} (payment plan)`,
            description: "3 monthly payments of £499",
          },
        },
      },
    ],
    subscription_data: {
      metadata: {
        offer: "private_coaching",
        plan: "3_month",
      },
    },
    success_url: successUrl,
    cancel_url: cancelUrl,
    billing_address_collection: "auto",
    integration_identifier: checkoutIntegrationId("plan"),
    metadata: {
      offer: "private_coaching",
      plan: "3_month",
    },
  };
}
