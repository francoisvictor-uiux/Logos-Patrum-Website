import type { Dict } from "@/lib/i18n";

export default function TrustedBy({ dict }: { dict: Dict }) {
  const t = dict.trustedBy;
  const row = [...t.logos, ...t.logos];
  return (
    <section className="border-b border-gray-200 bg-parchment py-14" aria-label={t.label}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6" data-reveal>
        <p className="text-center text-[13px] font-semibold uppercase tracking-[0.18em] text-ink-3">
          {t.label}
        </p>
        <div
          className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
          dir="ltr"
        >
          <div className="animate-marquee flex w-max items-center gap-14">
            {row.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="whitespace-nowrap font-display text-lg font-medium text-ink-3/80"
                aria-hidden={i >= t.logos.length}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
