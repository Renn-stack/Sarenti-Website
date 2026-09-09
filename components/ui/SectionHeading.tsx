interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  id?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  id,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="kicker text-sm">{eyebrow}</p>}
      <h2
        id={id}
        className="mt-3 font-serif text-3xl leading-tight text-sarenti-ink sm:text-4xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-sarenti-ink/70 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
