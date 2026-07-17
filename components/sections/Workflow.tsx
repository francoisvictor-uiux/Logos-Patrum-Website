import SectionHeading from "../SectionHeading";
import { Icon } from "../icons";
import type { Dict } from "@/lib/i18n";

export default function Workflow({ dict }: { dict: Dict }) {
  const t = dict.workflow;
  return (
    <section className="bg-parchment py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />
        <ol className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6" data-reveal-group>
          {t.steps.map((step, i) => (
            <li key={step.title} data-reveal-item className="relative">
              <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-0">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-navy-500 font-display text-base font-semibold text-navy-500">
                  {i + 1}
                </span>
                {i < t.steps.length - 1 && (
                  <Icon
                    name="arrow"
                    className="hidden h-4 w-4 text-gray-400 lg:absolute lg:top-3 lg:block lg:ltr:right-0 lg:rtl:left-0 lg:rtl:rotate-180"
                  />
                )}
                <h3 className="text-base font-semibold text-navy-900 lg:mt-4">{step.title}</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-3">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
