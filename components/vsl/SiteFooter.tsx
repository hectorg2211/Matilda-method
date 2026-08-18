export function SiteFooter() {
  return (
    <footer className="border-t border-cream/10 bg-plum px-5 py-10 text-cream/70 sm:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[12px] leading-relaxed sm:text-[13px]">
          Matilda Method helps women build confidence, resilience, and mental
          fitness through coaching. Results vary. This is not a substitute for
          clinical mental health care. Client stories are personal experiences
          and do not guarantee outcomes.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px] text-cream/65">
          <a href="/privacy" className="underline-offset-2 hover:underline">
            Privacy
          </a>
          <a href="/terms" className="underline-offset-2 hover:underline">
            Terms
          </a>
          <a
            href="mailto:hello@matildamethod.com"
            className="underline-offset-2 hover:underline"
          >
            Contact
          </a>
        </div>
        <p className="mt-5 text-[13px] text-gold">
          5 private coaching places are open.
        </p>
        <p className="mt-4 text-[12px] text-cream/55">
          © 2026 Matilda Method. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
