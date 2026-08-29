type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`eyebrow mb-4 ${
            dark ? "text-butter" : "text-butter-deep"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-4xl md:text-5xl leading-[1.05] ${
          dark ? "text-off-white" : "text-brown"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base md:text-lg leading-relaxed ${
            dark ? "text-ash-light" : "text-brown-light"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
