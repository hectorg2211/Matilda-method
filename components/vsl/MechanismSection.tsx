"use client";

import { motion } from "framer-motion";
import { SectionShell, useRevealVariants } from "./shared";

const STAGES = [
  {
    step: "1",
    title: "Name the Loop",
    body: "See the pattern shaping your decisions, not only the symptoms you keep managing.",
  },
  {
    step: "2",
    title: "Understand the Pattern",
    body: "Look at what triggers it, what keeps it going, and why knowing better does not always change what you do.",
  },
  {
    step: "3",
    title: "Interrupt & Regulate",
    body: "Create a little more space between the trigger and the automatic response.",
  },
  {
    step: "4",
    title: "Practise New Responses",
    body: "Try responses that fit your values in real situations, not only in theory.",
  },
  {
    step: "5",
    title: "Build Self-Trust",
    body: "Gather evidence that you can decide, hold a boundary, and respond differently.",
  },
  {
    step: "6",
    title: "Integrate",
    body: "Carry the shift into work, relationships, confidence, and leadership.",
  },
] as const;

export function MechanismSection() {
  const { container, item } = useRevealVariants();

  return (
    <SectionShell id="method" className="bg-transparent">
      <motion.div
        className="mx-auto flex max-w-3xl flex-col items-center text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        <motion.span
          variants={item}
          className="inline-flex items-center rounded-full bg-gold-light/60 px-3.5 py-1 text-[13px] font-medium text-plum-soft"
        >
          The Matilda Method™
        </motion.span>
        <motion.h2
          variants={item}
          className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-plum sm:text-4xl md:text-[2.75rem]"
        >
          Break the pattern at the root.
        </motion.h2>
        <motion.p
          variants={item}
          className="mt-5 max-w-2xl text-[15px] leading-relaxed text-plum-soft sm:text-base"
        >
          A practical coaching process that helps you understand the pattern,
          interrupt the automatic response, and practise a different way
          forward.
        </motion.p>
      </motion.div>

      <motion.ol
        className="relative mx-auto mt-14 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-7 right-[calc(100%/12)] left-[calc(100%/12)] hidden h-px bg-gold-ink/35 lg:block"
        />
        {STAGES.map((stage) => (
          <motion.li
            key={stage.step}
            variants={item}
            className="relative flex flex-col items-center text-center"
          >
            <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-gold-ink/25 bg-white text-lg font-semibold text-plum shadow-[0_1px_0_rgba(61,24,48,0.04)]">
              {stage.step}
            </span>
            <h3 className="mt-4 text-[15px] font-semibold tracking-[-0.02em] text-plum sm:text-base">
              {stage.title}
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-plum-soft sm:text-[14px]">
              {stage.body}
            </p>
          </motion.li>
        ))}
      </motion.ol>
    </SectionShell>
  );
}
