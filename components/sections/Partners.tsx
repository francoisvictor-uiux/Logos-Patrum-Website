import SectionHeading from "../SectionHeading";
import type { Dict } from "@/lib/i18n";

export default function Partners({ dict }: { dict: Dict }) {
  const t = dict.partners;
  const blocks = [t.partners, t.sponsors];
  return (
    <section id="partners" className="bg-parchment py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} align="start" size="sm" />
        <div className="mt-12 grid gap-y-14 lg:grid-cols-2 lg:gap-x-16" data-reveal-group>
          {blocks.map((block, i) => (
            <div
              key={block.title}
              data-reveal-item
              className={i === 1 ? "lg:border-s lg:border-gray-200 lg:ps-16" : ""}
            >
              <h3 className="font-display text-xl font-semibold text-navy-900">{block.title}</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-2">{block.desc}</p>
              <ul className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4">
                {block.items.map((name) => (
                  <li
                    key={name}
                    className="font-display text-lg font-medium text-ink-3 transition-colors duration-300 hover:text-navy-700"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
