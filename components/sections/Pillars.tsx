import SectionHeading from "../SectionHeading";
import type { Dict } from "@/lib/i18n";

const LETTERS = ["Α", "Β", "Γ"];

export default function Pillars({ dict }: { dict: Dict }) {
  const t = dict.pillars;
  return (
    <section id="pillars" className="texture-paper bg-parchment py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
          align="start"
          size="lg"
        />
        <div className="mt-14 sm:mt-16" data-reveal-group>
          {t.cards.map((card, i) => (
            <article
              key={card.title}
              data-reveal-item
              className="group grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2 border-t border-navy-100 py-9 first:border-t-0 sm:gap-x-12 sm:py-11"
              style={{ paddingInlineStart: `${i * 1.75}rem` }}
            >
              <span
                aria-hidden
                className="font-display text-6xl font-medium leading-[0.8] text-navy-200 transition-colors duration-500 group-hover:text-bronze-500 sm:text-8xl"
              >
                {LETTERS[i] ?? card.title.charAt(0)}
              </span>
              <div className="max-w-xl">
                <h3 className="font-display text-2xl font-semibold text-navy-900 sm:text-[1.75rem]">
                  {card.title}
                </h3>
                <p className="mt-3 text-[17px] leading-relaxed text-ink-2">{card.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
