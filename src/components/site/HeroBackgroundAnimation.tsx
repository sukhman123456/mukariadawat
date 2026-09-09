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
      { id: 1, left: 8, bottom: 5, size: 2.5, duration: 8.5, delay: 0.2, drift: 24, opacity: 0.75, glowColor: "#F5D28E" },
      { id: 2, left: 16, bottom: 2, size: 3.5, duration: 7.2, delay: 1.8, drift: -18, opacity: 0.85, glowColor: "#D49B55" },
      { id: 3, left: 24, bottom: 8, size: 2.0, duration: 9.8, delay: 3.2, drift: 30, opacity: 0.65, glowColor: "#FFF3D6" },
      { id: 4, left: 32, bottom: 4, size: 4.0, duration: 6.8, delay: 0.8, drift: -25, opacity: 0.9, glowColor: "#E5A84B" },
      { id: 5, left: 42, bottom: 10, size: 2.2, duration: 8.0, delay: 2.4, drift: 15, opacity: 0.7, glowColor: "#F5D28E" },
      { id: 6, left: 50, bottom: 1, size: 3.0, duration: 7.5, delay: 4.1, drift: -20, opacity: 0.8, glowColor: "#D49B55" },
      { id: 7, left: 58, bottom: 6, size: 2.8, duration: 8.8, delay: 1.2, drift: 28, opacity: 0.85, glowColor: "#FFF3D6" },
      { id: 8, left: 66, bottom: 3, size: 3.8, duration: 6.5, delay: 2.9, drift: -15, opacity: 0.75, glowColor: "#E5A84B" },
      { id: 9, left: 74, bottom: 9, size: 2.0, duration: 9.2, delay: 0.5, drift: 22, opacity: 0.7, glowColor: "#F5D28E" },
      { id: 10, left: 82, bottom: 2, size: 3.2, duration: 7.8, delay: 3.7, drift: -32, opacity: 0.85, glowColor: "#D49B55" },
      { id: 11, left: 90, bottom: 7, size: 2.5, duration: 8.2, delay: 1.5, drift: 18, opacity: 0.8, glowColor: "#FFF3D6" },
      { id: 12, left: 12, bottom: 12, size: 1.8, duration: 10.5, delay: 4.8, drift: -12, opacity: 0.6, glowColor: "#F5D28E" },
      { id: 13, left: 28, bottom: 14, size: 3.2, duration: 7.1, delay: 5.2, drift: 20, opacity: 0.75, glowColor: "#E5A84B" },
      { id: 14, left: 46, bottom: 11, size: 2.2, duration: 8.7, delay: 3.0, drift: -24, opacity: 0.8, glowColor: "#FFF3D6" },
      { id: 15, left: 62, bottom: 15, size: 3.0, duration: 6.9, delay: 4.5, drift: 16, opacity: 0.85, glowColor: "#D49B55" },
      { id: 16, left: 78, bottom: 13, size: 2.6, duration: 9.0, delay: 2.1, drift: -18, opacity: 0.7, glowColor: "#F5D28E" },
      { id: 17, left: 88, bottom: 16, size: 2.0, duration: 10.0, delay: 5.8, drift: 14, opacity: 0.65, glowColor: "#FFF3D6" },
      { id: 18, left: 38, bottom: 3, size: 3.6, duration: 7.4, delay: 0.9, drift: -22, opacity: 0.85, glowColor: "#E5A84B" },
      { id: 19, left: 54, bottom: 8, size: 2.4, duration: 8.4, delay: 2.6, drift: 26, opacity: 0.75, glowColor: "#D49B55" },
      { id: 20, left: 70, bottom: 5, size: 3.4, duration: 7.0, delay: 4.3, drift: -16, opacity: 0.8, glowColor: "#F5D28E" },
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
      {/* 1. LAYER: WARM ROYAL AURORAS & GLOWING AMBIENT SPHERES             */}
      {/* ----------------------------------------------------------------- */}
      {/* Primary Warm 24K Gold Aurora behind Right Food Feast */}
      <div
        className="absolute -top-24 right-[-5%] w-[680px] h-[680px] rounded-full bg-gradient-to-tr from-[#D49B55]/25 via-[#E5A84B]/20 to-[#B45309]/10 blur-[140px] animate-aurora-pulse"
        style={{ animationDuration: "9s" }}
      />

      {/* Secondary Deep Ember Aurora behind Left Headline */}
      <div
        className="absolute top-1/4 -left-32 w-[620px] h-[620px] rounded-full bg-gradient-to-br from-[#D49B55]/20 via-[#B45309]/15 to-transparent blur-[150px] animate-aurora-pulse"
        style={{ animationDuration: "12s", animationDelay: "2.5s" }}
      />

      {/* Center Chandelier Amber Spotlight from Ceiling */}
      <div
        className="absolute -top-48 left-1/2 -translate-x-1/2 w-[850px] h-[500px] rounded-[100%] bg-gradient-to-b from-[#F5D28E]/15 via-[#D49B55]/08 to-transparent blur-[130px] animate-subtle-float"
        style={{ animationDuration: "7s" }}
      />

      {/* Subtle Sky Lounge Cyan Aura Glow (Bottom-Right corner for SKY lounge) */}
      <div
        className="absolute -bottom-24 right-1/4 w-[420px] h-[420px] rounded-full bg-[#0284C7]/08 blur-[130px] animate-aurora-pulse"
        style={{ animationDuration: "11s", animationDelay: "4s" }}
      />

      {/* ----------------------------------------------------------------- */}
      {/* 2. LAYER: SACRED MUGHAL / PUNJABI JAALI MANDALA LATTICE            */}
      {/* ----------------------------------------------------------------- */}
      {/* Large Royal Rotating Mandala behind Right Food Feast */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-24 sm:right-0 lg:right-4 w-[540px] sm:w-[680px] lg:w-[740px] aspect-square opacity-[0.06] group-hover:opacity-[0.09] transition-opacity duration-1000">
        <svg
          viewBox="0 0 400 400"
          className="size-full animate-spin-ultra-slow"
          fill="none"
          stroke="url(#mandalaGoldGrad)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="mandalaGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="35%" stopColor="#F5D28E" />
              <stop offset="70%" stopColor="#D49B55" />
              <stop offset="100%" stopColor="#8A5216" />
            </linearGradient>
          </defs>

          {/* Concentric Geometric Rings */}
          <circle cx="200" cy="200" r="195" strokeWidth="1" strokeDasharray="3 4" />
          <circle cx="200" cy="200" r="180" strokeWidth="1.2" />
          <circle cx="200" cy="200" r="150" strokeWidth="0.8" strokeDasharray="8 6" />
          <circle cx="200" cy="200" r="115" strokeWidth="1.2" />
          <circle cx="200" cy="200" r="80" strokeWidth="0.8" strokeDasharray="4 4" />
          <circle cx="200" cy="200" r="45" strokeWidth="1.2" />
          <circle cx="200" cy="200" r="15" strokeWidth="1.5" />

          {/* 8-Pointed Star Rosette Interlocking Geometries */}
          <g strokeWidth="1.2">
            <polygon points="200,20 238,162 380,200 238,238 200,380 162,238 20,200 162,162" />
            <polygon points="73,73 200,147 327,73 253,200 327,327 200,253 73,327 147,200" opacity="0.85" />
          </g>

          {/* 16-Ray Sunburst Radiance */}
          <g strokeWidth="0.9" opacity="0.75">
            {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map(
              (deg, idx) => (
                <line
                  key={idx}
                  x1="200"
                  y1="200"
                  x2={200 + 195 * Math.cos((deg * Math.PI) / 180)}
                  y2={200 + 195 * Math.sin((deg * Math.PI) / 180)}
                />
              )
            )}
          </g>

          {/* Outer Lotus Arch Petals */}
          <g strokeWidth="1">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, idx) => {
              const rad = (deg * Math.PI) / 180;
              const cx = 200 + 150 * Math.cos(rad);
              const cy = 200 + 150 * Math.sin(rad);
              return <circle key={idx} cx={cx} cy={cy} r="18" strokeWidth="0.8" />;
            })}
          </g>
        </svg>
      </div>

      {/* Secondary Counter-Rotating Inner Jaali Orbit */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-8 w-[380px] sm:w-[480px] aspect-square opacity-[0.04]">
        <svg
          viewBox="0 0 200 200"
          className="size-full animate-spin-reverse-slow"
          fill="none"
          stroke="#F5D28E"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="90" strokeWidth="0.8" strokeDasharray="6 4" />
          <polygon
            points="100,15 125,75 185,100 125,125 100,185 75,125 15,100 75,75"
            strokeWidth="1"
          />
          <polygon
            points="35,35 100,65 165,35 135,100 165,165 100,135 35,165 65,100"
            strokeWidth="0.8"
          />
        </svg>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* 3. LAYER: CINEMATIC VOLUMETRIC LIGHT RAYS                         */}
      {/* ----------------------------------------------------------------- */}
      <div className="absolute -top-32 left-1/4 w-[700px] h-[550px] opacity-[0.05] animate-light-rays pointer-events-none">
        <svg viewBox="0 0 600 400" className="size-full" fill="none">
          <defs>
            <linearGradient id="lightRayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF4D4" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#D49B55" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0B0907" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points="120,0 240,0 380,400 180,400" fill="url(#lightRayGrad)" />
          <polygon points="280,0 360,0 520,400 390,400" fill="url(#lightRayGrad)" />
        </svg>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* 4. LAYER: FLOATING TANDOOR CHARCOAL EMBERS & GOLDEN SPARKS        */}
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
              boxShadow: `0 0 ${e.size * 3}px ${e.size * 1.2}px ${e.glowColor}`,
              opacity: e.opacity,
              animation: `emberFloat ${e.duration}s cubic-bezier(0.25, 1, 0.5, 1) infinite`,
              animationDelay: `${e.delay}s`,
              ["--ember-drift" as string]: `${e.drift}px`,
            }}
          />
        ))}
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* 5. LAYER: TWINKLING ROYAL STARBURST DIAMONDS (✦)                 */}
      {/* ----------------------------------------------------------------- */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((s) => (
          <span
            key={s.id}
            className="absolute font-serif text-[#F5D28E] select-none animate-twinkle pointer-events-none"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              fontSize: `${s.size}px`,
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`,
              textShadow: "0 0 10px rgba(245, 210, 142, 0.75)",
            }}
          >
            ✦
          </span>
        ))}
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* 6. LAYER: PERIMETER SOFT VIGNETTE                                 */}
      {/* ----------------------------------------------------------------- */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0E0C0A] via-transparent to-transparent opacity-75"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0B0907]/80 via-transparent to-transparent opacity-60"
      />
    </div>
  );
}
