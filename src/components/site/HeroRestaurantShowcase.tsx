import { useState, useEffect, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Sparkles, MapPin, Eye, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

import aboutHall from "@/assets/dawat-about-hall.jpg";
import realIndoorLounge from "@/assets/real/dawat-real-indoor-lounge.jpg";
import realSkyLounge from "@/assets/real/dawat-real-sky-lounge.jpg";
import realTableMocktail from "@/assets/real/dawat-real-table-mocktail-feast.jpg";
import realReservedDining from "@/assets/real/dawat-real-reserved-dining.jpg";
import { site } from "@/lib/site";

interface ShowcaseSlide {
  id: string;
  tabLabel: string;
  icon: string;
  title: string;
  badge: string;
  description: string;
  image: string;
  alt: string;
  features: string[];
}

const SHOWCASE_SLIDES: ShowcaseSlide[] = [
  {
    id: "dining",
    tabLabel: "Royal Dining Hall",
    icon: "🏛️",
    title: "Grand Family Dining Hall",
    badge: "100% AC Family Dining",
    description:
      "Spacious royal ambience designed for family gatherings, weddings & celebrations with warm handcrafted decor.",
    image: aboutHall,
    alt: "Dawat Restaurant grand royal family dining hall with warm chandeliers and banquet seating",
    features: ["Fully Air-Conditioned", "Reserved Family Cabins", "Pure Punjabi Hospitality"],
  },
  {
    id: "lounge",
    tabLabel: "SKY Lounge & Bar",
    icon: "🍸",
    title: "The Signature SKY Lounge",
    badge: "26+ Spirits & Chilled Brews",
    description:
      "Mukerian's premier bar lounge with glowing neon aesthetics, wooden cocktail counter & mood lighting.",
    image: realIndoorLounge,
    alt: "Dawat Restaurant SKY Lounge with illuminated neon sign, wooden bar counter and mood lighting",
    features: ["Chilled Beer & Liquors", "Craft Mocktails", "Evening Lounge Ambience"],
  },
  {
    id: "terrace",
    tabLabel: "Rooftop Starlight",
    icon: "🌙",
    title: "Rooftop Starlight Terrace",
    badge: "Open-Air Pergola Dining",
    description:
      "Dine under Mukerian's starlit sky with wooden pergolas, glowing fairy canopies and fresh evening breeze.",
    image: realSkyLounge,
    alt: "Dawat Restaurant outdoor rooftop SKY Lounge under night sky with pergolas and fairy lights",
    features: ["Open-Air Breeze", "Fairy Light Canopies", "Starlit Night Views"],
  },
  {
    id: "feast",
    tabLabel: "Chef's Feast",
    icon: "🥘",
    title: "Authentic Punjabi Sizzlers & Handis",
    badge: "Clay Tandoor & Copper Handis",
    description:
      "Rich gravies simmered slow in copper handis, fresh tandoori naans, smoking sizzlers and signature mocktails.",
    image: realTableMocktail,
    alt: "Dawat Restaurant royal table feast with sizzlers, copper handi curries and handcrafted mocktail",
    features: ["Copper Handi Simmered", "Hot Tandoor Breads", "Handcrafted Sizzlers"],
  },
];

export function HeroRestaurantShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slides every 5.5s unless hovered
  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % SHOWCASE_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + SHOWCASE_SLIDES.length) % SHOWCASE_SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const active = SHOWCASE_SLIDES[activeIndex];

  return (
    <div
      className="relative mx-auto mt-10 w-full max-w-5xl px-2 sm:px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Dawat Restaurant interactive photo showcase"
    >
      {/* 1. Multi-Colored Pulsing Aura Glow Behind the Frame */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-3 sm:-inset-6 rounded-[36px] bg-gradient-to-r from-[#D49B55]/30 via-[#E5A84B]/20 to-[#38BDF8]/25 blur-3xl opacity-75 animate-hero-glow -z-10"
      />

      {/* 2. Main Luxury Card Container */}
      <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#D49B55]/40 bg-gradient-to-b from-[#1E1914]/95 via-[#13100D]/95 to-black/95 p-2 sm:p-3.5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-xl animate-hero-float">
        {/* Shimmer Light Beam Effect across Frame */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl"
        >
          <div className="absolute -inset-full w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shimmer-gleam" />
        </div>

        {/* Top Interactive Tabs */}
        <div className="relative z-10 mb-2.5 flex items-center justify-between gap-2 border-b border-stone-800/80 pb-2.5 sm:mb-3 sm:pb-3 overflow-x-auto no-scrollbar">
          {/* Live Status Badge */}
          <div className="flex items-center gap-1.5 sm:gap-2 rounded-full border border-emerald-800/60 bg-emerald-950/50 px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] font-medium text-emerald-300 backdrop-blur-md shrink-0">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            <span className="hidden xs:inline">Welcoming Guests · Mukerian</span>
            <span className="xs:hidden">Open Now</span>
          </div>

          {/* Tab Selector Buttons */}
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            {SHOWCASE_SLIDES.map((slide, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => setActiveIndex(idx)}
                  className={cn(
                    "flex items-center gap-1.5 rounded-full px-2.5 sm:px-3.5 py-1 text-[10.5px] sm:text-xs font-medium transition-all duration-300 min-h-[32px] sm:min-h-[36px]",
                    isSelected
                      ? "bg-gradient-to-r from-[#D49B55] via-[#E5A84B] to-[#C08845] text-stone-950 font-semibold shadow-md shadow-[#D49B55]/20 scale-105"
                      : "bg-stone-900/80 text-stone-300 border border-stone-800/80 hover:border-[#D49B55]/50 hover:text-white"
                  )}
                  aria-pressed={isSelected}
                >
                  <span className="text-xs">{slide.icon}</span>
                  <span className="hidden sm:inline">{slide.tabLabel}</span>
                  <span className="sm:hidden">{slide.tabLabel.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Image Showcase Window (4:3 on mobile for ample text space, 16:9 on desktop) */}
        <div className="relative aspect-[4/3] sm:aspect-[16/9] w-full overflow-hidden rounded-xl sm:rounded-2xl border border-stone-800/90 bg-stone-950">
          {/* Layered Images with Cross-Fade */}
          {SHOWCASE_SLIDES.map((slide, idx) => (
            <div
              key={slide.id}
              className={cn(
                "absolute inset-0 size-full transition-opacity duration-700 ease-out",
                idx === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              )}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                width={1400}
                height={850}
                loading={idx === 0 ? "eager" : "lazy"}
                className={cn(
                  "size-full object-cover transition-transform duration-1000 ease-out",
                  idx === activeIndex ? "scale-100 group-hover:scale-105" : "scale-105"
                )}
              />
            </div>
          ))}

          {/* Deep Vignette Overlays for Maximum Contrast & Readability */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent z-10 pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40 z-10 pointer-events-none"
          />

          {/* Left & Right Interactive Chevron Navigation */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            aria-label="Previous restaurant photo"
            className="absolute left-2.5 sm:left-3.5 top-1/2 -translate-y-1/2 z-20 flex size-8 sm:size-9 items-center justify-center rounded-full border border-white/20 bg-black/65 text-white/90 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#D49B55] hover:bg-black/90 hover:text-[#D49B55] opacity-80 sm:opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="size-4 sm:size-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            aria-label="Next restaurant photo"
            className="absolute right-2.5 sm:right-3.5 top-1/2 -translate-y-1/2 z-20 flex size-8 sm:size-9 items-center justify-center rounded-full border border-white/20 bg-black/65 text-white/90 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#D49B55] hover:bg-black/90 hover:text-[#D49B55] opacity-80 sm:opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="size-4 sm:size-5" />
          </button>

          {/* Top Overlaid Glass Badges */}
          <div className="absolute top-2.5 sm:top-4 left-2.5 sm:left-4 right-2.5 sm:right-4 z-20 flex items-center justify-between gap-2 pointer-events-none">
            {/* Left Location & Brand Pill */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#D49B55]/50 bg-black/80 px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-semibold text-[#D49B55] backdrop-blur-md shadow-lg">
              <Sparkles className="size-2.5 sm:size-3 text-[#E5A84B]" />
              <span className="hidden xs:inline">Dawat Restaurant & SKY Lounge</span>
              <span className="xs:hidden">Dawat Mukerian</span>
            </div>

            {/* Right Rating Pill */}
            <div className="inline-flex items-center gap-1 rounded-full border border-stone-700/80 bg-black/80 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-medium text-stone-200 backdrop-blur-md shadow-lg">
              <span className="text-[#FBBF24]">★</span>
              <span>4.0 (965+)</span>
            </div>
          </div>

          {/* Bottom Overlaid Information Details */}
          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-5 right-3 sm:right-5 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-left">
            <div className="max-w-xl">
              {/* Active Badge */}
              <span className="inline-block rounded-full bg-[#D49B55]/20 border border-[#D49B55]/40 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#F5D28E] uppercase backdrop-blur-md mb-1.5">
                {active.badge}
              </span>

              {/* Slide Title */}
              <h2 className="font-display text-lg sm:text-2xl font-normal text-white tracking-wide leading-snug drop-shadow-md">
                {active.title}
              </h2>

              {/* Slide Description */}
              <p className="mt-1 text-xs sm:text-sm text-stone-300/95 leading-relaxed line-clamp-2 drop-shadow">
                {active.description}
              </p>

              {/* Feature Pills */}
              <div className="mt-2.5 hidden sm:flex flex-wrap items-center gap-1.5">
                {active.features.map((feat) => (
                  <span
                    key={feat}
                    className="inline-flex items-center gap-1 rounded-full border border-stone-700/80 bg-black/60 px-2.5 py-0.5 text-[10px] text-stone-200 backdrop-blur-sm"
                  >
                    <CheckCircle2 className="size-2.5 text-[#D49B55]" />
                    {feat}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Action Buttons on Photo */}
            <div className="flex items-center gap-2 self-start sm:self-end shrink-0">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#D49B55] to-[#C08845] px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold text-stone-950 shadow-lg hover:scale-105 active:scale-95 transition-all"
              >
                <Eye className="size-3.5" />
                <span>Gallery</span>
                <ArrowRight className="size-3" />
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-1.5 rounded-full border border-stone-700/90 bg-black/75 px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-medium text-stone-200 hover:border-[#D49B55] hover:text-white transition-all backdrop-blur-md"
              >
                <Phone className="size-3 text-[#D49B55]" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Slide Indicators / Progress Dots */}
        <div className="mt-2.5 flex items-center justify-between px-1">
          <div className="flex items-center gap-1.5">
            {SHOWCASE_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  idx === activeIndex
                    ? "w-8 bg-[#D49B55]"
                    : "w-2 bg-stone-700 hover:bg-stone-500"
                )}
              />
            ))}
          </div>

          <div className="flex items-center gap-2 text-[10px] text-stone-400">
            <span>{isPaused ? "❚❚ Paused" : "▶ Auto-playing"}</span>
            <span className="text-stone-600">·</span>
            <span className="text-stone-400">
              {activeIndex + 1} of {SHOWCASE_SLIDES.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
