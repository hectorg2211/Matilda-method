"use client";

import { motion } from "framer-motion";
import {
  MotionButton,
  SectionShell,
  SUBSTACK_URL,
  useRevealVariants,
} from "./shared";

const CREDENTIALS = [
  "Registered Nurse | 14+ Years’ NHS Experience",
  "Safeguarding Nurse Leader | Deputy Named Professional",
  "MSc Economic Evaluation in Healthcare",
  "Postgraduate Diploma in Public Health",
  "NHS Leadership Academy | Mary Seacole Programme",
  "NeuroLeadership Institute | Brain-Based Conversation Skills",
  "NeuroLeadership Institute | Brain-Based Coaching Practitioner",
  "Positive Intelligence® | Mental Fitness & PQ Reps",
] as const;

export function FoundersSection() {
  const { container, item } = useRevealVariants();

  return (
    <SectionShell id="coach" className="bg-transparent">
      <motion.div
        className="overflow-hidden rounded-[2rem] border border-gold-ink/15 bg-white/70 shadow-[0_1px_0_rgba(61,24,48,0.04)]"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid lg:grid-cols-[minmax(280px,0.95fr)_1.2fr]">
          <motion.div
            variants={item}
            className="relative min-h-[320px] overflow-hidden bg-plum sm:min-h-[400px] lg:min-h-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Matilda/coach-matilda.jpg"
              alt="Matilda Martins-Ojo at work"
              className="absolute inset-0 h-full w-full object-cover object-[48%_85%]"
            />
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-col justify-center px-6 py-8 sm:px-9 sm:py-10 lg:px-10"
          >
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-gold-ink">
              Meet your coach
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.02em] text-plum sm:text-[2.5rem]">
              Matilda Martins-Ojo
            </h2>
            <p className="mt-2 text-[15px] font-medium text-plum-soft">
              Human Performance Coach | Founder, Matilda Method
            </p>

            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-plum-soft">
              I combine extensive NHS leadership experience, coaching and
              brain-informed approaches to help high-performing women recognise
              invisible patterns, build self-trust and respond differently in
              the moments that matter.
            </p>

            <ul className="mt-7 grid gap-2.5 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-2.5">
              {CREDENTIALS.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2.5 text-[13px] leading-snug text-plum-soft sm:text-[14px]"
                >
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold-light/80 text-plum">
                    <svg
                      viewBox="0 0 16 16"
                      className="h-2.5 w-2.5"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3.5 8.5l3 3 6-6.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="flex flex-col gap-4 border-t border-gold-ink/10 bg-cream/80 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-9 sm:py-6 lg:px-10"
        >
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-ink">
              Thoughts That Transform
            </p>
            <p className="mt-1 text-[15px] font-semibold tracking-[-0.01em] text-plum sm:text-base">
              Short essays on identity, mental fitness and leadership on
              Substack.
            </p>
          </div>
          <MotionButton
            href={SUBSTACK_URL}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 shrink-0 rounded-full px-6 text-[13px]"
          >
            Read my Substack
          </MotionButton>
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}
