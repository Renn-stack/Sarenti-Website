interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  id?: string;
  /** Use on dark/plum backgrounds. */
  tone?: "default" | "inverse";
}

/**
 * Consistent section header: small kicker → serif H2 → one short line.
 * Keeping every section on the same scale is what lets the hero and the
 * final CTA stand out instead of everything competing.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  id,
  tone = "default",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const inverse = tone === "inverse";
  return (
    <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className={inverse ? "kicker !text-sarenti-light" : "kicker"}>{eyebrow}</p>
      )}
      <h2
        id={id}
        className={`mt-3 text-balance font-serif text-[2rem] leading-[1.15] tracking-[-0.01em] sm:text-[2.6rem] ${
          inverse ? "text-white" : "text-sarenti-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-pretty text-base leading-relaxed sm:text-lg ${
            inverse ? "text-white/85" : "text-sarenti-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
