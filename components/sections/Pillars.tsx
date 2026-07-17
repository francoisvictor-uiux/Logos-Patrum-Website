import SectionHeading from "../SectionHeading";
import { Icon, type IconName } from "../icons";
import type { Dict } from "@/lib/i18n";

export default function Pillars({ dict }: { dict: Dict }) {
  const t = dict.pillars;
  return (
    <section id="pillars" className="bg-parchment py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />
        <div className="mt-14 grid gap-6 md:grid-cols-3" data-reveal-group>
          {t.cards.map((card, i) => (
            <article
              key={card.title}
              data-reveal-item
              className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-8 transition-colors duration-300 hover:border-navy-300"
            >
              <span className="absolute end-6 top-6 font-display text-6xl font-medium leading-none text-navy-100">
                {["Α", "Β", "Γ"][i]}
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-500 text-white">
                <Icon name={card.icon as IconName} className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold text-navy-900">{card.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-2">{card.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
