"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { MediaPlaceholder } from "./shared";

type VideoPlayerProps = {
  videoSrc?: string;
};

export function VideoPlayer({ videoSrc }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <div className="relative mx-auto aspect-video w-full max-w-[920px] overflow-hidden rounded-2xl border border-gold-ink/35 bg-gold-light/30 shadow-[0_1px_0_rgba(61,24,48,0.06)] sm:rounded-[1.35rem]">
      {isPlaying && videoSrc ? (
        <motion.video
          className="h-full w-full object-cover"
          src={videoSrc}
          controls
          autoPlay
          playsInline
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
        />
      ) : (
        <motion.button
          type="button"
          onClick={() => {
            if (videoSrc) setIsPlaying(true);
          }}
          className="group relative block h-full w-full cursor-pointer"
          aria-label="Play video"
          whileHover={reduceMotion ? undefined : { scale: 1.005 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
        >
          <MediaPlaceholder tone="dusk" label="Video sales letter preview" />
          <span className="absolute inset-0 bg-plum/10 transition-colors duration-200 group-hover:bg-plum/15" />

          {!reduceMotion && (
            <motion.span
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-light/70 sm:h-28 sm:w-28"
              initial={{ opacity: 0.45, scale: 0.9 }}
              animate={{ opacity: [0.45, 0, 0.45], scale: [0.95, 1.35, 0.95] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
          )}

          <motion.span
            className="absolute left-1/2 top-1/2 flex h-[4.5rem] w-[4.5rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-plum/70 shadow-[0_8px_30px_rgba(61,24,48,0.35)] backdrop-blur-[2px] sm:h-20 sm:w-20"
            initial={reduceMotion ? false : { scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={reduceMotion ? undefined : { scale: 1.08 }}
            whileTap={reduceMotion ? undefined : { scale: 0.96 }}
            transition={{ type: "spring", stiffness: 320, damping: 20 }}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="ml-1 h-7 w-7 fill-cream sm:h-8 sm:w-8"
            >
              <path d="M8 5.14v13.72L19 12 8 5.14z" />
            </svg>
          </motion.span>
        </motion.button>
      )}
    </div>
  );
}
