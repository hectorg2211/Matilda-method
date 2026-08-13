"use client";

import { CLARITY_CTA, CLARITY_HREF, MotionButton } from "./shared";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold-ink/15 bg-cream/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <MotionButton
        href={CLARITY_HREF}
        className="h-12 w-full rounded-full text-[15px]"
      >
        {CLARITY_CTA}
      </MotionButton>
    </div>
  );
}
