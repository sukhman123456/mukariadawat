import { useState, useEffect, useCallback } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles, Phone } from "lucide-react";

import heroSpread from "@/assets/hero-spread.jpg";
import foodCurry from "@/assets/food-curry.jpg";
import foodBreads from "@/assets/food-breads.jpg";
import foodTable from "@/assets/food-table.jpg";
import paneerTikka from "@/assets/dish-paneer-tikka.jpg";
import riceBowl from "@/assets/dish-rice-bowl.jpg";

import realSkyLounge from "@/assets/real/dawat-real-sky-lounge.jpg";
import realIndoorLounge from "@/assets/real/dawat-real-indoor-lounge.jpg";
import realSaagRoti from "@/assets/real/dawat-real-saag-roti.jpg";
import realTableMocktail from "@/assets/real/dawat-real-table-mocktail-feast.jpg";
import realReservedDining from "@/assets/real/dawat-real-reserved-dining.jpg";
import realDiningPerspective from "@/assets/real/dawat-real-dining-perspective.jpg";
import realPartyHall from "@/assets/real/dawat-real-balloons-party-hall.jpg";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/lib/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Dawat Restaurant & SKY Lounge, Mukerian" },
      {
        name: "description",
        content:
          "Explore photographs of Dawat Restaurant & SKY Lounge on G.T. Road, Mukerian. Real dining spaces, rooftop lounge, family hall and authentic food.",
      },
      { property: "og:title", content: "Gallery — Dawat Restaurant & SKY Lounge" },
      {
        property: "og:description",
        content: "Authentic atmosphere, SKY Lounge bar, celebration hall and North Indian specialties at Dawat Restaurant.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const items = [
  {
    src: realIndoorLounge,
    alt: "Dawat SKY Lounge Bar with neon sign and rustic pendant lamps",
    caption: "✦ SKY Lounge & Bar Counter",
    tag: "SKY Lounge",
  },
  {
    src: realSkyLounge,
    alt: "Rooftop SKY Lounge outdoor exterior view at twilight",
    caption: "Rooftop SKY Lounge at Dusk",
    tag: "Rooftop",
  },
  {
    src: realSaagRoti,
    alt: "Traditional Punjabi Sarson Ka Saag with Makki Di Roti, white butter and pickles",
    caption: "Authentic Punjabi Saag & Makki Roti",
    tag: "Authentic Food",
  },
  {
    src: realTableMocktail,
    alt: "Family dining banquet table with artisanal mocktails and starters",
    caption: "Royal Dining Feast & Mocktails",
    tag: "Dining Feast",
  },
  {
    src: realReservedDining,
    alt: "Reserved VIP dining setup with crisp glassware and warm lighting",
    caption: "Reserved VIP Dining Table",
    tag: "VIP Hall",
  },
  {
    src: realDiningPerspective,
    alt: "Spacious air-conditioned dining perspective with timber paneling",
    caption: "Air-Conditioned Dining Hall",
    tag: "Dining Hall",
  },
  {
    src: realPartyHall,
    alt: "Grand celebration hall decorated with party balloons for birthdays and anniversaries",
    caption: "Banquet & Celebration Hall",
    tag: "Party Hall",
  },
  {
    src: heroSpread,
    alt: "Full North Indian meal with paneer curry, dal, naan, rice and raita",
    caption: "Traditional Feast Spread",
    tag: "Tandoori Delicacy",
  },
  {
    src: paneerTikka,
    alt: "Paneer tikka skewers on a slate plate with mint chutney",
    caption: "Charcoal Paneer Tikka",
    tag: "Charcoal Kebabs",
  },
  {
    src: foodCurry,
    alt: "North Indian curry in a black karahi",
    caption: "Slow-Cooked Punjabi Gravies",
    tag: "Copper Handis",
  },
];

