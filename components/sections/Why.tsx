import SectionHeading from "../SectionHeading";
import type { Dict } from "@/lib/i18n";

export default function Why({ dict }: { dict: Dict }) {
  const t = dict.why;
  return (
    <section id="why" className="texture-paper border-y border-gray-200 bg-parchment-2 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="lg:sticky lg:top-32">
            <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} align="start" />

            {/* Signature quote panel */}
            <figure data-reveal className="texture-navy mt-10 overflow-hidden rounded-xl bg-navy-900 p-8">
              <div className="meander meander-light w-24 opacity-70" aria-hidden />
              <blockquote className="mt-6">
                <p className="font-greek text-2xl leading-snug text-bronze-300" lang="grc" dir="ltr">
                  {t.quote.greek}
                </p>
                <p className="mt-4 font-display text-lg leading-relaxed text-navy-100">{t.quote.text}</p>
              </blockquote>
              <figcaption className="mt-5 text-[13px] tracking-wide text-navy-300">
                {t.quote.source}
              </figcaption>
            </figure>
          </div>

          <ol className="border-s border-gray-300 ps-8" data-reveal-group>
            {t.points.map((point, i) => (
              <li
                key={point.title}
                data-reveal-item
                className={`relative ${i === t.points.length - 1 ? "" : "pb-10"}`}
              >
                <span
                  aria-hidden
                  className="absolute -start-[45px] top-0 flex h-[26px] w-[26px] items-center justify-center rounded-full border border-gray-300 bg-parchment text-[11px] font-semibold text-bronze-800"
                >
                  {i + 1}
                </span>
                <h3 className="text-lg font-semibold text-navy-900">{point.title}</h3>
                <p className="mt-1.5 leading-relaxed text-ink-2">{point.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
