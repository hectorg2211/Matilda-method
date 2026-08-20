import { NextRequest } from "next/server";
import { ensurePaymentPlanEnds, getStripe } from "@/lib/stripe";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    return new Response("Missing STRIPE_WEBHOOK_SECRET", { status: 500 });
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return new Response("Missing stripe-signature", { status: 400 });
  }

  const stripe = getStripe();
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      await request.text(),
      signature,
      secret,
    );
  } catch {
    return new Response("Invalid signature", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    if (session.metadata?.plan === "3_month") {
      const subscriptionId =
        typeof session.subscription === "string"
          ? session.subscription
          : session.subscription?.id;
      if (subscriptionId) {
        await ensurePaymentPlanEnds(subscriptionId);
      }
    }
  }

  if (event.type === "customer.subscription.created") {
    const subscription = event.data.object;
    if (subscription.metadata?.plan === "3_month") {
      await ensurePaymentPlanEnds(subscription.id);
    }
  }

  return new Response("ok", { status: 200 });
}
