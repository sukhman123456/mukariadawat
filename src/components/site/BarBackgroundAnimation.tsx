import { useMemo } from "react";
import { cn } from "@/lib/utils";

interface BarBackgroundAnimationProps {
  className?: string;
}

interface FizzBubble {
  id: number;
  left: number; // percentage (0-100)
  bottom: number; // offset
  size: number; // px
  duration: number; // seconds
  delay: number; // seconds
  sway: number; // px
  opacity: number;
}

interface BokehOrb {
  id: number;
  top: number;
  left: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

export function BarBackgroundAnimation({ className }: BarBackgroundAnimationProps) {
  // Rising effervescent carbonation / champagne fizz bubbles
  const bubbles: FizzBubble[] = useMemo(() => {
    return [
      { id: 1, left: 6, bottom: 2, size: 3.5, duration: 6.5, delay: 0.2, sway: 15, opacity: 0.55 },
      { id: 2, left: 14, bottom: 5, size: 2.0, duration: 8.2, delay: 1.5, sway: -12, opacity: 0.45 },
      { id: 3, left: 22, bottom: 1, size: 4.5, duration: 5.8, delay: 2.8, sway: 18, opacity: 0.65 },
      { id: 4, left: 30, bottom: 7, size: 3.0, duration: 7.1, delay: 0.9, sway: -15, opacity: 0.5 },
      { id: 5, left: 38, bottom: 3, size: 2.5, duration: 8.5, delay: 3.4, sway: 20, opacity: 0.6 },
      { id: 6, left: 48, bottom: 6, size: 4.0, duration: 6.2, delay: 1.8, sway: -22, opacity: 0.7 },
      { id: 7, left: 56, bottom: 2, size: 2.8, duration: 7.6, delay: 4.1, sway: 14, opacity: 0.55 },
      { id: 8, left: 65, bottom: 8, size: 3.8, duration: 6.0, delay: 0.6, sway: -18, opacity: 0.65 },
      { id: 9, left: 73, bottom: 4, size: 2.2, duration: 9.0, delay: 2.3, sway: 16, opacity: 0.5 },
      { id: 10, left: 82, bottom: 1, size: 4.2, duration: 5.5, delay: 3.8, sway: -20, opacity: 0.7 },
      { id: 11, left: 91, bottom: 5, size: 3.2, duration: 7.8, delay: 1.2, sway: 15, opacity: 0.6 },
      { id: 12, left: 18, bottom: 10, size: 2.5, duration: 8.0, delay: 4.5, sway: -10, opacity: 0.45 },
      { id: 13, left: 42, bottom: 12, size: 3.5, duration: 6.8, delay: 5.0, sway: 22, opacity: 0.6 },
      { id: 14, left: 60, bottom: 9, size: 2.0, duration: 8.8, delay: 2.9, sway: -14, opacity: 0.5 },
      { id: 15, left: 78, bottom: 11, size: 3.6, duration: 6.4, delay: 4.8, sway: 16, opacity: 0.65 },
      { id: 16, left: 88, bottom: 7, size: 2.8, duration: 7.2, delay: 3.1, sway: -18, opacity: 0.55 },
    ];
  }, []);

  // Ambient nightlife lounge bokeh orbs reflecting bar shelves & glassware
  const bokehOrbs: BokehOrb[] = useMemo(() => {
    return [
      { id: 1, top: 18, left: 12, size: 140, color: "rgba(212, 155, 85, 0.12)", duration: 7.5, delay: 0 },
      { id: 2, top: 55, left: 35, size: 180, color: "rgba(245, 158, 11, 0.10)", duration: 9.0, delay: 2.2 },
      { id: 3, top: 25, left: 75, size: 160, color: "rgba(56, 189, 248, 0.08)", duration: 8.2, delay: 1.4 }, // SKY blue neon
      { id: 4, top: 65, left: 85, size: 130, color: "rgba(212, 155, 85, 0.14)", duration: 7.0, delay: 3.5 },
      { id: 5, top: 12, left: 52, size: 110, color: "rgba(255, 237, 160, 0.10)", duration: 6.5, delay: 1.8 },
    ];
  }, []);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden select-none z-0",
        className
      )}
    >
      {/* ----------------------------------------------------------------- */}
      {/* 1. LAYER: WARM NEON PENDANT LIGHT CONES (from ceiling lamps)       */}
      {/* ----------------------------------------------------------------- */}
      {/* Pendant Lamp 1 Warm Flare (Top Left) */}
      <div
        className="absolute -top-20 left-[10%] w-[320px] h-[400px] bg-gradient-to-b from-[#F5D28E]/25 via-[#D49B55]/12 to-transparent blur-[80px] rounded-full animate-aurora-pulse"
        style={{ animationDuration: "6.5s" }}
      />
      {/* Pendant Lamp 2 Warm Flare (Top Center-Left) */}
      <div
        className="absolute -top-24 left-[35%] w-[360px] h-[420px] bg-gradient-to-b from-[#F59E0B]/22 via-[#D49B55]/10 to-transparent blur-[90px] rounded-full animate-aurora-pulse"
        style={{ animationDuration: "8s", animationDelay: "2s" }}
      />

      {/* Electric SKY Neon Aura (Top Right - reflecting the SKY Lounge neon sign) */}
      <div
        className="absolute -top-16 right-[8%] w-[420px] h-[420px] bg-gradient-to-br from-[#38BDF8]/18 via-[#0284C7]/10 to-transparent blur-[110px] rounded-full animate-aurora-pulse"
        style={{ animationDuration: "7.5s", animationDelay: "1s" }}
      />

      {/* ----------------------------------------------------------------- */}
      {/* 2. LAYER: NEON "SKY LOUNGE" BEER & COCKTAIL WIREFRAME WATERMARK    */}
      {/* ----------------------------------------------------------------- */}
      <div className="absolute top-1/2 -translate-y-1/2 right-[5%] w-[420px] sm:w-[520px] aspect-square opacity-[0.05] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none">
        <svg viewBox="0 0 300 300" className="size-full animate-subtle-float" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Neon Beer Mug Outline (matching the neon sign in the photo) */}
          <rect x="90" y="90" width="80" height="110" rx="14" stroke="#FFF7D6" strokeWidth="3" />
          <path d="M170 110 H195 C205 110, 205 165, 195 165 H170" stroke="#FFF7D6" strokeWidth="3" strokeLinecap="round" />
          {/* Beer Foam Head */}
          <path d="M85 90 C85 75, 105 75, 110 82 C115 72, 135 72, 140 82 C145 74, 165 74, 172 85 C175 88, 175 92, 170 92 H88 Z" fill="#FFF7D6" opacity="0.8" />
          {/* Foam Bubble Dots */}
          <circle cx="100" cy="65" r="4" fill="#FFF7D6" opacity="0.6" />
          <circle cx="120" cy="58" r="5" fill="#FFF7D6" opacity="0.7" />
          <circle cx="145" cy="62" r="3.5" fill="#FFF7D6" opacity="0.6" />
          {/* Neon Cocktail Glass Flanking */}
          <path d="M220 180 L245 130 H265 L242 180 V210 H250 V215 H235 V210 H242 V180 Z" stroke="#38BDF8" strokeWidth="2" opacity="0.6" />
          {/* Neon Light Rays */}
          <line x1="130" y1="35" x2="130" y2="48" stroke="#F5D28E" strokeWidth="2" strokeLinecap="round" />
          <line x1="75" y1="50" x2="85" y2="60" stroke="#F5D28E" strokeWidth="2" strokeLinecap="round" />
          <line x1="185" y1="50" x2="175" y2="60" stroke="#F5D28E" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* 3. LAYER: FLOATING NIGHTLIFE BOKEH LIGHTS                         */}
      {/* ----------------------------------------------------------------- */}
      {bokehOrbs.map((b) => (
        <div
          key={b.id}
          className="absolute rounded-full pointer-events-none blur-[40px] animate-aurora-pulse"
          style={{
            top: `${b.top}%`,
            left: `${b.left}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            backgroundColor: b.color,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}

      {/* ----------------------------------------------------------------- */}
      {/* 4. LAYER: RISING COCKTAIL / BEER EFFERVESCENT FIZZ BUBBLES        */}
      {/* ----------------------------------------------------------------- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles.map((b) => (
          <span
            key={b.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: `${b.left}%`,
              bottom: `${b.bottom}%`,
              width: `${b.size}px`,
              height: `${b.size}px`,
              backgroundColor: "transparent",
              border: "1px solid rgba(245, 210, 142, 0.75)",
              boxShadow: "0 0 6px rgba(245, 210, 142, 0.5), inset 0 0 3px rgba(255, 255, 255, 0.4)",
              opacity: b.opacity,
              animation: `fizzRise ${b.duration}s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
              animationDelay: `${b.delay}s`,
              ["--fizz-sway" as string]: `${b.sway}px`,
            }}
          />
        ))}
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* 5. LAYER: VIGNETTE SOFTENING                                      */}
      {/* ----------------------------------------------------------------- */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0E0C0A]/90 via-transparent to-[#0E0C0A]/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#120F0D] via-transparent to-[#120F0D]/60" />
    </div>
  );
}
