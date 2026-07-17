import SectionHeading from "../SectionHeading";
import type { Dict } from "@/lib/i18n";

export default function Testimonials({ dict }: { dict: Dict }) {
  const t = dict.testimonials;
  return (
    <section className="bg-parchment py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} />
        <div className="mt-14 grid gap-6 md:grid-cols-2" data-reveal-group>
          {t.items.map((item) => (
            <figure
              key={item.name}
              data-reveal-item
              className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-8"
            >
              <blockquote>
                <span aria-hidden className="font-display text-5xl leading-none text-bronze-500">
                  &ldquo;
                </span>
                <p className="font-display text-xl leading-relaxed text-navy-900">{item.quote}</p>
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-4 border-t border-gray-100 pt-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-500 text-sm font-semibold text-white">
                  {item.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy-900">{item.name}</p>
                  <p className="text-[13px] text-ink-3">
                    {item.role} · {item.org}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
