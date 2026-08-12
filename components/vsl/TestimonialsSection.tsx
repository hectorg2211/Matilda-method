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

const TESTIMONIALS: {
  quote: string;
  name: string;
  title: string;
  tone: MediaTone;
}[] = [
  {
    quote:
      "I finally saw people-pleasing as a pattern, not a personality. That alone changed how I show up at work and at home.",
    name: "Ryanne D.",
    title: "Senior leader",
    tone: "plum",
  },
  {
    quote:
      "Matilda made the brain science feel human. I stopped spiralling and started making decisions from clarity, not fear.",
    name: "Natalie B.",
    title: "High-performing professional",
    tone: "gold",
  },
  {
    quote:
      "I used to say yes to everything. Now I can hold a boundary without guilt, and my energy came back with it.",
    name: "Devon C.",
    title: "Founder",
    tone: "dusk",
  },
  {
    quote:
      "The clarity call was short and honest. I left knowing what was keeping me stuck and what to do next.",
    name: "Priyanka R.",
    title: "Consultant",
    tone: "blush",
  },
  {
    quote:
      "Perfectionism had me exhausted. Working with Matilda helped me rebuild confidence without performing for approval.",
    name: "Marcus F.",
    title: "Creative director",
    tone: "amber",
  },
  {
    quote:
      "I didn’t need more motivation. I needed to understand my patterns. That’s what this work gave me.",
    name: "Sophia N.",
    title: "Client services lead",
    tone: "gold",
  },
];

export function TestimonialsSection() {
  const { reduceMotion, container, item } = useRevealVariants();

  return (
    <SectionShell className="bg-transparent">
      <SectionHeader
        badge="Client words"
        title="In their words"
      />

      <motion.div
        className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {TESTIMONIALS.map((itemData) => (
          <motion.article
            key={itemData.name}
            variants={item}
            whileHover={reduceMotion ? undefined : { y: -3 }}
            className="flex flex-col rounded-3xl bg-gold-light/35 p-6 sm:p-7"
          >
            <span
              aria-hidden="true"
              className="text-4xl leading-none text-plum"
            >
              “
            </span>
            <p className="mt-3 flex-1 text-[15px] leading-relaxed text-plum-soft">
              {itemData.quote}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="relative h-10 w-10 overflow-hidden rounded-full">
                <MediaPlaceholder tone={itemData.tone} label={itemData.name} />
              </span>
              <div>
                <p className="font-semibold text-plum">{itemData.name}</p>
                <p className="text-sm text-gold-ink">{itemData.title}</p>
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
