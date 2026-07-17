export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "start";
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <div
      data-reveal
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-start"}`}
    >
      <p
        className={`text-[13px] font-semibold uppercase tracking-[0.18em] ${
          isDark ? "text-bronze-500" : "text-bronze-800"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-3xl leading-[1.15] font-semibold text-balance sm:text-4xl lg:text-[2.75rem] ${
          isDark ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${isDark ? "text-navy-200" : "text-ink-2"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
