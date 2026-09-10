import { Link } from "@tanstack/react-router";
import { ArrowRight, Flame, Award, ShieldCheck, HeartHandshake } from "lucide-react";
import heroFeast from "@/assets/dawat-hero-feast.jpg";
import dawatTandooriChicken from "@/assets/dawat-tandoori-chicken.jpg";
import dawatMuttonCurry from "@/assets/dawat-mutton-curry.jpg";
import dawatFishTikka from "@/assets/dawat-fish-tikka.jpg";
import { useLanguage } from "@/lib/translations";

interface SignatureDish {
  id: string;
  titleEn: string;
  titlePa: string;
  highlightEn: string;
  highlightPa: string;
  descEn: string;
  descPa: string;
  price: string;
  image: string;
  speciality: string;
}

const signatureList: SignatureDish[] = [
  {
    id: "dal-bukhara-legend",
    titleEn: "Slow-Simmered Dal Bukhara",
    titlePa: "ਹੌਲੀ ਪੱਕੀ ਸ਼ਾਹੀ ਦਾਲ ਬੁਖ਼ਾਰਾ",
    highlightEn: "18-Hour Clay Pot Simmer",
    highlightPa: "18 ਘੰਟੇ ਮਿੱਟੀ ਦੇ ਭਾਂਡੇ 'ਚ ਪੱਕੀ",
    descEn:
      "Handpicked whole black lentils and kidney beans cooked slowly overnight on dying wood embers. Finished with churned white makhan, velvety fresh dairy cream, and roasted cumin.",
    descPa:
      "ਲੱਕੜ ਦੇ ਕੋਲਿਆਂ 'ਤੇ ਰਾਤ ਭਰ ਹੌਲੀ-ਹੌਲੀ ਪੱਕੀ ਸਾਬਤ ਉੜਦ ਦਾਲ, ਦੇਸੀ ਚਿੱਟਾ ਮੱਖਣ, ਮਲਾਈ ਅਤੇ ਭੁੰਨੇ ਜੀਰੇ ਦਾ ਸ਼ਾਹੀ ਸੁਆਦ।",
    price: "₹240",
    image: heroFeast,
    speciality: "House Specialty · Pure Veg",
  },
  {
    id: "tandoori-chicken-classic",
    titleEn: "Authentic Charcoal Tandoori Chicken",
    titlePa: "ਅਸਲੀ ਕੋਲਿਆਂ ਵਾਲਾ ਤੰਦੂਰੀ ਚਿਕਨ",
    highlightEn: "Smoky Earthen Clay Oven",
    highlightPa: "ਅਸਲੀ ਮਿੱਟੀ ਦਾ ਤੰਦੂਰ",
    descEn:
      "Tender chicken double-marinated in spiced hung yogurt, crushed garlic, and Kashmiri red chillies. Roasted in a traditional cylindrical charcoal tandoor till smoky and succulent.",
    descPa:
      "ਅਦਰਕ, ਲਸਣ, ਦਹੀਂ ਅਤੇ ਕਸ਼ਮੀਰੀ ਲਾਲ ਮਿਰਚ ਵਿੱਚ ਮੈਰੀਨੇਟ ਕੀਤਾ ਚਿਕਨ, ਮਿੱਟੀ ਦੇ ਤੰਦੂਰ ਵਿੱਚ ਧੂੰਏਂਦਾਰ ਅਤੇ ਰਸੀਲਾ ਭੁੰਨਿਆ।",
    price: "₹320 / ₹550",
    image: dawatTandooriChicken,
    speciality: "All-Time Favourite",
  },
  {
    id: "mutton-curry-traditional",
    titleEn: "Traditional Handi Mutton Rogan",
    titlePa: "ਪਰੰਪਰਾਗਤ ਹਾਂਡੀ ਮਟਨ ਰੋਗ਼ਨ",
    highlightEn: "Slow Braised in Brass Kadhai",
    highlightPa: "ਪਿੱਤਲ ਦੀ ਕੜਾਹੀ ਵਿੱਚ ਤਿਆਰ",
    descEn:
      "Choice cuts of tender mutton slow-braised with whole cloves, black cardamom, and Kashmiri chilies in a rich onion-tomato gravy layered with aromatic rogan.",
    descPa:
      "ਮੋਟੀ ਇਲਾਇਚੀ, ਲੌਂਗ ਅਤੇ ਖੜ੍ਹੇ ਮਸਾਲਿਆਂ ਨਾਲ ਪੱਕਿਆ ਨਰਮ ਮਟਨ, ਖ਼ੁਸ਼ਬੂਦਾਰ ਰੋਗ਼ਨ ਅਤੇ ਗਾੜ੍ਹੀ ਰਵਾਇਤੀ ਗ੍ਰੇਵੀ।",
    price: "₹600",
    image: dawatMuttonCurry,
    speciality: "Gourmet Selection",
  },
  {
    id: "ajwain-fish-tikka",
    titleEn: "Charcoal Blistered Fish Tikka",
    titlePa: "ਤੰਦੂਰੀ ਅਜਵਾਇਣ ਫ਼ਿਸ਼ ਟਿੱਕਾ",
    highlightEn: "Crushed Carom & Mustard Essence",
    highlightPa: "ਕੁੱਟੀ ਅਜਵਾਇਣ ਤੇ ਸਰ੍ਹੋਂ ਦਾ ਤੇਲ",
    descEn:
      "Delicate boneless river sole fish fillets infused with pungent yellow mustard oil, roasted ajwain seeds, and tangy amchur, blistered on tandoor skewers.",
    descPa:
      "ਬਿਨਾਂ ਕੰਡੇ ਵਾਲੀ ਤਾਜ਼ੀ ਮੱਛੀ, ਕੱਚੀ ਘਾਣੀ ਸਰ੍ਹੋਂ ਦਾ ਤੇਲ, ਅਜਵਾਇਣ ਅਤੇ ਨਿੰਬੂ ਦੇ ਰਸ ਨਾਲ ਤੰਦੂਰ 'ਚ ਭੁੰਨੀ।",
    price: "₹550",
    image: dawatFishTikka,
    speciality: "Chef's Catch",
  },
];

