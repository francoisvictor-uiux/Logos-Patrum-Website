import SectionHeading from "../SectionHeading";
import type { Dict } from "@/lib/i18n";

export default function Partners({ dict }: { dict: Dict }) {
  const t = dict.partners;
  const blocks = [t.partners, t.sponsors];
  return (
    <section id="partners" className="bg-parchment py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} />
        <div className="mt-14 grid gap-6 lg:grid-cols-2" data-reveal-group>
          {blocks.map((block) => (
            <div key={block.title} data-reveal-item className="rounded-xl border border-gray-200 bg-white p-8">
              <h3 className="font-display text-xl font-semibold text-navy-900">{block.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-3">{block.desc}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {block.items.map((name) => (
                  <li
                    key={name}
                    className="flex min-h-16 items-center justify-center rounded-xl border border-gray-200 bg-parchment-2 px-4 py-3 text-center font-display text-[15px] font-medium text-ink-2"
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
