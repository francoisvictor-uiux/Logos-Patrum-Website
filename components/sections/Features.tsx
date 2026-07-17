import SectionHeading from "../SectionHeading";
import { Icon, type IconName } from "../icons";
import type { Dict } from "@/lib/i18n";

export default function Features({ dict }: { dict: Dict }) {
  const t = dict.features;
  return (
    <section id="features" className="bg-parchment py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />
        <ul
          className="mt-14 grid grid-cols-1 overflow-hidden rounded-xl border border-gray-200 bg-white sm:grid-cols-2 lg:grid-cols-4"
          data-reveal-group
        >
          {t.items.map((item) => (
            <li
              key={item.title}
              data-reveal-item
              className="group border-b border-gray-200 p-7 transition-colors last:border-b-0 hover:bg-navy-50/60 sm:[&:nth-last-child(-n+2)]:border-b-0 sm:odd:border-e lg:border-e lg:[&:nth-child(4n)]:border-e-0 lg:[&:nth-last-child(-n+4)]:border-b-0"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy-100 bg-navy-50 text-navy-500 transition-colors group-hover:border-navy-200">
                <Icon name={item.icon as IconName} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-[15px] font-semibold text-navy-900">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-3">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
