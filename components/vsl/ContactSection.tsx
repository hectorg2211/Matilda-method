"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import { SectionShell, useRevealVariants } from "./shared";

const DATES = ["14", "15", "16", "17", "18"] as const;

export function ContactSection() {
  const { reduceMotion, container, item } = useRevealVariants();
  const [selectedDate, setSelectedDate] = useState("16");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <SectionShell id="apply" className="bg-transparent">
      <motion.div
        className="grid gap-5 lg:grid-cols-2"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div
          variants={item}
          className="rounded-[1.75rem] border border-gold-ink/15 bg-white p-6 shadow-[0_1px_0_rgba(61,24,48,0.04)] sm:p-8"
        >
          <span className="inline-flex rounded-full bg-gold-light/60 px-3.5 py-1 text-[13px] font-medium text-plum-soft">
            Get in touch
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-plum">
            Send Matilda a message.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-plum-soft">
            Share what has been weighing on you. Messages are read personally,
            and you will usually hear back within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="mt-7 space-y-4">
            <Field label="Name">
              <input
                required
                name="name"
                placeholder="Your name"
                className="field-input"
              />
            </Field>
            <Field label="Email">
              <input
                required
                type="email"
                name="email"
                placeholder="your@email.com"
                className="field-input"
              />
            </Field>
            <Field label="What are you navigating?">
              <input
                name="focus"
                placeholder="People-pleasing, perfectionism, confidence…"
                className="field-input"
              />
            </Field>
            <Field label="Message">
              <textarea
                required
                name="message"
                rows={4}
                placeholder="Tell Matilda a little about where you feel stuck…"
                className="field-input resize-none"
              />
            </Field>
            <motion.button
              type="submit"
              whileHover={reduceMotion ? undefined : { scale: 1.02 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-plum px-6 text-[15px] font-semibold text-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum"
            >
              {submitted ? "Message sent" : "Send a message"}
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          variants={item}
          className="rounded-[1.75rem] border border-gold-ink/15 bg-white p-6 shadow-[0_1px_0_rgba(61,24,48,0.04)] sm:p-8"
        >
          <span className="inline-flex rounded-full bg-gold-light/60 px-3.5 py-1 text-[13px] font-medium text-plum-soft">
            Book a clarity call
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-plum">
            Or book your 15-minute clarity call.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-plum-soft">
            No pressure pitch. Just a clear conversation about what is keeping
            you stuck, and whether one-to-one coaching is the right fit.
          </p>

          <div className="mt-7 rounded-2xl bg-gold-light/35 px-5 py-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white text-plum">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
                <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
                <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            <p className="mt-4 text-lg font-semibold text-plum">
              Embed your calendar
            </p>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-plum-soft">
              Connect Calendly or your booking tool here so women can choose a
              slot and book the clarity call directly.
            </p>
            <div className="mt-6 flex justify-center gap-2">
              {DATES.map((date) => (
                <button
                  key={date}
                  type="button"
                  onClick={() => setSelectedDate(date)}
                  className={`flex h-11 w-11 items-center justify-center rounded-xl text-sm font-semibold transition-colors ${
                    selectedDate === date
                      ? "bg-plum text-cream"
                      : "bg-white text-plum-soft hover:bg-cream"
                  }`}
                >
                  {date}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <BookingOption
              title="Clarity call"
              meta="15 min • Small booking fee"
              active
            />
            <BookingOption
              title="Group cohort enquiry"
              meta="6 weeks • People-pleasing focus"
            />
          </div>
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm text-gold-ink">{label}</span>
      {children}
    </label>
  );
}

function BookingOption({
  title,
  meta,
  active = false,
}: {
  title: string;
  meta: string;
  active?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-gold-ink/10 bg-cream px-4 py-3">
      <span
        className={`h-2.5 w-2.5 rounded-full ${active ? "bg-plum" : "bg-gold-ink/40"}`}
      />
      <div>
        <p className="font-medium text-plum">{title}</p>
        <p className="text-sm text-gold-ink">{meta}</p>
      </div>
    </div>
  );
}
