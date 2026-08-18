"use client";

import { BookClarityCall } from "./BookClarityCall";
import { CLARITY_CTA } from "./shared";

const LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#method", label: "How it works" },
  { href: "/#stories", label: "Success stories" },
  { href: "/#coach", label: "Credentials" },
  { href: "/#offer", label: "Offer" },
] as const;

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-gold-ink/10 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.5rem] sm:px-8">
        <a
          href="/#top"
          className="shrink-0 leading-tight text-plum transition-opacity duration-250 hover:opacity-75"
        >
          <span className="block text-[15px] font-semibold tracking-[-0.02em] sm:text-base">
            Matilda Method
          </span>
          <span className="mt-0.5 hidden text-[9px] font-semibold uppercase tracking-[0.18em] text-gold-ink sm:block">
            Identity · Mental fitness · Leadership
          </span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[13px] font-medium text-plum-soft transition-colors duration-250 hover:text-plum after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-gold-ink after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <BookClarityCall className="btn-nav h-10 shrink-0 px-3.5 text-[11px] uppercase tracking-[0.04em] sm:h-11 sm:px-5 sm:text-[12px] sm:tracking-[0.06em]">
          <span className="sm:hidden">Book a call</span>
          <span className="hidden sm:inline">{CLARITY_CTA}</span>
        </BookClarityCall>
      </div>
    </header>
  );
}
