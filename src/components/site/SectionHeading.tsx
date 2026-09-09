import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="eyebrow text-[#D49B55] tracking-[0.25em] font-semibold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl text-[#FAF5EE]">
        {title}
      </h2>
      <div className={cn("mt-5 h-[1.5px] w-14 bg-gradient-to-r from-[#D49B55] to-transparent", align === "center" && "mx-auto")} />
      {intro ? (
        <p className="mt-5 text-base leading-relaxed text-stone-300/85">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
