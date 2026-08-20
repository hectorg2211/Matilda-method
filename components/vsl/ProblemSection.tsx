"use client";

import { motion } from "framer-motion";
import { SectionShell, useRevealVariants } from "./shared";

const PAINS = [
  {
    title: "You keep saying yes when you mean no",
    body: "At work, at home, with friends. Each yes costs energy you do not have left.",
  },
  {
    title: "Your mind will not switch off",
    body: "You replay conversations, over-prepare, and still feel one mistake away from being found out.",
  },
  {
    title: "Success did not quiet the noise",
    body: "On paper things look fine. Inside, you are tired of holding it all together.",
  },
  {
    title: "You over-function to feel safe",
    body: "You try to head off conflict, disappointment, or mistakes before they happen.",
  },
  {
    title: "You have lost touch with what you want",
    body: "Everyone thinks you are confident. You feel further from yourself.",
  },
  {
    title: "The same loop keeps repeating",
    body: "You make the decision, then question it. The familiar pattern wins again.",
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
          You are not weak. You are running a pattern.
        </motion.h2>
        <motion.p
          variants={item}
          className="mt-5 text-[15px] leading-relaxed text-plum-soft sm:text-base"
        >
          High-achieving women rarely get stuck from a lack of ambition. More
          often, old loops keep running in the background.
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
            <h3 className="text-lg font-semibold tracking-[-0.02em] text-plum">
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
