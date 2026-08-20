"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { BookClarityCall } from "./BookClarityCall";
import {
  CLARITY_CTA,
  easeOut,
} from "./shared";

const DISCOVERIES = [
  "Why knowing you should say no still does not make saying no easier.",
  "Why capable women keep second-guessing themselves, even with years of proof behind them.",
  "The pattern I look for before trying to change the behaviour.",
] as const;

export function HeroSection() {
  const reduceMotion = useReducedMotion() ?? false;

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1,
        delayChildren: reduceMotion ? 0 : 0.05,
      },
    },
  };

  const item: Variants = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: easeOut },
    },
  };

  return (
    <>
      <section
        id="top"
        className="relative isolate scroll-mt-24 overflow-hidden bg-cream pb-6 lg:min-h-[min(84vh,760px)] lg:pb-8"
      >
        {/* Desktop-only full-bleed portrait */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Matilda/hero-matilda.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 left-[44%] h-full w-[56%] object-cover object-[22%_45%]"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#faf3ea_0%,#faf3ea_46%,rgba(250,243,234,0.9)_56%,rgba(250,243,234,0.35)_68%,transparent_82%)]" />
        </div>

        <motion.div
          className="relative mx-auto flex w-full max-w-6xl flex-col px-5 py-8 sm:px-8 sm:py-10 lg:min-h-[min(84vh,760px)] lg:justify-center lg:py-14"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="relative max-w-xl lg:max-w-[34rem]">
            <motion.p
              variants={item}
              className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-ink sm:text-[12px]"
            >
              For high-performing women who still feel stuck
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-4 text-balance text-[1.85rem] font-semibold leading-[1.14] tracking-[-0.02em] text-plum sm:text-[2.55rem] sm:leading-[1.12] md:text-[3rem]"
            >
              Why capable women stay stuck, even when they{" "}
              <em className="font-semibold italic text-gold-ink">
                know exactly what they should be doing.
              </em>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 max-w-[34rem] text-pretty text-[15px] leading-relaxed text-plum-soft sm:text-[1.05rem] sm:leading-7"
            >
              If you have tried boundaries, positive thinking, or telling yourself
              to "stop overthinking", the problem may not be what you think.
            </motion.p>
          </div>

          {/* Mobile portrait — face visible, not under copy */}
          <motion.div
            variants={item}
            className="relative mt-8 overflow-hidden rounded-[1.75rem] border border-gold-ink/15 bg-plum shadow-[0_16px_40px_rgba(61,24,48,0.1)] lg:hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Matilda/hero-matilda.jpg"
              alt="Matilda Martins-Ojo, founder of the Matilda Method"
              className="aspect-[4/5] w-full scale-[1.22] object-cover object-[50%_22%] sm:aspect-[5/6] sm:object-[48%_20%]"
              fetchPriority="high"
            />
            <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(61,24,48,0.45))] p-4 pt-16 sm:p-5">
              <div className="rounded-2xl border border-cream/20 bg-cream/95 px-4 py-3.5 shadow-[0_10px_28px_rgba(61,24,48,0.12)]">
                <p
                  className="text-[1.75rem] leading-none text-gold"
                  aria-hidden="true"
                >
                  “
                </p>
                <p className="-mt-1.5 text-[15px] font-semibold leading-snug text-plum">
                  You are not weak. You are running a pattern.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="relative mt-8 max-w-xl lg:mt-7 lg:max-w-[34rem]">
            <motion.div
              variants={item}
              className="rounded-2xl border border-gold-ink/15 bg-white/90 px-5 py-5 sm:px-6 sm:py-6 lg:bg-cream/80 lg:backdrop-blur-[2px]"
            >
              <p className="text-[15px] font-semibold text-plum">
                In this 20-minute video:
              </p>
              <ul className="mt-3 space-y-2.5">
                {DISCOVERIES.map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-3 text-[14px] leading-relaxed text-plum-soft sm:text-[15px]"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-light/80 text-plum">
                      <svg
                        viewBox="0 0 16 16"
                        className="h-3 w-3"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3.5 8.5l3 3 6-6.5"
                          stroke="currentColor"
                          strokeWidth="1.8"
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

            <motion.div
              variants={item}
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <BookClarityCall
                className="h-12 rounded-full px-6 text-[14px] sm:h-[3.25rem]"
              >
                {CLARITY_CTA}
              </BookClarityCall>
            </motion.div>

            <motion.p
              variants={item}
              className="mt-4 text-[13px] text-gold-ink"
            >
              Real client stories below
            </motion.p>
          </div>

          <motion.div
            variants={item}
            className="pointer-events-none absolute bottom-8 right-5 hidden max-w-[15.5rem] rounded-2xl border border-gold-ink/20 bg-cream/95 px-5 py-4 shadow-[0_12px_32px_rgba(61,24,48,0.12)] backdrop-blur-sm lg:bottom-16 lg:right-8 lg:block xl:right-0"
          >
            <p className="text-[2rem] leading-none text-gold" aria-hidden="true">
              “
            </p>
            <p className="-mt-2 text-[15px] font-semibold leading-snug text-plum">
              You are not weak. You are running a pattern.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
