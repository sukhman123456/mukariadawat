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
    <section className="relative border-b border-[#A87545]/20 bg-gradient-to-b from-[#1C1917] via-[#241B16] to-[#1C1917] overflow-hidden">
      {bg && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={bg}
            alt=""
            aria-hidden="true"
            className="size-full object-cover opacity-25 filter blur-[0.5px] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-[#1C1917]/85 to-[#1C1917]/90" />
        </div>
      )}

      {/* Ambient Warm Golden Aura Spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[300px] rounded-full bg-[#A87545]/10 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-[1360px] px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-24">
        {label && (
          <div className="inline-flex items-center gap-2 rounded-full border border-[#A87545]/40 bg-black/60 px-3.5 py-1 backdrop-blur-md mb-4 shadow-md">
            <span className="size-1.5 rounded-full bg-[#C8A875] animate-ping" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] sm:tracking-[0.25em] text-[#C8A875] uppercase">
              {label}
            </span>
          </div>
        )}
        <h1 className="mt-2 max-w-3xl font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-[#F5EFE6] tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 font-serif text-base sm:text-lg md:text-xl italic text-transparent bg-clip-text bg-gradient-to-r from-[#F5EFE6] via-[#C8A875] to-[#A87545]">
            {subtitle}
          </p>
        )}
        <div className="mt-4 sm:mt-6 h-[1.5px] w-14 sm:w-16 bg-gradient-to-r from-[#A87545] to-transparent" />
        {text ? (
          <p className="mt-4 sm:mt-6 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-[#D8C8B8]">
            {text}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
