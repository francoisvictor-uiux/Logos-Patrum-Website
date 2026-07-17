"use client";

import { useState } from "react";
import SectionHeading from "../SectionHeading";
import { Icon } from "../icons";
import type { Dict } from "@/lib/i18n";

export default function Faq({ dict }: { dict: Dict }) {
  const t = dict.faq;
  const [category, setCategory] = useState<string | null>(null);
  const [open, setOpen] = useState<number | null>(0);
  const visible = t.items.filter((item) => !category || item.cat === category);

  return (
    <section id="faq" className="texture-paper border-y border-gray-200 bg-parchment-2 py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />

        <div data-reveal className="mt-10 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => {
              setCategory(null);
              setOpen(0);
            }}
            aria-pressed={category === null}
            className={`rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors ${
              category === null
                ? "bg-navy-500 text-white"
                : "border border-gray-300 bg-white text-ink-2 hover:border-navy-300"
            }`}
          >
            {t.all}
          </button>
          {t.categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setCategory(cat);
                setOpen(0);
              }}
              aria-pressed={category === cat}
              className={`rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors ${
                category === cat
                  ? "bg-navy-500 text-white"
                  : "border border-gray-300 bg-white text-ink-2 hover:border-navy-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div data-reveal className="mt-10 divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
          {visible.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start"
                >
                  <span className="text-[15px] font-semibold text-navy-900">{item.q}</span>
                  <Icon
                    name="chevron"
                    className={`h-4 w-4 shrink-0 text-ink-3 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-[15px] leading-relaxed text-ink-2">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
