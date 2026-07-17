import SectionHeading from "../SectionHeading";
import { Icon, type IconName } from "../icons";
import type { Dict } from "@/lib/i18n";

export default function Security({ dict }: { dict: Dict }) {
  const t = dict.security;
  return (
    <section id="security" className="texture-navy relative overflow-hidden bg-navy-950 py-24 sm:py-28">
      {/* Faint watermark grid, echoing the DLP feature */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 select-none opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-24deg, transparent 0 90px, rgba(255,255,255,0.6) 90px 91px)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} tone="dark" />

        <div className="mt-14 grid gap-5 sm:grid-cols-2" data-reveal-group>
          {t.items.map((item) => (
            <article
              key={item.title}
              data-reveal-item
              className="flex gap-4 rounded-xl border border-navy-700 bg-navy-900/70 p-6 backdrop-blur-sm sm:p-7"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-800 text-bronze-400 ring-1 ring-navy-700">
                <Icon name={item.icon as IconName} className="h-[22px] w-[22px]" />
              </span>
              <div>
                <h3 className="text-[15px] font-semibold text-white">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-200">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <p data-reveal className="mt-12 text-center font-display text-2xl font-semibold tracking-wide text-bronze-400 sm:text-3xl">
          {t.tagline}
        </p>
      </div>
    </section>
  );
}
