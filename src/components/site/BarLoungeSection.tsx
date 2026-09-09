import { useState, useId } from "react";
import { Link } from "@tanstack/react-router";
import {
  Wine,
  Beer,
  GlassWater,
  Sparkles,
  Phone,
  ShieldAlert,
  Receipt,
  Flame,
  CheckCircle2,
  ChevronRight,
  List,
  LayoutGrid,
  Search,
  X,
} from "lucide-react";
import {
  barCategories,
  barMenuData,
  barNotices,
  type BarCategory,
  type BarMenuItem,
  type DualPriceItem,
  type SinglePriceItem,
  type DraughtBeerItem,
} from "@/lib/barMenuData";
import { site } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppIcon } from "@/components/site/SocialIcons";
import { cn } from "@/lib/utils";

interface BarLoungeSectionProps {
  className?: string;
  id?: string;
  asSubSection?: boolean;
}

export function BarLoungeSection({
  className,
  id = "bar-lounge",
  asSubSection = false,
}: BarLoungeSectionProps) {
  const [activeCategory, setActiveCategory] = useState<BarCategory>("All");
  const [viewMode, setViewMode] = useState<"menu" | "cards">("menu");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const sectionId = useId();

  const filteredItems = barMenuData.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.tag && item.tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Ordered categories for grouped editorial menu layout
  const groupedCategories: BarCategory[] = [
    "Whisky",
    "Scotch",
    "Vodka",
    "Rum",
    "Beer",
    "Breezer",
    "Mocktail",
    "Draught Beer",
  ];

  const innerContent = (
    <>
      {/* ----------------------------------------------------------------- */}
      {/* 1. AMBIENT BACKGROUND GLOWS (Only when rendered standalone)       */}
      {/* ----------------------------------------------------------------- */}
      {!asSubSection && (
        <>
          {/* Warm Golden Halo behind Top Header */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[500px] rounded-full bg-gradient-to-b from-[#D49B55]/15 via-[#B45309]/08 to-transparent blur-[140px]"
          />
          {/* Electric Sky Blue Halo behind Draught / Beer area */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-20 right-[-10%] w-[550px] h-[550px] rounded-full bg-[#0284C7]/08 blur-[150px] animate-aurora-pulse"
            style={{ animationDuration: "10s" }}
          />
          {/* Deep Amber Flare (Bottom Left) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-10 left-[-10%] w-[500px] h-[500px] rounded-full bg-[#D49B55]/10 blur-[140px] animate-aurora-pulse"
            style={{ animationDuration: "12s", animationDelay: "3s" }}
          />
        </>
      )}

      <div className={cn("relative mx-auto max-w-[1360px] z-10", !asSubSection && "px-5 lg:px-12")}>
        {/* ----------------------------------------------------------------- */}
        {/* 2. SECTION HEADER WITH ROYAL DIPLOMACY & LUXURY TYPOGRAPHY        */}
        {/* ----------------------------------------------------------------- */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Heritage Crest Badge */}
          <Reveal variant="fade-down">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D49B55]/40 bg-[#16120E]/90 px-4 py-1.5 backdrop-blur-md shadow-md">
              <span className="size-2 rounded-full bg-[#D49B55] shadow-[0_0_8px_#D49B55] animate-pulse" />
              <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.26em] text-[#D49B55] uppercase">
                DAWAT RESTAURANT & LOUNGE BAR · DRINKS MENU
              </span>
            </div>
          </Reveal>

          {/* Main Headings */}
          <Reveal variant="fade-up" delay={80}>
            <h2
              id={`${sectionId}-heading`}
              className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#FAF5EE]"
            >
              BAR & LOUNGE DRINKS MENU
            </h2>
          </Reveal>

          <Reveal variant="fade-up" delay={140}>
            <p className="mt-2 font-serif text-lg sm:text-xl md:text-2xl italic text-transparent bg-clip-text bg-gradient-to-r from-[#FDE3B0] via-[#D49B55] to-[#E5B869]">
              “Raise a Glass. Make It Memorable.”
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={180}>
            <p className="mt-4 font-sans text-xs sm:text-sm text-stone-300/80 leading-relaxed max-w-2xl">
              Official menu of premium spirits, imported scotches, chilled bottled brews, and fresh draught beers on tap. Served with frosted glassware, ice buckets, and warm Punjabi hospitality in our signature SKY Lounge.
            </p>
          </Reveal>
        </div>

        {/* ----------------------------------------------------------------- */}
        {/* 3. INTERACTIVE CATEGORY TABS WITH GLOWING UNDERLINE & HOVER       */}
        {/* ----------------------------------------------------------------- */}
        <Reveal variant="fade-up" delay={220} className="mt-10 lg:mt-12">
          <div className="relative">
            {/* Scrollable Container with Subtle Edge Indicators */}
            <div
              role="tablist"
              aria-label="Bar Menu Categories"
              className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-3 pt-1 no-scrollbar justify-start md:justify-center px-2"
            >
              {barCategories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    role="tab"
                    id={`tab-${cat.id.toLowerCase().replace(/\s+/g, "-")}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${cat.id.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      "relative shrink-0 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer select-none group flex items-center gap-2",
                      isActive
                        ? "bg-gradient-to-r from-[#D49B55] via-[#E5B869] to-[#C08845] text-stone-950 font-semibold shadow-lg shadow-[#D49B55]/25 scale-[1.02]"
                        : "border border-stone-800 bg-[#14100D]/80 text-stone-300 hover:border-[#D49B55]/50 hover:bg-[#1C1612] hover:text-white"
                    )}
                  >
                    <span className="text-sm">{cat.icon}</span>
                    <span>{cat.label}</span>
                    <span
                      className={cn(
                        "text-[10px] rounded-full px-1.5 py-0.2 font-sans transition-colors",
                        isActive
                          ? "bg-stone-950/20 text-stone-950 font-bold"
                          : "bg-stone-800 text-stone-400 group-hover:bg-stone-700"
                      )}
                    >
                      {cat.count}
                    </span>

                    {/* Active Animated Underline Accent */}
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-[2px] rounded-full bg-[#FAF5EE] shadow-[0_0_8px_#FAF5EE] animate-pulse"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* ----------------------------------------------------------------- */}
        {/* CONTROLS TOOLBAR: DRINK SEARCH & VIEW MODE SWITCHER               */}
        {/* ----------------------------------------------------------------- */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-stone-800/80">
          {/* Quick Search */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 26 drinks, beers, scotch..."
              className="w-full rounded-full border border-stone-800 bg-[#120F0C] pl-10 pr-8 py-2 text-xs text-stone-200 placeholder:text-stone-500 focus:border-[#D49B55] focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-white"
                aria-label="Clear search"
              >
                <X className="size-3.5" />
              </button>
            )}
          </div>

          {/* Results Summary + View Mode Switcher */}
          <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3 w-full sm:w-auto">
            <span className="text-xs text-stone-400 font-sans hidden sm:inline-block">
              Showing <strong className="text-[#D49B55]">{filteredItems.length}</strong> Drinks
            </span>

            {/* View Mode Toggle: Classic Menu Board vs Modern Cards */}
            <div className="inline-flex items-center rounded-xl bg-[#120F0C] border border-stone-800 p-0.5 sm:p-1 shadow-inner w-full sm:w-auto justify-center">
              <button
                type="button"
                onClick={() => setViewMode("menu")}
                className={cn(
                  "flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-lg text-[11px] sm:text-xs font-medium transition-all cursor-pointer min-h-[36px]",
                  viewMode === "menu"
                    ? "bg-[#D49B55] text-stone-950 font-semibold shadow-md"
                    : "text-stone-400 hover:text-stone-200"
                )}
              >
                <List className="size-3.5 shrink-0" />
                <span>Board<span className="hidden xs:inline"> View</span></span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("cards")}
                className={cn(
                  "flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-lg text-[11px] sm:text-xs font-medium transition-all cursor-pointer min-h-[36px]",
                  viewMode === "cards"
                    ? "bg-[#D49B55] text-stone-950 font-semibold shadow-md"
                    : "text-stone-400 hover:text-stone-200"
                )}
              >
                <LayoutGrid className="size-3.5 shrink-0" />
                <span>Cards<span className="hidden xs:inline"> View</span></span>
              </button>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------------- */}
        {/* 4. MENU ITEMS DISPLAY: MENU BOARD VIEW OR GRID CARDS VIEW         */}
        {/* ----------------------------------------------------------------- */}
        <div
          role="tabpanel"
          id={`panel-${activeCategory.toLowerCase().replace(/\s+/g, "-")}`}
          aria-labelledby={`tab-${activeCategory.toLowerCase().replace(/\s+/g, "-")}`}
          className="mt-8 transition-all duration-500"
        >
          {filteredItems.length === 0 ? (
            <div className="py-16 text-center rounded-3xl border border-stone-800 bg-[#120F0C] p-8">
              <p className="text-stone-400 text-sm">
                No drinks found matching "{searchQuery}".
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#D49B55] px-5 py-2 text-xs font-semibold text-stone-950"
              >
                Reset Search & Filters
              </button>
            </div>
          ) : viewMode === "menu" ? (
            /* ======================================================== */
            /* A. AUTHENTIC FINE-DINING DRINKS MENU BOARD LAYOUT         */
            /* ======================================================== */
            <div className="space-y-8">
              {groupedCategories.map((categoryName) => {
                const categoryItems = filteredItems.filter(
                  (item) => item.category === categoryName
                );
                if (categoryItems.length === 0) return null;

                const catMeta = barCategories.find((c) => c.id === categoryName);

                return (
                  <div
                    key={categoryName}
                    className="rounded-3xl border border-[#D49B55]/30 bg-gradient-to-b from-[#181410]/95 via-[#130F0C]/90 to-[#0F0C0A]/95 p-5 sm:p-7 lg:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden transition-all duration-300 hover:border-[#D49B55]/50"
                  >
                    {/* Ambient Corner Flare */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-12 -right-12 size-40 rounded-full bg-[#D49B55]/10 blur-3xl"
                    />

                    {/* Board Category Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-[#D49B55]/25 gap-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xl sm:text-2xl">{catMeta?.icon}</span>
                        <div>
                          <h3 className="font-display text-xl sm:text-2xl text-[#FAF5EE] tracking-wide">
                            {categoryName}
                          </h3>
                          <p className="text-[11px] font-sans text-stone-400">
                            {categoryName === "Whisky" && "Classic Indian & Premium Blends"}
                            {categoryName === "Scotch" && "Imported Blended Scotches"}
                            {categoryName === "Vodka" && "Triple Distilled Spirits"}
                            {categoryName === "Rum" && "Aged Dark & White Rums"}
                            {categoryName === "Beer" && "Chilled Bottles Served Cold"}
                            {categoryName === "Breezer" && "Flavoured Refreshing Coolers"}
                            {categoryName === "Mocktail" && "Handcrafted Non-Alcoholic Cocktails"}
                            {categoryName === "Draught Beer" && "Fresh Chilled On Tap"}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-start sm:self-auto">
                        <span className="rounded-full bg-[#D49B55]/15 border border-[#D49B55]/30 px-3 py-1 text-[11px] font-sans font-semibold text-[#F5D28E] uppercase tracking-wider">
                          {categoryName === "Draught Beer"
                            ? "Mug · Jug · Pitcher"
                            : categoryName === "Beer" || categoryName === "Breezer"
                            ? "Bottle Service"
                            : categoryName === "Mocktail"
                            ? "Glass"
                            : "30ML · 60ML Pours"}
                        </span>
                      </div>
                    </div>

                    {/* Menu Rows */}
                    <div className="divide-y divide-stone-800/60">
                      {categoryItems.map((item) => (
                        <BarMenuRow key={item.id} item={item} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* ======================================================== */
            /* B. MODERN INTERACTIVE CARDS VIEW                          */
            /* ======================================================== */
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item, index) => (
                <BarItemCard key={item.id} item={item} index={index} />
              ))}
            </div>
          )}
        </div>

        {/* ----------------------------------------------------------------- */}
        {/* 5. BOTTOM NOTICES: EXACTLY AS SHOWN IN THE PHYSICAL MENU           */}
        {/* ----------------------------------------------------------------- */}
        <Reveal variant="fade-up" delay={260} className="mt-12 lg:mt-16">
          <div className="rounded-3xl border border-[#D49B55]/30 bg-gradient-to-r from-[#17120E]/95 via-[#1E1712]/90 to-[#17120E]/95 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Left Notice Elements from the Printed Photo */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full md:w-auto">
                {/* Notice 1: Exclusive of tax */}
                <div className="flex items-center gap-2.5 rounded-full border border-stone-700/80 bg-black/60 px-5 py-2.5 text-xs font-semibold text-stone-200 shadow-md">
                  <Receipt className="size-4 text-[#D49B55]" />
                  <span>Exclusive of tax</span>
                </div>

                {/* Notice 2: Outside Drinks & Food Not Allowed */}
                <div className="flex items-center gap-2.5 rounded-full border border-red-500/30 bg-red-950/40 px-5 py-2.5 text-xs font-semibold text-red-200 shadow-md">
                  <ShieldAlert className="size-4 text-red-400" />
                  <span>Outside Drinks & Food Not Allowed</span>
                </div>
              </div>

              {/* Right CTA Group */}
              <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 w-full md:w-auto">
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/60 px-5 py-2.5 text-xs font-medium text-emerald-300 hover:bg-emerald-500/20 transition-all"
                >
                  <WhatsAppIcon size={14} />
                  <span>Inquire via WhatsApp</span>
                </a>
                <a
                  href={site.phoneHref}
                  className="luxury-shimmer inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D49B55] to-[#C08845] px-5 py-2.5 text-xs font-semibold text-stone-950 shadow-md hover:shadow-[#D49B55]/30 transition-all"
                >
                  <Phone className="size-3.5" />
                  <span>Call Lounge: {site.phone}</span>
                </a>
              </div>
            </div>

            {/* Sub-note with Age Policy & Responsible Service */}
            <p className="mt-4 pt-4 border-t border-stone-800/80 text-center md:text-left text-[11px] text-stone-400/80 font-sans">
              * Legal drinking age rules apply in Mukerian, Punjab. Please drink responsibly. Draught beer freshness guaranteed on tap.
            </p>
          </div>
        </Reveal>
      </div>
    </>
  );

  if (asSubSection) {
    return (
      <div id={id} className={cn("relative scroll-mt-24", className)}>
        {innerContent}
      </div>
    );
  }

  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden bg-gradient-to-b from-[#0E0C0A] via-[#0B0907] to-[#120F0D] py-20 lg:py-32 border-t border-stone-800/60 scroll-mt-20",
        className
      )}
      aria-labelledby={`${sectionId}-heading`}
    >
      {innerContent}
    </section>
  );
}

// -------------------------------------------------------------------------
// REUSABLE AUTHENTIC EDITORIAL MENU ROW (Menu Board View)
// -------------------------------------------------------------------------
function BarMenuRow({ item }: { item: BarMenuItem }) {
  return (
    <div className="group relative flex flex-col sm:flex-row sm:items-center justify-between py-3 px-3.5 rounded-xl transition-all duration-300 hover:bg-[#D49B55]/12 border border-transparent hover:border-[#D49B55]/30 gap-1.5 sm:gap-0 cursor-pointer">
      {/* Ambient micro-glow hover strip */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-[#D49B55]/10 via-transparent to-[#D49B55]/05 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />

      {/* Left: Drink Name & Tag */}
      <div className="relative z-10 flex items-center gap-2.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1.5">
        <span className="font-serif text-base sm:text-[17px] font-medium text-[#FAF5EE] group-hover:text-white transition-colors tracking-wide">
          {item.name}
        </span>
        {item.tag && (
          <span className="text-[9.5px] uppercase font-sans font-semibold tracking-wider px-2 py-0.5 rounded-full bg-[#D49B55]/15 text-[#F5D28E] border border-[#D49B55]/30 shadow-sm group-hover:border-[#D49B55]/50 group-hover:shadow-[0_0_8px_rgba(212,155,85,0.25)] transition-all">
            {item.tag}
          </span>
        )}
      </div>

      {/* Dotted Leader Line (Visible on tablet & desktop) */}
      <div className="hidden sm:block flex-1 mx-4 border-b border-dotted border-stone-700/70 group-hover:border-[#D49B55]/50 transition-colors min-w-[20px]" />

      {/* Right: Exact Prices */}
      <div className="relative z-10 shrink-0 transition-transform duration-300 group-hover:scale-[1.03]">
        {item.type === "dual" && (
          <div className="flex items-center gap-3 font-sans text-xs sm:text-sm">
            <span className="text-stone-400 group-hover:text-stone-300 transition-colors">
              30ml{" "}
              <strong className="text-[#F5D28E] font-serif text-sm sm:text-base font-semibold group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(245,210,142,0.4)] transition-all">
                ₹{item.price30ml}
              </strong>
            </span>
            <span className="text-stone-600">/</span>
            <span className="text-stone-400 group-hover:text-stone-300 transition-colors">
              60ml{" "}
              <strong className="text-[#F5D28E] font-serif text-sm sm:text-base font-semibold group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(245,210,142,0.4)] transition-all">
                ₹{item.price60ml}
              </strong>
            </span>
          </div>
        )}

        {item.type === "single" && (
          <div className="flex items-center gap-2 font-sans text-xs sm:text-sm">
            <span className="text-stone-400 uppercase text-[10px] tracking-wider bg-stone-800/80 px-2 py-0.5 rounded group-hover:bg-stone-800 transition-colors">
              {item.servingLabel}
            </span>
            <strong className="text-[#F5D28E] font-serif text-base sm:text-lg font-semibold group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(245,210,142,0.4)] transition-all">
              ₹{item.price}
            </strong>
          </div>
        )}

        {item.type === "draught" && (
          <div className="flex items-center gap-2 sm:gap-2.5 font-sans text-xs">
            <span className="text-stone-300">
              Mug{" "}
              <strong className="text-[#38BDF8] font-serif text-sm font-semibold group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.5)] transition-all">
                ₹{item.mugPrice}
              </strong>
            </span>
            <span className="text-stone-600">·</span>
            <span className="text-stone-300">
              Jug{" "}
              <strong className="text-[#38BDF8] font-serif text-sm font-semibold group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.5)] transition-all">
                ₹{item.jugPrice}
              </strong>
            </span>
            <span className="text-stone-600">·</span>
            <span className="text-stone-300">
              Pitcher{" "}
              <strong className="text-[#38BDF8] font-serif text-sm font-semibold group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.5)] transition-all">
                ₹{item.pitcherPrice}
              </strong>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

// -------------------------------------------------------------------------
// REUSABLE INDIVIDUAL BAR ITEM CARD WITH ACCURATE MULTI-SIZE PRICES (Cards View)
// -------------------------------------------------------------------------
function BarItemCard({ item, index }: { item: BarMenuItem; index: number }) {
  return (
    <div
      style={{ animationDelay: `${(index % 6) * 60}ms` }}
      className={cn(
        "group relative rounded-2xl border border-stone-800/90 bg-[#15110E]/75 p-4 sm:p-5 backdrop-blur-md transition-all duration-300",
        "hover:border-[#D49B55]/50 hover:bg-[#1C1612]/90 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/70"
      )}
    >
      {/* Ambient Micro Glow on Hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-[#D49B55]/0 via-[#D49B55]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      <div className="relative z-10 flex flex-col justify-between h-full gap-3">
        {/* Top: Name & Tag */}
        <div>
          <div className="flex items-start justify-between gap-2">
            <h4 className="font-display text-base sm:text-lg font-medium text-[#FAF5EE] group-hover:text-white transition-colors leading-snug">
              {item.name}
            </h4>
            {item.tag && (
              <span className="shrink-0 rounded-full bg-[#D49B55]/15 border border-[#D49B55]/30 px-2 py-0.5 text-[9.5px] font-sans font-medium text-[#F5D28E] uppercase tracking-wider">
                {item.tag}
              </span>
            )}
          </div>
          <p className="text-[11px] text-stone-400 font-sans mt-0.5 tracking-wide">
            Category: <span className="text-stone-300">{item.category}</span>
          </p>
        </div>

        {/* Bottom: Aligned Prices according to Serving Sizes */}
        <div className="pt-3 border-t border-stone-800/70">
          {item.type === "dual" && (
            /* Dual 30ML / 60ML Pricing (Whisky, Scotch, Vodka, Rum) */
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col items-center justify-center rounded-xl bg-black/40 border border-stone-800/80 p-2 group-hover:border-[#D49B55]/30 transition-colors">
                <span className="text-[10px] font-sans text-stone-400 tracking-wider uppercase font-medium">
                  30 ML
                </span>
                <span className="font-display text-base font-semibold text-[#F5D28E] group-hover:text-white transition-colors mt-0.5">
                  ₹{item.price30ml}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-xl bg-black/40 border border-stone-800/80 p-2 group-hover:border-[#D49B55]/30 transition-colors">
                <span className="text-[10px] font-sans text-stone-400 tracking-wider uppercase font-medium">
                  60 ML
                </span>
                <span className="font-display text-base font-semibold text-[#F5D28E] group-hover:text-white transition-colors mt-0.5">
                  ₹{item.price60ml}
                </span>
              </div>
            </div>
          )}

          {item.type === "single" && (
            /* Single Price: Bottle or Glass (Beer, Breezer, Mocktail) */
            <div className="flex items-center justify-between rounded-xl bg-black/40 border border-stone-800/80 px-4 py-2 group-hover:border-[#D49B55]/30 transition-colors">
              <span className="text-xs font-sans text-stone-400 tracking-wider uppercase font-medium flex items-center gap-1.5">
                <span>{item.servingLabel === "BOTTLE" ? "🍾" : "🍹"}</span>
                <span>{item.servingLabel}</span>
              </span>
              <span className="font-display text-lg font-semibold text-[#F5D28E] group-hover:text-white transition-colors">
                ₹{item.price}
              </span>
            </div>
          )}

          {item.type === "draught" && (
            /* Draught Beer: Mug, Jug, Pitcher */
            <div className="grid grid-cols-3 gap-1.5">
              <div className="flex flex-col items-center justify-center rounded-xl bg-black/40 border border-stone-800/80 p-1.5 group-hover:border-[#38BDF8]/40 transition-colors">
                <span className="text-[9.5px] font-sans text-stone-400 tracking-wider uppercase font-medium">
                  MUG
                </span>
                <span className="font-display text-sm font-semibold text-[#38BDF8] group-hover:text-white transition-colors mt-0.5">
                  ₹{item.mugPrice}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-xl bg-black/40 border border-stone-800/80 p-1.5 group-hover:border-[#38BDF8]/40 transition-colors">
                <span className="text-[9.5px] font-sans text-stone-400 tracking-wider uppercase font-medium">
                  JUG
                </span>
                <span className="font-display text-sm font-semibold text-[#38BDF8] group-hover:text-white transition-colors mt-0.5">
                  ₹{item.jugPrice}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-xl bg-black/40 border border-stone-800/80 p-1.5 group-hover:border-[#38BDF8]/40 transition-colors">
                <span className="text-[9.5px] font-sans text-stone-400 tracking-wider uppercase font-medium">
                  PITCHER
                </span>
                <span className="font-display text-sm font-semibold text-[#38BDF8] group-hover:text-white transition-colors mt-0.5">
                  ₹{item.pitcherPrice}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
