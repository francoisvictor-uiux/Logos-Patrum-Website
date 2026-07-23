"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "./icons";
import type { Dict, Locale } from "@/lib/i18n";

type ClassArg = string | false | null | undefined | Record<string, boolean>;
function cn(...args: ClassArg[]) {
  const out: string[] = [];
  for (const a of args) {
    if (!a) continue;
    if (typeof a === "string") out.push(a);
    else for (const k in a) if (a[k]) out.push(k);
  }
  return out.join(" ");
}

function MenuToggleIcon({ open, className }: { open: boolean; className?: string }) {
  const bar =
    "absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-current transition-all duration-300 ease-out";
  return (
    <span className={cn("relative block", className)} aria-hidden>
      <span className={cn(bar, open ? "rotate-45" : "-translate-y-[6px]")} />
      <span className={cn(bar, open ? "opacity-0" : "opacity-100")} />
      <span className={cn(bar, open ? "-rotate-45" : "translate-y-[6px]")} />
    </span>
  );
}

export default function Header({ dict, locale }: { dict: Dict; locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const otherLocale: Locale = locale === "ar" ? "en" : "ar";

  const links = [
    { label: dict.nav.home, href: "#top" },
    { label: dict.nav.features.label, href: "#features" },
    { label: dict.nav.resources.label, href: "#news" },
    { label: dict.nav.publications.label, href: "#story" },
    { label: dict.nav.pricing.label, href: "#pricing" },
    { label: dict.nav.about.label, href: "#why" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Light pill visible (scrolled or menu open) → dark content; at the very top
  // the bar is transparent over the dark hero → light content.
  const solid = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={cn(
          "mx-auto flex items-center justify-between rounded-2xl border transition-all duration-300 ease-out",
          "h-14 px-4 lg:h-12",
          solid
            ? "max-w-5xl border-gray-200 bg-white/80 shadow-sm backdrop-blur-lg supports-[backdrop-filter]:bg-white/65 lg:mt-2 lg:px-2"
            : "max-w-6xl border-transparent bg-transparent"
        )}
      >
        {/* Brand */}
        <a href="#top" className="flex shrink-0 items-center gap-2.5 ps-1">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-500">
            <Image src="/images/logo-white.svg" alt="" width={27} height={16} unoptimized className="h-4 w-auto" />
          </span>
          <span
            className={cn(
              "font-display text-lg font-semibold tracking-tight transition-colors",
              solid ? "text-navy-900" : "text-white"
            )}
          >
            Logos Patrum
          </span>
        </a>

        {/* Desktop nav + actions */}
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                solid
                  ? "text-navy-700 hover:bg-navy-50 hover:text-navy-900"
                  : "text-white/85 hover:bg-white/10 hover:text-white"
              )}
            >
              {link.label}
            </a>
          ))}

          {/* Language toggle */}
          <Link
            href={`/${otherLocale}`}
            aria-label={dict.footer.langSwitch}
            className={cn(
              "ms-1 inline-flex h-9 items-center gap-1.5 rounded-md px-3 text-sm font-medium transition-colors",
              solid ? "text-navy-700 hover:bg-navy-50" : "text-white/85 hover:bg-white/10"
            )}
          >
            <Icon name="globe" className="h-4 w-4" />
            {dict.footer.langSwitch}
          </Link>

          <a
            href="#pricing"
            className={cn(
              "inline-flex h-9 items-center rounded-lg border px-4 text-sm font-medium transition-colors",
              solid
                ? "border-navy-200 text-navy-700 hover:bg-navy-50"
                : "border-white/60 text-white hover:bg-white hover:text-navy-900"
            )}
          >
            {dict.nav.login}
          </a>
          <a
            href="#pricing"
            className="inline-flex h-9 items-center rounded-lg bg-navy-500 px-4 text-sm font-medium text-white transition-colors hover:bg-navy-600"
          >
            {dict.nav.signup}
          </a>
        </div>

        {/* Mobile: compact language toggle + menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href={`/${otherLocale}`}
            aria-label={dict.footer.langSwitch}
            className={cn(
              "inline-flex h-9 items-center gap-1.5 rounded-lg px-2.5 text-sm font-medium transition-colors",
              solid ? "text-navy-700 hover:bg-navy-50" : "text-white/90 hover:bg-white/10"
            )}
          >
            <Icon name="globe" className="h-4 w-4" />
            <span className="text-xs uppercase">{otherLocale}</span>
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-lg border transition-colors",
              solid ? "border-gray-200 text-navy-900" : "border-white/50 text-white"
            )}
          >
            <MenuToggleIcon open={open} className="h-4 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 top-[72px] z-40 flex-col border-t border-gray-200 bg-white/95 backdrop-blur-lg lg:hidden",
          open ? "flex" : "hidden"
        )}
      >
        <div className="flex h-full flex-col justify-between gap-y-2 p-4">
          <div className="grid gap-y-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-navy-800 transition-colors hover:bg-navy-50"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <Link
              href={`/${otherLocale}`}
              onClick={() => setOpen(false)}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-gray-200 text-[15px] font-medium text-navy-700"
            >
              <Icon name="globe" className="h-4 w-4" />
              {dict.footer.langSwitch}
            </Link>
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-navy-200 text-[15px] font-medium text-navy-700"
            >
              {dict.nav.login}
            </a>
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-navy-500 text-[15px] font-medium text-white"
            >
              {dict.nav.signup}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
