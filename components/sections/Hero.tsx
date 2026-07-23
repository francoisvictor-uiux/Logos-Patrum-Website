import Image from "next/image";
import { Icon } from "../icons";
import type { Dict } from "@/lib/i18n";

function renderDescription(text: string) {
  const parts = text.split("Logos Patrum");
  return parts.flatMap((part, i) =>
    i === 0
      ? [part]
      : [
          <strong key={i} className="font-bold">
            Logos Patrum
          </strong>,
          part,
        ]
  );
}

export default function Hero({ dict }: { dict: Dict }) {
  const t = dict.hero;
  return (
    <section
      id="top"
      className="relative flex min-h-[760px] items-center overflow-hidden bg-navy-950 pt-32 pb-16 sm:pt-36 lg:min-h-[880px] lg:pb-0"
    >
      {/* Full-bleed background */}
      <Image
        src="/images/hero-bg.svg"
        alt=""
        aria-hidden
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Legibility overlays */}
      <div aria-hidden className="absolute inset-0 bg-navy-950/35" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/25 to-navy-950/10" />

      {/* Content grid: text on reading-start, tilted dashboard bleeding off reading-end */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-0">
        {/* Text — reading-start side */}
        <div className="flex max-w-xl flex-col items-start gap-8 text-start" data-reveal-group>
          <h1
            data-reveal-item
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-balance text-white sm:text-5xl lg:text-[64px] lg:leading-[1.05] lg:tracking-[-0.02em]"
          >
            {t.title}
          </h1>

          <p data-reveal-item className="text-lg leading-relaxed text-white/85 sm:text-xl">
            {renderDescription(t.description)}
          </p>

          <div data-reveal-item className="mt-1 flex flex-wrap items-center gap-4">
            <a
              href="#pricing"
              className="inline-flex h-14 items-center justify-center rounded-xl border-[1.6px] border-white/90 px-6 text-lg font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-navy-900"
            >
              {t.secondaryCta}
            </a>
            <a
              href="#pricing"
              className="group inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-navy-500 px-6 text-lg font-medium text-white shadow-lg shadow-navy-950/30 transition-colors hover:bg-navy-600"
            >
              {t.primaryCta}
              <Icon
                name="arrow"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
              />
            </a>
          </div>
        </div>

        {/* Dashboard — reading-end side, tilted + bleeding off outer edge (desktop only) */}
        <div className="relative hidden h-full lg:block" aria-hidden data-reveal data-speed="1.08">
          <div
            className="absolute top-1/2 w-[132%] -translate-y-1/2"
            style={{ perspective: "2200px", insetInlineEnd: "-34%" }}
          >
            <div className="[transform:rotateY(16deg)_rotateX(6deg)] rtl:[transform:rotateY(-16deg)_rotateX(6deg)]">
              <Image
                src="/images/hero-dashboard.svg"
                alt=""
                width={938}
                height={731}
                unoptimized
                sizes="70vw"
                className="w-full rounded-2xl shadow-[0_40px_120px_-20px_rgba(0,0,0,0.65)] ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
