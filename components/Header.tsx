"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "./icons";
import type { Dict, Locale } from "@/lib/i18n";

export default function Header({ dict, locale }: { dict: Dict; locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const otherLocale = locale === "ar" ? "en" : "ar";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: dict.nav.home, href: "#top" },
    { label: dict.nav.features.label, href: "#features" },
    { label: dict.nav.resources.label, href: "#news" },
    { label: dict.nav.publications.label, href: "#story" },
    { label: dict.nav.pricing.label, href: "#pricing" },
    { label: dict.nav.about.label, href: "#why" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:pt-5">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-[26px] border-[3px] bg-white/95 p-2 backdrop-blur-md transition-colors duration-300 ${
          scrolled ? "border-[#dcdee0]" : "border-[#e7e8e9]"
        }`}
      >
        {/* Logo */}
        <a href="#top" className="flex shrink-0 items-center gap-2.5 ps-1.5 pe-1">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-500 text-white">
            <Icon name="reading" className="h-[22px] w-[22px]" />
          </span>
          <span className="hidden font-display text-lg font-semibold tracking-tight text-navy-900 sm:block">
            Logos Patrum
          </span>
        </a>

        {/* Center links */}
        <nav className="hidden items-center lg:flex" aria-label="Main">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="rounded-full px-4 py-2.5 text-[15px] font-medium text-[#4d585f] transition-colors hover:bg-navy-50 hover:text-navy-900"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-1.5">
          <Link
            href={`/${otherLocale}`}
            aria-label={dict.footer.langSwitch}
            className="hidden h-11 w-11 items-center justify-center rounded-full text-[#4d585f] transition-colors hover:bg-navy-50 hover:text-navy-900 sm:flex"
          >
            <Icon name="globe" className="h-[18px] w-[18px]" />
          </Link>

          <a
            href="#pricing"
            className="group hidden h-11 items-center gap-2.5 rounded-xl bg-navy-500 px-5 text-[15px] font-medium text-white transition-colors hover:bg-navy-600 sm:inline-flex"
          >
            {dict.nav.login}
            <Icon
              name="arrow"
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
            />
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full text-navy-900 lg:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <Icon name={mobileOpen ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-[26px] border-[3px] border-[#e7e8e9] bg-white p-3 lg:hidden">
          <nav className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-[15px] font-medium text-[#4d585f] transition-colors hover:bg-navy-50 hover:text-navy-900"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-2 flex items-center gap-2 border-t border-gray-200 pt-3">
            <a
              href="#pricing"
              onClick={() => setMobileOpen(false)}
              className="group inline-flex h-12 flex-1 items-center justify-center gap-2.5 rounded-xl bg-navy-500 px-5 text-[15px] font-medium text-white"
            >
              {dict.nav.login}
              <Icon name="arrow" className="h-4 w-4 rtl:rotate-180" />
            </a>
            <Link
              href={`/${otherLocale}`}
              onClick={() => setMobileOpen(false)}
              aria-label={dict.footer.langSwitch}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-200 text-[#4d585f]"
            >
              <Icon name="globe" className="h-5 w-5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
