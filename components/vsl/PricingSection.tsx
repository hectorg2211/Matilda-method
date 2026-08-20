"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { cal } from "@/lib/cal";
import { BookClarityCall } from "./BookClarityCall";
import { BuyPrivateCoaching } from "./BuyPrivateCoaching";
import {
  CLARITY_CTA,
  CLARITY_HREF,
  PRIVATE_PLACES,
  SectionShell,
  useRevealVariants,
} from "./shared";

function CalSkeleton() {
  return (
    <div
      className="flex min-h-[18rem] w-full items-center justify-center"
      aria-hidden="true"
    >
      <span className="text-[14px] text-plum-soft/70">Loading times…</span>
    </div>
  );
}

const CalInline = dynamic(
  () => import("./CalInline").then((mod) => mod.CalInline),
  { ssr: false, loading: () => <CalSkeleton /> },
);

const INCLUDES = [
  "6 private 1:1 coaching sessions",
  "Personalised goals and a clear action plan",
  "Reflection and practice between sessions",
  "Brain-informed coaching tools and mental fitness practices",
  "Support with identity, confidence, boundaries, decisions, and leadership where it matters for you",
] as const;

export function PricingSection() {
  const { container, item } = useRevealVariants();

  return (
    <SectionShell
      id="offer"
      className="bg-plum text-cream pb-28 sm:pb-24 md:pb-20"
    >
      <motion.div
        className="grid gap-10 lg:grid-cols-3 lg:gap-8 lg:items-start"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div variants={item}>
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-gold">
            Private 1:1 coaching
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-[2.1rem]">
            6 weeks to break the pattern
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-cream/80">
            Private coaching for women who are done managing the same patterns
            and want clearer, steadier responses in the moments that matter.
          </p>
          <ul className="mt-6 space-y-3">
            {INCLUDES.map((line) => (
              <li
                key={line}
                className="flex items-start gap-3 text-[14px] leading-relaxed text-cream/80"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                  <svg
                    viewBox="0 0 16 16"
                    className="h-3 w-3"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3.5 8.5l3 3 6-6.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <BookClarityCall
            appearance="text"
            className="btn-link mt-7 text-[14px] text-gold underline decoration-gold/40 hover:text-cream"
          >
            {CLARITY_CTA}
            <span aria-hidden="true">→</span>
          </BookClarityCall>
        </motion.div>

        <motion.div
          id="investment"
          variants={item}
          className="scroll-mt-28 rounded-[1.75rem] border border-gold/40 bg-plum-soft/30 px-6 py-8 text-center sm:px-8"
        >
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-gold">
            Private coaching investment
          </p>
          <p className="mt-4 font-semibold tracking-[-0.03em] text-5xl text-cream sm:text-6xl">
            £1,497
          </p>
          <p className="mt-3 text-[15px] text-cream/75">
            Pay in full, or in 3 × £499
          </p>
          <div className="mt-6 flex items-center justify-center gap-1.5" aria-hidden="true">
            {Array.from({ length: PRIVATE_PLACES }).map((_, i) => (
              <span
                key={i}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-gold/35 text-gold"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
                  <path
                    d="M12 12a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5zM5.5 19a6.5 6.5 0 0113 0"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            ))}
          </div>
          <p className="mt-3 text-[14px] font-medium text-cream">
            {PRIVATE_PLACES} private coaching places available
          </p>
          <p className="mt-2 text-[13px] leading-relaxed text-cream/70">
            Places are limited so the work stays personal.
          </p>

          <div className="mt-7 space-y-3">
            <BuyPrivateCoaching
              plan="full"
              className="btn btn-gold h-12 w-full rounded-full px-6 text-[13px] font-semibold uppercase tracking-[0.04em] sm:text-[14px]"
            >
              Pay £1,497
            </BuyPrivateCoaching>
            <div>
              <BuyPrivateCoaching
                plan="plan"
                className="btn btn-secondary h-12 w-full rounded-full border-cream/25 bg-transparent px-6 text-[13px] font-semibold text-cream sm:text-[14px]"
              >
                Pay in 3 × £499
              </BuyPrivateCoaching>
              <p className="mt-1.5 text-[12px] leading-relaxed text-cream/65">
                Three monthly card payments billed by us. Months two and three
                stay due.
              </p>
            </div>
            <p className="text-[12px] leading-relaxed text-cream/65">
              Secure checkout with Stripe.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-col lg:pt-1"
        >
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-gold">
            Ready for the next step?
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] sm:text-[1.75rem]">
            Let’s find the pattern that’s keeping you stuck.
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-cream/80">
            On a 30-minute clarity call, we’ll look at what’s going on for you,
            what you want to change, and whether six weeks of private coaching
            is a good fit for both of us.
          </p>
          {cal ? (
            <a
              href={CLARITY_HREF}
              className="btn-link mt-7 text-[14px] text-gold underline decoration-gold/40 hover:text-cream"
            >
              Choose a time below
              <span aria-hidden="true">↓</span>
            </a>
          ) : (
            <BookClarityCall
              variant="gold"
              className="mt-7 h-12 rounded-full px-7 text-[14px] uppercase tracking-[0.04em] sm:h-[3.25rem]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M7 4v2M17 4v2M5 9h14M6.5 6h11A1.5 1.5 0 0119 7.5v11A1.5 1.5 0 0117.5 20h-11A1.5 1.5 0 015 18.5v-11A1.5 1.5 0 016.5 6z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
              {CLARITY_CTA}
            </BookClarityCall>
          )}
          <p className="mt-4 text-[13px] text-cream/65">
            {PRIVATE_PLACES} places open. The call is 30 minutes.
          </p>
        </motion.div>
      </motion.div>

      {cal ? (
        <div
          id="apply"
          className="mt-12 scroll-mt-28 overflow-x-clip rounded-[1.75rem] border border-gold/25 bg-cream text-plum shadow-[0_24px_60px_rgba(0,0,0,0.22)] md:mt-16"
        >
          <div className="border-b border-gold/20 bg-gold-light/35 px-5 py-6 text-center sm:px-8 sm:py-7">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-plum">
              Private clarity call
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-plum sm:text-[1.75rem]">
              Pick a time that works
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-[14px] leading-relaxed text-plum-soft">
              30 minutes, no charge. We’ll see whether six weeks of private
              coaching is the right fit, both ways.
            </p>
          </div>
          <div className="cal-booker w-full">
            <CalInline />
          </div>
        </div>
      ) : (
        <div id="apply" className="sr-only">
          Book a clarity call
        </div>
      )}
    </SectionShell>
  );
}
