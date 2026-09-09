import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  description,
  intro,
  badge,
  imageSrc,
  bgImage,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  intro?: string;
  badge?: string;
  imageSrc?: string;
  bgImage?: string;
  children?: ReactNode;
}) {
  const bg = imageSrc || bgImage;
  const label = badge || eyebrow;
  const text = description || intro;

  return (
    <section className="relative border-b border-stone-800/80 bg-gradient-to-b from-[#14110E] via-[#0E0C0A] to-[#120F0D] overflow-hidden">
      {bg && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={bg}
            alt=""
            aria-hidden="true"
            className="size-full object-cover opacity-25 filter blur-[0.5px] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0A] via-[#0E0C0A]/85 to-[#0E0C0A]/90" />
        </div>
      )}

      {/* Ambient Warm Golden Aura Spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[300px] rounded-full bg-[#D49B55]/10 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-[1360px] px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-24">
        {label && (
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D49B55]/40 bg-black/60 px-3.5 py-1 backdrop-blur-md mb-4 shadow-md">
            <span className="size-1.5 rounded-full bg-[#D49B55] animate-ping" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] sm:tracking-[0.25em] text-[#D49B55] uppercase">
              {label}
            </span>
          </div>
        )}
        <h1 className="mt-2 max-w-3xl font-display text-3xl xs:text-4xl leading-[1.12] sm:leading-[1.08] text-[#FAF5EE] sm:text-5xl lg:text-6xl tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2.5 font-serif text-lg sm:text-xl md:text-2xl italic text-transparent bg-clip-text bg-gradient-to-r from-[#FAF5EE] via-[#D49B55] to-[#E5B869]">
            {subtitle}
          </p>
        )}
        <div className="mt-6 h-[1.5px] w-16 bg-gradient-to-r from-[#D49B55] to-transparent" />
        {text ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-300/90 sm:text-lg">
            {text}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
