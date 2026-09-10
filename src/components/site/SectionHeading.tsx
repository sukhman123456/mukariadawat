import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className={cn("eyebrow tracking-[0.25em] font-semibold text-xs uppercase", isDark ? "text-[#D4AF37]" : "text-[#B47A46]")}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn("mt-3 font-display text-3xl leading-tight sm:text-4xl", isDark ? "text-[#FAF7F2]" : "text-[#1C1917]")}>
        {title}
      </h2>
      <div
        className={cn(
          "mt-5 h-[1.5px] w-14",
          isDark ? "bg-gradient-to-r from-[#D4AF37] to-transparent" : "bg-gradient-to-r from-[#B47A46] to-transparent",
          align === "center" && "mx-auto"
        )}
      />
      {intro ? (
        <p className={cn("mt-5 text-sm sm:text-base leading-relaxed", isDark ? "text-[#C4B9AD]" : "text-[#786A5E]")}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}
