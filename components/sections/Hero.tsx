import Image from "next/image";
import { Icon } from "../icons";
import type { Dict } from "@/lib/i18n";

const GREEK_BACKDROP =
  "Ἐν ἀρχῇ ἦν ὁ λόγος, καὶ ὁ λόγος ἦν πρὸς τὸν θεόν, καὶ θεὸς ἦν ὁ λόγος. οὗτος ἦν ἐν ἀρχῇ πρὸς τὸν θεόν. πάντα δι' αὐτοῦ ἐγένετο, καὶ χωρὶς αὐτοῦ ἐγένετο οὐδὲ ἕν. ὃ γέγονεν ἐν αὐτῷ ζωὴ ἦν, καὶ ἡ ζωὴ ἦν τὸ φῶς τῶν ἀνθρώπων· καὶ τὸ φῶς ἐν τῇ σκοτίᾳ φαίνει, καὶ ἡ σκοτία αὐτὸ οὐ κατέλαβεν.";

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
    <section id="top" className="relative overflow-hidden bg-[#fbfbfa] pb-16 pt-32 sm:pb-24 sm:pt-40">
      {/* Greek uncial backdrop */}
      <div
        aria-hidden
        className="greek-backdrop absolute inset-x-0 top-[42%] z-0 mx-auto max-w-[1600px] px-6 text-center text-[46px] font-medium text-[#e5e7ec] sm:text-[68px] lg:text-[88px]"
      >
        {GREEK_BACKDROP}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center" data-reveal-group>
          <h1
            data-reveal-item
            className="font-sans text-[2.35rem] font-bold leading-[1.15] tracking-tight text-balance text-navy-700 sm:text-5xl lg:text-[3.75rem] lg:leading-[1.1]"
          >
            {t.title}
          </h1>

          <p data-reveal-item className="max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            {renderDescription(t.description)}
          </p>

          <div data-reveal-item className="mt-2 flex flex-wrap items-center justify-center gap-4 rtl:flex-row-reverse">
            <a
              href="#pricing"
              className="inline-flex h-[50px] items-center justify-center rounded-xl border-[1.5px] border-navy-500 px-5 text-[17px] font-medium text-navy-500 transition-colors hover:bg-navy-500 hover:text-white"
            >
              {t.secondaryCta}
            </a>
            <a
              href="#pricing"
              className="group inline-flex h-[50px] items-center justify-center gap-3 rounded-xl bg-navy-500 px-5 text-[17px] font-medium text-white transition-colors hover:bg-navy-600"
            >
              {t.primaryCta}
              <Icon
                name="arrow"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Product artwork — wider than the text column, matching Figma */}
      <div
        className="relative z-10 mx-auto mt-16 w-full max-w-[1600px] px-4 sm:mt-20 sm:px-6"
        data-reveal-item
        data-speed="1.05"
      >
        <Image
          src="/images/hero-screen-cropped.png"
          alt={t.imageAlt}
          width={2466}
          height={1658}
          priority
          sizes="(max-width: 1600px) 100vw, 1600px"
          className="mx-auto w-full"
        />
      </div>
    </section>
  );
}
