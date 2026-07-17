const SIZES = {
  sm: "text-2xl sm:text-3xl lg:text-[2rem] font-medium",
  default: "text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold",
  lg: "text-[2.6rem] sm:text-5xl lg:text-[3.25rem] font-semibold",
} as const;

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  size = "default",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "start";
  tone?: "light" | "dark";
  size?: keyof typeof SIZES;
}) {
  const isDark = tone === "dark";
  return (
    <div
      data-reveal
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-start"}`}
    >
      {eyebrow ? (
        <p
          className={`text-[13px] font-semibold uppercase tracking-[0.18em] ${
            isDark ? "text-bronze-500" : "text-bronze-800"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display leading-[1.12] text-balance ${eyebrow ? "mt-3" : ""} ${SIZES[size]} ${
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
