"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { AVATARS, MediaPlaceholder } from "./shared";
import { VideoPlayer } from "./VideoPlayer";

const easeOut = [0.22, 1, 0.36, 1] as const;

function Stars({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <motion.svg
          key={index}
          viewBox="0 0 20 20"
          aria-hidden="true"
          className="h-3.5 w-3.5 fill-gold-ink"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.4, y: 4 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 0.95 + index * 0.06,
            duration: 0.35,
            ease: easeOut,
          }}
        >
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.27 5.06 16.7l.94-5.5-4-3.9 5.53-.8L10 1.5z" />
        </motion.svg>
      ))}
    </div>
  );
}

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

  const videoItem: Variants = {
    hidden: reduceMotion
      ? { opacity: 1, y: 0, scale: 1 }
      : { opacity: 0, y: 28, scale: 0.97 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.85, ease: easeOut },
    },
  };

  return (
    <section className="relative overflow-hidden bg-transparent px-5 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-14">
      <motion.div
        className="relative mx-auto flex w-full max-w-[920px] flex-col items-center text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="flex items-center gap-2 text-[13px] font-medium tracking-[-0.01em] text-gold-ink sm:text-sm"
        >
          <motion.span
            className="inline-block h-1.5 w-1.5 rounded-full bg-plum"
            initial={reduceMotion ? false : { scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 420, damping: 18 }}
          />
          For high-performing women who still feel stuck
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-5 max-w-[20ch] text-balance text-[2rem] font-semibold leading-[1.15] tracking-[-0.02em] text-plum sm:mt-6 sm:max-w-[26ch] sm:text-[2.75rem] sm:leading-[1.12] md:max-w-[28ch] md:text-[3.15rem]"
        >
          Why capable women stay stuck, and the{" "}
          <motion.span
            className="text-gold-ink"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6, ease: easeOut }}
          >
            pattern shift that helps
          </motion.span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 max-w-[40rem] text-pretty text-[15px] leading-relaxed tracking-[-0.01em] text-plum-soft sm:mt-6 sm:text-[1.05rem] sm:leading-7"
        >
          In under 10 minutes, Matilda names the loops behind people-pleasing
          and self-doubt, then shows what to do if you are tired of managing
          the symptoms.
        </motion.p>

        <motion.div variants={videoItem} className="mt-9 w-full sm:mt-11">
          <VideoPlayer />
        </motion.div>

        <motion.a
          href="#apply"
          variants={item}
          whileHover={reduceMotion ? undefined : { scale: 1.03, y: -1 }}
          whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          transition={{ type: "spring", stiffness: 420, damping: 24 }}
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-plum px-10 text-[15px] font-semibold tracking-[-0.01em] text-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum sm:mt-9 sm:h-[3.25rem] sm:px-12 sm:text-base"
        >
          Book a clarity call
        </motion.a>

        <motion.p
          variants={item}
          className="mt-3 text-[13px] text-gold-ink"
        >
          15 minutes, a clear next step, and no pressure pitch
        </motion.p>

        <motion.div
          variants={item}
          className="mt-6 flex items-center gap-3"
        >
          <div className="flex -space-x-2.5">
            {AVATARS.map((avatar, index) => (
              <motion.span
                key={avatar.tone}
                className="relative inline-block h-8 w-8 overflow-hidden rounded-full ring-2 ring-cream"
                initial={reduceMotion ? false : { opacity: 0, x: -8, scale: 0.7 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  delay: 0.8 + index * 0.07,
                  type: "spring",
                  stiffness: 380,
                  damping: 22,
                }}
              >
                <MediaPlaceholder tone={avatar.tone} label={avatar.alt} />
              </motion.span>
            ))}
          </div>

          <div className="flex flex-col items-start gap-1">
            <Stars reduceMotion={reduceMotion} />
            <motion.p
              className="text-[12px] leading-none tracking-[-0.01em] text-gold-ink"
              initial={reduceMotion ? false : { opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.4, ease: easeOut }}
            >
              Trusted by women doing this work
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