export function SignatureDishesSection() {
  const { lang, t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1C1917] via-[#241B16] to-[#1C1917] py-12 sm:py-16 lg:py-24 border-t border-[#A87545]/20 text-[#F5EFE6]">
      {/* Subtle warm bronze background aura */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-[#A87545]/5 blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-12">
        {/* Top Eyebrow & Title */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-[#C8A875] uppercase inline-flex items-center gap-2">
            <Award className="size-3.5 text-[#C8A875]" />
            {lang === "pa" ? "ਸਾਡੀ ਰਸੋਈ ਦੀ ਪਛਾਣ" : "TIMELESS CULINARY HERITAGE"}
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F5EFE6]">
            {t("signature_dishes_title")}
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-[#D8C8B8] leading-relaxed">
            {t("signature_dishes_desc")}
          </p>
        </div>

        {/* 4 Cards Grid - 2x2 Layout on Desktop for Premium Depth */}
        <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-8 lg:grid-cols-2">
          {signatureList.map((dish, idx) => (
            <div
              key={dish.id}
              className="group relative overflow-hidden rounded-3xl border border-[#A87545]/25 bg-[#241B16] p-5 sm:p-6 shadow-xl transition-all duration-500 hover:border-[#A87545]/60 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)] hover:-translate-y-1"
            >
              <div className="grid sm:grid-cols-[1.1fr_1.4fr] gap-5 items-center">
                {/* Dish Photo */}
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-black shadow-md border border-[#A87545]/20">
                  <img
                    src={dish.image}
                    alt={dish.titleEn}
                    width={500}
                    height={375}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80" />

                  {/* Top floating index */}
                  <span className="absolute top-3 left-3 rounded-full bg-[#1C1917]/90 border border-[#A87545]/40 px-2.5 py-0.5 text-[10px] font-mono text-[#C8A875] backdrop-blur-md shadow-sm">
                    0{idx + 1}
                  </span>

                  {/* Price Tag */}
                  <span className="absolute bottom-3 right-3 rounded-lg bg-[#151210] border border-[#A87545]/40 px-3 py-1 text-xs font-bold text-[#F5EFE6] backdrop-blur-md shadow-lg">
                    {dish.price}
                  </span>
                </div>

                {/* Dish Narrative */}
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <span className="inline-block rounded-full bg-[#A87545]/15 border border-[#A87545]/30 px-3 py-0.5 text-[10px] font-semibold text-[#C8A875] mb-2">
                      {lang === "pa" ? dish.highlightPa : dish.highlightEn}
                    </span>

                    <h3 className="font-display text-xl font-medium text-[#F5EFE6] group-hover:text-[#C8A875] transition-colors leading-snug">
                      {lang === "pa" ? dish.titlePa : dish.titleEn}
                    </h3>

                    <p className="mt-2.5 text-xs text-[#D8C8B8] leading-relaxed">
                      {lang === "pa" ? dish.descPa : dish.descEn}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-[#A87545]/20 flex items-center justify-between">
                    <span className="text-[11px] text-[#D8C8B8]/80 font-medium">
                      ✦ {dish.speciality}
                    </span>
                    <Link
                      to="/menu"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#C8A875] hover:text-[#F5EFE6] transition-colors"
                    >
                      <span>{lang === "pa" ? "ਮੇਨੂ ਵੇਖੋ" : "View Menu"}</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 rounded-2xl border border-[#A87545]/25 bg-[#241B16] p-5 sm:p-6 text-center flex flex-wrap items-center justify-around gap-6 shadow-lg">
          <div className="flex items-center gap-3 text-[#F5EFE6] text-xs sm:text-sm">
            <Flame className="size-5 text-[#A87545] shrink-0" />
            <span>{lang === "pa" ? "ਅਸਲੀ ਲੱਕੜ ਦੇ ਕੋਲਿਆਂ ਵਾਲਾ ਤੰਦੂਰ" : "100% Charcoal Tandoor Baked"}</span>
          </div>
          <div className="flex items-center gap-3 text-[#F5EFE6] text-xs sm:text-sm">
            <ShieldCheck className="size-5 text-emerald-400 shrink-0" />
            <span>{lang === "pa" ? "ਸ਼ੁੱਧ ਤੇ ਤਾਜ਼ੀ ਕੁਆਲਿਟੀ ਸਮੱਗਰੀ" : "Fresh Daily Farm Sourced Ingredients"}</span>
          </div>
          <div className="flex items-center gap-3 text-[#F5EFE6] text-xs sm:text-sm">
            <HeartHandshake className="size-5 text-[#A87545] shrink-0" />
            <span>{lang === "pa" ? "ਨਿੱਘੀ ਪਰਿਵਾਰਕ ਪੰਜਾਬੀ ਮਹਿਮਾਨਨਿਵਾਜ਼ੀ" : "Generous Family Portions & Hospitality"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
