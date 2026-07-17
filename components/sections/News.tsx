import SectionHeading from "../SectionHeading";
import { Icon } from "../icons";
import type { Dict } from "@/lib/i18n";

const TAG_STYLES: Record<number, string> = {
  0: "bg-navy-50 text-navy-600",
  1: "bg-bronze-500/15 text-bronze-800",
  2: "bg-teal-50 text-teal-700",
  3: "bg-gray-100 text-ink-2",
};

export default function News({ dict }: { dict: Dict }) {
  const t = dict.news;
  return (
    <section id="news" className="bg-parchment py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow={t.eyebrow} title={t.title} align="start" />
          <a
            data-reveal
            href="#"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-navy-500 hover:text-navy-700"
          >
            {t.viewAll}
            <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
          </a>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-reveal-group>
          {t.items.map((item, i) => (
            <article
              key={item.title}
              data-reveal-item
              className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 transition-colors duration-300 hover:border-navy-300"
            >
              <div className="flex items-center justify-between gap-2">
                <span className={`rounded-full px-2.5 py-1 text-[12px] font-semibold ${TAG_STYLES[i % 4]}`}>
                  {item.tag}
                </span>
                <time className="text-[12px] text-ink-3">{item.date}</time>
              </div>
              <h3 className="mt-4 flex-1 text-[15px] font-semibold leading-snug text-navy-900 group-hover:text-navy-600">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-3">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
