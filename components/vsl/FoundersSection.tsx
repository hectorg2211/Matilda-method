"use client";

import { motion } from "framer-motion";
import {
  ApplyCtaBlock,
  MediaPlaceholder,
  SectionHeader,
  SectionShell,
  useRevealVariants,
} from "./shared";

export function FoundersSection() {
  const { reduceMotion, item } = useRevealVariants();

  return (
    <SectionShell className="bg-transparent">
      <SectionHeader badge="About Matilda" title="Why listen to Matilda" />

      <motion.article
        className="mt-12 overflow-hidden rounded-[2rem] border border-gold-ink/15 bg-white shadow-[0_1px_0_rgba(61,24,48,0.04)] md:grid md:grid-cols-2"
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={reduceMotion ? undefined : { y: -2 }}
      >
        <div className="relative min-h-[320px] md:min-h-[440px]">
          <MediaPlaceholder tone="plum" label="Matilda Martins-Ojo portrait placeholder" />
        </div>
        <div className="flex flex-col justify-center p-7 sm:p-10">
          <h3 className="text-2xl font-semibold tracking-[-0.02em] text-plum sm:text-3xl">
            Matilda Martins-Ojo
          </h3>
          <p className="mt-1 text-base font-medium text-plum">
            Founder, Matilda Method
          </p>
          <p className="mt-5 text-[15px] leading-relaxed text-plum-soft sm:text-base">
            Matilda coaches high-performing women on confidence, resilience, and
            mental fitness, using a neuroscience lens. A lot of her work sits
            with the patterns that keep capable women stuck: people-pleasing,
            perfectionism, fear of failure, and the quiet pressure to hold
            everything together.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-plum-soft sm:text-base">
            In coaching, speaking, and leadership work, she keeps it practical.
            See the loop, understand the brain behind it, then build a response
            that holds up in real life.
          </p>
        </div>
      </motion.article>

      <div className="mt-12">
        <ApplyCtaBlock label="Talk with Matilda" />
      </div>
    </SectionShell>
  );
}
