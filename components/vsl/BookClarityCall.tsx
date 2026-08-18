"use client";

import type { ReactNode } from "react";
import { CLARITY_CTA, CLARITY_HREF, MotionButton } from "./shared";

type BtnVariant = "primary" | "secondary" | "gold";

export function BookClarityCall({
  children = CLARITY_CTA,
  variant = "primary",
  className = "",
  appearance = "button",
}: {
  children?: ReactNode;
  variant?: BtnVariant;
  className?: string;
  appearance?: "button" | "text";
}) {
  if (appearance === "text") {
    return (
      <a href={CLARITY_HREF} className={className}>
        {children}
      </a>
    );
  }

  return (
    <MotionButton href={CLARITY_HREF} variant={variant} className={className}>
      {children}
    </MotionButton>
  );
}
