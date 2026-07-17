import SectionHeading from "../SectionHeading";
import { Icon } from "../icons";
import type { Dict } from "@/lib/i18n";

const STATUS_STYLE: Record<number, string> = {
  0: "bg-success/12 text-success",
  1: "bg-success/12 text-success",
  2: "bg-bronze-500/15 text-bronze-800",
  3: "bg-gray-100 text-ink-3",
};

export default function Story({ dict }: { dict: Dict }) {
  const t = dict.story;
  return (
    <section id="story" className="bg-parchment py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Manuscript visual */}
          <div data-reveal className="relative order-last lg:order-first">
            <div className="texture-navy relative overflow-hidden rounded-xl bg-navy-900 p-8 sm:p-10">
              <div className="meander meander-light w-28 opacity-60" aria-hidden />
              <p className="mt-8 font-greek text-2xl leading-[1.9] text-navy-100" lang="hy" dir="ltr">
                Ի սկզբանէ էր Բանն, եւ Բանն էր առ Աստուած, եւ Աստուած էր Բանն։
              </p>
              <p className="mt-6 text-[13px] tracking-wide text-navy-300" dir="ltr">
                Ⲡⲁⲗⲁⲛϫⲓⲁⲛ · Armenian codex, fol. 3r
              </p>
              <span className="absolute end-8 top-8 rounded-full bg-bronze-500/15 px-3 py-1 text-[12px] font-semibold text-bronze-300">
                27
              </span>
            </div>
          </div>

          {/* Story text */}
          <div>
            <SectionHeading eyebrow={t.eyebrow} title={t.title} align="start" />
            <div className="mt-6 space-y-4" data-reveal>
              {t.body.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-ink-2">
                  {p}
                </p>
              ))}
            </div>

            <ul className="mt-8 grid gap-2.5 sm:grid-cols-2" data-reveal-group>
              {t.traditions.map((tr, i) => (
                <li
                  key={tr.name}
                  data-reveal-item
                  className="flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3"
                >
                  <span className="text-sm font-medium text-navy-900">{tr.name}</span>
                  <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[12px] font-semibold ${STATUS_STYLE[i] ?? STATUS_STYLE[3]}`}>
                    {tr.status}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8" data-reveal>
              <a
                href="#features"
                className="group inline-flex items-center gap-2 rounded-xl bg-navy-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-600"
              >
                {t.cta}
                <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
