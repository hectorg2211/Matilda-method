"use client";

import { motion } from "framer-motion";
import {
  ApplyCtaBlock,
  SectionHeader,
  SectionShell,
  useRevealVariants,
} from "./shared";

const PILLARS = [
  {
    step: "01",
    title: "Name the loop",
    body: "We find the pattern driving your decisions, not just the symptoms you keep managing.",
  },
  {
    step: "02",
    title: "Understand the brain",
    body: "A neuroscience lens helps explain why the pattern formed, and why willpower alone keeps failing.",
  },
  {
    step: "03",
    title: "Rebuild the response",
    body: "You practice new responses until confidence, boundaries, and calm show up more often than the old default.",
  },
] as const;

export function MechanismSection() {
  const { container, item } = useRevealVariants();

  return (
    <SectionShell className="bg-transparent">
      <SectionHeader
        badge="The method"
        title="The Matilda Method: break the pattern at the root"
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
          Most advice tells you to "set boundaries" or "be more confident." That
          skips the part that matters: your nervous system may still be wired
          for approval, control, or safety.
        </motion.p>
        <motion.p
          variants={item}
          className="mt-4 text-[17px] leading-relaxed text-plum sm:text-lg"
        >
          The Matilda Method helps high-performing women see those invisible
          patterns, then retrain them with practical, brain-based coaching.
        </motion.p>
      </motion.div>

      <motion.div
        className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {PILLARS.map((pillar) => (
          <motion.article
            key={pillar.step}
            variants={item}
            className="rounded-3xl bg-gold-light/35 p-6 sm:p-7"
          >
            <p className="text-sm font-semibold tracking-[0.08em] text-gold-ink">
              {pillar.step}
            </p>
            <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-plum">
              {pillar.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-plum-soft">
              {pillar.body}
            </p>
          </motion.article>
        ))}
      </motion.div>

      <div className="mt-12">
        <ApplyCtaBlock label="See if this fits" />
      </div>
    </SectionShell>
  );
}
