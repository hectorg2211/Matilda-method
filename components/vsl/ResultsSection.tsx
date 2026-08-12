"use client";

import { motion } from "framer-motion";
import {
  ApplyCtaBlock,
  MediaPlaceholder,
  SectionHeader,
  SectionShell,
  useRevealVariants,
  type MediaTone,
} from "./shared";

const RESULTS = [
  {
    name: "Amara O.",
    headline: "She quieted her inner critic",
    quote:
      "I stopped treating people-pleasing like a personality flaw. Once I saw the pattern, I could interrupt it.",
    tone: "blush" as MediaTone,
    stats: [
      { label: "Before", value: "Constant yeses" },
      { label: "After", value: "Cleaner boundaries" },
    ],
  },
  {
    name: "Helen K.",
    headline: "She understands her brain better",
    quote:
      "The science made it click. I wasn’t broken. I was running an old survival loop at work and at home.",
    tone: "gold" as MediaTone,
    stats: [
      { label: "Before", value: "Self-doubt spiral" },
      { label: "After", value: "Calmer self-trust" },
    ],
  },
  {
    name: "Priya S.",
    headline: "She stopped performing for approval",
    quote:
      "Perfectionism used to feel like my edge. Now I can lead without burning myself out to look flawless.",
    tone: "amber" as MediaTone,
    stats: [
      { label: "Before", value: "Over-functioning" },
      { label: "After", value: "Steady decisions" },
    ],
  },
] as const;

export function ResultsSection() {
  const { reduceMotion, container, item } = useRevealVariants();

  return (
    <SectionShell className="bg-transparent">
      <SectionHeader
        badge="Results"
        title="What shifts when the pattern breaks"
      />

      <motion.div
        className="mt-12 grid items-stretch gap-5 md:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {RESULTS.map((result) => (
          <motion.article
            key={result.name}
            variants={item}
            whileHover={reduceMotion ? undefined : { y: -4 }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
            className="flex h-full flex-col overflow-hidden rounded-3xl border border-gold-ink/15 bg-white shadow-[0_1px_0_rgba(61,24,48,0.04)]"
          >
            <div className="relative aspect-square overflow-hidden">
              <MediaPlaceholder
                tone={result.tone}
                label={`${result.name} transformation visual`}
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
              <p className="text-sm text-gold-ink">{result.name}</p>
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-plum">
                {result.headline}
              </h3>
              <p className="text-[15px] leading-relaxed text-plum-soft">
                {result.quote}
              </p>
              <div className="mt-auto grid grid-cols-2 items-stretch gap-2.5 pt-2">
                {result.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex h-full min-h-[4.75rem] flex-col rounded-2xl border border-gold-ink/10 bg-cream px-3 py-3"
                  >
                    <p className="text-[11px] text-gold-ink">{stat.label}</p>
                    <p className="mt-1 text-base font-semibold leading-snug tracking-[-0.02em] text-plum">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <div className="mt-12">
        <ApplyCtaBlock />
      </div>
    </SectionShell>
  );
}
