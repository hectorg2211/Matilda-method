"use client";

import { motion } from "framer-motion";
import { ApplyCtaBlock, SectionShell, useRevealVariants } from "./shared";

export function FinalCtaSection() {
  const { container, item } = useRevealVariants();

  return (
    <SectionShell className="bg-transparent pb-10 sm:pb-14">
      <motion.div
        className="mx-auto flex max-w-2xl flex-col items-center text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.div
          variants={item}
          aria-hidden="true"
          className="h-16 w-16 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(205,169,106,0.55),rgba(61,24,48,0.12)_70%,transparent)]"
        />
        <motion.h2
          variants={item}
          className="mt-6 text-3xl font-semibold tracking-[-0.02em] text-plum sm:text-4xl"
        >
          If the video named your pattern, take the next step while it is clear.
        </motion.h2>
        <motion.p
          variants={item}
          className="mt-4 max-w-lg text-[15px] leading-relaxed text-plum-soft sm:text-base"
        >
          Book a 15-minute clarity call. We will map what is keeping you stuck
          and decide, cleanly, whether coaching together is the right next step.
        </motion.p>
      </motion.div>

      <div className="mt-8">
        <ApplyCtaBlock />
      </div>
    </SectionShell>
  );
}
