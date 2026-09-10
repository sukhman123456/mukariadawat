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
    <div className="bg-[#F5EFE6] text-[#1C1917] overflow-hidden">
      {/* ======================================================== */}
      {/* 1. HERO / RESTAURANT EXPERIENCE                           */}
      {/* ======================================================== */}
      <section className="relative py-12 sm:py-16 lg:py-24 border-t border-[#A87545]/20 overflow-hidden bg-[#F5EFE6]">
        {/* Subtle warm glow backdrop */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-10 size-[600px] rounded-full bg-[#A87545]/10 blur-[140px]"
        />

        <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1.2fr] lg:gap-16">
            {/* Left Content */}
            <Reveal className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#A87545]/30 bg-[#A87545]/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#A87545] uppercase w-fit">
                <Sparkles className="size-3.5 text-[#A87545]" /> OUR RESTAURANT · EXPERIENCE DAWAT
              </div>

              <h2 className="mt-4 sm:mt-5 font-display text-3xl sm:text-5xl lg:text-[3.6rem] font-normal leading-[1.12] tracking-tight text-[#1C1917]">
                An Experience
                <br />
                <span className="text-[#A87545] italic font-serif font-light">
                  Worth Savoring
                </span>
              </h2>

              <p className="mt-4 sm:mt-6 font-sans text-sm sm:text-lg leading-relaxed text-[#786A5E] max-w-xl">
                Step into Dawat Restaurant, where warm hospitality, delicious Indian flavours and a
                welcoming atmosphere come together.
              </p>

              {/* Highlights row */}
              <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-3 sm:gap-4 border-y border-[#A87545]/20 py-4 sm:py-5">
                <div>
                  <span className="block font-display text-xl sm:text-3xl font-semibold text-[#A87545]">
                    4.0 ★
                  </span>
                  <span className="mt-0.5 sm:mt-1 block text-xs text-[#786A5E]">
                    965+ Reviews
                  </span>
                </div>
                <div>
                  <span className="block font-display text-xl sm:text-3xl font-semibold text-[#1C1917]">
                    100%
                  </span>
                  <span className="mt-0.5 sm:mt-1 block text-xs text-[#786A5E]">
                    Real Photos
                  </span>
                </div>
                <div>
                  <span className="block font-display text-xl sm:text-3xl font-semibold text-[#1C1917]">
                    Sky Lounge
                  </span>
                  <span className="mt-0.5 sm:mt-1 block text-xs text-[#786A5E]">
                    Rooftop Dining
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={scrollToExplore}
                  className="inline-flex items-center gap-2 rounded-full bg-[#A87545] px-6 sm:px-7 py-3 text-xs sm:text-sm font-semibold tracking-wide text-[#F5EFE6] transition-all duration-200 hover:bg-[#B98350] hover:shadow-lg hover:shadow-[#A87545]/25 active:scale-95 cursor-pointer"
                >
                  Explore Our Restaurant <ArrowRight className="size-4" />
                </button>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-[#A87545]/40 bg-[#241B16] px-5 sm:px-6 py-3 text-xs sm:text-sm font-semibold tracking-wide text-[#F5EFE6] hover:border-[#C8A875] hover:text-[#C8A875] shadow-sm transition-colors"
                >
                  <Phone className="size-4 text-[#C8A875]" /> Call: {site.phone}
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
                className="group relative block overflow-hidden rounded-2xl sm:rounded-3xl border border-[#A87545]/30 bg-[#241B16] shadow-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#A87545]"
              >
                <div className="aspect-[16/10] sm:aspect-[16/11] overflow-hidden">
                  <img
                    src={realSkyLounge}
                    alt="Dawat Restaurant SKY Lounge outdoor rooftop exterior at night"
                    width={1200}
                    height={850}
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Dark/Warm gradient overlay to tone down neon */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500" />

                {/* Top Badge: Actual Photo Tag */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                  <span className="rounded-full border border-emerald-500/40 bg-black/75 px-3 py-1 text-[10.5px] font-semibold text-emerald-400 backdrop-blur-md">
                    ● Real Photography
                  </span>
                  <span className="rounded-full border border-[#A87545]/30 bg-black/75 px-3 py-1 text-[10.5px] text-[#D8C8B8] backdrop-blur-md">
                    G.T. Road, Mukerian
                  </span>
                </div>

                {/* Bottom Overlay Info & Arrow */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 flex items-end justify-between">
                  <div>
                    <span className="text-[10.5px] font-semibold text-[#C8A875] uppercase tracking-wider">
                      Rooftop & Exterior
                    </span>
                    <h3 className="mt-1 font-display text-lg sm:text-2xl text-[#F5EFE6]">
                      The Famous SKY Lounge at Night
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-[#D8C8B8] line-clamp-1">
                      Click to expand full-screen view
                    </p>
                  </div>

                  <span className="grid size-10 sm:size-11 place-items-center rounded-full border border-[#A87545]/40 bg-black/60 text-[#C8A875] transition-all duration-300 group-hover:border-[#C8A875] group-hover:bg-[#A87545] group-hover:text-[#F5EFE6] shrink-0 ml-3">
                    <Maximize2 className="size-4 transition-transform duration-300 group-hover:scale-110" />
                  </span>
                </div>
              </div>

              {/* Floating Overlapping Luxury Card */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 max-w-xs items-center gap-3 rounded-2xl border border-[#A87545]/30 bg-[#241B16] p-4 shadow-xl backdrop-blur-md text-[#F5EFE6]">
                <div className="grid size-10 place-items-center rounded-xl bg-[#A87545]/20 text-[#C8A875]">
                  <UtensilsCrossed className="size-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#F5EFE6]">
                    Authentic North Indian Feast
                  </h4>
                  <p className="text-[11px] text-[#D8C8B8] mt-0.5">
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
      <section id="food-experience" className="py-12 sm:py-16 lg:py-24 border-t border-[#A87545]/20 bg-[#1C1917] relative text-[#F5EFE6]">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-12">
          {/* Section Header */}
          <Reveal className="max-w-2xl">
            <p className="font-sans text-xs font-semibold tracking-[0.25em] text-[#C8A875] uppercase">
              CULINARY CRAFT
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-tight text-[#F5EFE6]">
              Made With Love,
              <br />
              <span className="text-[#C8A875] italic font-serif">Served With Flavour</span>
            </h2>
            <p className="mt-4 font-sans text-sm sm:text-base leading-relaxed text-[#D8C8B8]">
              From traditional Indian favourites to beautifully presented dishes, every plate at Dawat is
              prepared to make your dining experience memorable.
            </p>
          </Reveal>

          {/* Editorial Staggered Food Grid */}
          <div className="mt-8 sm:mt-12 grid gap-6 lg:grid-cols-12 items-stretch">
            {/* Left Dominant Card (Makki Roti & Sarson Saag) */}
            <Reveal
              delay={100}
              className="lg:col-span-7 flex flex-col justify-between overflow-hidden rounded-2xl border border-[#A87545]/25 bg-[#241B16] group relative shadow-lg transition-all duration-500 hover:border-[#C8A875]/60 hover:-translate-y-1.5 cursor-pointer"
            >
              <div
                onClick={() => setLightboxIndex(2)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setLightboxIndex(2)}
                className="size-full flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] sm:aspect-[16/11] overflow-hidden bg-black">
                  <img
                    src={realSaagRoti}
                    alt="Authentic Makki di Roti with Sarson da Saag and fresh white butter at Dawat"
                    width={900}
                    height={620}
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500" />

                  <div className="absolute top-3.5 left-3.5">
                    <span className="rounded-full bg-[#A87545] px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider text-[#F5EFE6] shadow-md">
                      Chef's Pride · Real Dish
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-7 flex items-end justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-semibold tracking-wider text-[#C8A875] uppercase">
                      TRADITIONAL WINTER DELICACY
                    </span>
                    <h3 className="mt-1 font-display text-xl sm:text-2xl text-[#F5EFE6] group-hover:text-[#C8A875] transition-colors">
                      Makki di Roti & Sarson da Saag
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#D8C8B8] leading-relaxed max-w-lg line-clamp-2">
                      Tender mustard leaves slow-simmered with garlic, ginger, and green chilies, served with
                      hand-stretched maize flatbread and churned desi makhan.
                    </p>
                  </div>

                  <span className="grid size-10 place-items-center rounded-full border border-[#A87545]/40 bg-black/60 text-[#C8A875] transition-all duration-300 group-hover:border-[#C8A875] group-hover:bg-[#A87545] group-hover:text-[#F5EFE6] shrink-0">
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Right Column (Mocktail Feast & Beverage Bar) */}
            <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
              {/* Card 2: Table Feast & Blue Mocktail */}
              <Reveal
                delay={200}
                className="overflow-hidden rounded-2xl border border-[#A87545]/25 bg-[#241B16] group relative shadow-lg transition-all duration-500 hover:border-[#C8A875]/60 hover:-translate-y-1.5 cursor-pointer"
              >
                <div
                  onClick={() => setLightboxIndex(3)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setLightboxIndex(3)}
                  className="size-full"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src={realTableMocktail}
                      alt="Evening dining table feast with blue mocktail and sizzling tandoori platter"
                      width={700}
                      height={450}
                      className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500" />

                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-black/75 border border-[#A87545]/40 px-2.5 py-1 text-[10px] font-semibold text-[#C8A875] backdrop-blur-md">
                        ● Real Dining Snapshot
                      </span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 flex items-end justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-semibold tracking-wider text-[#C8A875] uppercase">
                        SIZZLERS & REFRESHMENTS
                      </span>
                      <h3 className="mt-1 font-display text-lg text-[#F5EFE6] group-hover:text-[#C8A875] transition-colors">
                        Ocean Blue Cooler & Charcoal Sizzlers
                      </h3>
                      <p className="mt-1 text-xs text-[#D8C8B8] line-clamp-1">
                        Chilled mocktails paired with smoking hot tandoori platters.
                      </p>
                    </div>
                    <span className="grid size-8 sm:size-9 place-items-center rounded-full border border-[#A87545]/40 bg-black/60 text-[#C8A875] transition-all duration-300 group-hover:border-[#C8A875] group-hover:bg-[#A87545] group-hover:text-[#F5EFE6] shrink-0">
                      <ArrowUpRight className="size-3.5" />
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Card 3: Beverage & Bar Counter (Full card format) */}
              <Reveal
                delay={250}
                className="overflow-hidden rounded-2xl border border-[#A87545]/25 bg-[#241B16] group relative shadow-lg transition-all duration-500 hover:border-[#C8A875]/60 hover:-translate-y-1.5 cursor-pointer"
              >
                <div
                  onClick={() => setLightboxIndex(6)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setLightboxIndex(6)}
                  className="size-full"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src={realBarCounter}
                      alt="Dawat modern beverage and mocktail bar counter"
                      width={700}
                      height={450}
                      className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500" />

                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-black/75 border border-[#A87545]/40 px-2.5 py-1 text-[10px] font-semibold text-[#C8A875] backdrop-blur-md">
                        ● Beverage & POS Counter
                      </span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 flex items-end justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-semibold tracking-wider text-[#C8A875] uppercase">
                        DRINKS & SHAKES STATION
                      </span>
                      <h4 className="mt-1 font-display text-lg text-[#F5EFE6] group-hover:text-[#C8A875] transition-colors">
                        Beverage & Mocktail Bar
                      </h4>
                      <p className="mt-1 text-xs text-[#D8C8B8] line-clamp-1">
                        Thick sweet lassis, cold coffees, shakes and fresh fruit coolers.
                      </p>
                    </div>
                    <span className="grid size-8 sm:size-9 place-items-center rounded-full border border-[#A87545]/40 bg-black/60 text-[#C8A875] transition-all duration-300 group-hover:border-[#C8A875] group-hover:bg-[#A87545] group-hover:text-[#F5EFE6] shrink-0">
                      <ArrowUpRight className="size-3.5" />
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. DINING & AMBIENCE (Collage with 100% Real Interiors)   */}
      {/* ======================================================== */}
      <section className="py-12 sm:py-16 lg:py-24 border-t border-[#A87545]/20 bg-[#F5EFE6] relative">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-12">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <Reveal className="max-w-xl">
              <p className="font-sans text-xs font-semibold tracking-[0.25em] text-[#A87545] uppercase">
                COMFORT & ELEGANCE
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-tight text-[#1C1917]">
                Your Table. Your Moments.
              </h2>
              <p className="mt-4 font-sans text-sm sm:text-base leading-relaxed text-[#786A5E]">
                A comfortable and welcoming space for family dinners, celebrations, casual meals and
                special moments.
              </p>
            </Reveal>

            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full border border-[#A87545]/40 bg-[#241B16] px-6 py-2.5 text-xs font-semibold tracking-wider text-[#F5EFE6] hover:border-[#C8A875] hover:text-[#C8A875] shadow-sm uppercase transition-all duration-200 self-start md:self-auto"
            >
              Explore Menu <ArrowRight className="size-3.5 text-[#C8A875]" />
            </Link>
          </div>

          {/* Premium Image Collage using 100% Real Photos */}
          <div className="mt-8 sm:mt-12 grid gap-5 sm:gap-6 md:grid-cols-12 items-stretch">
            {/* Left Hero: Real Reserved Dining Room */}
            <Reveal
              delay={100}
              className="md:col-span-6 group relative overflow-hidden rounded-2xl border border-[#A87545]/25 bg-[#241B16] shadow-lg transition-all duration-500 hover:border-[#C8A875]/60 hover:-translate-y-1 cursor-pointer"
            >
              <div
                onClick={() => setLightboxIndex(4)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setLightboxIndex(4)}
                className="size-full flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden bg-black">
                  <img
                    src={realReservedDining}
                    alt="Real indoor dining area at Dawat Restaurant Mukerian with wooden table and reserved card"
                    width={900}
                    height={620}
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500" />

                  <div className="absolute top-3.5 left-3.5">
                    <span className="rounded-full bg-black/75 border border-[#A87545]/50 px-3 py-1 text-[10.5px] font-semibold text-[#C8A875] backdrop-blur-md">
                      ● Actual Reserved Seating
                    </span>
                  </div>

                  <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 flex items-end justify-between">
                    <div>
                      <span className="text-[10px] font-semibold tracking-wider text-[#C8A875] uppercase">
                        FINE DINING ROOM
                      </span>
                      <h3 className="mt-1 font-display text-lg sm:text-xl text-[#F5EFE6]">
                        Private Reserved Seating
                      </h3>
                      <p className="mt-1 text-xs text-[#D8C8B8] max-w-sm line-clamp-2">
                        Handcrafted wooden tables, upholstered chairs, and warm recessed lighting.
                      </p>
                    </div>
                    <span className="grid size-9 sm:size-10 place-items-center rounded-full bg-black/60 text-[#C8A875] border border-[#A87545]/40 group-hover:bg-[#A87545] group-hover:text-[#F5EFE6] transition-colors shrink-0 ml-3">
                      <Maximize2 className="size-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right Stack: 2 Real Indoor Photos with consistent full card design */}
            <div className="md:col-span-6 flex flex-col gap-5 sm:gap-6 justify-between">
              {/* Tile 1: Real Indoor Lounge & Glowing Sign */}
              <Reveal
                delay={200}
                className="group relative overflow-hidden rounded-2xl border border-[#A87545]/25 bg-[#241B16] shadow-lg transition-all duration-500 hover:border-[#C8A875]/60 hover:-translate-y-1 cursor-pointer"
              >
                <div
                  onClick={() => setLightboxIndex(1)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setLightboxIndex(1)}
                  className="size-full"
                >
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-black">
                    <img
                      src={realIndoorLounge}
                      alt="Real Indoor Bar and Lounge area with glowing neon Lounge sign and gold pendant lamp at Dawat"
                      width={800}
                      height={480}
                      className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-black/75 border border-[#A87545]/50 px-3 py-1 text-[10px] font-semibold text-[#C8A875] backdrop-blur-md">
                        ● Real Bar & Lounge
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-semibold tracking-wider text-[#C8A875] uppercase">
                          BEVERAGE STATION
                        </span>
                        <h4 className="font-display text-base sm:text-lg text-[#F5EFE6]">
                          Indoor Bar & Glowing Lounge
                        </h4>
                        <p className="text-[11px] text-[#D8C8B8] line-clamp-1">
                          Gold pendant lighting, wooden counter, and ambient hospitality
                        </p>
                      </div>
                      <span className="grid size-8 sm:size-9 place-items-center rounded-full bg-black/60 text-[#C8A875] border border-[#A87545]/40 group-hover:bg-[#A87545] group-hover:text-[#F5EFE6] transition-colors shrink-0">
                        <Maximize2 className="size-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Tile 2: Real Dining Perspective - AMBIENT HOSPITALITY (Proper Full Card) */}
              <Reveal
                delay={250}
                className="group relative overflow-hidden rounded-2xl border border-[#A87545]/25 bg-[#241B16] shadow-lg transition-all duration-500 hover:border-[#C8A875]/60 hover:-translate-y-1 cursor-pointer"
              >
                <div
                  onClick={() => setLightboxIndex(5)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setLightboxIndex(5)}
                  className="size-full"
                >
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-black">
                    <img
                      src={realDiningPerspective}
                      alt="Real dining perspective with textured stone wall at Dawat"
                      width={800}
                      height={480}
                      className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500" />

                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-black/75 border border-[#A87545]/50 px-3 py-1 text-[10px] font-semibold text-[#C8A875] backdrop-blur-md">
                        ● AC Family Hall
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-semibold tracking-wider text-[#C8A875] uppercase">
                          AMBIENT HOSPITALITY
                        </span>
                        <h4 className="font-display text-base sm:text-lg text-[#F5EFE6]">
                          Textured Stone Walls & Pendant Warmth
                        </h4>
                        <p className="text-[11px] text-[#D8C8B8] line-clamp-1">
                          Comfortable air-conditioned dining designed for family meals and celebrations
                        </p>
                      </div>
                      <span className="grid size-8 sm:size-9 place-items-center rounded-full bg-black/60 text-[#C8A875] border border-[#A87545]/40 group-hover:bg-[#A87545] group-hover:text-[#F5EFE6] transition-colors shrink-0">
                        <Maximize2 className="size-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. ROOFTOP / SKY LOUNGE (Toned down with warm dark overlay) */}
      {/* ======================================================== */}
      <section className="py-12 sm:py-16 lg:py-24 border-t border-[#A87545]/20 bg-gradient-to-b from-[#1C1917] via-[#241B16] to-[#1C1917] relative overflow-hidden text-[#F5EFE6]">
        {/* Warm amber/bronze glow backdrop */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 size-[500px] rounded-full bg-[#A87545]/10 blur-[140px]"
        />

        <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Left: Real SKY Lounge Photograph with warm dark overlay */}
            <Reveal
              delay={100}
              className="lg:col-span-7 group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#A87545]/30 bg-black shadow-2xl transition-all duration-500 hover:border-[#C8A875]/60 hover:-translate-y-1.5 cursor-pointer"
            >
              <div
                onClick={() => setLightboxIndex(0)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setLightboxIndex(0)}
                className="size-full"
              >
                <div className="relative aspect-[16/10] sm:aspect-[16/11] overflow-hidden">
                  <img
                    src={realSkyLounge}
                    alt="Real SKY Lounge rooftop outdoor dining area at night"
                    width={1000}
                    height={700}
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Toned down warm dark overlay to eliminate bright blue/neon clash */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-[#241B16]/65 to-black/40 opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-[#A87545]/10 mix-blend-multiply pointer-events-none" />

                  {/* Top luxury badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/80 border border-[#C8A875]/50 px-3.5 py-1 text-xs font-semibold text-[#C8A875] backdrop-blur-md shadow-lg">
                      <Moon className="size-3.5" /> Rooftop Starlight Atmosphere
                    </span>
                  </div>

                  {/* Bottom caption */}
                  <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 flex items-end justify-between">
                    <div>
                      <span className="text-[10.5px] font-semibold tracking-widest text-[#C8A875] uppercase">
                        REAL PHOTOGRAPHY · DAWAT MUKERIAN
                      </span>
                      <h3 className="mt-1 font-display text-xl sm:text-2xl text-[#F5EFE6]">
                        Night Ambience at the SKY Lounge
                      </h3>
                      <p className="mt-1 text-xs text-[#D8C8B8]">
                        Warm ambient lighting, wooden pergolas, and refreshing open starlit skies
                      </p>
                    </div>
                    <span className="grid size-10 place-items-center rounded-full bg-black/70 text-[#C8A875] border border-[#A87545]/40 group-hover:bg-[#A87545] group-hover:text-[#F5EFE6] transition-colors shrink-0">
                      <Maximize2 className="size-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right Content: Refined Sky Lounge Signature */}
            <Reveal delay={200} className="lg:col-span-5 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#A87545]/40 bg-[#241B16] px-4 py-1.5 shadow-md w-fit backdrop-blur-md">
                <span className="font-display text-sm font-bold tracking-wider text-[#C8A875]">
                  ✦ SKY LOUNGE & BAR
                </span>
                <span className="text-[#A87545]/40 text-xs">·</span>
                <span className="text-[11px] font-sans font-medium text-[#D8C8B8]">
                  At Dawat Mukerian
                </span>
              </div>

              <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[2.85rem] font-normal leading-tight text-[#F5EFE6]">
                Dine Under
                <br />
                <span className="text-[#C8A875] italic font-serif">The Starlit Skies</span>
              </h2>

              <p className="mt-4 font-sans text-sm sm:text-base leading-relaxed text-[#D8C8B8]">
                Enjoy authentic North Indian flavours, chilling draught brews, and memorable evenings in our signature rooftop ambience on G.T. Road.
              </p>

              {/* Sky Lounge Feature List */}
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3.5 rounded-2xl border border-[#A87545]/20 bg-[#241B16]/90 p-4">
                  <div className="grid size-9 place-items-center rounded-xl bg-[#A87545]/15 text-[#C8A875] shrink-0">
                    <Moon className="size-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#F5EFE6]">
                      Starlit Open-Air Dining
                    </h4>
                    <p className="text-[11px] text-[#D8C8B8] mt-0.5">
                      Relax under evening breezes with charming ambient fairy lights and wooden pergola shade.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-2xl border border-[#A87545]/20 bg-[#241B16]/90 p-4">
                  <div className="grid size-9 place-items-center rounded-xl bg-[#A87545]/15 text-[#C8A875] shrink-0">
                    <Wine className="size-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#F5EFE6]">
                      Chilled Spirits, Draughts & Sizzlers
                    </h4>
                    <p className="text-[11px] text-[#D8C8B8] mt-0.5">
                      Sip on fresh mocktails, draught brews and smoking hot tandoori platters with family and friends.
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
                  className="luxury-shimmer inline-flex items-center gap-2 rounded-full bg-[#A87545] hover:bg-[#B98350] hover:shadow-[0_0_20px_rgba(200,168,117,0.35)] px-7 py-3 text-xs sm:text-sm font-bold tracking-wide text-[#F5EFE6] transition-all duration-200 shadow-lg shadow-[#A87545]/25 active:scale-95"
                >
                  <WhatsAppIcon size={16} /> WhatsApp Inquiry
                </a>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-1.5 text-xs text-[#D8C8B8] hover:text-[#F5EFE6] transition-colors"
                >
                  <Phone className="size-3.5 text-[#C8A875]" /> Call: {site.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. SPECIAL MOMENTS (Celebration & Party Hall)              */}
      {/* ======================================================== */}
      <section className="py-12 sm:py-16 lg:py-24 border-t border-[#A87545]/20 bg-[#F5EFE6] relative text-[#1C1917]">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <Reveal className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#A87545]/35 bg-[#241B16] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#C8A875] uppercase">
                <PartyPopper className="size-3.5 text-[#C8A875]" /> CELEBRATIONS & PARTIES
              </div>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-tight text-[#1C1917]">
                Celebrate Every Moment
              </h2>
              <p className="mt-3 font-sans text-sm sm:text-base leading-relaxed text-[#786A5E]">
                From birthdays and family gatherings to special celebrations, Dawat is a place to create memories.
              </p>
            </Reveal>

            <Link
              to="/catering"
              className="inline-flex items-center gap-2 rounded-full border border-[#A87545]/40 bg-[#241B16] px-6 py-2.5 text-xs font-semibold tracking-wider text-[#F5EFE6] hover:border-[#C8A875] hover:text-[#C8A875] shadow-sm uppercase transition-all duration-200 self-start md:self-auto"
            >
              Catering & Banquets <ArrowRight className="size-3.5 text-[#C8A875]" />
            </Link>
          </div>

          {/* Horizontal Gallery Showcase */}
          <div className="mt-8 sm:mt-12 grid gap-6 lg:grid-cols-12 items-stretch">
            {/* Real Party Hall Photo */}
            <Reveal
              delay={100}
              className="lg:col-span-8 group relative overflow-hidden rounded-2xl border border-[#A87545]/25 bg-[#241B16] shadow-lg transition-all duration-500 hover:border-[#C8A875]/60 hover:-translate-y-1.5 cursor-pointer"
            >
              <div
                onClick={() => setLightboxIndex(7)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setLightboxIndex(7)}
                className="size-full"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={realPartyHall}
                    alt="Dawat Restaurant party hall decorated with colorful festive balloons and banquet table seating"
                    width={900}
                    height={560}
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500" />

                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-black/75 border border-[#A87545]/50 px-3 py-1 text-[11px] font-semibold text-[#C8A875] backdrop-blur-md">
                      ● Real Party Hall Setup
                    </span>
                  </div>

                  <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 flex items-end justify-between">
                    <div>
                      <span className="text-[10.5px] font-semibold tracking-wider text-[#C8A875] uppercase">
                        BIRTHDAYS & PRIVATE CELEBRATIONS
                      </span>
                      <h3 className="mt-1 font-display text-xl sm:text-2xl text-[#F5EFE6]">
                        Festive Party Hall Decorated With Care
                      </h3>
                      <p className="mt-1 text-xs text-[#D8C8B8] max-w-lg line-clamp-1">
                        Colorful balloon clusters, long banquet setups, and delicious multi-course Punjabi meals.
                      </p>
                    </div>
                    <span className="grid size-10 place-items-center rounded-full bg-black/70 text-[#C8A875] border border-[#A87545]/40 group-hover:bg-[#A87545] group-hover:text-[#F5EFE6] transition-colors shrink-0">
                      <Maximize2 className="size-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Celebration Booking Information Card */}
            <Reveal
              delay={200}
              className="lg:col-span-4 flex flex-col justify-between rounded-2xl border border-[#A87545]/25 bg-[#241B16] p-6 sm:p-7 shadow-lg text-[#F5EFE6]"
            >
              <div>
                <span className="text-xs font-semibold text-[#C8A875] uppercase tracking-wider">
                  HOST YOUR CELEBRATION
                </span>
                <h3 className="mt-2 font-display text-2xl text-[#F5EFE6]">
                  Plan Your Event at Dawat
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#D8C8B8] leading-relaxed">
                  Whether it is an intimate birthday party, milestone anniversary, family reunion, or corporate gathering — we handle the food, ambience, and hospitality with care.
                </p>

                <div className="mt-6 space-y-3 pt-6 border-t border-[#A87545]/20">
                  <div className="flex items-center gap-2.5 text-xs text-[#F5EFE6]">
                    <span className="size-1.5 rounded-full bg-[#C8A875]" />
                    Customized Veg & Non-Veg Party Menus
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#F5EFE6]">
                    <span className="size-1.5 rounded-full bg-[#C8A875]" />
                    Festive Hall Decoration & Seating Options
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#F5EFE6]">
                    <span className="size-1.5 rounded-full bg-[#C8A875]" />
                    Dedicated Service Staff & Live Charcoal Tandoor
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#A87545]/20 flex flex-col gap-3">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#A87545] hover:bg-[#B98350] px-6 py-3 text-xs sm:text-sm font-semibold text-[#F5EFE6] transition-colors shadow-md active:scale-95"
                >
                  <Phone className="size-4" /> Call {site.phone}
                </a>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-600/40 bg-emerald-950/40 px-6 py-2.5 text-xs font-medium text-emerald-300 hover:bg-emerald-950/70 transition-colors active:scale-95"
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
            <div className="inline-flex items-center gap-2 rounded-full bg-black/70 border border-[#B47A46]/30 px-4 py-1.5 text-xs font-mono text-[#FAF7F2] pointer-events-auto backdrop-blur-md">
              <span className="text-[#D4AF37] font-bold">
                {lightboxIndex + 1}
              </span>
              <span>/</span>
              <span>{experiencePhotos.length}</span>
              <span className="text-[#B47A46]/40">·</span>
              <span className="text-emerald-400 font-sans text-[11px]">Real Photo</span>
            </div>

            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="grid size-11 place-items-center rounded-full bg-black/80 border border-[#B47A46]/30 text-white hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all cursor-pointer pointer-events-auto shadow-2xl"
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
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 grid size-9 sm:size-12 place-items-center rounded-full bg-black/85 border border-[#B47A46]/30 text-[#FAF7F2] hover:text-[#D4AF37] hover:border-[#D4AF37] hover:scale-105 transition-all cursor-pointer shadow-2xl"
            aria-label="Previous image"
          >
            <ChevronLeft className="size-5 sm:size-6" />
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
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 grid size-9 sm:size-12 place-items-center rounded-full bg-black/85 border border-[#B47A46]/30 text-[#FAF7F2] hover:text-[#D4AF37] hover:border-[#D4AF37] hover:scale-105 transition-all cursor-pointer shadow-2xl"
            aria-label="Next image"
          >
            <ChevronRight className="size-5 sm:size-6" />
          </button>

          {/* Main Lightbox Content Container */}
          <div
            className="relative max-w-5xl w-full flex flex-col items-center justify-center animate-in zoom-in-95 duration-200 px-2 sm:px-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Box */}
            <div className="relative max-h-[55vh] sm:max-h-[70vh] w-full flex items-center justify-center overflow-hidden rounded-2xl border border-[#B47A46]/30 bg-black shadow-2xl">
              <img
                src={activePhoto?.src ?? ""}
                alt={activePhoto?.title ?? "Photograph"}
                className="max-h-[55vh] sm:max-h-[70vh] w-auto max-w-full object-contain select-none"
              />
            </div>

            {/* Caption & Details below Image */}
            <div className="mt-3 sm:mt-4 w-full rounded-2xl border border-[#B47A46]/30 bg-[#1C1917]/95 p-3.5 sm:p-5 text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 backdrop-blur-md">
              <div>
                <span className="text-[10px] font-semibold text-[#D4AF37] uppercase tracking-wider">
                  {activePhoto?.category ?? ""} · {activePhoto?.subtitle ?? ""}
                </span>
                <h3 className="text-base sm:text-xl font-display text-white mt-0.5">
                  {activePhoto?.title ?? ""}
                </h3>
                <p className="mt-1 text-xs text-[#C4B9AD] line-clamp-2 max-w-2xl">
                  {activePhoto?.description ?? ""}
                </p>
              </div>

              {/* Action in Lightbox */}
              <a
                href={site.phoneHref}
                className="rounded-full bg-[#B47A46] px-5 py-2 text-xs font-semibold text-[#FAF7F2] hover:bg-[#C88B54] transition-colors whitespace-nowrap shrink-0 self-stretch sm:self-auto text-center"
              >
                Call: {site.phone}
              </a>
            </div>

            {/* Thumbnail Navigation Strip */}
            <div className="mt-2.5 sm:mt-3 flex items-center gap-2 overflow-x-auto pb-1 max-w-full no-scrollbar">
              {experiencePhotos.map((photo, idx) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setLightboxIndex(idx)}
                  className={`relative size-12 sm:size-16 rounded-lg overflow-hidden border transition-all shrink-0 cursor-pointer ${
                    lightboxIndex === idx
                      ? "border-[#D4AF37] scale-105 shadow-md shadow-[#D4AF37]/30"
                      : "border-[#B47A46]/25 opacity-60 hover:opacity-100 hover:border-[#B47A46]"
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
