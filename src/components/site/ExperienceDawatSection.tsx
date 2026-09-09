import { useState, useEffect, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Phone,
  Sparkles,
  Users,
  UtensilsCrossed,
  X,
  Moon,
  Wine,
  PartyPopper,
  Tv,
} from "lucide-react";

import { site } from "@/lib/site";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./SocialIcons";

// 8 Real Dawat Restaurant Photographs
import realSkyLounge from "@/assets/real/dawat-real-sky-lounge.jpg";
import realIndoorLounge from "@/assets/real/dawat-real-indoor-lounge.jpg";
import realSaagRoti from "@/assets/real/dawat-real-saag-roti.jpg";
import realTableMocktail from "@/assets/real/dawat-real-table-mocktail-feast.jpg";
import realReservedDining from "@/assets/real/dawat-real-reserved-dining.jpg";
import realDiningPerspective from "@/assets/real/dawat-real-dining-perspective.jpg";
import realBarCounter from "@/assets/real/dawat-real-bar-counter.jpg";
import realPartyHall from "@/assets/real/dawat-real-balloons-party-hall.jpg";

export interface ExperiencePhoto {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  category: "Exterior & Rooftop" | "Authentic Food" | "Dining Hall" | "Sky Lounge" | "Celebrations";
  description: string;
}

const experiencePhotos: ExperiencePhoto[] = [
  {
    id: "sky-lounge-main",
    src: realSkyLounge,
    title: "SKY Lounge Rooftop at Night",
    subtitle: "Open Air Starlit Dining",
    category: "Sky Lounge",
    description:
      "Our signature rooftop SKY Lounge at night, featuring glowing neon signage, wooden pergola rafters, warm string fairy lights, and comfortable outdoor seating.",
  },
  {
    id: "indoor-lounge-main",
    src: realIndoorLounge,
    title: "Indoor Bar & Neon Lounge",
    subtitle: "Warm Gold Pendants & Beverage Station",
    category: "Dining Hall",
    description:
      "A warm and ambient indoor perspective featuring our handcrafted wooden beverage station, glowing white neon 'Lounge' sign with beer mug icon, golden dome pendant illumination, and lively dining tables.",
  },
  {
    id: "saag-roti-real",
    src: realSaagRoti,
    title: "Makki di Roti & Sarson da Saag",
    subtitle: "Authentic Punjabi Delicacy",
    category: "Authentic Food",
    description:
      "Freshly prepared golden Makki di Roti in a wicker basket paired with slow-simmered Sarson da Saag topped with a swirl of fresh white makhan, tangy mango pickle, and sliced whole onions.",
  },
  {
    id: "table-mocktail-real",
    src: realTableMocktail,
    title: "Table Feast & Ocean Blue Cooler",
    subtitle: "Sizzlers, Tikkas & Beverages",
    category: "Authentic Food",
    description:
      "A vibrant evening dining table at Dawat with an electric blue citrus mocktail cooler with mint and fresh lemon wheel, alongside sizzled tandoori tikkas and refreshing cold drinks.",
  },
  {
    id: "reserved-dining-real",
    src: realReservedDining,
    title: "Reserved Dining Hall",
    subtitle: "Warm Wooden Ambience",
    category: "Dining Hall",
    description:
      "Elegantly arranged long wooden dining tables with upholstered high-back chairs, ambient circular recessed cove lighting, and textured stone wall accents for private family feasts.",
  },
  {
    id: "dining-perspective-real",
    src: realDiningPerspective,
    title: "Dining Hall Perspective",
    subtitle: "Stone Textured Walls & Pendants",
    category: "Dining Hall",
    description:
      "Perspective of our welcoming air-conditioned dining room showcasing the textured stone feature wall, warm downward pendant lamps, and guests enjoying their evening meal.",
  },
  {
    id: "bar-counter-real",
    src: realBarCounter,
    title: "Beverage & Billing Station",
    subtitle: "Artisanal Wooden Shelving",
    category: "Dining Hall",
    description:
      "Our modern reception and beverage counter station, featuring natural wood paneling, digital ordering POS, and backlit display shelves.",
  },
  {
    id: "party-balloons-real",
    src: realPartyHall,
    title: "Celebration & Birthday Party Hall",
    subtitle: "Festive Balloons & Banquet Tables",
    category: "Celebrations",
    description:
      "Our party hall decorated with colorful balloon clusters suspended from the ceiling, arranged with pristine covered banquet tables ready for birthdays, anniversaries, and family get-togethers.",
  },
];

