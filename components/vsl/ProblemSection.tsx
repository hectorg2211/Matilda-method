"use client";

import { motion } from "framer-motion";
import { SectionShell, useRevealVariants } from "./shared";

const PAINS = [
  {
    title: "You keep saying yes when you mean no",
    body: "At work, at home, with friends. Each yes drains energy you don’t have left.",
    icon: (
      <path
        d="M12 12a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM5 20a7 7 0 0114 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    ),
  },
  {
    title: "Your mind won’t switch off",
    body: "You replay conversations, over-prepare and still feel one mistake away from being found out.",
    icon: (
      <path
        d="M9.5 8.5c.8-1.2 2-2 3.5-2 2.2 0 4 1.8 4 4 0 2.5-2 3.5-3.2 4.4-.7.5-1.3 1-1.3 2.1M12 19h.01"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    ),
  },
  {
    title: "Success didn’t quiet the noise",
    body: "On paper things look fine. Inside, you’re tired of holding it all together.",
    icon: (
      <path
        d="M8 14l2.2-6.5L12.5 12l2-4.5L17 14M6 17h12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "You over-function to feel safe",
    body: "You try to prevent conflict, disappointment or mistakes before they happen.",
    icon: (
      <path
        d="M12 4v3M12 17v3M4 12h3M17 12h3M6.5 6.5l2 2M15.5 15.5l2 2M17.5 6.5l-2 2M8.5 15.5l-2 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    ),
  },
  {
    title: "You’ve lost touch with what you want",
    body: "Everyone thinks you’re confident. You feel increasingly disconnected from yourself.",
    icon: (
      <path
        d="M12 21s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 11c0 5.6-7 10-7 10z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "The same loop keeps repeating",
    body: "You make the decision, then question it. The familiar pattern wins again.",
    icon: (
      <path
        d="M7 8h7a3 3 0 010 6H9m0 0l2-2M9 14l2 2M17 16H10a3 3 0 010-6h5m0 0l-2-2m2 2l-2 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
] as const;

export function ProblemSection() {
  const { container, item } = useRevealVariants();

  return (
    <SectionShell id="about" className="bg-transparent !pt-10 !pb-16 sm:!pt-12 sm:!pb-20">
      <motion.div
        className="mx-auto max-w-3xl text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        <motion.span
          variants={item}
          className="inline-flex items-center rounded-full bg-gold-light/60 px-3.5 py-1 text-[13px] font-medium text-plum-soft"
        >
          Sound familiar?
        </motion.span>
        <motion.h2
          variants={item}
          className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-plum sm:text-4xl md:text-[2.75rem]"
        >
          You’re not weak. You’re running a pattern.
        </motion.h2>
        <motion.p
          variants={item}
          className="mt-5 text-[15px] leading-relaxed text-plum-soft sm:text-base"
        >
          High-achieving women rarely get stuck from a lack of ambition. They
          get stuck because old loops keep running in the background.
        </motion.p>
      </motion.div>

      <motion.div
        className="mx-auto mt-12 grid max-w-5xl gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
      >
        {PAINS.map((pain) => (
          <motion.article key={pain.title} variants={item} className="text-left">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-ink/20 bg-white text-plum">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                {pain.icon}
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em] text-plum">
              {pain.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-plum-soft">
              {pain.body}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </SectionShell>
  );
}
