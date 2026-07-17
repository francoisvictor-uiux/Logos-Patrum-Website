import SectionHeading from "../SectionHeading";
import { Icon } from "../icons";
import type { Dict } from "@/lib/i18n";

// A small static demonstration of the "syntactic coloring" the engine produces.
const DEMO_TOKENS: { t: string; c: string }[] = [
  { t: "Αὐτὸς", c: "text-bronze-300" }, // subject
  { t: "γὰρ", c: "text-navy-300" },
  { t: "ἐνηνθρώπησεν", c: "text-teal-300" }, // verb
  { t: ",", c: "text-navy-400" },
  { t: "ἵνα", c: "text-navy-300" },
  { t: "ἡμεῖς", c: "text-bronze-300" }, // subject
  { t: "θεοποιηθῶμεν", c: "text-teal-300" }, // verb
];

export default function Filters({ dict }: { dict: Dict }) {
  const t = dict.filters;
  return (
    <section id="filters" className="texture-paper border-y border-gray-200 bg-parchment-2 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />

        {/* Coloring demo strip */}
        <div
          data-reveal
          className="texture-navy mx-auto mt-12 max-w-3xl overflow-hidden rounded-xl border border-navy-700 bg-navy-900 p-6 sm:p-8"
          dir="ltr"
        >
          <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-2 font-greek text-2xl leading-relaxed sm:text-[26px]">
            {DEMO_TOKENS.map((tok, i) => (
              <span key={i} className={tok.c} lang="grc">
                {tok.t}
              </span>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-navy-700 pt-4 text-[12px] text-navy-300">
            <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-bronze-400" />Subject</span>
            <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-teal-300" />Verb</span>
            <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-navy-300" />Particle</span>
          </div>
        </div>

        {/* 8 filter cards */}
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" data-reveal-group>
          {t.items.map((item, i) => (
            <li
              key={item.title}
              data-reveal-item
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-colors duration-300 hover:border-navy-300"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-50 font-display text-base font-semibold text-navy-500">
                {i + 1}
              </span>
              <h3 className="mt-4 text-[15px] font-semibold text-navy-900">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-3">{item.desc}</p>
            </li>
          ))}
        </ol>

        <p data-reveal className="mx-auto mt-8 flex max-w-3xl items-start gap-2.5 text-sm leading-relaxed text-ink-2">
          <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-bronze-800" />
          {t.more}
        </p>
      </div>
    </section>
  );
}