export function ExperienceDawatSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Keyboard navigation for Lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % experiencePhotos.length : null
        );
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + experiencePhotos.length) % experiencePhotos.length
            : null
        );
      }
    },
    [lightboxIndex]
  );

  useEffect(() => {
    if (lightboxIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, handleKeyDown]);

  const scrollToExplore = () => {
    const el = document.getElementById("food-experience");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activePhoto =
    lightboxIndex !== null ? experiencePhotos[lightboxIndex] : undefined;

  return (
    <div className="bg-[#0B0907] text-[#FAF5EE] overflow-hidden">
      {/* ======================================================== */}
      {/* 1. HERO / RESTAURANT EXPERIENCE                           */}
      {/* ======================================================== */}
      <section className="relative py-20 lg:py-32 border-t border-stone-800/60 overflow-hidden">
        {/* Subtle warm glow backdrop */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-10 size-[600px] rounded-full bg-[#D49B55]/10 blur-[140px]"
        />

        <div className="relative mx-auto max-w-[1360px] px-5 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1.2fr] lg:gap-16">
            {/* Left Content */}
            <Reveal className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D49B55]/30 bg-[#D49B55]/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#D49B55] uppercase w-fit">
                <Sparkles className="size-3.5" /> OUR RESTAURANT · EXPERIENCE DAWAT
              </div>

              <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-[3.6rem] font-normal leading-[1.1] tracking-tight text-[#FAF5EE]">
                An Experience
                <br />
                <span className="text-[#D49B55] italic font-serif font-light">
                  Worth Savoring
                </span>
              </h2>

              <p className="mt-6 font-sans text-base sm:text-lg leading-relaxed text-stone-300/90 max-w-xl">
                Step into Dawat Restaurant, where warm hospitality, delicious Indian flavours and a
                welcoming atmosphere come together.
              </p>

              {/* Highlights row */}
              <div className="mt-8 grid grid-cols-3 gap-4 border-y border-stone-800/80 py-5">
                <div>
                  <span className="block font-display text-2xl sm:text-3xl font-semibold text-[#D49B55]">
                    4.0 ★
                  </span>
                  <span className="mt-1 block text-xs text-stone-400">
                    965+ Reviews
                  </span>
                </div>
                <div>
                  <span className="block font-display text-2xl sm:text-3xl font-semibold text-[#FAF5EE]">
                    100%
                  </span>
                  <span className="mt-1 block text-xs text-stone-400">
                    Real Photographs
                  </span>
                </div>
                <div>
                  <span className="block font-display text-2xl sm:text-3xl font-semibold text-[#FAF5EE]">
                    Sky Lounge
                  </span>
                  <span className="mt-1 block text-xs text-stone-400">
                    Rooftop Dining
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={scrollToExplore}
                  className="inline-flex items-center gap-2 rounded-full bg-[#D49B55] px-7 py-3 text-xs sm:text-sm font-medium tracking-wide text-stone-950 transition-all duration-200 hover:bg-[#C08845] hover:shadow-lg hover:shadow-[#D49B55]/20 active:scale-95 cursor-pointer"
                >
                  Explore Our Restaurant <ArrowRight className="size-4" />
                </button>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-stone-700 bg-stone-900/60 px-6 py-3 text-xs sm:text-sm font-medium tracking-wide text-stone-200 hover:border-[#D49B55] hover:text-white transition-colors"
                >
                  <Phone className="size-4" /> Call: {site.phone}
                </a>
              </div>
            </Reveal>

            {/* Right Large Featured Image with Overlapping Badge */}
            <Reveal delay={150} className="relative">
              <div
                onClick={() => setLightboxIndex(0)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setLightboxIndex(0)}
                className="group relative block overflow-hidden rounded-3xl border border-stone-800/90 bg-stone-950 shadow-2xl shadow-black/90 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D49B55]"
              >
                <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                  <img
                    src={realSkyLounge}
                    alt="Dawat Restaurant SKY Lounge outdoor rooftop exterior at night"
                    width={1200}
                    height={850}
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Dark/Warm gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Top Badge: Actual Photo Tag */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="rounded-full border border-emerald-500/40 bg-black/60 px-3 py-1 text-[11px] font-semibold text-emerald-400 backdrop-blur-md">
                    ● Real Photography
                  </span>
                  <span className="rounded-full border border-stone-700 bg-black/60 px-3 py-1 text-[11px] text-stone-300 backdrop-blur-md">
                    G.T. Road, Mukerian
                  </span>
                </div>

                {/* Bottom Overlay Info & Arrow */}
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 flex items-end justify-between">
                  <div>
                    <span className="text-xs font-semibold text-[#D49B55] uppercase tracking-wider">
                      Rooftop & Exterior
                    </span>
                    <h3 className="mt-1 font-display text-xl sm:text-2xl text-white">
                      The Famous SKY Lounge at Night
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-stone-300 line-clamp-1">
                      Click to expand full-screen view
                    </p>
                  </div>

                  <span className="grid size-11 place-items-center rounded-full border border-stone-700 bg-black/60 text-[#D49B55] transition-all duration-300 group-hover:border-[#D49B55] group-hover:bg-[#D49B55] group-hover:text-stone-950 shrink-0">
                    <Maximize2 className="size-4 transition-transform duration-300 group-hover:scale-110" />
                  </span>
                </div>
              </div>

              {/* Floating Overlapping Luxury Card */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 max-w-xs items-center gap-3 rounded-2xl border border-stone-800 bg-[#16120E]/95 p-4 shadow-xl backdrop-blur-md">
                <div className="grid size-10 place-items-center rounded-xl bg-[#D49B55]/15 text-[#D49B55]">
                  <UtensilsCrossed className="size-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">
                    Authentic North Indian Feast
                  </h4>
                  <p className="text-[11px] text-stone-400 mt-0.5">
                    Fresh clay tandoor, live sizzlers and Punjabi hospitality
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. FOOD EXPERIENCE (Staggered / Masonry Layout)            */}
      {/* ======================================================== */}
      <section id="food-experience" className="py-20 lg:py-28 border-t border-stone-800/40 relative">
        <div className="mx-auto max-w-[1360px] px-5 lg:px-12">
          {/* Section Header */}
          <Reveal className="max-w-2xl">
            <p className="font-sans text-xs font-semibold tracking-[0.25em] text-[#D49B55] uppercase">
              CULINARY CRAFT
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-tight text-[#FAF5EE]">
              Made With Love,
              <br />
              Served With Flavour
            </h2>
            <p className="mt-4 font-sans text-sm sm:text-base leading-relaxed text-stone-300/80">
              From traditional Indian favourites to beautifully presented dishes, every plate at Dawat is
              prepared to make your dining experience memorable.
            </p>
          </Reveal>

          {/* Editorial Staggered / Asymmetrical Food Grid */}
          <div className="mt-12 grid gap-8 lg:grid-cols-12 items-stretch">
            {/* Left Dominant Card (Makki Roti & Sarson Saag) */}
            <Reveal
              delay={100}
              className="lg:col-span-7 flex flex-col justify-between overflow-hidden rounded-3xl border border-stone-800/80 bg-[#14110E] group relative shadow-2xl transition-all duration-500 hover:border-[#D49B55]/50 hover:-translate-y-1.5 cursor-pointer"
            >
              <div
                onClick={() => setLightboxIndex(2)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setLightboxIndex(2)}
                className="size-full flex flex-col justify-between"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-stone-900">
                  <img
                    src={realSaagRoti}
                    alt="Authentic Makki di Roti with Sarson da Saag and fresh white butter at Dawat"
                    width={900}
                    height={620}
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14110E] via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500" />

                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-[#D49B55] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-stone-950 shadow-md">
                      Chef's Pride · Real Dish
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex items-end justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-semibold tracking-wider text-[#D49B55] uppercase">
                      TRADITIONAL WINTER DELICACY
                    </span>
                    <h3 className="mt-1 font-display text-xl sm:text-2xl text-[#FAF5EE] group-hover:text-[#D49B55] transition-colors">
                      Makki di Roti & Sarson da Saag
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-stone-300/80 leading-relaxed max-w-lg">
                      Tender mustard leaves slow-simmered with garlic, ginger, and green chilies, served with
                      hand-stretched maize flatbread and churned desi makhan.
                    </p>
                  </div>

                  <span className="grid size-11 place-items-center rounded-full border border-stone-700 bg-stone-900/80 text-stone-300 transition-all duration-300 group-hover:border-[#D49B55] group-hover:bg-[#D49B55] group-hover:text-stone-950 shrink-0">
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Right Staggered Column (Mocktail Feast & Beverage Bar) */}
            <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
              {/* Card 2: Table Feast & Blue Mocktail */}
              <Reveal
                delay={200}
                className="overflow-hidden rounded-3xl border border-stone-800/80 bg-[#14110E] group relative shadow-xl transition-all duration-500 hover:border-[#D49B55]/50 hover:-translate-y-1.5 cursor-pointer"
              >
                <div
                  onClick={() => setLightboxIndex(3)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setLightboxIndex(3)}
                  className="size-full"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                    <img
                      src={realTableMocktail}
                      alt="Evening dining table feast with blue mocktail and sizzling tandoori platter"
                      width={700}
                      height={450}
                      className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14110E] via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-black/60 border border-sky-500/40 px-2.5 py-1 text-[10px] font-semibold text-sky-400 backdrop-blur-md">
                        ● Real Dining Snapshot
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex items-end justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-semibold tracking-wider text-[#D49B55] uppercase">
                        SIZZLERS & REFRESHMENTS
                      </span>
                      <h3 className="mt-1 font-display text-lg text-[#FAF5EE] group-hover:text-[#D49B55] transition-colors">
                        Ocean Blue Cooler & Charcoal Sizzlers
                      </h3>
                      <p className="mt-1 text-xs text-stone-400 line-clamp-1">
                        Chilled mocktails paired with smoking hot tandoori platters.
                      </p>
                    </div>
                    <span className="grid size-8 place-items-center rounded-full border border-stone-700 bg-stone-900/80 text-stone-300 transition-all duration-300 group-hover:border-[#D49B55] group-hover:bg-[#D49B55] group-hover:text-stone-950 shrink-0">
                      <ArrowUpRight className="size-3.5" />
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Card 3: Beverage & Bar Counter */}
              <Reveal
                delay={250}
                className="overflow-hidden rounded-3xl border border-stone-800/80 bg-[#14110E] group relative shadow-xl transition-all duration-500 hover:border-[#D49B55]/50 hover:-translate-y-1.5 cursor-pointer"
              >
                <div
                  onClick={() => setLightboxIndex(6)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setLightboxIndex(6)}
                  className="size-full flex items-center gap-4 p-4"
                >
                  <div className="relative size-24 sm:size-28 rounded-2xl overflow-hidden bg-stone-900 shrink-0">
                    <img
                      src={realBarCounter}
                      alt="Dawat modern beverage and mocktail bar counter"
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-semibold tracking-wider text-[#D49B55] uppercase">
                      DRINKS & SHAKES STATION
                    </span>
                    <h4 className="mt-0.5 font-display text-base sm:text-lg text-white group-hover:text-[#D49B55] transition-colors truncate">
                      Beverage & Mocktail Bar
                    </h4>
                    <p className="mt-1 text-xs text-stone-400 line-clamp-2">
                      Where our special thick sweet lassis, cold coffees, shakes and fresh coolers are prepared.
                    </p>
                  </div>
                  <span className="text-xs text-[#D49B55] font-semibold whitespace-nowrap shrink-0">
                    View →
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. DINING & AMBIENCE (Collage with 100% Real Interiors)   */}
      {/* ======================================================== */}
      <section className="py-20 lg:py-28 border-t border-stone-800/40 bg-[#0E0C0A] relative">
        <div className="mx-auto max-w-[1360px] px-5 lg:px-12">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <Reveal className="max-w-xl">
              <p className="font-sans text-xs font-semibold tracking-[0.25em] text-[#D49B55] uppercase">
                COMFORT & ELEGANCE
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-tight text-[#FAF5EE]">
                Your Table. Your Moments.
              </h2>
              <p className="mt-4 font-sans text-sm sm:text-base leading-relaxed text-stone-300/80">
                A comfortable and welcoming space for family dinners, celebrations, casual meals and
                special moments.
              </p>
            </Reveal>

            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full border border-stone-700 bg-stone-900/60 px-6 py-2.5 text-xs font-semibold tracking-wider text-[#FAF5EE] hover:border-[#D49B55] hover:text-[#D49B55] uppercase transition-all duration-200 self-start md:self-auto"
            >
              Explore Menu <ArrowRight className="size-3.5" />
            </Link>
          </div>

          {/* Premium Image Collage using 100% Real Photos */}
          <div className="mt-12 grid gap-6 md:grid-cols-12 items-stretch">
            {/* Left Hero: Real Reserved Dining Room */}
            <Reveal
              delay={100}
              className="md:col-span-6 group relative overflow-hidden rounded-3xl border border-stone-800 bg-[#14110E] shadow-2xl transition-all duration-500 hover:border-[#D49B55]/50 hover:-translate-y-1 cursor-pointer"
            >
              <div
                onClick={() => setLightboxIndex(4)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setLightboxIndex(4)}
                className="size-full flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-900">
                  <img
                    src={realReservedDining}
                    alt="Real indoor dining area at Dawat Restaurant Mukerian with wooden table and reserved card"
                    width={900}
                    height={620}
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-black/70 border border-[#D49B55]/50 px-3 py-1 text-[11px] font-medium text-[#D49B55] backdrop-blur-md">
                      ● Actual Reserved Seating
                    </span>
                  </div>

                  <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between">
                    <div>
                      <span className="text-[10px] font-semibold tracking-wider text-[#D49B55] uppercase">
                        FINE DINING ROOM
                      </span>
                      <h3 className="mt-1 font-display text-xl text-white">
                        Private Reserved Seating
                      </h3>
                      <p className="mt-1 text-xs text-stone-300 max-w-sm">
                        Handcrafted wooden tables, upholstered chairs, and warm recessed lighting.
                      </p>
                    </div>
                    <span className="grid size-10 place-items-center rounded-full bg-black/60 text-[#D49B55] border border-stone-700 group-hover:bg-[#D49B55] group-hover:text-stone-950 transition-colors shrink-0">
                      <Maximize2 className="size-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right Stack: 2 Real Indoor Photos */}
            <div className="md:col-span-6 flex flex-col gap-6 justify-between">
              {/* Tile 1: Real Indoor Lounge & Glowing Neon Sign */}
              <Reveal
                delay={200}
                className="group relative overflow-hidden rounded-3xl border border-stone-800 bg-[#14110E] shadow-xl transition-all duration-500 hover:border-[#D49B55]/50 hover:-translate-y-1 cursor-pointer"
              >
                <div
                  onClick={() => setLightboxIndex(1)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setLightboxIndex(1)}
                  className="size-full"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-stone-900">
                    <img
                      src={realIndoorLounge}
                      alt="Real Indoor Bar and Lounge area with glowing neon Lounge sign and gold pendant lamp at Dawat"
                      width={800}
                      height={480}
                      className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-black/70 border border-amber-500/40 px-3 py-1 text-[10px] font-semibold text-amber-300 backdrop-blur-md">
                        ● Real Bar & Neon Lounge
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div>
                        <h4 className="font-display text-base sm:text-lg text-white">
                          Indoor Bar & Glowing Lounge
                        </h4>
                        <p className="text-[11px] text-stone-300">
                          Gold pendant lighting, wooden counter, and live TV screen
                        </p>
                      </div>
                      <span className="grid size-9 place-items-center rounded-full bg-black/60 text-[#D49B55] border border-stone-700 group-hover:bg-[#D49B55] group-hover:text-stone-950 transition-colors shrink-0">
                        <Maximize2 className="size-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Tile 2: Real Dining Perspective with Textured Stone Walls */}
              <Reveal
                delay={250}
                className="group relative overflow-hidden rounded-3xl border border-stone-800 bg-[#14110E] shadow-xl transition-all duration-500 hover:border-[#D49B55]/50 hover:-translate-y-1 cursor-pointer"
              >
                <div
                  onClick={() => setLightboxIndex(5)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setLightboxIndex(5)}
                  className="size-full flex items-center gap-4 p-4"
                >
                  <div className="relative size-24 sm:size-28 rounded-2xl overflow-hidden bg-stone-900 shrink-0">
                    <img
                      src={realDiningPerspective}
                      alt="Real dining perspective with textured stone wall at Dawat"
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-semibold tracking-wider text-[#D49B55] uppercase">
                      AMBIENT HOSPITALITY
                    </span>
                    <h4 className="mt-0.5 font-display text-base sm:text-lg text-white group-hover:text-[#D49B55] transition-colors">
                      Textured Stone Walls & Pendant Warmth
                    </h4>
                    <p className="mt-1 text-xs text-stone-400 line-clamp-2">
                      Comfortable air-conditioned dining designed for relaxed family meals and celebratory dinners.
                    </p>
                  </div>
                  <span className="text-xs text-[#D49B55] font-semibold whitespace-nowrap shrink-0">
                    View →
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. ROOFTOP / SKY LOUNGE (Inspired by Real Photo)           */}
      {/* ======================================================== */}
      <section className="py-20 lg:py-32 border-t border-stone-800/40 bg-gradient-to-b from-[#0B0907] via-[#110D0A] to-[#0B0907] relative overflow-hidden">
        {/* Glow behind neon lounge title */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 size-[500px] rounded-full bg-cyan-500/5 blur-[140px]"
        />

        <div className="relative mx-auto max-w-[1360px] px-5 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left: Real SKY Lounge Photograph */}
            <Reveal
              delay={100}
              className="lg:col-span-7 group relative overflow-hidden rounded-3xl border border-stone-800/90 bg-stone-950 shadow-2xl shadow-cyan-950/20 transition-all duration-500 hover:border-cyan-500/50 hover:-translate-y-1.5 cursor-pointer"
            >
              <div
                onClick={() => setLightboxIndex(0)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setLightboxIndex(0)}
                className="size-full"
              >
                <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                  <img
                    src={realSkyLounge}
                    alt="Real SKY Lounge rooftop outdoor dining area at night with glowing neon sign"
                    width={1000}
                    height={700}
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Top neon badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/70 border border-cyan-500/60 px-3 py-1 text-xs font-semibold text-cyan-400 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                      <Moon className="size-3.5" /> Rooftop Atmosphere
                    </span>
                  </div>

                  {/* Bottom caption */}
                  <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 flex items-end justify-between">
                    <div>
                      <span className="text-[11px] font-semibold tracking-widest text-[#D49B55] uppercase">
                        REAL PHOTOGRAPHY · DAWAT MUKERIAN
                      </span>
                      <h3 className="mt-1 font-display text-xl sm:text-2xl text-white">
                        Night Ambience at the SKY Lounge
                      </h3>
                      <p className="mt-1 text-xs text-stone-300">
                        String fairy lights, wooden pergolas, and refreshing open skies
                      </p>
                    </div>
                    <span className="grid size-10 place-items-center rounded-full bg-black/60 text-cyan-400 border border-cyan-500/50 group-hover:bg-cyan-500 group-hover:text-black transition-colors shrink-0">
                      <Maximize2 className="size-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right Content: Glowing Sky Lounge Signature */}
            <Reveal delay={200} className="lg:col-span-5 flex flex-col justify-center">
              {/* Subtle glowing Sky Lounge neon badge inspired by the real photo */}
              <div className="inline-flex items-center gap-2 rounded-2xl border border-cyan-500/30 bg-black/80 px-4 py-2 shadow-[0_0_20px_rgba(6,182,212,0.2)] w-fit backdrop-blur-md">
                <span className="font-display text-lg font-bold tracking-wider text-[#38BDF8] drop-shadow-[0_0_10px_rgba(56,189,248,0.9)]">
                  SKY
                </span>
                <span className="font-serif italic text-lg font-bold text-[#A3E635] drop-shadow-[0_0_10px_rgba(163,230,53,0.9)]">
                  Lounge
                </span>
                <span className="text-stone-500 text-xs">·</span>
                <span className="text-[11px] font-sans font-medium text-stone-300">
                  At Dawat
                </span>
              </div>

              <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-[2.85rem] font-normal leading-tight text-[#FAF5EE]">
                Dine Under
                <br />
                <span className="text-[#38BDF8] italic font-serif">The Sky</span>
              </h2>

              <p className="mt-5 font-sans text-sm sm:text-base leading-relaxed text-stone-300/90">
                Enjoy great food, refreshing drinks and memorable evenings in our rooftop atmosphere.
              </p>

              {/* Sky Lounge Feature List */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3.5 rounded-2xl border border-stone-800/80 bg-[#14110E]/60 p-4">
                  <div className="grid size-9 place-items-center rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                    <Moon className="size-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">
                      Starlit Open-Air Dining
                    </h4>
                    <p className="text-[11px] text-stone-400 mt-0.5">
                      Relax under evening breezes with charming ambient fairy lights and wooden pergola shade.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-2xl border border-stone-800/80 bg-[#14110E]/60 p-4">
                  <div className="grid size-9 place-items-center rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
                    <Wine className="size-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">
                      Chilled Coolers & Evening Sizzlers
                    </h4>
                    <p className="text-[11px] text-stone-400 mt-0.5">
                      Sip on fresh fruit mocktails, cold coffees and sizzling tandoori starters with friends.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sky Lounge Reservation Button */}
              <div className="mt-8 flex items-center gap-4">
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-7 py-3 text-xs sm:text-sm font-semibold tracking-wide text-stone-950 transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/25 active:scale-95"
                >
                  <WhatsAppIcon size={16} /> WhatsApp Inquiry
                </a>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-white transition-colors"
                >
                  <Phone className="size-3.5" /> Call for Inquiries
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. SPECIAL MOMENTS (Celebration & Party Hall)              */}
      {/* ======================================================== */}
      <section className="py-20 lg:py-28 border-t border-stone-800/40 bg-[#0E0C0A] relative">
        <div className="mx-auto max-w-[1360px] px-5 lg:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <Reveal className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-pink-400 uppercase">
                <PartyPopper className="size-3.5" /> CELEBRATIONS & PARTIES
              </div>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-tight text-[#FAF5EE]">
                Celebrate Every Moment
              </h2>
              <p className="mt-3 font-sans text-sm sm:text-base leading-relaxed text-stone-300/80">
                From birthdays and family gatherings to special celebrations, Dawat is a place to create memories.
              </p>
            </Reveal>

            <Link
              to="/catering"
              className="inline-flex items-center gap-2 rounded-full border border-stone-700 bg-stone-900/60 px-6 py-2.5 text-xs font-semibold tracking-wider text-[#FAF5EE] hover:border-[#D49B55] hover:text-[#D49B55] uppercase transition-all duration-200 self-start md:self-auto"
            >
              Catering & Banquets <ArrowRight className="size-3.5" />
            </Link>
          </div>

          {/* Horizontal Gallery Showcase */}
          <div className="mt-12 grid gap-8 lg:grid-cols-12 items-stretch">
            {/* Real Party Hall Photo */}
            <Reveal
              delay={100}
              className="lg:col-span-8 group relative overflow-hidden rounded-3xl border border-stone-800 bg-[#14110E] shadow-2xl transition-all duration-500 hover:border-pink-500/50 hover:-translate-y-1.5 cursor-pointer"
            >
              <div
                onClick={() => setLightboxIndex(7)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setLightboxIndex(7)}
                className="size-full"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                  <img
                    src={realPartyHall}
                    alt="Dawat Restaurant party hall decorated with colorful festive balloons and banquet table seating"
                    width={900}
                    height={560}
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-black/70 border border-pink-500/50 px-3 py-1 text-[11px] font-semibold text-pink-400 backdrop-blur-md">
                      ● Real Party Hall Setup
                    </span>
                  </div>

                  <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 flex items-end justify-between">
                    <div>
                      <span className="text-[11px] font-semibold tracking-wider text-pink-400 uppercase">
                        BIRTHDAYS & PRIVATE CELEBRATIONS
                      </span>
                      <h3 className="mt-1 font-display text-xl sm:text-2xl text-white">
                        Festive Party Hall Decorated With Care
                      </h3>
                      <p className="mt-1 text-xs text-stone-300 max-w-lg line-clamp-1">
                        Colorful balloon clusters, long banquet setups, and delicious multi-course Punjabi meals.
                      </p>
                    </div>
                    <span className="grid size-10 place-items-center rounded-full bg-black/60 text-pink-400 border border-pink-500/40 group-hover:bg-pink-500 group-hover:text-black transition-colors shrink-0">
                      <Maximize2 className="size-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Celebration Booking Information Card */}
            <Reveal
              delay={200}
              className="lg:col-span-4 flex flex-col justify-between rounded-3xl border border-stone-800 bg-gradient-to-b from-[#181410] via-[#14110E] to-[#120F0D] p-7 sm:p-8"
            >
              <div>
                <span className="text-xs font-semibold text-[#D49B55] uppercase tracking-wider">
                  HOST YOUR CELEBRATION
                </span>
                <h3 className="mt-2 font-display text-2xl text-[#FAF5EE]">
                  Plan Your Event at Dawat
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-stone-300 leading-relaxed">
                  Whether it is an intimate birthday party, milestone anniversary, family reunion, or corporate gathering — we handle the food, ambience, and hospitality with care.
                </p>

                <div className="mt-6 space-y-3 pt-6 border-t border-stone-800/80">
                  <div className="flex items-center gap-2.5 text-xs text-stone-200">
                    <span className="size-1.5 rounded-full bg-[#D49B55]" />
                    Customized Veg & Non-Veg Party Menus
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-stone-200">
                    <span className="size-1.5 rounded-full bg-[#D49B55]" />
                    Festive Hall Decoration & Seating Options
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-stone-200">
                    <span className="size-1.5 rounded-full bg-[#D49B55]" />
                    Dedicated Service Staff & Live Charcoal Tandoor
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-800 flex flex-col gap-3">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D49B55] px-6 py-3 text-xs sm:text-sm font-semibold text-stone-950 hover:bg-[#C08845] transition-colors"
                >
                  <Phone className="size-4" /> Call {site.phone}
                </a>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/40 px-6 py-2.5 text-xs font-medium text-emerald-300 hover:bg-emerald-500/20 transition-colors"
                >
                  <WhatsAppIcon size={14} /> WhatsApp Inquiry
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* FULL-SCREEN LIGHTBOX MODAL WITH NEXT/PREV NAVIGATION     */}
      {/* ======================================================== */}
      {lightboxIndex !== null && activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-3 sm:p-6 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Top Bar: Counter & Close Button */}
          <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between z-30 pointer-events-none">
            <div className="inline-flex items-center gap-2 rounded-full bg-black/70 border border-stone-800 px-4 py-1.5 text-xs font-mono text-stone-300 pointer-events-auto backdrop-blur-md">
              <span className="text-[#D49B55] font-bold">
                {lightboxIndex + 1}
              </span>
              <span>/</span>
              <span>{experiencePhotos.length}</span>
              <span className="text-stone-500">·</span>
              <span className="text-emerald-400 font-sans text-[11px]">Real Photo</span>
            </div>

            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="grid size-11 place-items-center rounded-full bg-black/80 border border-stone-800 text-white hover:text-[#D49B55] hover:border-[#D49B55] transition-all cursor-pointer pointer-events-auto shadow-2xl"
              aria-label="Close lightbox"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Navigation: Prev Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) =>
                prev !== null
                  ? (prev - 1 + experiencePhotos.length) % experiencePhotos.length
                  : null
              );
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 grid size-12 place-items-center rounded-full bg-black/80 border border-stone-800 text-stone-300 hover:text-white hover:border-[#D49B55] hover:scale-105 transition-all cursor-pointer shadow-2xl"
            aria-label="Previous image"
          >
            <ChevronLeft className="size-6" />
          </button>

          {/* Navigation: Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) =>
                prev !== null ? (prev + 1) % experiencePhotos.length : null
              );
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 grid size-12 place-items-center rounded-full bg-black/80 border border-stone-800 text-stone-300 hover:text-white hover:border-[#D49B55] hover:scale-105 transition-all cursor-pointer shadow-2xl"
            aria-label="Next image"
          >
            <ChevronRight className="size-6" />
          </button>

          {/* Main Lightbox Content Container */}
          <div
            className="relative max-w-5xl w-full flex flex-col items-center justify-center animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Box */}
            <div className="relative max-h-[70vh] w-full flex items-center justify-center overflow-hidden rounded-2xl border border-stone-800 bg-stone-950 shadow-2xl">
              <img
                src={activePhoto?.src ?? ""}
                alt={activePhoto?.title ?? "Photograph"}
                className="max-h-[70vh] w-auto max-w-full object-contain select-none"
              />
            </div>

            {/* Caption & Details below Image */}
            <div className="mt-4 w-full rounded-2xl border border-stone-800/80 bg-[#14110E]/90 p-4 sm:p-5 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md">
              <div>
                <span className="text-[10px] font-semibold text-[#D49B55] uppercase tracking-wider">
                  {activePhoto?.category ?? ""} · {activePhoto?.subtitle ?? ""}
                </span>
                <h3 className="text-lg sm:text-xl font-display text-white mt-0.5">
                  {activePhoto?.title ?? ""}
                </h3>
                <p className="mt-1 text-xs text-stone-300 max-w-2xl">
                  {activePhoto?.description ?? ""}
                </p>
              </div>

              {/* Action in Lightbox */}
              <a
                href={site.phoneHref}
                className="rounded-full bg-[#D49B55] px-5 py-2 text-xs font-semibold text-stone-950 hover:bg-[#C08845] transition-colors whitespace-nowrap shrink-0"
              >
                Call: {site.phone}
              </a>
            </div>

            {/* Thumbnail Navigation Strip */}
            <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1 max-w-full no-scrollbar">
              {experiencePhotos.map((photo, idx) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setLightboxIndex(idx)}
                  className={`relative size-14 sm:size-16 rounded-lg overflow-hidden border transition-all shrink-0 cursor-pointer ${
                    lightboxIndex === idx
                      ? "border-[#D49B55] scale-105 shadow-md shadow-[#D49B55]/30"
                      : "border-stone-800 opacity-60 hover:opacity-100 hover:border-stone-600"
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="size-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
