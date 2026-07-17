"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { Dict, Locale } from "@/lib/i18n";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Stats({ dict, locale }: { dict: Dict; locale: Locale }) {
  const t = dict.stats;
  const scope = useRef<HTMLElement>(null);
  const nf = new Intl.NumberFormat(locale === "ar" ? "ar-EG" : "en-US");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
          const target = Number(el.dataset.count);
          const state = { value: 0 };
          gsap.to(state, {
            value: target,
            duration: 1.8,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
            onUpdate: () => {
              el.textContent = nf.format(Math.round(state.value));
            },
          });
        });
      });
    },
    { scope }
  );

  return (
    <section ref={scope} className="texture-navy bg-navy-950 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div data-reveal className="text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-bronze-500">{t.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">{t.title}</h2>
        </div>
        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-6" data-reveal-group>
          {t.items.map((item) => (
            <div key={item.label} data-reveal-item className="text-center">
              <dd className="font-display text-4xl font-semibold text-white sm:text-[2.6rem]">
                <span data-count={item.value}>{nf.format(item.value)}</span>
                <span className="text-bronze-500">{item.suffix}</span>
              </dd>
              <dt className="mt-2 text-sm text-navy-300">{item.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
