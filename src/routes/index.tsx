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
    <div className="bg-[#0B0907] text-[#FAF5EE] selection:bg-[#D49B55] selection:text-stone-950 overflow-x-hidden">
      {/* ---------------------------------------------------- */}
      {/* 1. CINEMATIC HERO WITH MULTI-LAYERED ANIMATION       */}
      {/* ---------------------------------------------------- */}
      <section className="relative isolate min-h-[92vh] flex items-center justify-center overflow-hidden bg-stone-950">
        {/* Dynamic Background Image */}
        <img
          src={heroFeast}
          alt="Dawat Restaurant grand Punjabi feast with tandoori dishes, copper handis and breads"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="absolute inset-0 size-full object-cover opacity-35 scale-105 animate-subtle-zoom"
        />

        {/* Ambient Dark Gradient Vignette */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0B0907] via-black/70 to-[#0B0907]/90"
        />

        {/* Rich Ambient Animations: Rising Embers, Twinkles, Sacred Mandala */}
        <HeroBackgroundAnimation />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-[1360px] px-5 py-24 sm:py-32 lg:px-12 text-center flex flex-col items-center">
          {/* Top Royal Badge */}
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D49B55]/40 bg-black/60 px-4 py-1.5 backdrop-blur-md shadow-lg shadow-black/60">
              <span className="size-2 rounded-full bg-[#D49B55] animate-ping" />
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#D49B55] uppercase">
                ✦ G.T. ROAD · MUKERIAN · ESTABLISHED TASTE ✦
              </span>
            </div>
          </Reveal>

          {/* Main Title */}
          <Reveal delay={100}>
            <h1 className="mt-5 sm:mt-6 font-display text-3xl xs:text-4xl sm:text-6xl lg:text-7xl leading-[1.12] sm:leading-[1.08] text-[#FAF5EE] max-w-4xl tracking-tight break-words">
              A Royal Feast of Authentic{" "}
              <span className="bg-gradient-to-r from-[#FAF5EE] via-[#D49B55] to-[#FAF5EE] bg-clip-text text-transparent">
                North Indian
              </span>{" "}
              Flavours.
            </h1>
          </Reveal>

          {/* Subtitle with Gurmukhi script */}
          <Reveal delay={200}>
            <p className="mt-4 sm:mt-6 max-w-2xl font-sans text-xs sm:text-base leading-relaxed text-stone-300/90">
              Welcome to <strong>Dawat Restaurant & SKY Lounge</strong> (ਦਾਵਤ ਰੇਸਟੋਰੇਂਟ). Enjoy pure tandoori breads, rich gravies simmered in copper handis, and our signature SKY Lounge bar on G.T. Road, Mukerian.
            </p>
          </Reveal>

          {/* Action CTAs with Balanced Mobile Stacking */}
          <Reveal delay={300} className="w-full flex justify-center">
            <div className="mt-7 sm:mt-9 flex w-full max-w-xl flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => setBookModalOpen(true)}
                className="luxury-shimmer w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#D49B55] via-[#F5D28E] to-[#C08845] px-8 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-stone-950 shadow-2xl shadow-[#D49B55]/40 hover:scale-105 active:scale-95 transition-all cursor-pointer ring-2 ring-[#FAF5EE]/30"
              >
                <UtensilsCrossed className="size-4" />
                <span>{t("book_a_table")}</span>
              </button>

              <Link
                to="/menu"
                className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 rounded-full border border-stone-700/80 bg-stone-900/80 backdrop-blur-md px-7 py-3.5 text-xs sm:text-sm font-semibold text-stone-100 hover:border-[#D49B55] hover:text-[#D49B55] transition-all"
              >
                <span>{lang === "pa" ? "ਮੇਨੂ ਵੇਖੋ" : "Explore Dining Menu"}</span>
                <ArrowRight className="size-4" />
              </Link>

              <div className="grid w-full sm:w-auto grid-cols-2 gap-2 sm:flex sm:gap-3">
                <a
                  href="#sky-lounge"
                  className="min-h-[44px] inline-flex items-center justify-center gap-2 rounded-full border border-stone-800 bg-black/60 backdrop-blur-md px-4 py-2.5 text-xs sm:text-sm font-medium text-stone-300 hover:border-[#38BDF8] hover:text-[#38BDF8] transition-all"
                >
                  <Wine className="size-3.5 text-[#38BDF8]" />
                  <span>SKY Bar ↓</span>
                </a>

                <a
                  href={site.phoneHref}
                  className="min-h-[44px] inline-flex items-center justify-center gap-2 rounded-full border border-stone-800 bg-stone-950/80 px-4 py-2.5 text-xs sm:text-sm font-medium text-stone-300 hover:text-white transition-all"
                >
                  <Phone className="size-3 text-[#D49B55]" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Authentic Restaurant Visual Showcase with Animation */}
          <Reveal delay={350} className="w-full">
            <HeroRestaurantShowcase />
          </Reveal>

          {/* Highlights bar with Opening Hours */}
          <Reveal delay={400} className="w-full">
            <div className="mt-12 sm:mt-14 grid w-full max-w-4xl grid-cols-2 gap-3.5 sm:gap-4 border-t border-stone-800/80 pt-6 sm:pt-8 sm:grid-cols-3 lg:grid-cols-5 mx-auto">
              {[
                { label: "OPEN DAILY", val: "11:00 AM – 11:30 PM" },
                { label: "CUISINE", val: "North Indian & Mughlai" },
                { label: "PRICE RANGE", val: "₹200 – ₹400 / person" },
                { label: "BAR & LOUNGE", val: "SKY Lounge (26 Drinks)" },
                { label: "GOOGLE RATING", val: "4.0 ★ (965+ Reviews)" },
              ].map((item, idx) => (
                <div
                  key={item.label}
                  className={`text-center sm:text-left ${idx === 4 ? "col-span-2 sm:col-span-1" : ""}`}
                >
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#D49B55] uppercase block">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-xs sm:text-sm font-medium text-stone-200">
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
        className="relative overflow-hidden bg-gradient-to-b from-[#120F0D] via-[#0E0C0A] to-[#14100D] py-20 lg:py-32 border-t border-stone-800/50 scroll-mt-16"
      >
        {/* Real Bar-Themed Background Animation (Cocktail Fizz Bubbles, Neon Flares, Ambient Pendant Light Cones & Bokeh) */}
        <BarBackgroundAnimation />

        <div className="relative mx-auto max-w-[1360px] px-5 lg:px-12 z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            {/* Left Column: Real Dawat Bar & Lounge Photo with Neon Frame & Floating Badges */}
            <Reveal className="relative">
              {/* Pulsing Neon Ambient Backlight Aura */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-3 rounded-[32px] bg-gradient-to-tr from-[#38BDF8]/25 via-[#F5D28E]/20 to-[#D49B55]/15 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 -z-10 animate-aurora-pulse"
                style={{ animationDuration: "8s" }}
              />

              <div className="group relative rounded-3xl p-2.5 border border-[#38BDF8]/30 hover:border-[#D49B55]/60 bg-gradient-to-b from-[#1A1612] via-[#120F0C] to-black shadow-2xl shadow-black/90 transition-all duration-500">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/11]">
                  <img
                    src={realIndoorLounge}
                    alt="Dawat Restaurant ambient indoor SKY Lounge and bar with glowing neon sign, wooden bar counter and evening lighting"
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/85 border border-[#38BDF8]/60 px-3.5 py-1 text-[11px] font-semibold text-[#38BDF8] shadow-lg backdrop-blur-md">
                      <span className="size-2 rounded-full bg-[#38BDF8] animate-pulse" />
                      ✦ Authentic SKY Lounge & Bar
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-black/80 border border-[#D49B55]/50 px-3 py-1 text-[10px] font-medium text-[#D49B55] backdrop-blur-md">
                      🍺 Chilled On Tap & Bottles
                    </span>
                  </div>

                  {/* Bottom Bar Feature Pill */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-stone-800/90 bg-black/85 p-3.5 backdrop-blur-md shadow-2xl flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-semibold text-stone-100">Full Spirits & Brews</p>
                      <p className="text-[10px] text-stone-400">Ice-cold beers, craft mocktails & premium bar service</p>
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
              <span className="text-[11px] font-sans font-semibold tracking-[0.25em] text-[#D49B55] uppercase">
                ✦ THE SIGNATURE SKY LOUNGE · EXCLUSIVE BAR
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] text-[#FAF5EE]">
                Unwind in Style at Our SKY Bar & Lounge.
              </h2>
              <p className="mt-5 font-sans text-xs sm:text-sm leading-relaxed text-stone-300/85">
                Elevate your evening on G.T. Road, Mukerian. Whether meeting friends after work or sharing a celebration with family, our SKY Lounge offers an electric atmosphere with chilled draught beers, imported scotches, whiskies, and handcrafted mocktails.
              </p>

              {/* 3 Key Feature Cards */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-xl border border-stone-800 bg-[#171310] p-3.5">
                  <span className="text-base">🍺</span>
                  <h3 className="mt-1.5 font-display text-xs font-semibold text-stone-100">Chilled Brews</h3>
                  <p className="mt-1 text-[11px] text-stone-400 leading-snug">Kingfisher draught on tap & chilled lagers.</p>
                </div>
                <div className="rounded-xl border border-stone-800 bg-[#171310] p-3.5">
                  <span className="text-base">🍸</span>
                  <h3 className="mt-1.5 font-display text-xs font-semibold text-stone-100">Fine Spirits</h3>
                  <p className="mt-1 text-[11px] text-stone-400 leading-snug">Whiskies, scotches & rums in 30/60ml pours.</p>
                </div>
                <div className="rounded-xl border border-stone-800 bg-[#171310] p-3.5">
                  <span className="text-base">✨</span>
                  <h3 className="mt-1.5 font-display text-xs font-semibold text-stone-100">Neon Ambiance</h3>
                  <p className="mt-1 text-[11px] text-stone-400 leading-snug">Warm pendant glow and sports screenings.</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#bar-menu-section"
                  className="luxury-shimmer inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#D49B55] via-[#E5B869] to-[#C08845] px-7 py-3 text-xs sm:text-sm font-semibold tracking-wide text-stone-950 shadow-lg shadow-[#D49B55]/20 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  Official Bar Drinks Menu (26 Drinks) ↓
                </a>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-stone-700/80 bg-stone-900/60 backdrop-blur-md px-6 py-3 text-xs sm:text-sm font-medium text-stone-200 hover:border-[#D49B55] hover:text-white transition-all"
                >
                  <Phone className="size-3.5 text-[#D49B55]" />
                  Call: {site.phone}
                </a>
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 rounded-full border border-stone-800 bg-stone-950/60 px-5 py-3 text-xs sm:text-sm font-medium text-stone-400 hover:text-stone-200 hover:border-stone-700 transition-all"
                >
                  View Lounge Photos
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Embedded Official Bar Drinks Menu Inside the Same Section */}
          <div id="bar-menu-section" className="mt-16 sm:mt-24 pt-12 border-t border-stone-800/80">
            <BarLoungeSection asSubSection={true} />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. PREMIUM DINING MENU (Tabs: Veg, Non-Veg, Drinks)  */}
      {/* ---------------------------------------------------- */}
      <section className="bg-[#120F0D] text-[#FAF5EE] py-20 lg:py-28 border-t border-stone-800/60 relative overflow-hidden">
        {/* Ambient subtle glow background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-[#D49B55]/5 blur-[120px]"
        />

        <div className="relative mx-auto max-w-[1360px] px-5 lg:px-12">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.25em] text-[#D49B55] uppercase">
                DELICACIES FROM OUR KITCHEN
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FAF5EE]">
                Dawat Culinary Collection
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-stone-400 max-w-xl">
                Slow-simmered Punjabi gravies, clay tandoor breads, charcoal kebabs, and chilled accompaniments prepared fresh daily on G.T. Road.
              </p>
            </div>

            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full border border-stone-700/80 bg-stone-900/60 px-6 py-3 text-xs font-semibold text-stone-200 hover:border-[#D49B55] hover:text-white transition-all self-start md:self-auto"
            >
              Browse Full 100+ Menu <ArrowRight className="size-4" />
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
                    ? "bg-[#D49B55] text-stone-950 shadow-md shadow-[#D49B55]/20 scale-105"
                    : "border border-stone-800 bg-stone-900/70 text-stone-300 hover:text-white hover:border-stone-700"
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
                <div className="group rounded-2xl border border-stone-800 bg-[#171310] overflow-hidden transition-all duration-300 hover:border-[#D49B55]/50 hover:-translate-y-1">
                  <div className="aspect-[16/11] overflow-hidden bg-stone-900">
                    <img src={dishRoti} alt="Dawat Special Roti" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display text-base font-medium text-stone-100">Dawat Special Roti</h3>
                      <span className="font-semibold text-[#D49B55] text-sm">₹60</span>
                    </div>
                    <p className="mt-1 text-[11px] text-stone-400">Hand-stretched tandoori roti with generous butter.</p>
                  </div>
                </div>

                <div className="group rounded-2xl border border-stone-800 bg-[#171310] overflow-hidden transition-all duration-300 hover:border-[#D49B55]/50 hover:-translate-y-1">
                  <div className="aspect-[16/11] overflow-hidden bg-stone-900">
                    <img src={foodCurry} alt="Kadai Paneer Peshawari" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display text-base font-medium text-stone-100">Kadai Paneer Peshawari</h3>
                      <span className="font-semibold text-[#D49B55] text-sm">₹335</span>
                    </div>
                    <p className="mt-1 text-[11px] text-stone-400">Cottage cheese with capsicum in roasted spices.</p>
                  </div>
                </div>

                <div className="group rounded-2xl border border-stone-800 bg-[#171310] overflow-hidden transition-all duration-300 hover:border-[#D49B55]/50 hover:-translate-y-1">
                  <div className="aspect-[16/11] overflow-hidden bg-stone-900">
                    <img src={heroFeast} alt="Dal Bukhara Handi" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display text-base font-medium text-stone-100">Dal Bukhara Handi</h3>
                      <span className="font-semibold text-[#D49B55] text-sm">₹240</span>
                    </div>
                    <p className="mt-1 text-[11px] text-stone-400">Black lentils simmered overnight with butter and cream.</p>
                  </div>
                </div>

                <div className="group rounded-2xl border border-stone-800 bg-[#171310] overflow-hidden transition-all duration-300 hover:border-[#D49B55]/50 hover:-translate-y-1">
                  <div className="aspect-[16/11] overflow-hidden bg-stone-900">
                    <img src={dishPaneerTikka} alt="Paneer Tikka Shashlik" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display text-base font-medium text-stone-100">Paneer Tikka Shashlik</h3>
                      <span className="font-semibold text-[#D49B55] text-sm">₹380</span>
                    </div>
                    <p className="mt-1 text-[11px] text-stone-400">Charcoal grilled spiced paneer cubes with peppers.</p>
                  </div>
                </div>
              </>
            )}

            {activeTab === "NON_VEGETARIAN" && (
              <>
                <div className="group rounded-2xl border border-stone-800 bg-[#171310] overflow-hidden transition-all duration-300 hover:border-[#D49B55]/50 hover:-translate-y-1">
                  <div className="aspect-[16/11] overflow-hidden bg-stone-900">
                    <img src={dawatTandooriChicken} alt="Tandoori Chicken Special" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display text-base font-medium text-stone-100">Tandoori Chicken Special</h3>
                      <span className="font-semibold text-[#D49B55] text-sm">₹320 / ₹550</span>
                    </div>
                    <p className="mt-1 text-[11px] text-stone-400">Smoky clay-oven spring chicken with tandoori spices.</p>
                  </div>
                </div>

                <div className="group rounded-2xl border border-stone-800 bg-[#171310] overflow-hidden transition-all duration-300 hover:border-[#D49B55]/50 hover:-translate-y-1">
                  <div className="aspect-[16/11] overflow-hidden bg-stone-900">
                    <img src={heroFeast} alt="Murgh Makhni (Butter Chicken)" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display text-base font-medium text-stone-100">Murgh Makhni</h3>
                      <span className="font-semibold text-[#D49B55] text-sm">₹380 / ₹690</span>
                    </div>
                    <p className="mt-1 text-[11px] text-stone-400">Tender chicken in velvety tomato-butter gravy.</p>
                  </div>
                </div>

                <div className="group rounded-2xl border border-stone-800 bg-[#171310] overflow-hidden transition-all duration-300 hover:border-[#D49B55]/50 hover:-translate-y-1">
                  <div className="aspect-[16/11] overflow-hidden bg-stone-900">
                    <img src={dawatMuttonCurry} alt="Mutton Curry Traditional" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display text-base font-medium text-stone-100">Mutton Curry Traditional</h3>
                      <span className="font-semibold text-[#D49B55] text-sm">₹600</span>
                    </div>
                    <p className="mt-1 text-[11px] text-stone-400">Tender goat meat simmered in brass kadhai with rogan.</p>
                  </div>
                </div>

                <div className="group rounded-2xl border border-stone-800 bg-[#171310] overflow-hidden transition-all duration-300 hover:border-[#D49B55]/50 hover:-translate-y-1">
                  <div className="aspect-[16/11] overflow-hidden bg-stone-900">
                    <img src={dawatFishTikka} alt="Ajwain Fish Tikka" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display text-base font-medium text-stone-100">Ajwain Fish Tikka</h3>
                      <span className="font-semibold text-[#D49B55] text-sm">₹550</span>
                    </div>
                    <p className="mt-1 text-[11px] text-stone-400">River fish fillets with crushed carom seeds and lime.</p>
                  </div>
                </div>
              </>
            )}

            {activeTab === "DRINKS" && (
              <>
                <div className="group rounded-2xl border border-stone-800 bg-[#171310] overflow-hidden transition-all duration-300 hover:border-[#D49B55]/50 hover:-translate-y-1">
                  <div className="aspect-[16/11] overflow-hidden bg-stone-900">
                    <img src={dawatDrinksLassi} alt="Special Punjabi Sweet Lassi" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display text-base font-medium text-stone-100">Punjabi Sweet Lassi</h3>
                      <span className="font-semibold text-[#D49B55] text-sm">₹40</span>
                    </div>
                    <p className="mt-1 text-[11px] text-stone-400">Thick churned curd crowned with clotted malai.</p>
                  </div>
                </div>

                <div className="group rounded-2xl border border-stone-800 bg-[#171310] overflow-hidden transition-all duration-300 hover:border-[#D49B55]/50 hover:-translate-y-1">
                  <div className="aspect-[16/11] overflow-hidden bg-stone-900">
                    <img src={dawatGulabJamun} alt="Hot Gulab Jamun with Kesar" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display text-base font-medium text-stone-100">Hot Gulab Jamun</h3>
                      <span className="font-semibold text-[#D49B55] text-sm">₹60</span>
                    </div>
                    <p className="mt-1 text-[11px] text-stone-400">Pillowy mawa dumplings in warm saffron syrup.</p>
                  </div>
                </div>

                <div className="group rounded-2xl border border-stone-800 bg-[#171310] overflow-hidden transition-all duration-300 hover:border-[#D49B55]/50 hover:-translate-y-1">
                  <div className="aspect-[16/11] overflow-hidden bg-stone-900">
                    <img src={dishRaita} alt="Pineapple Raita Chilled" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display text-base font-medium text-stone-100">Pineapple Raita</h3>
                      <span className="font-semibold text-[#D49B55] text-sm">₹180</span>
                    </div>
                    <p className="mt-1 text-[11px] text-stone-400">Diced sweet pineapples folded into spiced dahi.</p>
                  </div>
                </div>

                <div className="group rounded-2xl border border-stone-800 bg-[#171310] overflow-hidden transition-all duration-300 hover:border-[#D49B55]/50 hover:-translate-y-1">
                  <div className="aspect-[16/11] overflow-hidden bg-stone-900">
                    <img src={dawatDrinksLassi} alt="Cold Coffee with Ice Cream" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display text-base font-medium text-stone-100">Cold Coffee + Ice Cream</h3>
                      <span className="font-semibold text-[#D49B55] text-sm">₹150</span>
                    </div>
                    <p className="mt-1 text-[11px] text-stone-400">Rich blended espresso with vanilla ice cream.</p>
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
            <div className="relative overflow-hidden rounded-2xl border border-stone-800 shadow-2xl">
              <img
                src={aboutHall}
                alt="Dawat Restaurant elegant main dining hall interior with warm lighting"
                width={1200}
                height={800}
                className="w-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="rounded-full bg-black/80 border border-[#D49B55]/50 px-3 py-1 text-[11px] font-semibold text-[#D49B55] backdrop-blur-md">
                  ● Grand Family Dining Hall
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="flex flex-col justify-center">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#D49B55] uppercase">
              ABOUT DAWAT RESTAURANT
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FAF5EE]">
              Good Food. Warm Hospitality.
            </h2>
            <p className="mt-5 text-xs sm:text-sm leading-relaxed text-stone-300/85">
              Dawat Restaurant is a premier dining destination on G.T. Road in Mukerian, Punjab. Families, road-trippers, and locals gather here for authentic Punjabi tandoori breads, rich gravies cooked to order, and chilled beverages.
            </p>
            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-stone-300/85">
              Everything from our clay-tandoor rotis to our slow-simmered Dal Bukhara is prepared fresh in sanitized kitchen stations with genuine Punjabi warmth.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-stone-700 bg-stone-900/60 px-6 py-3 text-xs font-semibold text-stone-200 hover:border-[#D49B55] hover:text-white transition-colors"
              >
                Our Heritage Story <ArrowRight className="size-3.5" />
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-[#D49B55] px-6 py-3 text-xs font-semibold text-stone-950 hover:bg-[#C08845] transition-colors"
              >
                <Phone className="size-3.5" /> Call {site.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 5. SERVICES & GOOGLE REVIEWS SECTION                  */}
      {/* ---------------------------------------------------- */}
      <section className="border-t border-stone-800/80 bg-[#120F0D] py-16 lg:py-24">
        <div className="mx-auto max-w-[1360px] px-5 lg:px-12">
          {/* 3 Services Cards */}
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-stone-800 bg-[#171310] p-6 text-center">
              <span className="grid size-12 place-items-center rounded-full bg-[#D49B55]/10 text-[#D49B55] mx-auto text-xl">
                <Store className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-lg text-stone-100">Dine-In</h3>
              <p className="mt-2 text-xs text-stone-400">Enjoy your meal in our air-conditioned family hall or SKY Lounge.</p>
            </div>

            <div className="rounded-2xl border border-stone-800 bg-[#171310] p-6 text-center">
              <span className="grid size-12 place-items-center rounded-full bg-[#D49B55]/10 text-[#D49B55] mx-auto text-xl">
                <ShoppingBag className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-lg text-stone-100">Takeaway</h3>
              <p className="mt-2 text-xs text-stone-400">Hot, freshly packed meals prepared quickly for your highway drive.</p>
            </div>

            <div className="rounded-2xl border border-stone-800 bg-[#171310] p-6 text-center">
              <span className="grid size-12 place-items-center rounded-full bg-[#D49B55]/10 text-[#D49B55] mx-auto text-xl">
                <Truck className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-lg text-stone-100">Delivery</h3>
              <p className="mt-2 text-xs text-stone-400">Authentic Dawat dishes delivered straight to your home or office.</p>
            </div>
          </div>

          {/* Rating Summary */}
          <div className="mt-12 rounded-2xl border border-stone-800 bg-gradient-to-r from-[#1A1613] via-[#14110E] to-[#120F0D] p-8 text-center sm:p-12">
            <div className="flex items-center justify-center gap-1 text-[#D49B55]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-5 fill-current" />
              ))}
            </div>
            <h3 className="mt-3 font-display text-2xl sm:text-3xl text-[#FAF5EE]">
              Rated 4.0 ★ Based on 965+ Customer Reviews
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-stone-400 max-w-lg mx-auto">
              Trusted by locals in Mukerian and highway travellers on G.T. Road for consistent taste, generous portions, and genuine hospitality.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                to="/reviews"
                className="inline-flex items-center gap-2 rounded-full bg-[#D49B55] px-6 py-2.5 text-xs font-semibold text-stone-950 hover:bg-[#C08845] transition-colors"
              >
                Read Guest Reviews
              </Link>
              <a
                href={site.directionsLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-stone-700 px-6 py-2.5 text-xs font-semibold text-stone-200 hover:border-[#D49B55] hover:text-white transition-colors"
              >
                <Navigation className="size-3.5" /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 6. BOTTOM ORDERING CALLOUT                          */}
      {/* ---------------------------------------------------- */}
      <section className="mx-auto max-w-[1360px] px-5 py-16 lg:px-12 text-center">
        <div className="rounded-3xl border border-stone-800 bg-[#120F0D] px-6 py-12 sm:px-12">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-[#D49B55] uppercase">
            CALL OR VISIT TODAY
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl text-[#FAF5EE]">
            Hungry? Let's Get Your Dawat Started.
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-stone-400 max-w-lg mx-auto">
            Order your takeaway by phone or stop by on G.T. Road opposite the P.W.D. Rest House in Mukerian.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-[#D49B55] px-8 py-3.5 text-xs sm:text-sm font-semibold text-stone-950 hover:bg-[#C08845] transition-colors"
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
