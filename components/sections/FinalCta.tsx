import { Icon } from "../icons";
import type { Dict } from "@/lib/i18n";

const GREEK_LINE = "ΛΟΓΟΣ · ΣΟΦΙΑ · ΑΛΗΘΕΙΑ · ΠΑΡΑΔΟΣΙΣ · ";

export default function FinalCta({ dict }: { dict: Dict }) {
  const t = dict.finalCta;
  return (
    <section className="texture-navy relative overflow-hidden bg-navy-950 py-24 sm:py-32">
      <p
        aria-hidden
        className="greek-backdrop absolute inset-x-0 top-8 whitespace-nowrap text-center text-[80px] font-medium text-navy-400/[0.06]"
      >
        {GREEK_LINE.repeat(4)}
      </p>
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6" data-reveal>
        <h2 className="font-display text-4xl font-semibold text-balance leading-[1.12] text-white sm:text-5xl">
          {t.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-navy-200 sm:text-lg">{t.description}</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#pricing"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-bronze-500 px-8 py-4 text-[15px] font-semibold text-navy-950 transition-colors hover:bg-bronze-400 sm:w-auto"
          >
            {t.primary}
            <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
          </a>
          <a
            href="#footer"
            className="inline-flex w-full items-center justify-center rounded-xl border border-navy-600 px-8 py-4 text-[15px] font-semibold text-white transition-colors hover:border-navy-400 hover:bg-navy-800 sm:w-auto"
          >
            {t.secondary}
          </a>
        </div>
      </div>
    </section>
  );
}
