import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MapPin,
  Phone,
  ShoppingBag,
  Store,
  Truck,
  Star,
  ArrowRight,
  CupSoda,
  Wine,
  GlassWater,
  CheckCircle2,
  Clock,
  Navigation,
  UtensilsCrossed,
  Flame,
} from "lucide-react";

import heroFeast from "@/assets/dawat-hero-feast.jpg";
import aboutHall from "@/assets/dawat-about-hall.jpg";
import spicesBanner from "@/assets/dawat-spices-banner.jpg";
import mapCard from "@/assets/dawat-map-card.jpg";
import galleryInterior from "@/assets/dawat-gallery-interior.jpg";

import dishRoti from "@/assets/dish-roti.jpg";
import dishRiceBowl from "@/assets/dish-rice-bowl.jpg";
import foodCurry from "@/assets/food-curry.jpg";
import foodBreads from "@/assets/food-breads.jpg";
import foodTable from "@/assets/food-table.jpg";
import dishPaneerTikka from "@/assets/dish-paneer-tikka.jpg";
import dishRaita from "@/assets/dish-raita.jpg";
import dawatTandooriChicken from "@/assets/dawat-tandoori-chicken.jpg";
import dawatDrinksLassi from "@/assets/dawat-drinks-lassi.jpg";
import dawatMuttonCurry from "@/assets/dawat-mutton-curry.jpg";
import dawatFishTikka from "@/assets/dawat-fish-tikka.jpg";
import dawatGulabJamun from "@/assets/dawat-gulab-jamun.jpg";

// Real Dawat Photographs
import realIndoorLounge from "@/assets/real/dawat-real-indoor-lounge.jpg";
import realSaagRoti from "@/assets/real/dawat-real-saag-roti.jpg";
import realTableMocktail from "@/assets/real/dawat-real-table-mocktail-feast.jpg";
import realReservedDining from "@/assets/real/dawat-real-reserved-dining.jpg";

import { site, restaurantJsonLd } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { ExperienceDawatSection } from "@/components/site/ExperienceDawatSection";
import { WhatsAppIcon } from "@/components/site/SocialIcons";
import { HeroBackgroundAnimation } from "@/components/site/HeroBackgroundAnimation";
import { BarBackgroundAnimation } from "@/components/site/BarBackgroundAnimation";
import { BarLoungeSection } from "@/components/site/BarLoungeSection";
import { HeroRestaurantShowcase } from "@/components/site/HeroRestaurantShowcase";
import { TodaysSpecialSection } from "@/components/site/TodaysSpecialSection";
import { SignatureDishesSection } from "@/components/site/SignatureDishesSection";
import { WhyDawatSection } from "@/components/site/WhyDawatSection";
import { BookTableModal } from "@/components/site/BookTableModal";
import { useLanguage } from "@/lib/translations";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dawat Restaurant & SKY Lounge — Mukerian, G.T. Road" },
      {
        name: "description",
        content:
          "Dawat Restaurant & SKY Lounge on G.T. Road, Mukerian. Authentic Punjabi food, tandoori specialties, and official SKY Lounge bar with 26 drinks. Call 01883-245160.",
      },
      { property: "og:title", content: "Dawat Restaurant & SKY Lounge Mukerian" },
      {
        property: "og:description",
        content:
          "Authentic North Indian flavours & SKY Lounge on G.T. Road, Mukerian. Dine-in, takeaway, delivery and bar.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(restaurantJsonLd) },
    ],
  }),
  component: Home,
});

type HomeMenuTab = "VEGETARIAN" | "NON_VEGETARIAN" | "DRINKS" | "BAR";

