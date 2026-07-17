"use client";

import { useState } from "react";
import { Icon } from "../icons";
import type { Dict } from "@/lib/i18n";

export default function Newsletter({ dict }: { dict: Dict }) {
  const t = dict.newsletter;
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "error" | "done">("idle");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setState("error");
      return;
    }
    setState("done");
  }

  return (
    <section className="bg-parchment py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6" data-reveal>
        <div className="relative overflow-hidden rounded-2xl border border-navy-100 bg-navy-50/60 px-6 py-12 sm:px-12 sm:py-14">
          <div aria-hidden className="meander absolute inset-x-0 top-0 opacity-70" />
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-semibold leading-[1.15] text-navy-900 sm:text-4xl">
                {t.title}
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink-2">{t.description}</p>
            </div>

            <div className="lg:justify-self-end lg:w-full lg:max-w-md">
              {state === "done" ? (
                <p
                  className="flex items-center gap-2 rounded-xl bg-white px-5 py-4 text-sm font-medium text-navy-700 ring-1 ring-navy-100"
                  role="status"
                >
                  <Icon name="check" className="h-4 w-4 text-success" />
                  {t.success}
                </p>
              ) : (
                <form onSubmit={submit} noValidate>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <label htmlFor="newsletter-email" className="sr-only">
                      {t.placeholder}
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      autoComplete="email"
                      placeholder={t.placeholder}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (state === "error") setState("idle");
                      }}
                      aria-invalid={state === "error"}
                      aria-describedby={state === "error" ? "newsletter-error" : undefined}
                      className={`h-12 flex-1 rounded-xl border bg-white px-4 text-[15px] text-ink placeholder:text-gray-400 focus:border-navy-500 focus:outline-none focus:ring-4 focus:ring-navy-500/15 ${
                        state === "error" ? "border-danger" : "border-gray-300"
                      }`}
                    />
                    <button
                      type="submit"
                      className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-bronze-500 px-6 text-sm font-semibold text-navy-950 transition-colors hover:bg-bronze-400 active:bg-bronze-600"
                    >
                      {t.button}
                      <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
                    </button>
                  </div>
                  {state === "error" && (
                    <p id="newsletter-error" role="alert" className="mt-2 text-[13px] font-medium text-danger">
                      {t.invalid}
                    </p>
                  )}
                  <p className="mt-3 text-[13px] text-ink-3">{t.privacy}</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
