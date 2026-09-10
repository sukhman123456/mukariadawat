import { useState } from "react";
import { Sparkles, Flame, Clock, Phone, UtensilsCrossed } from "lucide-react";
import heroFeast from "@/assets/dawat-hero-feast.jpg";
import dishPaneerTikka from "@/assets/dish-paneer-tikka.jpg";
import realSaagRoti from "@/assets/real/dawat-real-saag-roti.jpg";
import dawatDrinksLassi from "@/assets/dawat-drinks-lassi.jpg";
import { useLanguage } from "@/lib/translations";
import { site } from "@/lib/site";
import { BookTableModal } from "./BookTableModal";

interface SpecialDish {
  id: string;
  nameEn: string;
  namePa: string;
  badgeEn: string;
  badgePa: string;
  price: string;
  descriptionEn: string;
  descriptionPa: string;
  image: string;
  prepTime: string;
  spiceLevel: "Mild" | "Medium" | "Chef Special";
}

const specials: SpecialDish[] = [
  {
    id: "dal-bukhara",
    nameEn: "Dal Bukhara Handi",
    namePa: "ਦਾਲ ਬੁਖ਼ਾਰਾ ਹਾਂਡੀ",
    badgeEn: "Chef's #1 Pick · 18h Slow Cook",
    badgePa: "ਸ਼ੈੱਫ ਦੀ ਪਸੰਦ · 18 ਘੰਟੇ ਹੌਲੀ ਪੱਕੀ",
    price: "₹240",
    descriptionEn:
      "Urad dal simmered overnight over live charcoal embers, blended with fresh cream, ripe tomatoes, and dollops of churned white butter.",
    descriptionPa:
      "ਕੋਲਿਆਂ 'ਤੇ ਰਾਤ ਭਰ ਹੌਲੀ-ਹੌਲੀ ਪੱਕੀ ਕਾਲੀ ਦਾਲ, ਤਾਜ਼ੀ ਮਲਾਈ, ਟਮਾਟਰਾਂ ਅਤੇ ਘਰ ਦੇ ਚਿੱਟੇ ਮੱਖਣ ਨਾਲ ਤਿਆਰ।",
    image: heroFeast,
    prepTime: "Freshly Served",
    spiceLevel: "Mild",
  },
  {
    id: "paneer-shashlik",
    nameEn: "Tandoori Paneer Tikka Shashlik",
    namePa: "ਤੰਦੂਰੀ ਪਨੀਰ ਟਿੱਕਾ ਸ਼ਾਸ਼ਲਿਕ",
    badgeEn: "Earthen Clay Tandoor",
    badgePa: "ਅਸਲੀ ਮਿੱਟੀ ਦਾ ਤੰਦੂਰ",
    price: "₹380",
    descriptionEn:
      "Plump cottage cheese cubes steeped in hung curd, freshly roasted ajwain, and Kashmiri degi mirch, blistered over flaming charcoal.",
    descriptionPa:
      "ਅਜਵਾਇਣ, ਕਸ਼ਮੀਰੀ ਲਾਲ ਮਿਰਚ ਅਤੇ ਦਹੀਂ 'ਚ ਲਪੇਟਿਆ ਤਾਜ਼ਾ ਪਨੀਰ, ਤੰਦੂਰ ਵਿੱਚ ਸੁਨਹਿਰੀ ਭੁੰਨਿਆ।",
    image: dishPaneerTikka,
    prepTime: "15-20 Mins",
    spiceLevel: "Medium",
  },
  {
    id: "sarson-saag",
    nameEn: "Desi Makki Di Roti & Sarson Ka Saag",
    namePa: "ਮੱਕੀ ਦੀ ਰੋਟੀ ਤੇ ਸਰ੍ਹੋਂ ਦਾ ਸਾਗ",
    badgeEn: "Authentic Punjab Heritage",
    badgePa: "ਅਸਲੀ ਪੰਜਾਬੀ ਵਿਰਾਸਤ",
    price: "₹260",
    descriptionEn:
      "Farm-fresh mustard greens slow-cooked with bathua, ginger, and green chillies, served with freshly baked makki rotis and gur.",
    descriptionPa:
      "ਖੇਤਾਂ ਦਾ ਤਾਜ਼ਾ ਸਰ੍ਹੋਂ ਦਾ ਸਾਗ, ਅਦਰਕ-ਲਸਣ ਦਾ ਤੜਕਾ, ਗਰਮਾ-ਗਰਮ ਮੱਕੀ ਦੀਆਂ ਰੋਟੀਆਂ ਤੇ ਦੇਸੀ ਗੁੜ।",
    image: realSaagRoti,
    prepTime: "Traditional Batch",
    spiceLevel: "Medium",
  },
  {
    id: "punjabi-lassi",
    nameEn: "Royal Malai Sweet Lassi",
    namePa: "ਸ਼ਾਹੀ ਮਲਾਈ ਮਿੱਠੀ ਲੱਸੀ",
    badgeEn: "Fresh Dairy Churned",
    badgePa: "ਤਾਜ਼ੇ ਦੁੱਧ ਦੀ ਰਿੜਕੀ",
    price: "₹70",
    descriptionEn:
      "Thick sweet curd hand-whipped with crushed cardamom, rose water essence, and crowned with a thick layer of clotted malai.",
    descriptionPa:
      "ਹੱਥ ਨਾਲ ਰਿੜਕਿਆ ਮਿੱਠਾ ਦਹੀਂ, ਇਲਾਇਚੀ ਦੀ ਖ਼ੁਸ਼ਬੂ ਅਤੇ ਉੱਤੇ ਤਾਜ਼ੀ ਸੰਘਣੀ ਮਲਾਈ ਦੀ ਪਰਤ।",
    image: dawatDrinksLassi,
    prepTime: "Instant Chilled",
    spiceLevel: "Chef Special",
  },
];

