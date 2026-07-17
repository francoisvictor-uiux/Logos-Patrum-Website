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
      <div className="mx-auto max-w-3xl px-4 sm:px-6" data-reveal>
        <div className="rounded-xl border border-gray-200 bg-white p-8 text-center sm:p-12">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-500">
            <Icon name="mail" className="h-6 w-6" />
          </span>
          <h2 className="mt-6 font-display text-3xl font-semibold text-navy-900">{t.title}</h2>
          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-ink-2">{t.description}</p>

          {state === "done" ? (
            <p className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 rounded-xl bg-navy-50 px-5 py-4 text-sm font-medium text-navy-700" role="status">
              <Icon name="check" className="h-4 w-4 text-navy-500" />
              {t.success}
            </p>
          ) : (
            <form onSubmit={submit} className="mx-auto mt-8 max-w-md" noValidate>
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
                  className={`h-12 flex-1 rounded-xl border bg-parchment px-4 text-[15px] text-ink placeholder:text-gray-400 focus:border-navy-500 focus:outline-none focus:ring-4 focus:ring-navy-500/15 ${
                    state === "error" ? "border-danger" : "border-gray-300"
                  }`}
                />
                <button
                  type="submit"
                  className="h-12 rounded-xl bg-navy-500 px-6 text-sm font-semibold text-white transition-colors hover:bg-navy-600 active:bg-navy-700"
                >
                  {t.button}
                </button>
              </div>
              {state === "error" && (
                <p id="newsletter-error" role="alert" className="mt-2 text-start text-[13px] font-medium text-danger">
                  {t.invalid}
                </p>
              )}
              <p className="mt-3 text-[13px] text-ink-3">{t.privacy}</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