function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const prevPhoto = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + items.length) % items.length : null
    );
  }, []);

  const nextPhoto = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % items.length : null
    );
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") prevPhoto();
      if (e.key === "ArrowRight") nextPhoto();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, prevPhoto, nextPhoto]);

  const activeItem = lightboxIndex !== null ? items[lightboxIndex] : null;

  return (
    <div className="bg-[#1C1917] text-[#F5EFE6] selection:bg-[#A87545] selection:text-[#F5EFE6] min-h-screen">
      <PageHero
        title="Photo Gallery"
        subtitle="Inside Dawat & The SKY Lounge"
        description="Take a visual tour through our authentic dining halls, the signature SKY Lounge bar, party celebrations, and handcrafted North Indian specialties in Mukerian."
        imageSrc={realIndoorLounge}
      />

      <section className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10 py-12 sm:py-20 lg:py-28">
        <ul className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal as="li" key={item.caption + i} delay={(i % 3) * 60}>
              <figure
                onClick={() => setLightboxIndex(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setLightboxIndex(i)}
                className="group relative overflow-hidden rounded-2xl border border-[#A87545]/25 bg-[#241B16] transition-all duration-300 hover:border-[#A87545]/60 hover:-translate-y-1 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#A87545] shadow-xl hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
              >
                <div className="overflow-hidden aspect-[16/11] relative">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Expand icon pill */}
                  <span className="absolute bottom-3 right-3 grid size-8 place-items-center rounded-full bg-black/70 text-[#C8A875] border border-[#C8A875]/40 backdrop-blur-md opacity-90 group-hover:scale-110 transition-transform">
                    <Maximize2 className="size-3.5" />
                  </span>

                  {/* Tag Pill */}
                  <span className="absolute top-3 left-3 rounded-full bg-[#1C1917]/90 border border-[#A87545]/40 px-2.5 py-0.5 text-[10px] font-semibold text-[#C8A875] backdrop-blur-md shadow-sm">
                    {item.tag}
                  </span>
                </div>
                <figcaption className="p-3.5 sm:p-4 flex items-center justify-between border-t border-[#A87545]/20 bg-[#241B16]">
                  <span className="font-sans text-xs font-semibold tracking-wider text-[#F5EFE6]">
                    {item.caption}
                  </span>
                  <span className="text-[10px] text-[#C8A875] uppercase tracking-widest font-mono">Dawat</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ======================================================== */}
      {/* MOBILE-FRIENDLY LIGHTBOX MODAL                           */}
      {/* ======================================================== */}
      {lightboxIndex !== null && activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-3 sm:p-6 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Top Bar: Counter & Close Button */}
          <div className="absolute top-3 sm:top-4 inset-x-3 sm:inset-x-8 flex items-center justify-between z-30 pointer-events-none">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#241B16]/90 border border-[#A87545]/30 px-3.5 py-1 text-xs font-mono text-[#F5EFE6] pointer-events-auto backdrop-blur-md">
              <span className="text-[#C8A875] font-bold">{lightboxIndex + 1}</span>
              <span>/</span>
              <span>{items.length}</span>
              <span className="text-[#D8C8B8]/50">·</span>
              <span className="text-[#C8A875] font-sans text-[11px]">{activeItem.tag}</span>
            </div>

            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="grid size-10 sm:size-11 place-items-center rounded-full bg-[#241B16]/90 border border-[#A87545]/30 text-[#F5EFE6] hover:text-[#C8A875] hover:border-[#C8A875] transition-all cursor-pointer pointer-events-auto shadow-2xl touch-target"
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
              prevPhoto();
            }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 grid size-9 sm:size-12 place-items-center rounded-full bg-[#241B16]/90 border border-[#A87545]/30 text-[#F5EFE6] hover:text-[#C8A875] hover:border-[#C8A875] hover:scale-105 transition-all cursor-pointer shadow-2xl"
            aria-label="Previous image"
          >
            <ChevronLeft className="size-5 sm:size-6" />
          </button>

          {/* Navigation: Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 grid size-9 sm:size-12 place-items-center rounded-full bg-[#241B16]/90 border border-[#A87545]/30 text-[#F5EFE6] hover:text-[#C8A875] hover:border-[#C8A875] hover:scale-105 transition-all cursor-pointer shadow-2xl"
            aria-label="Next image"
          >
            <ChevronRight className="size-5 sm:size-6" />
          </button>

          {/* Main Lightbox Content Container */}
          <div
            className="relative max-w-4xl w-full flex flex-col items-center justify-center animate-in zoom-in-95 duration-200 px-2 sm:px-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Box */}
            <div className="relative max-h-[58vh] sm:max-h-[72vh] w-full flex items-center justify-center overflow-hidden rounded-2xl border border-[#A87545]/30 bg-black shadow-2xl">
              <img
                src={activeItem.src}
                alt={activeItem.alt}
                className="max-h-[58vh] sm:max-h-[72vh] w-auto max-w-full object-contain select-none"
              />
            </div>

            {/* Caption bar */}
            <div className="mt-3 w-full rounded-2xl border border-[#A87545]/25 bg-[#241B16]/95 p-3.5 sm:p-4 text-left flex items-center justify-between gap-3 backdrop-blur-md">
              <div>
                <span className="text-[10px] font-semibold text-[#C8A875] uppercase tracking-wider block">
                  ✦ {activeItem.tag}
                </span>
                <h3 className="text-sm sm:text-base font-display text-[#F5EFE6] mt-0.5">
                  {activeItem.caption}
                </h3>
              </div>
              <a
                href={site.phoneHref}
                className="rounded-full bg-[#A87545] px-4 py-1.5 text-xs font-semibold text-[#F5EFE6] hover:bg-[#B98350] transition-colors whitespace-nowrap shrink-0 shadow-sm"
              >
                Call to Reserve
              </a>
            </div>

            {/* Thumbnails */}
            <div className="mt-2.5 flex items-center gap-2 overflow-x-auto pb-1 max-w-full no-scrollbar">
              {items.map((item, idx) => (
                <button
                  key={item.caption + idx}
                  type="button"
                  onClick={() => setLightboxIndex(idx)}
                  className={`relative size-12 sm:size-14 rounded-lg overflow-hidden border transition-all shrink-0 cursor-pointer ${
                    lightboxIndex === idx
                      ? "border-[#A87545] scale-105 shadow-md shadow-[#A87545]/30"
                      : "border-[#A87545]/20 opacity-60 hover:opacity-100 hover:border-[#A87545]/50"
                  }`}
                >
                  <img src={item.src} alt={item.alt} className="size-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
