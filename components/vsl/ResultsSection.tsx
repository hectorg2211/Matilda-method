"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  CLARITY_CTA,
  CLARITY_HREF,
  MotionButton,
  SectionShell,
  useRevealVariants,
} from "./shared";

const STORIES = [
  {
    name: "Emily",
    headline: "My thoughts are not me",
    support: "Inner critic coaching",
    src: "/Emily.mp4",
    zoom: 1.44,
  },
  {
    name: "Glory Onyema",
    headline: "She quieted her inner critic",
    support: "Hear how she rebuilt her confidence",
    src: "/GloryOnyema.mp4",
    zoom: 1.45,
  },
  {
    name: "Client story",
    headline: "She understands her brain better",
    support: "Hear her story",
    src: "/NEWM.mp4",
    zoom: 1,
  },
] as const;

function StoryVideo({
  src,
  label,
  zoom = 1,
}: {
  src: string;
  label: string;
  zoom?: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  async function togglePlay() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
      return;
    }

    video.pause();
    setPlaying(false);
  }

  return (
    <div className="relative aspect-4/5 overflow-hidden bg-plum">
      <video
        ref={videoRef}
        src={src}
        className="h-full w-full object-cover"
        style={zoom !== 1 ? { transform: `scale(${zoom})` } : undefined}
        playsInline
        preload="metadata"
        controls={playing}
        onEnded={() => setPlaying(false)}
        onPause={() => {
          if (videoRef.current?.ended) return;
          setPlaying(false);
        }}
        onPlay={() => setPlaying(true)}
        aria-label={label}
      />

      {!playing && (
        <button
          type="button"
          onClick={() => {
            void togglePlay();
          }}
          className="absolute inset-0 flex items-center justify-center bg-plum/20 transition-colors hover:bg-plum/30"
          aria-label={`Play ${label}`}
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-plum/75 shadow-[0_8px_24px_rgba(61,24,48,0.3)] backdrop-blur-[2px]">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="ml-0.5 h-6 w-6 fill-cream"
            >
              <path d="M8 5.14v13.72L19 12 8 5.14z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}

export function ResultsSection() {
  const { reduceMotion, container, item } = useRevealVariants();

  return (
    <SectionShell id="stories" className="bg-transparent">
      <motion.div
        className="mx-auto max-w-3xl text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        <motion.span
          variants={item}
          className="inline-flex items-center rounded-full bg-gold-light/60 px-3.5 py-1 text-[13px] font-medium text-plum-soft"
        >
          Client proof
        </motion.span>
        <motion.h2
          variants={item}
          className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-plum sm:text-4xl md:text-[2.75rem]"
        >
          What shifts when the pattern breaks
        </motion.h2>
        <motion.p
          variants={item}
          className="mt-4 text-[15px] leading-relaxed text-plum-soft"
        >
          Real client video testimonials. No stock photos. No fabricated quotes.
        </motion.p>
      </motion.div>

      <motion.div
        className="mt-12 grid items-stretch gap-5 md:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {STORIES.map((story) => (
          <motion.article
            key={story.src}
            variants={item}
            whileHover={reduceMotion ? undefined : { y: -4 }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
            className="flex h-full flex-col overflow-hidden rounded-3xl border border-gold-ink/15 bg-white shadow-[0_1px_0_rgba(61,24,48,0.04)]"
          >
            <StoryVideo
              src={story.src}
              label={story.headline}
              zoom={story.zoom}
            />
            <div className="flex flex-1 flex-col gap-2 p-5 sm:p-6">
              <p className="text-[28px] leading-none text-gold" aria-hidden="true">
                “
              </p>
              <p className="text-sm text-gold-ink">{story.name}</p>
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-plum">
                {story.headline}
              </h3>
              <p className="text-[15px] leading-relaxed text-plum-soft">
                {story.support}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <p className="mt-10 text-center">
        <a
          href="#offer"
          className="btn-link text-[15px] text-plum underline decoration-gold-ink/40 hover:text-gold-ink"
        >
          Real women. Real results. Book your clarity call
          <span aria-hidden="true">→</span>
        </a>
      </p>

      <div className="mt-8 flex justify-center">
        <MotionButton
          href={CLARITY_HREF}
          className="h-12 rounded-full px-8 text-[15px] sm:h-[3.25rem]"
        >
          {CLARITY_CTA}
        </MotionButton>
      </div>
    </SectionShell>
  );
}
