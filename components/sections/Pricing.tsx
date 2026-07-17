"use client";

import { useState } from "react";
import SectionHeading from "../SectionHeading";
import { Icon } from "../icons";
import type { Dict } from "@/lib/i18n";

type Plan = {
  name: string;
  price: string;
  unit: string;
  desc: string;
  features: readonly string[];
  cta: string;
  featured: boolean;
};

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article
      data-reveal-item
      className={`relative flex flex-col rounded-xl p-7 ${
        plan.featured
          ? "texture-navy bg-navy-900 text-white ring-1 ring-navy-700"
          : "border border-gray-200 bg-white"
      }`}
    >
      {plan.featured && <div className="meander meander-light absolute inset-x-7 top-0 opacity-60" aria-hidden />}
      <h3 className={`text-base font-semibold ${plan.featured ? "text-bronze-400" : "text-navy-900"}`}>
        {plan.name}
      </h3>
      <p className={`mt-1.5 text-sm ${plan.featured ? "text-navy-200" : "text-ink-3"}`}>{plan.desc}</p>
      <p className="mt-6 flex items-baseline gap-1.5">
        <span className={`font-display text-4xl font-semibold leading-none ${plan.featured ? "text-white" : "text-navy-900"}`}>
          {plan.price}
        </span>
        {plan.unit && (
          <span className={`text-sm ${plan.featured ? "text-navy-300" : "text-ink-3"}`}>{plan.unit}</span>
        )}
      </p>
      <ul className="mt-7 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm leading-relaxed">
            <Icon name="check" className={`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? "text-bronze-400" : "text-navy-500"}`} />
            <span className={plan.featured ? "text-navy-100" : "text-ink-2"}>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className={`mt-8 rounded-xl px-5 py-3 text-center text-sm font-semibold transition-colors ${
          plan.featured
            ? "bg-bronze-500 text-navy-950 hover:bg-bronze-400"
            : "border border-gray-300 bg-white text-navy-900 hover:border-navy-300 hover:bg-navy-50"
        }`}
      >
        {plan.cta}
      </a>
    </article>
  );
}

export default function Pricing({ dict }: { dict: Dict }) {
  const t = dict.pricing;
  const [group, setGroup] = useState<0 | 1>(0);
  const plans = group === 0 ? t.individuals : t.institutions;

  return (
    <section id="pricing" className="texture-paper border-y border-gray-200 bg-parchment-2 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />

        {/* Audience toggle */}
        <div data-reveal className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full border border-gray-300 bg-white p-1" role="group" aria-label={t.eyebrow}>
            {t.groups.map((label, i) => (
              <button
                key={label}
                type="button"
                aria-pressed={group === i}
                onClick={() => setGroup(i as 0 | 1)}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
                  group === i ? "bg-navy-500 text-white" : "text-ink-2 hover:text-navy-900"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Plans */}
        <div className="mt-12 grid gap-6 md:grid-cols-3" data-reveal-group>
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>

        <p data-reveal className="mx-auto mt-10 flex max-w-2xl items-start gap-2.5 rounded-xl border border-gray-200 bg-white px-5 py-4 text-sm leading-relaxed text-ink-2">
          <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-bronze-800" />
          {t.note}
        </p>
      </div>
    </section>
  );
}
