"use client";

import { motion } from "framer-motion";
import {
  SectionHeader,
  SectionShell,
  useRevealVariants,
} from "./shared";

const PLANS = [
  {
    badge: "Primary path",
    name: "Clarity call into one-to-one",
    price: "Start here",
    description:
      "Book the call first. If it is a fit, you continue into one-to-one coaching with a clearer read on your pattern.",
    cta: "Book a clarity call",
    features: [
      "15-minute clarity call",
      "Pattern named in plain language",
      "Honest fit check either way",
      "Path into personal coaching",
      "Available year-round",
      "Small booking fee to hold the slot",
    ],
  },
  {
    badge: "Group cohort",
    name: "People-pleasing reset",
    price: "$399",
    description:
      "A six-week live cohort for women ready to stop people-pleasing together, with weekly practice and support.",
    cta: "Join the waitlist",
    features: [
      "6 live sessions, 90 minutes each",
      "Neuroscience teaching and coaching",
      "Weekly practices you can use right away",
      "Cohort accountability",
      "Limited seats per round",
      "Option to continue 1:1 afterwards",
    ],
  },
] as const;

function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-light/80 text-plum">
      <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" aria-hidden="true">
        <path
          d="M3.5 8.5l3 3 6-6.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function PricingSection() {
  const { reduceMotion, container, item } = useRevealVariants();

  return (
    <SectionShell id="pricing" className="bg-transparent">
      <SectionHeader
        badge="Ways to work together"
        title="Two ways to work with Matilda"
      />

      <motion.p
        className="mx-auto mt-5 max-w-2xl text-center text-[15px] leading-relaxed text-plum-soft sm:text-base"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        Most women start with the clarity call. The group cohort is there when
        you want to do the work with other women.
      </motion.p>

      <motion.div
        className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {PLANS.map((plan) => (
          <motion.article
            key={plan.name}
            variants={item}
            whileHover={reduceMotion ? undefined : { y: -4 }}
            className="relative flex flex-col rounded-[1.75rem] border border-gold-ink/15 bg-white p-6 pt-8 shadow-[0_1px_0_rgba(61,24,48,0.04)] sm:p-8"
          >
            <span className="absolute right-5 top-0 -translate-y-1/2 rounded-full bg-gold-light/70 px-3 py-1 text-[12px] font-medium text-plum-soft">
              {plan.badge}
            </span>
            <h3 className="text-xl font-semibold tracking-[-0.02em] text-plum">
              {plan.name}
            </h3>
            <p className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-plum sm:text-5xl">
              {plan.price}
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-plum-soft">
              {plan.description}
            </p>
            <a
              href="#apply"
              className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-plum px-6 text-[15px] font-semibold text-cream transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum"
            >
              {plan.cta}
            </a>
            <p className="mt-7 text-[12px] uppercase tracking-[0.08em] text-gold-ink">
              What&apos;s included
            </p>
            <ul className="mt-3 space-y-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-[15px] text-plum-soft"
                >
                  <CheckIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </SectionShell>
  );
}
