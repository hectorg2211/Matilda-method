"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  CLARITY_CTA,
  CLARITY_HREF,
  MotionButton,
  easeOut,
} from "./shared";
import { VideoPlayer } from "./VideoPlayer";

const DISCOVERIES = [
  "Why knowing you should say no doesn’t necessarily make saying no easier.",
  "Why successful women can still second-guess themselves despite years of evidence that they’re capable.",
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
        className="relative isolate min-h-[min(78vh,720px)] scroll-mt-24 overflow-hidden bg-cream pb-6 lg:min-h-[min(84vh,760px)] lg:pb-8"
      >
        {/* Full-bleed portrait — right half on desktop, soft fade into cream */}
        <div className="pointer-events-none absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Matilda/hero-matilda.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-[48%_40%] sm:object-[54%_38%] lg:left-[44%] lg:w-[56%] lg:object-[22%_45%]"
            fetchPriority="high"
          />
          {/* Cream wash so copy stays readable and image feels blended */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,243,234,0.92)_0%,rgba(250,243,234,0.55)_38%,rgba(250,243,234,0.88)_100%)] lg:bg-[linear-gradient(90deg,#faf3ea_0%,#faf3ea_46%,rgba(250,243,234,0.9)_56%,rgba(250,243,234,0.35)_68%,transparent_82%)]" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent,rgba(250,243,234,0.95))] lg:hidden" />
        </div>

        <motion.div
          className="relative mx-auto flex min-h-[min(78vh,720px)] w-full max-w-6xl flex-col justify-center px-5 py-10 sm:px-8 sm:py-12 lg:min-h-[min(84vh,760px)] lg:py-14"
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
              If you’ve tried boundaries, positive thinking or simply telling
              yourself to “stop overthinking”, the problem may not be what you
              think.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-7 rounded-2xl border border-gold-ink/15 bg-cream/80 px-5 py-5 backdrop-blur-[2px] sm:px-6 sm:py-6"
            >
              <p className="text-[15px] font-semibold text-plum">
                In this 20-minute video, discover:
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
              <MotionButton
                href="#vsl"
                className="group h-12 rounded-full px-7 text-[13px] uppercase tracking-[0.04em] sm:h-[3.25rem] sm:px-8 sm:text-[14px]"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-cream/35 transition-transform duration-300 group-hover:scale-110">
                  <svg
                    viewBox="0 0 24 24"
                    className="ml-0.5 h-3 w-3 fill-cream"
                    aria-hidden="true"
                  >
                    <path d="M8 5.14v13.72L19 12 8 5.14z" />
                  </svg>
                </span>
                Watch video
              </MotionButton>
              <MotionButton
                href={CLARITY_HREF}
                variant="secondary"
                className="h-12 rounded-full px-6 text-[14px] sm:h-[3.25rem]"
              >
                {CLARITY_CTA}
              </MotionButton>
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
              You’re not weak. You’re running a pattern.
            </p>
          </motion.div>
        </motion.div>

        {/* Mobile quote under hero copy */}
        <div className="relative mx-auto max-w-6xl px-5 pb-4 sm:px-8 lg:hidden">
          <div className="rounded-2xl border border-gold-ink/20 bg-cream/95 px-5 py-4 shadow-[0_10px_28px_rgba(61,24,48,0.08)]">
            <p className="text-[2rem] leading-none text-gold" aria-hidden="true">
              “
            </p>
            <p className="-mt-2 text-[15px] font-semibold leading-snug text-plum">
              You’re not weak. You’re running a pattern.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-transparent px-5 pb-10 pt-10 sm:px-8 sm:pb-12 sm:pt-14">
        <div id="vsl" className="mx-auto w-full max-w-6xl scroll-mt-24">
          <VideoPlayer />
        </div>
      </section>
    </>
  );
}
