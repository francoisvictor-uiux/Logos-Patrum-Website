import SectionHeading from "../SectionHeading";
import { Icon } from "../icons";
import type { Dict } from "@/lib/i18n";

export default function Preview({ dict }: { dict: Dict }) {
  const t = dict.preview;
  return (
    <section id="preview" className="texture-navy bg-navy-950 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} tone="dark" />

        <div data-reveal className="mt-14 overflow-hidden rounded-xl border border-navy-700 bg-navy-900">
          {/* Reader chrome */}
          <div className="flex items-center gap-2 border-b border-navy-700 px-5 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-navy-600" aria-hidden />
            <span className="h-2.5 w-2.5 rounded-full bg-navy-600" aria-hidden />
            <span className="h-2.5 w-2.5 rounded-full bg-navy-600" aria-hidden />
            <span className="ms-3 truncate text-[13px] text-navy-300">
              {t.translationTitle} · {t.translationAuthor}
            </span>
          </div>

          <div className="grid lg:grid-cols-2">
            {/* Greek pane */}
            <div className="border-b border-navy-700 p-7 sm:p-9 lg:border-b-0 lg:border-e" dir="ltr">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-bronze-500">
                {t.greekLabel}
              </p>
              <h3 className="mt-3 font-greek text-2xl font-semibold text-white" lang="grc">
                {t.greekTitle}
              </h3>
              <p className="mt-1 font-greek text-sm text-navy-300" lang="grc">
                {t.greekAuthor}
              </p>
              <div className="mt-6 space-y-4">
                {t.greekText.map((line, i) => (
                  <p
                    key={i}
                    lang="grc"
                    className={`font-greek text-lg leading-relaxed ${
                      i === 0
                        ? "rounded-md bg-navy-800 px-3 py-2 text-bronze-300 ring-1 ring-inset ring-bronze-800/40"
                        : "text-navy-100"
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>

            {/* Translation pane */}
            <div className="p-7 sm:p-9">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-navy-300">
                {t.translationLabel}
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white">{t.translationTitle}</h3>
              <p className="mt-1 text-sm text-navy-300">{t.translationAuthor}</p>
              <div className="mt-6 space-y-4">
                {t.translationText.map((line, i) => (
                  <p
                    key={i}
                    className={`text-[17px] leading-relaxed ${
                      i === 0
                        ? "rounded-md bg-navy-800 px-3 py-2 text-white ring-1 ring-inset ring-navy-600"
                        : "text-navy-100"
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Research connections */}
          <div className="grid gap-4 border-t border-navy-700 bg-navy-950/60 px-7 py-6 sm:grid-cols-3 sm:px-9">
            {t.connections.map((c) => (
              <div key={c.k}>
                <dt className="text-[12px] font-semibold uppercase tracking-[0.14em] text-navy-400">{c.k}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-navy-100">{c.v}</dd>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="flex items-center gap-2 text-sm text-navy-300">
            <Icon name="check" className="h-4 w-4 text-bronze-500" />
            {t.note}
          </p>
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-bronze-400 hover:text-bronze-300"
          >
            {t.cta}
            <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
