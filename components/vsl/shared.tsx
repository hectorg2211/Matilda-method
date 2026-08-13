"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export type MediaTone = "plum" | "gold" | "dusk" | "blush" | "amber";

const MEDIA_TONES: Record<MediaTone, string> = {
  plum: "bg-[radial-gradient(ellipse_at_28%_18%,#6b4558_0%,#3d1830_52%,#241018_100%)]",
  gold: "bg-[radial-gradient(ellipse_at_72%_28%,#faf3ea_0%,#f3d9b8_28%,#cda96a_62%,#8a682f_100%)]",
  dusk: "bg-[linear-gradient(148deg,#3d1830_0%,#5c3a4c_42%,#cda96a_100%)]",
  blush: "bg-[radial-gradient(circle_at_38%_36%,#faf3ea_0%,#f3d9b8_38%,#8a5a72_78%,#3d1830_100%)]",
  amber: "bg-[linear-gradient(165deg,#f3d9b8_0%,#c9a24b_46%,#5c3a4c_78%,#3d1830_100%)]",
};

export function MediaPlaceholder({
  tone = "plum",
  className = "",
  label,
}: {
  tone?: MediaTone;
  className?: string;
  label?: string;
}) {
  return (
    <div
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={`absolute inset-0 overflow-hidden ${MEDIA_TONES[tone]} ${className}`}
    >
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(250,243,234,0.28),transparent_42%)]" />
      <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(61,24,48,0.22)_100%)]" />
    </div>
  );
}

export const easeOut = [0.22, 1, 0.36, 1] as const;

export const CLARITY_CTA = "Book your clarity call";
export const CLARITY_HREF = "#apply";
export const SUBSTACK_URL = "https://matildamethod.substack.com";
export const PRIVATE_PLACES = 5;

export function useRevealVariants() {
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
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: easeOut },
    },
  };

  return { reduceMotion, container, item };
}

export function SectionShell({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24 ${className}`}
    >
      <div className="relative mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeader({
  badge,
  title,
  className = "",
}: {
  badge: string;
  title: string;
  className?: string;
}) {
  const { container, item } = useRevealVariants();

  return (
    <motion.div
      className={`mx-auto flex max-w-3xl flex-col items-center text-center ${className}`}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.span
        variants={item}
        className="inline-flex items-center rounded-full bg-gold-light/60 px-3.5 py-1 text-[13px] font-medium text-plum-soft"
      >
        {badge}
      </motion.span>
      <motion.h2
        variants={item}
        className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-plum sm:text-4xl md:text-[2.75rem]"
      >
        {title}
      </motion.h2>
    </motion.div>
  );
}

type BtnVariant = "primary" | "secondary" | "gold";

const BTN_VARIANT: Record<BtnVariant, string> = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  gold: "btn btn-gold",
};

export function MotionButton({
  href,
  children,
  variant = "primary",
  className = "",
  target,
  rel,
}: {
  href: string;
  children: ReactNode;
  variant?: BtnVariant;
  className?: string;
  target?: string;
  rel?: string;
}) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      whileHover={reduceMotion ? undefined : { scale: 1.02 }}
      whileTap={reduceMotion ? undefined : { scale: 0.975 }}
      transition={{ type: "spring", stiffness: 460, damping: 26 }}
      className={`${BTN_VARIANT[variant]} ${className}`}
    >
      <span className="relative z-[1] inline-flex items-center justify-center gap-[0.55rem]">
        {children}
      </span>
    </motion.a>
  );
}

export function ApplyCtaBlock({
  label = CLARITY_CTA,
  href = CLARITY_HREF,
}: {
  label?: string;
  href?: string;
}) {
  const { container, item } = useRevealVariants();

  return (
    <motion.div
      className="mx-auto flex flex-col items-center"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div variants={item}>
        <MotionButton
          href={href}
          className="h-12 rounded-full px-8 text-[15px] sm:h-[3.25rem] sm:px-12 sm:text-base"
        >
          {label}
        </MotionButton>
      </motion.div>
    </motion.div>
  );
}
