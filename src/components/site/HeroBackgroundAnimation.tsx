import { useMemo } from "react";
import { cn } from "@/lib/utils";

interface HeroBackgroundAnimationProps {
  className?: string;
}

interface EmberParticle {
  id: number;
  left: number; // percentage (0-100)
  bottom: number; // starting offset in %
  size: number; // in px
  duration: number; // in seconds
  delay: number; // in seconds
  drift: number; // horizontal drift in px
  opacity: number;
  glowColor: string;
}

interface TwinkleStar {
  id: number;
  top: number; // percentage
  left: number; // percentage
  size: number; // in px
  duration: number;
  delay: number;
}

export function HeroBackgroundAnimation({ className }: HeroBackgroundAnimationProps) {
  // Deterministic embers for stable SSR and client hydration
  const embers: EmberParticle[] = useMemo(() => {
    return [
      { id: 1, left: 8, bottom: 5, size: 2.5, duration: 8.5, delay: 0.2, drift: 24, opacity: 0.75, glowColor: "#DFBF55" },
      { id: 2, left: 16, bottom: 2, size: 3.5, duration: 7.2, delay: 1.8, drift: -18, opacity: 0.85, glowColor: "#C9A227" },
      { id: 3, left: 24, bottom: 8, size: 2.0, duration: 9.8, delay: 3.2, drift: 30, opacity: 0.65, glowColor: "#F5F0E6" },
      { id: 4, left: 32, bottom: 4, size: 4.0, duration: 6.8, delay: 0.8, drift: -25, opacity: 0.9, glowColor: "#C9A227" },
      { id: 5, left: 42, bottom: 10, size: 2.2, duration: 8.0, delay: 2.4, drift: 15, opacity: 0.7, glowColor: "#DFBF55" },
      { id: 6, left: 50, bottom: 1, size: 3.0, duration: 7.5, delay: 4.1, drift: -20, opacity: 0.8, glowColor: "#4A1518" },
      { id: 7, left: 58, bottom: 6, size: 2.8, duration: 8.8, delay: 1.2, drift: 28, opacity: 0.85, glowColor: "#F5F0E6" },
      { id: 8, left: 66, bottom: 3, size: 3.8, duration: 6.5, delay: 2.9, drift: -15, opacity: 0.75, glowColor: "#C9A227" },
      { id: 9, left: 74, bottom: 9, size: 2.0, duration: 9.2, delay: 0.5, drift: 22, opacity: 0.7, glowColor: "#DFBF55" },
      { id: 10, left: 82, bottom: 2, size: 3.2, duration: 7.8, delay: 3.7, drift: -32, opacity: 0.85, glowColor: "#C9A227" },
      { id: 11, left: 90, bottom: 7, size: 2.5, duration: 8.2, delay: 1.5, drift: 18, opacity: 0.8, glowColor: "#F5F0E6" },
      { id: 12, left: 12, bottom: 12, size: 1.8, duration: 10.5, delay: 4.8, drift: -12, opacity: 0.6, glowColor: "#DFBF55" },
      { id: 13, left: 28, bottom: 14, size: 3.2, duration: 7.1, delay: 5.2, drift: 20, opacity: 0.75, glowColor: "#4A1518" },
      { id: 14, left: 46, bottom: 11, size: 2.2, duration: 8.7, delay: 3.0, drift: -24, opacity: 0.8, glowColor: "#F5F0E6" },
      { id: 15, left: 62, bottom: 15, size: 3.0, duration: 6.9, delay: 4.5, drift: 16, opacity: 0.85, glowColor: "#C9A227" },
      { id: 16, left: 78, bottom: 13, size: 2.6, duration: 9.0, delay: 2.1, drift: -18, opacity: 0.7, glowColor: "#DFBF55" },
      { id: 17, left: 88, bottom: 16, size: 2.0, duration: 10.0, delay: 5.8, drift: 14, opacity: 0.65, glowColor: "#F5F0E6" },
      { id: 18, left: 38, bottom: 3, size: 3.6, duration: 7.4, delay: 0.9, drift: -22, opacity: 0.85, glowColor: "#C9A227" },
      { id: 19, left: 54, bottom: 8, size: 2.4, duration: 8.4, delay: 2.6, drift: 26, opacity: 0.75, glowColor: "#DFBF55" },
      { id: 20, left: 70, bottom: 5, size: 3.4, duration: 7.0, delay: 4.3, drift: -16, opacity: 0.8, glowColor: "#4A1518" },
    ];
  }, []);

  const stars: TwinkleStar[] = useMemo(() => {
    return [
      { id: 1, top: 14, left: 18, size: 9, duration: 3.8, delay: 0.5 },
      { id: 2, top: 22, left: 45, size: 11, duration: 4.5, delay: 1.6 },
      { id: 3, top: 12, left: 72, size: 8, duration: 3.4, delay: 2.8 },
      { id: 4, top: 38, left: 88, size: 10, duration: 4.2, delay: 0.9 },
      { id: 5, top: 68, left: 12, size: 7, duration: 5.0, delay: 2.1 },
      { id: 6, top: 54, left: 55, size: 9, duration: 3.9, delay: 3.3 },
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
      {/* 1. LAYER: SUBTLE WARM AMBIENT SPOTLIGHT BEHIND HEADLINE            */}
      {/* ----------------------------------------------------------------- */}
      {/* Soft warm golden center aura for text depth */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[350px] sm:h-[450px] rounded-full bg-[#C9A227]/10 blur-[150px] pointer-events-none"
      />

      {/* Gentle candlelit warm accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] rounded-full bg-[#DFBF55]/06 blur-[120px] pointer-events-none"
      />

      {/* ----------------------------------------------------------------- */}
      {/* 2. LAYER: FLOATING TANDOOR CHARCOAL EMBERS & GOLDEN SPARKS        */}
      {/* ----------------------------------------------------------------- */}
      <div className="absolute inset-0 overflow-hidden">
        {embers.map((e) => (
          <span
            key={e.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: `${e.left}%`,
              bottom: `${e.bottom}%`,
              width: `${e.size}px`,
              height: `${e.size}px`,
              backgroundColor: e.glowColor,
              boxShadow: `0 0 ${e.size * 2.5}px ${e.size}px ${e.glowColor}`,
              opacity: e.opacity * 0.75,
              animation: `emberFloat ${e.duration}s cubic-bezier(0.25, 1, 0.5, 1) infinite`,
              animationDelay: `${e.delay}s`,
              ["--ember-drift" as string]: `${e.drift}px`,
            }}
          />
        ))}
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* 3. LAYER: TWINKLING ROYAL STARBURST ACCENTS (✦)                   */}
      {/* ----------------------------------------------------------------- */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((s) => (
          <span
            key={s.id}
            className="absolute font-serif text-[#DFBF55] select-none animate-twinkle pointer-events-none opacity-60"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              fontSize: `${s.size}px`,
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`,
              textShadow: "0 0 8px rgba(201, 162, 39, 0.6)",
            }}
          >
            ✦
          </span>
        ))}
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* 4. LAYER: PERIMETER SOFT VIGNETTE TO DEEP ESPRESSO                */}
      {/* ----------------------------------------------------------------- */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-transparent to-[#1C1917]/80 opacity-90"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_#1C1917_95%)]"
      />
    </div>
  );
}
