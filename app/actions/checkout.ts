"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import {
  getSiteOrigin,
  getStripe,
  PRIVATE_COACHING,
} from "@/lib/stripe";

export type CheckoutPlan = "full" | "plan";

export async function startPrivateCoachingCheckout(plan: CheckoutPlan) {
  if (plan !== "full" && plan !== "plan") {
    throw new Error("Invalid checkout plan");
  }

  const stripe = getStripe();
  const headerList = await headers();
  const origin = getSiteOrigin(headerList.get("origin"));

  const successUrl = `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${origin}/#offer`;

  if (plan === "full") {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
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
      metadata: {
        offer: "private_coaching",
        plan: "full",
      },
    });

    if (!session.url) {
      throw new Error("Stripe did not return a checkout URL");
    }

    redirect(session.url);
  }

  // 3 monthly payments of £499 — cancel_at is set after Checkout
  // (Checkout Sessions do not accept subscription_data.cancel_at).
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
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
    metadata: {
      offer: "private_coaching",
      plan: "3_month",
    },
  });

  if (!session.url) {
    throw new Error("Stripe did not return a checkout URL");
  }

  redirect(session.url);
}
