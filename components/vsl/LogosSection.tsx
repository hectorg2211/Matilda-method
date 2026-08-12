"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ApplyCtaBlock, SectionShell } from "./shared";

const LOGOS = [
  "Leadership Circles",
  "Church Training",
  "Women’s Networks",
  "Corporate Teams",
  "Healthcare Leaders",
  "Founder Cohorts",
  "Professional Circles",
  "Community Groups",
] as const;

export function LogosSection() {
  const reduceMotion = useReducedMotion() ?? false;
  const loop = [...LOGOS, ...LOGOS];

  return (
    <SectionShell className="bg-transparent pt-4 sm:pt-8">
      <div className="flex flex-col items-center">
        <span className="inline-flex items-center rounded-full bg-gold-light/60 px-3.5 py-1 text-[13px] font-medium text-plum-soft">
          Where Matilda coaches and speaks
        </span>

        <div className="relative mt-8 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <motion.div
            className="flex w-max items-center gap-12 pr-12 sm:gap-16"
            animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
            transition={
              reduceMotion
                ? undefined
                : { duration: 28, ease: "linear", repeat: Infinity }
            }
          >
            {loop.map((logo, index) => (
              <span
                key={`${logo}-${index}`}
                className="shrink-0 text-lg font-semibold tracking-[-0.02em] text-plum/35 sm:text-xl"
              >
                {logo}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="mt-14">
        <ApplyCtaBlock />
      </div>
    </SectionShell>
  );
}
