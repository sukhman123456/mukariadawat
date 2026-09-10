import { useState, useEffect, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Sparkles, Eye, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

import aboutHall from "@/assets/dawat-about-hall.jpg";
import realIndoorLounge from "@/assets/real/dawat-real-indoor-lounge.jpg";
import realSkyLounge from "@/assets/real/dawat-real-sky-lounge.jpg";
import realTableMocktail from "@/assets/real/dawat-real-table-mocktail-feast.jpg";
import realPartyHall from "@/assets/real/dawat-real-balloons-party-hall.jpg";
import { site } from "@/lib/site";

interface ShowcaseSlide {
  id: string;
  tabLabel: string;
  shortLabel: string;
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
    shortLabel: "Dining",
    icon: "🏛️",
    title: "Grand Family Dining Hall",
    badge: "100% AC Family Dining",
    description:
      "Spacious royal ambience designed for family gatherings, celebrations and highway road trips with warm chandeliers.",
    image: aboutHall,
    alt: "Dawat Restaurant grand royal family dining hall with warm chandeliers and banquet seating in Mukerian",
    features: ["Fully Air-Conditioned", "Reserved Family Cabins", "Pure Punjabi Hospitality"],
  },
  {
    id: "lounge",
    tabLabel: "SKY Lounge Bar",
    shortLabel: "SKY Bar",
    icon: "🍸",
    title: "The Signature SKY Lounge",
    badge: "26+ Spirits & Chilled Draughts",
    description:
      "Mukerian's premier nightlife lounge with illuminated neon aesthetics, rustic wooden bar counter and chilled draught beer.",
    image: realIndoorLounge,
    alt: "Dawat Restaurant SKY Lounge with illuminated neon sign, wooden bar counter and mood lighting",
    features: ["Chilled Beer on Tap", "Premium Spirits & Scotches", "Evening Lounge Vibe"],
  },
  {
    id: "terrace",
    tabLabel: "Rooftop Starlight",
    shortLabel: "Rooftop",
    icon: "🌙",
    title: "Rooftop Starlight Terrace",
    badge: "Open-Air Pergola Dining",
    description:
      "Dine under Mukerian's starlit night sky with rustic wooden pergolas, glowing fairy light canopies and refreshing highway breeze.",
    image: realSkyLounge,
    alt: "Dawat Restaurant outdoor rooftop SKY Lounge under night sky with pergolas and fairy lights",
    features: ["Open-Air Breeze", "Fairy Light Canopies", "Starlit Night Views"],
  },
  {
    id: "feast",
    tabLabel: "Chef's Handi Feast",
    shortLabel: "Handi Feast",
    icon: "🥘",
    title: "Authentic Copper Handis & Tandoor",
    badge: "Clay Tandoor & Copper Vessels",
    description:
      "Rich gravies simmered slow in heavy copper vessels, charred tandoori rotis, smoking sizzlers and handcrafted mocktails.",
    image: realTableMocktail,
    alt: "Dawat Restaurant royal table feast with sizzlers, copper handi curries and handcrafted mocktail",
    features: ["Copper Handi Simmered", "Hot Tandoor Breads", "Desi Makhan Perfection"],
  },
  {
    id: "banquet",
    tabLabel: "Private Party Banquet",
    shortLabel: "Banquet",
    icon: "🎉",
    title: "Private Celebrations & Kitty Parties",
    badge: "150+ Guests AC Banquet Hall",
    description:
      "Custom stage decorations, balloon arches, and live tandoor catering for birthdays, anniversaries, and family milestones.",
    image: realPartyHall,
    alt: "Dawat Restaurant private banquet hall with balloon arch and festive party setup",
    features: ["Custom Decor Setup", "Live Catering Counter", "Spacious 150+ Capacity"],
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
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Dawat Restaurant interactive photo showcase"
    >
      {/* 1. Multi-Colored Pulsing Aura Glow Behind the Frame */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-2 sm:-inset-4 rounded-[32px] bg-gradient-to-r from-[#A87545]/25 via-[#C8A875]/20 to-[#1C1917]/20 blur-2xl opacity-75 animate-hero-glow -z-10"
      />

      {/* 2. Main Luxury Card Container */}
      <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#A87545]/35 bg-[#241B16]/95 p-2.5 sm:p-4 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] backdrop-blur-xl">
        {/* Shimmer Light Beam Effect across Frame */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl"
        >
          <div className="absolute -inset-full w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shimmer-gleam" />
        </div>

        {/* Top Interactive Space Tabs */}
        <div className="relative z-10 mb-2.5 flex items-center justify-between gap-2 border-b border-[#A87545]/20 pb-2.5 overflow-x-auto no-scrollbar">
          {/* Live Status Badge */}
          <div className="flex items-center gap-1.5 rounded-full border border-emerald-800/60 bg-emerald-950/60 px-2.5 py-1 text-[10px] sm:text-[11px] font-medium text-emerald-300 backdrop-blur-md shrink-0">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            <span className="hidden sm:inline">Open Now · G.T. Road</span>
            <span className="sm:hidden">Open</span>
          </div>

          {/* Tab Selector Buttons */}
          <div className="flex items-center gap-1 shrink-0 overflow-x-auto no-scrollbar">
            {SHOWCASE_SLIDES.map((slide, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => setActiveIndex(idx)}
                  className={cn(
                    "flex items-center gap-1 rounded-full px-2.5 sm:px-3 py-1 text-[10.5px] sm:text-xs font-medium transition-all duration-300 min-h-[30px] sm:min-h-[34px] cursor-pointer",
                    isSelected
                      ? "bg-[#A87545] text-[#F5EFE6] font-semibold shadow-md shadow-[#A87545]/30 scale-[1.02]"
                      : "bg-[#1C1917] text-[#D8C8B8] border border-[#A87545]/25 hover:border-[#C8A875] hover:text-[#F5EFE6]"
                  )}
                  aria-pressed={isSelected}
                >
                  <span className="text-xs">{slide.icon}</span>
                  <span className="hidden md:inline">{slide.tabLabel}</span>
                  <span className="md:hidden">{slide.shortLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Image Showcase Window */}
        <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden rounded-xl sm:rounded-2xl border border-[#A87545]/30 bg-black">
          {/* Layered Images with Smooth Cross-Fade */}
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
                width={1200}
                height={750}
                loading={idx === 0 ? "eager" : "lazy"}
                className={cn(
                  "size-full object-cover transition-transform duration-1000 ease-out",
                  idx === activeIndex ? "scale-100 group-hover:scale-105" : "scale-105"
                )}
              />
            </div>
          ))}

          {/* Deep Vignette Overlays for Sharp Readability */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10 pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30 z-10 pointer-events-none"
          />

          {/* Left & Right Interactive Chevron Navigation */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            aria-label="Previous restaurant photo"
            className="absolute left-2.5 sm:left-3.5 top-1/2 -translate-y-1/2 z-20 flex size-8 sm:size-9 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white/90 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#C8A875] hover:text-[#C8A875] cursor-pointer"
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
            className="absolute right-2.5 sm:right-3.5 top-1/2 -translate-y-1/2 z-20 flex size-8 sm:size-9 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white/90 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#C8A875] hover:text-[#C8A875] cursor-pointer"
          >
            <ChevronRight className="size-4 sm:size-5" />
          </button>

          {/* Top Overlaid Glass Badges */}
          <div className="absolute top-2.5 sm:top-3.5 left-2.5 sm:left-3.5 right-2.5 sm:right-3.5 z-20 flex items-center justify-between gap-1.5 pointer-events-none">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#A87545]/50 bg-black/80 px-2.5 sm:px-3 py-1 text-[9.5px] sm:text-[11px] font-semibold text-[#C8A875] backdrop-blur-md shadow-lg">
              <Sparkles className="size-2.5 sm:size-3 text-[#C8A875]" />
              <span className="hidden xs:inline">Dawat Restaurant & SKY Lounge</span>
              <span className="xs:hidden">Dawat Mukerian</span>
            </div>

            <div className="inline-flex items-center gap-1 rounded-full border border-[#A87545]/40 bg-black/80 px-2 sm:px-2.5 py-1 text-[9.5px] sm:text-[11px] font-medium text-[#F5EFE6] backdrop-blur-md shadow-lg shrink-0">
              <span className="text-[#C8A875]">★</span>
              <span>4.0</span>
              <span className="hidden xs:inline">(965+ Reviews)</span>
            </div>
          </div>

          {/* Bottom Overlaid Information Details */}
          <div className="absolute bottom-2.5 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 z-20 flex flex-col xs:flex-row xs:items-end justify-between gap-2 text-left">
            <div className="max-w-md">
              <span className="inline-block rounded-full bg-[#A87545]/30 border border-[#A87545]/50 px-2.5 py-0.5 text-[9.5px] sm:text-[10.5px] font-semibold tracking-wider text-[#F5EFE6] uppercase backdrop-blur-md mb-1">
                {active.badge}
              </span>

              <h2 className="font-display text-base sm:text-xl font-normal text-[#F5EFE6] tracking-wide leading-snug drop-shadow-md">
                {active.title}
              </h2>

              <p className="mt-0.5 text-xs text-[#D8C8B8] leading-relaxed line-clamp-2 drop-shadow">
                {active.description}
              </p>

              <div className="mt-1.5 hidden sm:flex flex-wrap items-center gap-1">
                {active.features.map((feat) => (
                  <span
                    key={feat}
                    className="inline-flex items-center gap-1 rounded-full border border-[#A87545]/30 bg-black/70 px-2 py-0.5 text-[9.5px] text-[#D8C8B8] backdrop-blur-sm"
                  >
                    <CheckCircle2 className="size-2.5 text-[#C8A875]" />
                    {feat}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 self-start xs:self-end shrink-0">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-1 rounded-full bg-[#A87545] px-3 py-1.5 text-[11px] font-semibold text-[#F5EFE6] shadow-lg hover:bg-[#B98350] transition-all"
              >
                <Eye className="size-3" />
                <span>Gallery</span>
                <ArrowRight className="size-2.5" />
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-1 rounded-full border border-[#A87545]/40 bg-black/80 px-3 py-1.5 text-[11px] font-medium text-[#F5EFE6] hover:border-[#C8A875] hover:text-[#C8A875] transition-all"
              >
                <Phone className="size-3 text-[#C8A875]" />
                <span>Call</span>
              </a>
            </div>
          </div>
        </div>

        {/* 3. Clickable Thumbnail Strip - View All 5 Spaces at a Glance */}
        <div className="mt-3 grid grid-cols-5 gap-1.5 sm:gap-2">
          {SHOWCASE_SLIDES.map((slide, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`View ${slide.tabLabel}`}
                className={cn(
                  "group/thumb relative aspect-[16/10] overflow-hidden rounded-lg border transition-all duration-300 cursor-pointer text-left",
                  isSelected
                    ? "border-[#C8A875] ring-2 ring-[#A87545]/60 scale-102 shadow-md shadow-[#A87545]/30"
                    : "border-[#A87545]/25 opacity-60 hover:opacity-100 hover:border-[#A87545]/60"
                )}
              >
                <img
                  src={slide.image}
                  alt={slide.tabLabel}
                  width={200}
                  height={125}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover/thumb:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <span className="absolute bottom-1 left-1 right-1 text-[9px] sm:text-[10px] font-medium text-[#F5EFE6] truncate leading-tight">
                  {slide.shortLabel}
                </span>
              </button>
            );
          })}
        </div>

        {/* Bottom Slide Indicators / Auto-play Progress */}
        <div className="mt-2.5 flex items-center justify-between px-1 text-[10px] text-[#D8C8B8]">
          <div className="flex items-center gap-1.5">
            {SHOWCASE_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={cn(
                  "h-1 rounded-full transition-all duration-300 cursor-pointer",
                  idx === activeIndex
                    ? "w-6 bg-[#C8A875]"
                    : "w-2 bg-[#A87545]/30 hover:bg-[#A87545]/60"
                )}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span>{isPaused ? "❚❚ Paused on hover" : "▶ 5 Spaces Auto-playing"}</span>
            <span className="text-[#A87545]/40">·</span>
            <span className="text-[#C8A875]">
              {activeIndex + 1} of {SHOWCASE_SLIDES.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

