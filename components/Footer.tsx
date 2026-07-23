import Image from "next/image";
import Link from "next/link";
import { Icon } from "./icons";
import type { Dict, Locale } from "@/lib/i18n";

export default function Footer({ dict, locale }: { dict: Dict; locale: Locale }) {
  const t = dict.footer;
  const otherLocale = locale === "ar" ? "en" : "ar";
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="texture-navy bg-navy-900 text-navy-200">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2.6fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image src="/images/logo-white.svg" alt="Logos Patrum" width={44} height={26} className="h-7 w-auto" />
              <span className="font-display text-xl font-semibold text-white">Logos Patrum</span>
            </div>
            <p className="mt-4 max-w-xs font-display text-lg leading-relaxed text-navy-100">{t.tagline}</p>
            <div className="meander meander-light mt-6 w-24 opacity-50" aria-hidden />
            <address className="mt-8 space-y-2 text-sm not-italic text-navy-300">
              <p>
                <a href={`mailto:${t.contact.email}`} className="hover:text-white">
                  {t.contact.email}
                </a>
              </p>
              <p dir="ltr" className="text-start">
                {t.contact.phone}
              </p>
              <p>{t.contact.address}</p>
            </address>
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
              {t.social.map((name) => (
                <li key={name}>
                  <a href="#" className="text-[13px] font-medium text-navy-300 underline-offset-4 hover:text-white hover:underline">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Link columns */}
          <nav className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3" aria-label="Footer">
            {t.columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-white">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-navy-300 transition-colors hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-navy-700 pt-8 sm:flex-row">
          <p className="text-[13px] text-navy-400">
            © {year} {t.rights} <span className="ms-2 text-navy-500">{t.version}</span>
          </p>
          <div className="flex items-center gap-2">
            <Link
              href={`/${otherLocale}`}
              className="flex items-center gap-1.5 rounded-md px-3 py-2 text-[13px] font-medium text-navy-300 transition-colors hover:bg-navy-800 hover:text-white"
            >
              <Icon name="globe" className="h-4 w-4" />
              {t.langSwitch}
            </Link>
            <a
              href="#top"
              className="flex items-center gap-1.5 rounded-md px-3 py-2 text-[13px] font-medium text-navy-300 transition-colors hover:bg-navy-800 hover:text-white"
            >
              {t.backToTop}
              <Icon name="arrow" className="h-4 w-4 -rotate-90" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
