import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteNav } from "./SiteNav";

export function LegalDoc({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main className="page-texture min-h-full">
      <SiteNav />
      <article className="relative px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-160">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-gold-ink">
            Legal
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-plum sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-[14px] text-plum-soft/80">
            Last updated {updated}
          </p>
          <div className="mt-10">{children}</div>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="text-[1.35rem] font-semibold tracking-[-0.02em] text-plum">
        {title}
      </h2>
      <div className="mt-4 space-y-3 text-[15px] leading-[1.75] text-plum-soft [&_a]:text-plum [&_a]:underline [&_a]:decoration-gold-ink/45 [&_a]:underline-offset-2 hover:[&_a]:decoration-gold-ink [&_li]:pl-0.5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}
