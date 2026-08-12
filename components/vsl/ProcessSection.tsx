"use client";

import { motion } from "framer-motion";
import {
  ApplyCtaBlock,
  SectionHeader,
  SectionShell,
  useRevealVariants,
} from "./shared";

const STEPS = [
  {
    title: "Watch the video",
    description:
      "Get the pattern named clearly, so you can stop blaming yourself and start seeing the loop.",
    number: "1",
  },
  {
    title: "Book a clarity call",
    description:
      "Fifteen minutes to check fit, name your pattern, and decide whether coaching makes sense.",
    number: "2",
  },
  {
    title: "Choose your path",
    description:
      "Continue one-to-one, or join a focused group cohort when the next round opens.",
    number: "3",
  },
] as const;

export function ProcessSection() {
  const { container, item } = useRevealVariants();

  return (
    <SectionShell className="bg-transparent">
      <SectionHeader badge="Next steps" title="A simple path from here" />

      <motion.div
        className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[16%] right-[16%] top-7 hidden h-px bg-[linear-gradient(90deg,transparent,rgba(122,92,40,0.28),transparent)] md:block"
        />
        {STEPS.map((step) => (
          <motion.div
            key={step.title}
            variants={item}
            className="relative flex flex-col items-center text-center"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-gold-ink/25 bg-white text-lg font-semibold text-plum">
              {step.number}
            </div>
            <h3 className="text-xl font-semibold tracking-[-0.02em] text-plum">
              {step.title}
            </h3>
            <p className="mt-3 max-w-[18rem] text-[15px] leading-relaxed text-plum-soft">
              {step.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-12">
        <ApplyCtaBlock />
      </div>
    </SectionShell>
  );
}