export function TodaysSpecialSection() {
  const { lang, t } = useLanguage();
  const [bookModalOpen, setBookModalOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<string | null>(null);

  const handleBookDish = (dishName: string) => {
    setSelectedDish(dishName);
    setBookModalOpen(true);
  };

  return (
    <section className="relative overflow-hidden bg-[#F5EFE6] text-[#1C1917] py-12 sm:py-16 lg:py-24 border-t border-[#A87545]/20">
      <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-12">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 sm:pb-10 border-b border-[#A87545]/15">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#A87545]/30 bg-white px-3.5 py-1 text-xs font-semibold text-[#A87545] shadow-sm">
              <Sparkles className="size-3.5 text-[#A87545]" />
              <span>{t("todays_special_badge")}</span>
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1917]">
              {t("todays_special_title")}
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#5A4D41] max-w-2xl leading-relaxed">
              {t("todays_special_desc")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
            <button
              onClick={() => {
                setSelectedDish("Today's Specials Table");
                setBookModalOpen(true);
              }}
              className="luxury-shimmer min-h-[44px] inline-flex items-center justify-center gap-2 rounded-full bg-[#A87545] px-6 py-3 text-xs sm:text-sm font-semibold text-[#F5EFE6] shadow-lg shadow-[#A87545]/20 hover:bg-[#B98350] hover:shadow-[0_0_20px_rgba(200,168,117,0.35)] hover:scale-105 active:scale-95 transition-all cursor-pointer text-center"
            >
              <UtensilsCrossed className="size-4" />
              <span>{t("book_a_table")}</span>
            </button>
            <a
              href={site.phoneHref}
              className="min-h-[44px] inline-flex items-center justify-center gap-2 rounded-full border border-[#A87545]/40 bg-white px-5 py-3 text-xs sm:text-sm font-medium text-[#1C1917] hover:border-[#A87545] hover:text-[#A87545] shadow-sm transition-all text-center"
            >
              <Phone className="size-3.5 text-[#A87545]" />
              <span>{site.phone}</span>
            </a>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-8 sm:mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {specials.map((dish) => (
            <div
              key={dish.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#A87545]/20 bg-white p-3 shadow-sm transition-all duration-300 hover:border-[#A87545]/50 hover:shadow-md hover:-translate-y-1.5"
            >
              <div>
                {/* Image Container with Badge */}
                <div className="relative aspect-[16/11] overflow-hidden rounded-xl bg-black/5">
                  <img
                    src={dish.image}
                    alt={dish.nameEn}
                    width={480}
                    height={330}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                  {/* Top Badge */}
                  <span className="absolute top-2.5 left-2.5 rounded-full bg-black/75 border border-[#A87545]/40 px-2.5 py-0.5 text-[10px] font-semibold text-[#F5EFE6] backdrop-blur-md">
                    {lang === "pa" ? dish.badgePa : dish.badgeEn}
                  </span>

                  {/* Price Tag */}
                  <span className="absolute bottom-2.5 right-2.5 rounded-lg bg-black/85 border border-[#C8A875]/30 px-2.5 py-1 text-xs font-bold text-[#C8A875] backdrop-blur-md shadow-md">
                    {dish.price}
                  </span>
                </div>

                {/* Content */}
                <div className="p-3 pt-4">
                  <div className="flex items-center gap-2 text-[10px] text-[#5A4D41] font-medium mb-1.5">
                    <span className="inline-flex items-center gap-1 text-[#A87545]">
                      <Flame className="size-3 text-[#A87545]" />
                      {dish.spiceLevel}
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="size-3" />
                      {dish.prepTime}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-medium text-[#1C1917] group-hover:text-[#A87545] transition-colors">
                    {lang === "pa" ? dish.namePa : dish.nameEn}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[#5A4D41] line-clamp-3">
                    {lang === "pa" ? dish.descriptionPa : dish.descriptionEn}
                  </p>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-3 pt-2">
                <button
                  type="button"
                  onClick={() => handleBookDish(dish.nameEn)}
                  className="w-full rounded-xl border border-[#A87545]/30 bg-[#FAF7F2] py-2.5 text-xs font-semibold text-[#1C1917] transition-all hover:bg-[#A87545] hover:text-[#F5EFE6] hover:border-[#A87545] cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <UtensilsCrossed className="size-3.5" />
                  <span>{lang === "pa" ? "ਟੇਬਲ ਬੁੱਕ ਕਰੋ / ਆਰਡਰ" : "Reserve for Table"}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BookTableModal
        isOpen={bookModalOpen}
        onClose={() => setBookModalOpen(false)}
        initialHallPreference={selectedDish ? `Specials: ${selectedDish}` : undefined}
      />
    </section>
  );
}
