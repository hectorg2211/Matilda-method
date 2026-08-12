"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeader, SectionShell, useRevealVariants } from "./shared";

const FAQS = [
  {
    question: "Is the clarity call a sales pitch?",
    answer:
      "No. It is a fit conversation. You leave with clearer language for your pattern, and an honest yes or no on whether coaching together makes sense.",
  },
  {
    question: "What if I’ve already tried coaching, therapy, or self-help?",
    answer:
      "This work does not replace clinical care. It focuses on the performance patterns high-achieving women keep repeating, and uses a neuroscience lens to explain why tip-based advice often fails.",
  },
  {
    question: "Do I have to join the group programme?",
    answer:
      "No. One-to-one is the main evergreen path. The six-week people-pleasing cohort is optional when a round is open.",
  },
  {
    question: "How is this different from mindset content online?",
    answer:
      "Content can name the problem. Coaching helps you interrupt it in real decisions: boundaries, self-talk, pressure, and the moments you usually abandon yourself.",
  },
  {
    question: "What should I do right after watching the video?",
    answer:
      "If it resonated, book the clarity call while the insight is fresh. If you are unsure, send a message with what felt true. Matilda reads them personally.",
  },
] as const;

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { container, item } = useRevealVariants();

  return (
    <SectionShell className="bg-transparent">
      <SectionHeader badge="Before you book" title="Questions people ask" />

      <motion.div
        className="mx-auto mt-10 max-w-3xl space-y-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={faq.question}
              variants={item}
              className="overflow-hidden rounded-2xl bg-gold-light/35"
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
              >
                <span className="text-base font-medium tracking-[-0.01em] text-plum sm:text-lg">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-2xl leading-none text-plum"
                  aria-hidden="true"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="px-5 pb-5 text-[15px] leading-relaxed text-plum-soft sm:px-6">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionShell>
  );
}
