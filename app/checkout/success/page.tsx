import Link from "next/link";
import { ensurePaymentPlanEnds, getStripe } from "@/lib/stripe";
import { SiteNav } from "@/components/vsl/SiteNav";
import { SiteFooter } from "@/components/vsl/SiteFooter";

type SearchParams = Promise<{ session_id?: string }>;

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { session_id: sessionId } = await searchParams;

  let email: string | null = null;
  let planLabel = "Private 1:1 coaching";

  if (sessionId && process.env.STRIPE_SECRET_KEY) {
    try {
      const stripe = getStripe();
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      email =
        session.customer_details?.email ??
        session.customer_email ??
        null;
      if (session.metadata?.plan === "3_month") {
        planLabel = "Private 1:1 coaching (3 × £499 plan)";
      }

      const subscriptionId =
        typeof session.subscription === "string"
          ? session.subscription
          : session.subscription?.id;
      if (subscriptionId) {
        await ensurePaymentPlanEnds(subscriptionId);
      }
    } catch {
      // Keep a friendly page even if retrieval fails
    }
  }

  return (
    <main className="page-texture min-h-full">
      <SiteNav />
      <section className="mx-auto flex max-w-xl flex-col items-center px-5 py-20 text-center sm:px-8">
        <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-gold-ink">
          Payment received
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-plum sm:text-4xl">
          You are in.
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-plum-soft">
          Thanks for enrolling in {planLabel}.
          {email ? ` A receipt is on its way to ${email}.` : null} Matilda will
          email you shortly with next steps and how to book your first session.
        </p>
        <Link
          href="/"
          className="btn btn-primary mt-8 h-12 rounded-full px-8 text-[15px]"
        >
          Back to home
        </Link>
      </section>
      <SiteFooter />
    </main>
  );
}
