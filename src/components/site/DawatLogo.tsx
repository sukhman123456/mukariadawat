import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

interface DawatLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  light?: boolean;
  variant?: "vertical" | "horizontal";
  showTagline?: boolean;
}

export function DawatLogo({
  className,
  size = "md",
  light = true,
  variant = "vertical",
  showTagline,
}: DawatLogoProps) {
  const isHorizontal = variant === "horizontal";
  const shouldShowTagline = showTagline ?? size !== "sm";

  return (
    <Link
      to="/"
      className={cn(
        "inline-flex items-center group transition-all duration-300 select-none",
        isHorizontal ? "flex-row gap-2 sm:gap-3.5 text-left" : "flex-col items-center text-center",
        className
      )}
      aria-label="Dawat Restaurant Mukerian - Official Website"
    >
      {/* Royal Indian Culinary Insignia (Sculpted Brass Handi, Radiant Sunburst & Sacred Saffron Aroma) */}
      <div className="relative shrink-0 flex items-center justify-center">
        {/* Multi-layered Ambient Warm Golden Glow behind Insignia */}
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute rounded-full bg-gradient-to-tr from-[#D49B55]/20 via-[#F5D28E]/25 to-transparent blur-lg transition-all duration-500",
            "group-hover:bg-[#D49B55]/40 group-hover:scale-130 group-hover:blur-xl",
            size === "sm" && "size-10 sm:size-12 -inset-1",
            size === "md" && "size-14 sm:size-16 -inset-2",
            size === "lg" && "size-20 sm:size-24 -inset-3"
          )}
        />

        <svg
          className={cn(
            "relative transition-transform duration-500 ease-out group-hover:scale-105",
            "filter drop-shadow-[0_2px_10px_rgba(212,155,85,0.4)] group-hover:drop-shadow-[0_4px_18px_rgba(212,155,85,0.7)]",
            size === "sm" && "w-9 h-9 sm:w-10 sm:h-10",
            size === "md" && "w-13 h-13 sm:w-14 sm:h-14",
            size === "lg" && "w-18 h-18 sm:w-20 sm:h-20"
          )}
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            {/* Multi-tone 24k Royal Gold Metallic Gradient */}
            <linearGradient id="dawatGoldPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="15%" stopColor="#FFF2D1" />
              <stop offset="35%" stopColor="#F8D48E" />
              <stop offset="60%" stopColor="#D49B55" />
              <stop offset="85%" stopColor="#A87027" />
              <stop offset="100%" stopColor="#6E430F" />
            </linearGradient>

            {/* Specular Bright Gold Highlight */}
            <linearGradient id="dawatGoldGleam" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D49B55" />
              <stop offset="50%" stopColor="#FFF4D4" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>

            {/* Saffron Steam Flame Gradient */}
            <linearGradient id="dawatFlameGlow" x1="50%" y1="100%" x2="50%" y2="0%">
              <stop offset="0%" stopColor="#D49B55" stopOpacity="0.8" />
              <stop offset="40%" stopColor="#FEE3A2" />
              <stop offset="85%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>

            {/* Handi Bowl Inner Radial Sheen */}
            <radialGradient id="dawatBowlSheen" cx="50%" cy="38%" r="62%">
              <stop offset="0%" stopColor="#FFF3D6" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#D49B55" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0B0907" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* 1. Radiant Celestial Sunburst & Crown Rays */}
          <g
            opacity="0.85"
            stroke="url(#dawatGoldPrimary)"
            strokeWidth="1.15"
            strokeLinecap="round"
            className="transition-opacity duration-300 group-hover:opacity-100"
          >
            {/* Center Apex Ray */}
            <line x1="30" y1="2" x2="30" y2="5.5" strokeWidth="1.5" />
            {/* Symmetrical Radiating Rays */}
            <line x1="24" y1="2.8" x2="24.8" y2="6" />
            <line x1="36" y1="2.8" x2="35.2" y2="6" />
            <line x1="18.5" y1="4.8" x2="20" y2="7.8" />
            <line x1="41.5" y1="4.8" x2="40" y2="7.8" />
            <line x1="13.5" y1="8.2" x2="15.8" y2="10.8" />
            <line x1="46.5" y1="8.2" x2="44.2" y2="10.8" />
            <line x1="9.5" y1="13" x2="12.2" y2="15.2" />
            <line x1="50.5" y1="13" x2="47.8" y2="15.2" />
            <line x1="7" y1="19" x2="10.2" y2="20.5" />
            <line x1="53" y1="19" x2="49.8" y2="20.5" />
          </g>

          {/* Imperial Star & Halo Jewels */}
          {/* Apex 8-Point Diamond Star */}
          <path
            d="M30 0 L31.5 2.2 L30 4.4 L28.5 2.2 Z"
            fill="url(#dawatGoldGleam)"
          />
          <path
            d="M27.8 2.2 L30 1 L32.2 2.2 L30 3.4 Z"
            fill="url(#dawatGoldGleam)"
          />
          {/* Celestial Beads along the Arc */}
          <circle cx="21" cy="4" r="0.9" fill="url(#dawatGoldPrimary)" />
          <circle cx="39" cy="4" r="0.9" fill="url(#dawatGoldPrimary)" />
          <circle cx="11.5" cy="10.5" r="0.8" fill="url(#dawatGoldPrimary)" />
          <circle cx="48.5" cy="10.5" r="0.8" fill="url(#dawatGoldPrimary)" />

          {/* 2. Rising Saffron Aroma Flames / Sacred Steam */}
          <g className="animate-steam-rise">
            {/* Left Steam Tendril */}
            <path
              d="M26 21 C22.5 15.5 23 10.5 26.5 6.5 C25 10.5 25.5 15 26 21"
              fill="url(#dawatFlameGlow)"
              opacity="0.85"
            />
            {/* Center Sacred Aroma Flame */}
            <path
              d="M30 20 C28 13.5 29.8 9.5 30 4 C30.2 9.5 32 13.5 30 20"
              fill="url(#dawatFlameGlow)"
            />
            {/* Right Steam Tendril */}
            <path
              d="M34 21 C37.5 15.5 37 10.5 33.5 6.5 C35 10.5 34.5 15 34 21"
              fill="url(#dawatFlameGlow)"
              opacity="0.85"
            />
            {/* Ember Sparks */}
            <circle cx="28.8" cy="5.2" r="0.65" fill="#FFFCEB" />
            <circle cx="31.2" cy="4.2" r="0.55" fill="#FFFCEB" />
          </g>

          {/* 3. The Handi Cauldron Lid / Domed Cloche Accent */}
          <path
            d="M17.5 23 C17.5 15.5 22.5 13 30 13 C37.5 13 42.5 15.5 42.5 23"
            stroke="url(#dawatGoldPrimary)"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          {/* Royal Lotus Finial Knob */}
          <circle cx="30" cy="13" r="2.2" fill="url(#dawatGoldGleam)" />
          <circle cx="30" cy="13" r="0.9" fill="#0B0907" />

          {/* 4. Ornate Brass Collar & Jeweled Waistband */}
          {/* Double-Rim Gilded Belt */}
          <path
            d="M13 23.5 H47"
            stroke="url(#dawatGoldPrimary)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          {/* Waistband Diamond Jewels */}
          <circle cx="30" cy="23.5" r="1.4" fill="#FFFBF0" />
          <circle cx="23" cy="23.5" r="1" fill="url(#dawatGoldPrimary)" />
          <circle cx="37" cy="23.5" r="1" fill="url(#dawatGoldPrimary)" />
          <circle cx="17" cy="23.5" r="0.75" fill="url(#dawatGoldPrimary)" />
          <circle cx="43" cy="23.5" r="0.75" fill="url(#dawatGoldPrimary)" />

          {/* 5. Traditional Handi Cauldron (Voluptuous Clay & Brass Bowl) */}
          <path
            d="M16 25.5 C17.5 36.5 22 42.5 30 42.5 C38 42.5 42.5 36.5 44 25.5"
            stroke="url(#dawatGoldPrimary)"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="url(#dawatBowlSheen)"
          />
          {/* Polished Inner Highlight Rib */}
          <path
            d="M20 28.5 C21.2 34.5 25 38.5 30 38.5 C35 38.5 38.8 34.5 40 28.5"
            stroke="url(#dawatGoldPrimary)"
            strokeWidth="1.1"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* 6. Sculpted Regal Acanthus Scroll Handles */}
          {/* Left Royal Handle */}
          <path
            d="M13.5 23.5 C8.5 22 5.5 26.5 5.5 30.5 C5.5 34 8.5 36.5 13.5 35 C10.5 35 7.8 33 7.8 30.5 C7.8 28 9.8 25 13.5 24.5"
            fill="url(#dawatGoldPrimary)"
          />
          <circle cx="13" cy="24" r="0.9" fill="#FFFBF0" />
          <circle cx="13.2" cy="35" r="0.8" fill="url(#dawatGoldPrimary)" />

          {/* Right Royal Handle */}
          <path
            d="M46.5 23.5 C51.5 22 54.5 26.5 54.5 30.5 C54.5 34 51.5 36.5 46.5 35 C49.5 35 52.2 33 52.2 30.5 C52.2 28 50.2 25 46.5 24.5"
            fill="url(#dawatGoldPrimary)"
          />
          <circle cx="47" cy="24" r="0.9" fill="#FFFBF0" />
          <circle cx="46.8" cy="35" r="0.8" fill="url(#dawatGoldPrimary)" />

          {/* 7. Imperial Stepped Pedestal Base */}
          <path
            d="M22 44.5 H38"
            stroke="url(#dawatGoldPrimary)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M25 47.5 H35"
            stroke="url(#dawatGoldPrimary)"
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity="0.85"
          />
          <circle cx="30" cy="50" r="1.1" fill="url(#dawatGoldPrimary)" />
        </svg>
      </div>

      {/* Brand Typography & Royal Crest Text Lockup */}
      <div
        className={cn(
          "flex flex-col items-center",
          isHorizontal ? "text-left items-start" : "text-center mt-1 sm:mt-1.5"
        )}
      >
        {/* Main "DAWAT" Brandmark */}
        <span
          className={cn(
            "font-display font-extrabold uppercase leading-none tracking-[0.24em] transition-all duration-300 select-none",
            "drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]",
            light
              ? "text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#FFFBF2] to-[#E5D2BA] group-hover:from-white group-hover:via-[#FFFFFF] group-hover:to-[#F5D28E]"
              : "text-stone-900 group-hover:text-black",
            size === "sm" && "text-[18px] sm:text-[20px] tracking-[0.24em]",
            size === "md" && "text-[23px] sm:text-[26px] tracking-[0.26em]",
            size === "lg" && "text-[28px] sm:text-[34px] tracking-[0.28em]"
          )}
        >
          DAWAT
        </span>

        {/* Ornamental Hairline Divider with Center 8-Point Star */}
        <div
          className={cn(
            "flex items-center justify-center gap-1.5 w-full my-0.5 sm:my-1 opacity-85 group-hover:opacity-100 transition-opacity duration-300",
            isHorizontal && "justify-start"
          )}
          aria-hidden="true"
        >
          <span
            className={cn(
              "h-[1px] bg-gradient-to-r from-transparent via-[#D49B55] to-[#F5D28E]",
              size === "sm" && "w-3.5 sm:w-5",
              size === "md" && "w-5 sm:w-7",
              size === "lg" && "w-7 sm:w-10"
            )}
          />
          <span className="text-[#F5D28E] text-[7px] sm:text-[8px] leading-none select-none filter drop-shadow-[0_0_4px_rgba(245,210,142,0.6)]">
            ✦
          </span>
          <span
            className={cn(
              "h-[1px] bg-gradient-to-l from-transparent via-[#D49B55] to-[#F5D28E]",
              size === "sm" && "w-3.5 sm:w-5",
              size === "md" && "w-5 sm:w-7",
              size === "lg" && "w-7 sm:w-10"
            )}
          />
        </div>

        {/* Subtitle "RESTAURANT" */}
        <span
          className={cn(
            "font-display font-semibold uppercase leading-none transition-all duration-300 select-none",
            "text-transparent bg-clip-text bg-gradient-to-r from-[#D49B55] via-[#FDE3B0] to-[#C08845]",
            "group-hover:from-[#FDE3B0] group-hover:via-white group-hover:to-[#FDE3B0]",
            "filter drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]",
            size === "sm" && "text-[8.5px] sm:text-[9.5px] tracking-[0.38em]",
            size === "md" && "text-[10px] sm:text-[11px] tracking-[0.42em]",
            size === "lg" && "text-[12px] sm:text-[13px] tracking-[0.46em]"
          )}
        >
          RESTAURANT
        </span>

        {/* Heritage Tagline for md / lg sizes */}
        {shouldShowTagline && (
          <span
            className={cn(
              "font-sans font-medium uppercase tracking-[0.24em] text-[#D49B55]/75 mt-1 transition-colors duration-300 group-hover:text-[#F5D28E]/95",
              size === "sm" && "text-[7px]",
              size === "md" && "text-[7.5px] sm:text-[8px] hidden sm:block",
              size === "lg" && "text-[8.5px] sm:text-[9px] block"
            )}
          >
            MUKERIAN · EST. PUNJAB
          </span>
        )}
      </div>
    </Link>
  );
}