function Home() {
  const [activeTab, setActiveTab] = useState<HomeMenuTab>("VEGETARIAN");
  const [bookModalOpen, setBookModalOpen] = useState(false);
  const { lang, t } = useLanguage();

  return (
    <div className="bg-[#FAF7F2] text-[#1C1917] selection:bg-[#A87545] selection:text-[#F5EFE6] overflow-x-hidden">
      {/* ---------------------------------------------------- */}
      {/* 1. CINEMATIC HERO WITH SPLIT RESTAURANT SHOWCASE     */}
      {/* ---------------------------------------------------- */}
      <section className="relative isolate min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#1C1917] py-14 sm:py-16 lg:py-20">
        {/* Dynamic Luxury Background Image */}
        <img
          src={heroFeast}
          alt="Dawat Restaurant luxury fine-dining feast with authentic copper handis, smoking tandoori specialties and golden naans"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="absolute inset-0 size-full object-cover opacity-25 scale-105 animate-subtle-zoom filter brightness-75 contrast-110"
        />

        {/* Ambient Dark Gradient Vignette for Razor-Sharp Contrast */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-[#1C1917]/85 to-[#1C1917]/90"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#1C1917] via-[#1C1917]/70 to-[#1C1917]"
        />

        {/* Rich Ambient Animations: Gentle Warm Light, Golden Embers & Starbursts */}
        <HeroBackgroundAnimation />

        {/* Split Hero Content Container */}
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 w-full">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12 xl:gap-16">
            {/* Left Column: Brand Story, Headline, 4 Pillar Cards, Action Buttons */}
            <div className="flex flex-col items-start text-left">
              {/* Top Royal Badge with Pulsing Live Status */}
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#A87545]/40 bg-[#241B16]/90 px-4 py-1.5 backdrop-blur-md shadow-lg shadow-black/60">
                  <span className="size-2 rounded-full bg-[#C8A875] animate-ping" />
                  <span className="text-[10.5px] sm:text-[11px] font-semibold tracking-[0.25em] text-[#C8A875] uppercase">
                    ✦ G.T. ROAD · MUKERIAN · ESTABLISHED TASTE ✦
                  </span>
                </div>
              </Reveal>

              {/* Main Headline */}
              <Reveal delay={100}>
                <h1 className="mt-4 font-display text-3xl xs:text-4xl sm:text-5xl xl:text-[3.5rem] leading-[1.14] text-[#F5EFE6] tracking-tight">
                  A Royal Feast of Authentic{" "}
                  <span className="bg-gradient-to-r from-[#F5EFE6] via-[#C8A875] to-[#A87545] bg-clip-text text-transparent">
                    North Indian
                  </span>{" "}
                  Flavours.
                </h1>
              </Reveal>

              {/* Rich Narrative & Cultural Heritage Copy */}
              <Reveal delay={180}>
                <p className="mt-4 font-sans text-xs sm:text-[15px] leading-relaxed text-[#D8C8B8]">
                  Welcome to <strong className="text-[#F5EFE6]">Dawat Restaurant & SKY Lounge</strong> (ਦਾਵਤ ਰੈਸਟੋਰੈਂਟ), Mukerian's premier highway culinary icon on G.T. Road. Savor whole-wheat breads baked in our 400°C clay tandoor, gravies slow-simmered in copper handis for 12 hours, and rooftop starlit evenings with chilled draughts at our signature SKY Lounge bar.
                </p>
              </Reveal>

              {/* 4 Trust & Heritage Highlight Cards */}
              <Reveal delay={240} className="w-full">
                <div className="mt-6 grid grid-cols-2 gap-2.5 sm:gap-3 w-full">
                  <div className="flex items-center gap-2.5 rounded-xl border border-[#A87545]/20 bg-[#241B16]/80 p-2.5 backdrop-blur-sm">
                    <div className="grid size-8 place-items-center rounded-lg bg-[#A87545]/20 text-[#C8A875] shrink-0">
                      <Store className="size-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#F5EFE6]">150+ AC Hall</p>
                      <p className="text-[10px] text-[#D8C8B8]/80">Family Cabins & Banquets</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl border border-[#A87545]/20 bg-[#241B16]/80 p-2.5 backdrop-blur-sm">
                    <div className="grid size-8 place-items-center rounded-lg bg-[#A87545]/20 text-[#C8A875] shrink-0">
                      <Flame className="size-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#F5EFE6]">Clay Tandoor</p>
                      <p className="text-[10px] text-[#D8C8B8]/80">Handis Simmered 12h</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl border border-[#A87545]/20 bg-[#241B16]/80 p-2.5 backdrop-blur-sm">
                    <div className="grid size-8 place-items-center rounded-lg bg-[#A87545]/20 text-[#C8A875] shrink-0">
                      <Wine className="size-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#F5EFE6]">SKY Lounge</p>
                      <p className="text-[10px] text-[#D8C8B8]/80">Bar & Draught Beers</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl border border-[#A87545]/20 bg-[#241B16]/80 p-2.5 backdrop-blur-sm">
                    <div className="grid size-8 place-items-center rounded-lg bg-[#A87545]/20 text-[#C8A875] shrink-0">
                      <Star className="size-4 fill-[#C8A875]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#F5EFE6]">4.0 ★ Rating</p>
                      <p className="text-[10px] text-[#D8C8B8]/80">965+ Google Reviews</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Action Buttons */}
              <Reveal delay={300} className="w-full">
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setBookModalOpen(true)}
                    className="luxury-shimmer inline-flex items-center justify-center gap-2 rounded-full bg-[#A87545] hover:bg-[#B98350] hover:shadow-[0_0_25px_rgba(200,168,117,0.40)] px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-[#F5EFE6] shadow-2xl shadow-[#A87545]/30 hover:scale-105 active:scale-95 transition-all cursor-pointer ring-1 ring-[#A87545]/40"
                  >
                    <UtensilsCrossed className="size-4" />
                    <span>{t("book_a_table")}</span>
                  </button>

                  <Link
                    to="/menu"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#A87545]/40 bg-[#241B16]/90 backdrop-blur-md px-6 py-3.5 text-xs sm:text-sm font-semibold text-[#F5EFE6] hover:border-[#C8A875] hover:text-[#C8A875] hover:bg-[#A87545]/10 transition-all"
                  >
                    <span>{lang === "pa" ? "ਮੇਨੂ ਵੇਖੋ" : "Explore Menu"}</span>
                    <ArrowRight className="size-4" />
                  </Link>

                  <a
                    href="#sky-lounge"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#A87545]/30 bg-black/60 backdrop-blur-md px-4 py-3.5 text-xs sm:text-sm font-medium text-[#D8C8B8] hover:border-[#C8A875] hover:text-[#C8A875] transition-all"
                  >
                    <Wine className="size-3.5 text-[#C8A875]" />
                    <span>SKY Bar ↓</span>
                  </a>

                  <a
                    href={site.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-[#241B16] px-4 py-3.5 text-xs sm:text-sm font-medium text-[#D8C8B8] hover:text-[#F5EFE6] transition-all"
                  >
                    <Phone className="size-3 text-[#C8A875]" />
                    <span>Call Us</span>
                  </a>
                </div>

                {/* Landmark address note */}
                <p className="mt-4 text-[11px] text-[#D8C8B8]/80 flex items-center gap-1.5">
                  <MapPin className="size-3 text-[#C8A875] shrink-0" />
                  <span>Opposite P.W.D. Rest House, G.T. Road, Mukerian · Free Tourist & Car Parking</span>
                </p>
              </Reveal>
            </div>

            {/* Right Column: Prominent Interactive Restaurant Visual Showcase */}
            <Reveal delay={200} className="w-full">
              <HeroRestaurantShowcase />
            </Reveal>
          </div>

          {/* Bottom Trust & Operating Metric Ticker */}
          <Reveal delay={350} className="w-full">
            <div className="mt-12 sm:mt-14 grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 border-t border-[#A87545]/20 pt-6 sm:pt-8">
              {[
                { label: "OPEN DAILY", val: "11:00 AM – 11:30 PM" },
                { label: "CUISINE", val: "North Indian & Mughlai" },
                { label: "AC DINING & BANQUETS", val: "150+ Guests Capacity" },
                { label: "BAR & LOUNGE", val: "SKY Lounge (26 Drinks)" },
                { label: "GOOGLE RATING", val: "4.0 ★ (965+ Reviews)" },
              ].map((item, idx) => (
                <div
                  key={item.label}
                  className={`text-left ${idx === 4 ? "col-span-2 sm:col-span-1" : ""}`}
                >
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#C8A875] uppercase block">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-xs sm:text-sm font-medium text-[#F5EFE6]">
                    {item.val}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 1B. EXPERIENCE DAWAT: 8 REAL RESTAURANT PHOTOGRAPHS  */}
      {/* ---------------------------------------------------- */}
      <ExperienceDawatSection />

      {/* ---------------------------------------------------- */}
      {/* 1C. TODAY'S SPECIAL & CHEF'S RECOMMENDATIONS         */}
      {/* ---------------------------------------------------- */}
      <TodaysSpecialSection />

      {/* ---------------------------------------------------- */}
      {/* 1D. ICONIC SIGNATURE DISHES DEEP DIVE                */}
      {/* ---------------------------------------------------- */}
      <SignatureDishesSection />

      {/* ---------------------------------------------------- */}
      {/* 1E. WHY DAWAT? & PROMINENT OPERATING HOURS           */}
      {/* ---------------------------------------------------- */}
      <WhyDawatSection />

      {/* ---------------------------------------------------- */}
      {/* 2. THE SIGNATURE SKY BAR & LOUNGE SECTION             */}
      {/* ---------------------------------------------------- */}
      <section
        id="sky-lounge"
        className="relative overflow-hidden bg-gradient-to-b from-[#1C1917] via-[#241B16] to-[#1C1917] py-12 sm:py-16 lg:py-24 border-t border-[#A87545]/20 scroll-mt-16"
      >
        {/* Real Bar-Themed Background Animation (Cocktail Fizz Bubbles, Amber Flares, Ambient Pendant Light Cones & Bokeh) */}
        <BarBackgroundAnimation />

        <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-12 z-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            {/* Left Column: Real Dawat Bar & Lounge Photo with Bronze Frame & Warm Overlay */}
            <Reveal className="relative">
              {/* Warm Amber/Bronze Ambient Backlight Aura */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-3 rounded-[32px] bg-gradient-to-tr from-[#A87545]/25 via-[#C8A875]/20 to-[#A87545]/25 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 -z-10 animate-aurora-pulse"
                style={{ animationDuration: "8s" }}
              />

              <div className="group relative rounded-2xl sm:rounded-3xl p-2.5 border border-[#A87545]/30 hover:border-[#C8A875]/60 bg-gradient-to-b from-[#241B16] via-[#1C1917] to-[#141414] shadow-2xl shadow-black/90 transition-all duration-500">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[16/10] sm:aspect-[16/11]">
                  <img
                    src={realIndoorLounge}
                    alt="Dawat Restaurant ambient indoor SKY Lounge and bar with wooden bar counter and evening lighting"
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />

                  {/* Warm dark overlay to tone down neon and match luxury aesthetic */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-[#A87545]/10 mix-blend-multiply pointer-events-none" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1C1917]/90 border border-[#C8A875]/50 px-3 py-1 text-[10.5px] font-semibold text-[#C8A875] shadow-lg backdrop-blur-md">
                      <span className="size-2 rounded-full bg-[#C8A875] animate-pulse" />
                      ✦ Authentic SKY Lounge & Bar
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#1C1917]/90 border border-[#A87545]/40 px-3 py-1 text-[10px] font-medium text-[#D8C8B8] backdrop-blur-md">
                      🍺 Chilled On Tap & Bottles
                    </span>
                  </div>

                  {/* Bottom Bar Feature Pill */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 rounded-xl border border-[#A87545]/20 bg-[#1C1917]/90 p-3 backdrop-blur-md shadow-2xl flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-semibold text-[#F5EFE6]">Full Spirits & Brews</p>
                      <p className="text-[10px] text-[#D8C8B8]">Ice-cold beers, craft mocktails & premium bar service</p>
                    </div>
                    <span className="rounded-full bg-emerald-950/80 border border-emerald-700/60 px-2.5 py-0.5 text-[10px] font-medium text-emerald-300">
                      Open Daily
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right Column: Narrative & Action Links */}
            <Reveal delay={150} className="flex flex-col justify-center">
              <span className="text-[11px] font-sans font-semibold tracking-[0.25em] text-[#C8A875] uppercase">
                ✦ THE SIGNATURE SKY LOUNGE · EXCLUSIVE BAR
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] text-[#F5EFE6]">
                Unwind in Style at Our SKY Bar & Lounge.
              </h2>
              <p className="mt-5 font-sans text-xs sm:text-sm leading-relaxed text-[#D8C8B8]">
                Elevate your evening on G.T. Road, Mukerian. Whether meeting friends after work or sharing a celebration with family, our SKY Lounge offers an electric atmosphere with chilled draught beers, imported scotches, whiskies, and handcrafted mocktails.
              </p>

              {/* 3 Key Feature Cards */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-xl border border-[#A87545]/20 bg-[#241B16] p-3.5">
                  <span className="text-base">🍺</span>
                  <h3 className="mt-1.5 font-display text-xs font-semibold text-[#F5EFE6]">Chilled Brews</h3>
                  <p className="mt-1 text-[11px] text-[#D8C8B8] leading-snug">Kingfisher draught on tap & chilled lagers.</p>
                </div>
                <div className="rounded-xl border border-[#A87545]/20 bg-[#241B16] p-3.5">
                  <span className="text-base">🍸</span>
                  <h3 className="mt-1.5 font-display text-xs font-semibold text-[#F5EFE6]">Fine Spirits</h3>
                  <p className="mt-1 text-[11px] text-[#D8C8B8] leading-snug">Whiskies, scotches & rums in 30/60ml pours.</p>
                </div>
                <div className="rounded-xl border border-[#A87545]/20 bg-[#241B16] p-3.5">
                  <span className="text-base">✨</span>
                  <h3 className="mt-1.5 font-display text-xs font-semibold text-[#F5EFE6]">Neon Ambiance</h3>
                  <p className="mt-1 text-[11px] text-[#D8C8B8] leading-snug">Warm pendant glow and sports screenings.</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#bar-menu-section"
                  className="luxury-shimmer inline-flex items-center gap-2.5 rounded-full bg-[#A87545] px-7 py-3 text-xs sm:text-sm font-semibold tracking-wide text-[#F5EFE6] shadow-lg shadow-[#A87545]/20 hover:bg-[#B98350] hover:scale-[1.02] active:scale-95 transition-all"
                >
                  Official Bar Drinks Menu (26 Drinks) ↓
                </a>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-[#A87545]/40 bg-[#241B16]/80 backdrop-blur-md px-6 py-3 text-xs sm:text-sm font-medium text-[#F5EFE6] hover:border-[#C8A875] hover:text-[#C8A875] transition-all"
                >
                  <Phone className="size-3.5 text-[#C8A875]" />
                  Call: {site.phone}
                </a>
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 rounded-full border border-[#A87545]/30 bg-[#1C1917] px-5 py-3 text-xs sm:text-sm font-medium text-[#D8C8B8] hover:text-[#F5EFE6] hover:border-[#C8A875] transition-all"
                >
                  View Lounge Photos
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Embedded Official Bar Drinks Menu Inside the Same Section */}
          <div id="bar-menu-section" className="mt-16 sm:mt-24 pt-12 border-t border-[#A87545]/20">
            <BarLoungeSection asSubSection={true} />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. PREMIUM DINING MENU (Tabs: Veg, Non-Veg, Drinks)  */}
      {/* ---------------------------------------------------- */}
      <section className="bg-[#F5EFE6] text-[#1C1917] py-20 lg:py-28 border-t border-[#A87545]/20 relative overflow-hidden">
        <div className="relative mx-auto max-w-[1360px] px-5 lg:px-12">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.25em] text-[#A87545] uppercase">
                DELICACIES FROM OUR KITCHEN
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1917]">
                Dawat Culinary Collection
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-[#5A4D41] max-w-xl">
                Slow-simmered Punjabi gravies, clay tandoor breads, charcoal kebabs, and chilled accompaniments prepared fresh daily on G.T. Road.
              </p>
            </div>

            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full border border-[#A87545]/40 bg-white px-6 py-3 text-xs font-semibold text-[#1C1917] hover:border-[#A87545] hover:text-[#A87545] shadow-sm transition-all self-start md:self-auto"
            >
              Browse Full 100+ Menu <ArrowRight className="size-4 text-[#A87545]" />
            </Link>
          </div>

          {/* 3 Category Tabs */}
          <div className="mt-10 flex flex-wrap gap-2 sm:gap-3">
            {[
              { id: "VEGETARIAN", label: "01 — PURE VEGETARIAN", icon: "🌱" },
              { id: "NON_VEGETARIAN", label: "02 — TANDOORI & NON-VEG", icon: "🍗" },
              { id: "DRINKS", label: "03 — DRINKS & DESSERTS", icon: "🥤" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as HomeMenuTab)}
                className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#A87545] text-[#F5EFE6] shadow-md shadow-[#A87545]/20 scale-105"
                    : "border border-[#A87545]/25 bg-white text-[#5A4D41] hover:text-[#1C1917] hover:border-[#A87545]/50"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {activeTab === "VEGETARIAN" && (
              <>
                <div className="group rounded-2xl border border-[#A87545]/20 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:border-[#A87545]/50 hover:shadow-md hover:-translate-y-1">
                  <div className="aspect-[16/11] overflow-hidden bg-black/5">
                    <img src={dishRoti} alt="Dawat Special Roti" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display text-base font-medium text-[#1C1917]">Dawat Special Roti</h3>
                      <span className="font-semibold text-[#A87545] text-sm">₹60</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#5A4D41]">Hand-stretched tandoori roti with generous butter.</p>
                  </div>
                </div>

                <div className="group rounded-2xl border border-[#A87545]/20 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:border-[#A87545]/50 hover:shadow-md hover:-translate-y-1">
                  <div className="aspect-[16/11] overflow-hidden bg-black/5">
                    <img src={foodCurry} alt="Kadai Paneer Peshawari" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display text-base font-medium text-[#1C1917]">Kadai Paneer Peshawari</h3>
                      <span className="font-semibold text-[#A87545] text-sm">₹335</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#5A4D41]">Cottage cheese with capsicum in roasted spices.</p>
                  </div>
                </div>

                <div className="group rounded-2xl border border-[#A87545]/20 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:border-[#A87545]/50 hover:shadow-md hover:-translate-y-1">
                  <div className="aspect-[16/11] overflow-hidden bg-black/5">
                    <img src={heroFeast} alt="Dal Bukhara Handi" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display text-base font-medium text-[#1C1917]">Dal Bukhara Handi</h3>
                      <span className="font-semibold text-[#A87545] text-sm">₹240</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#5A4D41]">Black lentils simmered overnight with butter and cream.</p>
                  </div>
                </div>

                <div className="group rounded-2xl border border-[#A87545]/20 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:border-[#A87545]/50 hover:shadow-md hover:-translate-y-1">
                  <div className="aspect-[16/11] overflow-hidden bg-black/5">
                    <img src={dishPaneerTikka} alt="Paneer Tikka Shashlik" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display text-base font-medium text-[#1C1917]">Paneer Tikka Shashlik</h3>
                      <span className="font-semibold text-[#A87545] text-sm">₹380</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#5A4D41]">Charcoal grilled spiced paneer cubes with peppers.</p>
                  </div>
                </div>
              </>
            )}

            {activeTab === "NON_VEGETARIAN" && (
              <>
                <div className="group rounded-2xl border border-[#A87545]/20 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:border-[#A87545]/50 hover:shadow-md hover:-translate-y-1">
                  <div className="aspect-[16/11] overflow-hidden bg-black/5">
                    <img src={dawatTandooriChicken} alt="Tandoori Chicken Special" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display text-base font-medium text-[#1C1917]">Tandoori Chicken Special</h3>
                      <span className="font-semibold text-[#A87545] text-sm">₹320 / ₹550</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#5A4D41]">Smoky clay-oven spring chicken with tandoori spices.</p>
                  </div>
                </div>

                <div className="group rounded-2xl border border-[#A87545]/20 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:border-[#A87545]/50 hover:shadow-md hover:-translate-y-1">
                  <div className="aspect-[16/11] overflow-hidden bg-black/5">
                    <img src={heroFeast} alt="Murgh Makhni (Butter Chicken)" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display text-base font-medium text-[#1C1917]">Murgh Makhni</h3>
                      <span className="font-semibold text-[#A87545] text-sm">₹380 / ₹690</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#5A4D41]">Tender chicken in velvety tomato-butter gravy.</p>
                  </div>
                </div>

                <div className="group rounded-2xl border border-[#A87545]/20 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:border-[#A87545]/50 hover:shadow-md hover:-translate-y-1">
                  <div className="aspect-[16/11] overflow-hidden bg-black/5">
                    <img src={dawatMuttonCurry} alt="Mutton Curry Traditional" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display text-base font-medium text-[#1C1917]">Mutton Curry Traditional</h3>
                      <span className="font-semibold text-[#A87545] text-sm">₹600</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#5A4D41]">Tender goat meat simmered in brass kadhai with rogan.</p>
                  </div>
                </div>

                <div className="group rounded-2xl border border-[#A87545]/20 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:border-[#A87545]/50 hover:shadow-md hover:-translate-y-1">
                  <div className="aspect-[16/11] overflow-hidden bg-black/5">
                    <img src={dawatFishTikka} alt="Ajwain Fish Tikka" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display text-base font-medium text-[#1C1917]">Ajwain Fish Tikka</h3>
                      <span className="font-semibold text-[#A87545] text-sm">₹550</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#5A4D41]">River fish fillets with crushed carom seeds and lime.</p>
                  </div>
                </div>
              </>
            )}

            {activeTab === "DRINKS" && (
              <>
                <div className="group rounded-2xl border border-[#A87545]/20 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:border-[#A87545]/50 hover:shadow-md hover:-translate-y-1">
                  <div className="aspect-[16/11] overflow-hidden bg-black/5">
                    <img src={dawatDrinksLassi} alt="Special Punjabi Sweet Lassi" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display text-base font-medium text-[#1C1917]">Punjabi Sweet Lassi</h3>
                      <span className="font-semibold text-[#A87545] text-sm">₹40</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#5A4D41]">Thick churned curd crowned with clotted malai.</p>
                  </div>
                </div>

                <div className="group rounded-2xl border border-[#A87545]/20 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:border-[#A87545]/50 hover:shadow-md hover:-translate-y-1">
                  <div className="aspect-[16/11] overflow-hidden bg-black/5">
                    <img src={dawatGulabJamun} alt="Hot Gulab Jamun with Kesar" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display text-base font-medium text-[#1C1917]">Hot Gulab Jamun</h3>
                      <span className="font-semibold text-[#A87545] text-sm">₹60</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#5A4D41]">Pillowy mawa dumplings in warm saffron syrup.</p>
                  </div>
                </div>

                <div className="group rounded-2xl border border-[#A87545]/20 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:border-[#A87545]/50 hover:shadow-md hover:-translate-y-1">
                  <div className="aspect-[16/11] overflow-hidden bg-black/5">
                    <img src={dishRaita} alt="Pineapple Raita Chilled" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display text-base font-medium text-[#1C1917]">Pineapple Raita</h3>
                      <span className="font-semibold text-[#A87545] text-sm">₹180</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#5A4D41]">Diced sweet pineapples folded into spiced dahi.</p>
                  </div>
                </div>

                <div className="group rounded-2xl border border-[#A87545]/20 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:border-[#A87545]/50 hover:shadow-md hover:-translate-y-1">
                  <div className="aspect-[16/11] overflow-hidden bg-black/5">
                    <img src={dawatDrinksLassi} alt="Cold Coffee with Ice Cream" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display text-base font-medium text-[#1C1917]">Cold Coffee + Ice Cream</h3>
                      <span className="font-semibold text-[#A87545] text-sm">₹150</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#5A4D41]">Rich blended espresso with vanilla ice cream.</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. HERITAGE & ATMOSPHERE (Real Dining Hall)         */}
      {/* ---------------------------------------------------- */}
      <section className="mx-auto max-w-[1360px] px-5 py-20 lg:px-12 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-[#A87545]/25 shadow-xl">
              <img
                src={aboutHall}
                alt="Dawat Restaurant elegant main dining hall interior with warm lighting"
                width={1200}
                height={800}
                className="w-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="rounded-full bg-black/70 border border-[#A87545]/50 px-3 py-1 text-[11px] font-semibold text-[#C8A875] backdrop-blur-md">
                  ● Grand Family Dining Hall
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="flex flex-col justify-center">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#A87545] uppercase">
              ABOUT DAWAT RESTAURANT
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1917]">
              Good Food. Warm Hospitality.
            </h2>
            <p className="mt-5 text-xs sm:text-sm leading-relaxed text-[#5A4D41]">
              Dawat Restaurant is a premier dining destination on G.T. Road in Mukerian, Punjab. Families, road-trippers, and locals gather here for authentic Punjabi tandoori breads, rich gravies cooked to order, and chilled beverages.
            </p>
            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#5A4D41]">
              Everything from our clay-tandoor rotis to our slow-simmered Dal Bukhara is prepared fresh in sanitized kitchen stations with genuine Punjabi warmth.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-[#A87545]/40 bg-white px-6 py-3 text-xs font-semibold text-[#1C1917] hover:border-[#A87545] hover:text-[#A87545] shadow-sm transition-colors"
              >
                Our Heritage Story <ArrowRight className="size-3.5 text-[#A87545]" />
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-[#A87545] px-6 py-3 text-xs font-semibold text-[#F5EFE6] hover:bg-[#B98350] transition-colors shadow-sm"
              >
                <Phone className="size-3.5" /> Call {site.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 5. SERVICES & GOOGLE REVIEWS SECTION (Rule 8: Dark Coffee cards on Warm Ivory) */}
      {/* ---------------------------------------------------- */}
      <section className="border-t border-[#A87545]/20 bg-[#F5EFE6] py-16 lg:py-24 text-[#1C1917]">
        <div className="mx-auto max-w-[1360px] px-5 lg:px-12">
          {/* 3 Services Cards */}
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#A87545]/25 bg-[#241B16] p-6 text-center shadow-lg text-[#F5EFE6]">
              <span className="grid size-12 place-items-center rounded-full bg-[#A87545]/20 text-[#C8A875] mx-auto text-xl">
                <Store className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-lg text-[#F5EFE6]">Dine-In</h3>
              <p className="mt-2 text-xs text-[#D8C8B8]">Enjoy your meal in our air-conditioned family hall or SKY Lounge.</p>
            </div>

            <div className="rounded-2xl border border-[#A87545]/25 bg-[#241B16] p-6 text-center shadow-lg text-[#F5EFE6]">
              <span className="grid size-12 place-items-center rounded-full bg-[#A87545]/20 text-[#C8A875] mx-auto text-xl">
                <ShoppingBag className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-lg text-[#F5EFE6]">Takeaway</h3>
              <p className="mt-2 text-xs text-[#D8C8B8]">Hot, freshly packed meals prepared quickly for your highway drive.</p>
            </div>

            <div className="rounded-2xl border border-[#A87545]/25 bg-[#241B16] p-6 text-center shadow-lg text-[#F5EFE6]">
              <span className="grid size-12 place-items-center rounded-full bg-[#A87545]/20 text-[#C8A875] mx-auto text-xl">
                <Truck className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-lg text-[#F5EFE6]">Delivery</h3>
              <p className="mt-2 text-xs text-[#D8C8B8]">Authentic Dawat dishes delivered straight to your home or office.</p>
            </div>
          </div>

          {/* Rating Summary (Rule 8: Dark coffee card with champagne stars) */}
          <div className="mt-12 rounded-2xl border border-[#A87545]/30 bg-[#241B16] p-8 text-center sm:p-12 shadow-2xl text-[#F5EFE6]">
            <div className="flex items-center justify-center gap-1 text-[#C8A875]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-5 fill-current" />
              ))}
            </div>
            <h3 className="mt-3 font-display text-2xl sm:text-3xl text-[#F5EFE6]">
              Rated 4.0 ★ Based on 965+ Customer Reviews
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#D8C8B8] max-w-lg mx-auto">
              Trusted by locals in Mukerian and highway travellers on G.T. Road for consistent taste, generous portions, and genuine hospitality.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                to="/reviews"
                className="inline-flex items-center gap-2 rounded-full bg-[#A87545] px-6 py-2.5 text-xs font-semibold text-[#F5EFE6] hover:bg-[#B98350] transition-colors shadow-md"
              >
                Read Guest Reviews
              </Link>
              <a
                href={site.directionsLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#A87545]/40 bg-transparent px-6 py-2.5 text-xs font-semibold text-[#F5EFE6] hover:border-[#C8A875] hover:text-[#C8A875] transition-colors"
              >
                <Navigation className="size-3.5 text-[#C8A875]" /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 6. BOTTOM ORDERING CALLOUT (Rule 9: Dark Espresso)   */}
      {/* ---------------------------------------------------- */}
      <section className="mx-auto max-w-[1360px] px-5 py-16 lg:px-12 text-center">
        <div className="rounded-3xl border border-[#A87545]/30 bg-gradient-to-r from-[#1C1917] via-[#241B16] to-[#1C1917] px-6 py-12 sm:px-12 shadow-2xl text-[#F5EFE6]">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-[#C8A875] uppercase">
            CALL OR VISIT TODAY
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl text-[#F5EFE6]">
            Hungry? Let's Get Your Dawat Started.
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#D8C8B8] max-w-lg mx-auto">
            Order your takeaway by phone or stop by on G.T. Road opposite the P.W.D. Rest House in Mukerian.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-[#A87545] px-8 py-3.5 text-xs sm:text-sm font-semibold text-[#F5EFE6] hover:bg-[#B98350] transition-colors shadow-lg shadow-[#A87545]/20"
            >
              <Phone className="size-4" /> Call {site.phone}
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/40 px-7 py-3.5 text-xs sm:text-sm font-semibold text-emerald-300 hover:bg-emerald-500/20 transition-all"
            >
              <WhatsAppIcon size={16} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Hero Table Booking Modal */}
      <BookTableModal
        isOpen={bookModalOpen}
        onClose={() => setBookModalOpen(false)}
      />
    </div>
  );
}
