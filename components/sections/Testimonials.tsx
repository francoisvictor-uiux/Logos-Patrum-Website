import SectionHeading from "../SectionHeading";
import type { Dict } from "@/lib/i18n";

export default function Testimonials({ dict }: { dict: Dict }) {
  const t = dict.testimonials;
  const [lead, ...rest] = t.items;

  return (
    <section className="relative overflow-hidden bg-parchment py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} align="start" />

        <div className="mt-14" data-reveal-group>
          {/* Featured voice */}
          {lead ? (
            <figure
              data-reveal-item
              className="texture-navy relative overflow-hidden rounded-2xl bg-navy-900 p-8 sm:p-12"
            >
              <div aria-hidden className="meander meander-light absolute inset-x-0 top-0 opacity-60" />
              <blockquote>
                <span aria-hidden className="font-display text-6xl leading-none text-bronze-500">
                  &ldquo;
                </span>
                <p className="mt-2 max-w-3xl font-display text-2xl leading-[1.4] text-white sm:text-[1.75rem]">
                  {lead.quote}
                </p>
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-bronze-500 text-sm font-semibold text-navy-900">
                  {lead.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{lead.name}</p>
                  <p className="text-[13px] text-navy-200">
                    {lead.role} · {lead.org}
                  </p>
                </div>
              </figcaption>
            </figure>
          ) : null}

          {/* Supporting chorus */}
          {rest.length ? (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((item) => (
                <figure
                  key={item.name}
                  data-reveal-item
                  className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-7"
                >
                  <p className="font-display text-lg leading-relaxed text-navy-900">
                    <span aria-hidden className="text-bronze-600">
                      &ldquo;
                    </span>
                    {item.quote}
                  </p>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-500 text-[13px] font-semibold text-white">
                      {item.initials}
                    </span>
                    <div>
                      <p className="text-[13px] font-semibold text-navy-900">{item.name}</p>
                      <p className="text-xs text-ink-3">
                        {item.role} · {item.org}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
