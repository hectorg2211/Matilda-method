"use client";

import { motion } from "framer-motion";
import { SectionHeader, SectionShell, useRevealVariants } from "./shared";

const PAINS = [
  {
    title: "You keep saying yes when you mean no",
    body: "At work, at home, with friends. Each yes spends energy you do not have left.",
  },
  {
    title: "Your mind won’t switch off",
    body: "You replay conversations, over-prepare, and still feel one mistake away from being found out.",
  },
  {
    title: "Success didn’t quiet the noise",
    body: "On paper things look fine. Inside, you are tired of holding it all together.",
  },
] as const;

export function ProblemSection() {
  const { container, item } = useRevealVariants();

  return (
    <SectionShell className="bg-transparent">
      <SectionHeader
        badge="What’s going on"
        title="You’re not weak. You’re running a pattern."
      />

      <motion.div
        className="mx-auto mt-8 max-w-3xl text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        <motion.p
          variants={item}
          className="text-[17px] leading-relaxed text-plum-soft sm:text-lg"
        >
          High-performing women rarely get stuck from a lack of ambition. They
          get stuck because old loops keep running in the background:
          people-pleasing, perfectionism, imposter syndrome, the fear of getting
          it wrong.
        </motion.p>
      </motion.div>

      <motion.div
        className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {PAINS.map((pain) => (
          <motion.article
            key={pain.title}
            variants={item}
            className="rounded-3xl border border-gold-ink/15 bg-white p-6"
          >
            <h3 className="text-lg font-semibold tracking-[-0.02em] text-plum">
              {pain.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-plum-soft">
              {pain.body}
            </p>
          </motion.article>
        ))}
      </motion.div>

      <motion.p
        className="mx-auto mt-10 max-w-2xl text-center text-[17px] font-medium leading-relaxed text-plum sm:text-lg"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        Until you can see that pattern clearly, another podcast or pep talk
        will not move much.
      </motion.p>
    </SectionShell>
  );
}
