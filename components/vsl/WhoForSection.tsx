"use client";

import { motion } from "framer-motion";
import { SectionHeader, SectionShell, useRevealVariants } from "./shared";

const FOR = [
  "High-performing women who look fine on the outside and feel stuck on the inside",
  "Women tired of people-pleasing, perfectionism, or proving themselves",
  "Leaders and professionals who want deeper change than another tip list",
  "Anyone who wants clarity before committing to coaching",
] as const;

const NOT_FOR = [
  "People looking for clinical therapy or crisis support",
  "Anyone wanting a quick hack with no self-reflection",
  "Those who are not open to examining patterns honestly",
  "People hoping a video alone will do the work for them",
] as const;

export function WhoForSection() {
  const { container, item } = useRevealVariants();

  return (
    <SectionShell className="bg-transparent">
      <SectionHeader
        badge="Is this for you?"
        title="This is for you if…"
      />

      <motion.div
        className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div
          variants={item}
          className="rounded-[1.75rem] border border-gold-ink/15 bg-white p-6 sm:p-8"
        >
          <h3 className="text-xl font-semibold text-plum">A strong fit</h3>
          <ul className="mt-5 space-y-3">
            {FOR.map((line) => (
              <li
                key={line}
                className="flex items-start gap-3 text-[15px] leading-relaxed text-plum-soft"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-plum" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={item}
          className="rounded-[1.75rem] border border-gold-ink/15 bg-gold-light/30 p-6 sm:p-8"
        >
          <h3 className="text-xl font-semibold text-plum">Not the right fit</h3>
          <ul className="mt-5 space-y-3">
            {NOT_FOR.map((line) => (
              <li
                key={line}
                className="flex items-start gap-3 text-[15px] leading-relaxed text-plum-soft"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold-ink" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}
