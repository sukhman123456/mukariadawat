import { Flame, ShieldCheck, Users, Wine, MapPin, Star, Clock, CheckCircle2, Phone } from "lucide-react";
import { useLanguage } from "@/lib/translations";
import { site } from "@/lib/site";

export function WhyDawatSection() {
  const { lang, t } = useLanguage();

  const features = [
    {
      id: "tandoor",
      icon: Flame,
      iconColor: "text-amber-500",
      bgGradient: "from-amber-500/10 to-transparent",
      titleEn: "Authentic Charcoal Tandoor",
      titlePa: "ਅਸਲੀ ਮਿੱਟੀ ਦਾ ਤੰਦੂਰ",
      descEn:
        "We never use electric ovens. Every roti, naan, and tikka is slow-charred inside authentic clay ovens fired by natural wood charcoal.",
      descPa:
        "ਕੋਈ ਬਿਜਲੀ ਵਾਲਾ ਓਵਨ ਨਹੀਂ। ਹਰ ਰੋਟੀ, ਨਾਨ ਤੇ ਟਿੱਕਾ ਅਸਲੀ ਮਿੱਟੀ ਦੇ ਤੰਦੂਰ ਅਤੇ ਲੱਕੜ ਦੇ ਕੋਲਿਆਂ 'ਤੇ ਪੱਕਦਾ ਹੈ।",
    },
    {
      id: "ingredients",
      icon: ShieldCheck,
      iconColor: "text-emerald-400",
      bgGradient: "from-emerald-500/10 to-transparent",
      titleEn: "Fresh Daily Ingredients & Desi Ghee",
      titlePa: "ਤਾਜ਼ੀ ਸਮੱਗਰੀ ਤੇ ਸ਼ੁੱਧ ਦੇਸੀ ਘਿਓ",
      descEn:
        "Handmade paneer, farm-fresh poultry, in-house roasted masalas, and generous dollops of churned Punjabi white butter.",
      descPa:
        "ਰੋਜ਼ਾਨਾ ਤਾਜ਼ਾ ਪਨੀਰ, ਘਰ ਵਿੱਚ ਪੀਸੇ ਖੜ੍ਹੇ ਮਸਾਲੇ ਅਤੇ ਰਵਾਇਤੀ ਤਰੀਕੇ ਨਾਲ ਬਣਿਆ ਦੇਸੀ ਚਿੱਟਾ ਮੱਖਣ।",
    },
    {
      id: "family",
      icon: Users,
      iconColor: "text-[#D49B55]",
      bgGradient: "from-[#D49B55]/10 to-transparent",
      titleEn: "100% AC Family Dining",
      titlePa: "ਸੁਖਾਵਾਂ ਪਰਿਵਾਰਕ ਏਸੀ ਮਾਹੌਲ",
      descEn:
        "Peaceful, hygienic, air-conditioned seating designed for families, large party groups, kitty parties, and birthday celebrations.",
      descPa:
        "ਪਰਿਵਾਰਾਂ, ਬੱਚਿਆਂ ਅਤੇ ਸਮਾਗਮਾਂ ਲਈ ਸਾਫ਼-ਸੁਥਰਾ, ਸ਼ਾਂਤ ਅਤੇ ਆਰਾਮਦਾਇਕ ਏਅਰ-ਕੰਡੀਸ਼ਨਡ ਹਾਲ।",
    },
    {
      id: "sky-bar",
      icon: Wine,
      iconColor: "text-[#38BDF8]",
      bgGradient: "from-[#38BDF8]/10 to-transparent",
      titleEn: "Official SKY Lounge & Bar",
      titlePa: "ਅਧਿਕਾਰਤ SKY ਲਾਊਂਜ ਤੇ ਬਾਰ",
      descEn:
        "26 curated drinks, chilled draught beers, premium whiskies, and refreshing mocktails paired with sizzling appetizers.",
      descPa:
        "26 ਵਿਸ਼ੇਸ਼ ਡ੍ਰਿੰਕਸ, ਠੰਢੀ ਡ੍ਰਾਫਟ ਬੀਅਰ, ਵਧੀਆ ਵਿਸਕੀ ਅਤੇ ਮੌਕਟੇਲਜ਼ ਦੇ ਨਾਲ ਸੁਆਦੀ ਸਨੈਕਸ।",
    },
    {
      id: "location",
      icon: MapPin,
      iconColor: "text-rose-400",
      bgGradient: "from-rose-500/10 to-transparent",
      titleEn: "Prime G.T. Road Highway Parking",
      titlePa: "ਜੀ.ਟੀ. ਰੋਡ 'ਤੇ ਪਾਰਕਿੰਗ ਦੀ ਸਹੂਲਤ",
      descEn:
        "Centrally located right on G.T. Road opposite the P.W.D. Rest House in Mukerian with spacious free vehicle parking.",
      descPa:
        "ਮੁਕੇਰੀਆਂ ਵਿੱਚ ਜੀ.ਟੀ. ਰੋਡ 'ਤੇ P.W.D. ਰੈਸਟ ਹਾਊਸ ਦੇ ਸਾਹਮਣੇ ਖੁੱਲ੍ਹੀ ਅਤੇ ਸੁਰੱਖਿਅਤ ਮੁਫ਼ਤ ਪਾਰਕਿੰਗ।",
    },
    {
      id: "reputation",
      icon: Star,
      iconColor: "text-yellow-400",
      bgGradient: "from-yellow-500/10 to-transparent",
      titleEn: "4.0 ★ Trusted by 965+ Diners",
      titlePa: "965+ ਗਾਹਕਾਂ ਦਾ ਅਟੁੱਟ ਭਰੋਸਾ",
      descEn:
        "Mukerian's most reliable culinary landmark for highway commuters and local residents seeking uncompromising taste and hospitality.",
      descPa:
        "ਮੁਕੇਰੀਆਂ ਅਤੇ ਜੀ.ਟੀ. ਰੋਡ ਦੇ ਮੁਸਾਫ਼ਰਾਂ ਦਾ ਪਸੰਦੀਦਾ ਰੈਸਟੋਰੈਂਟ, ਜਿੱਥੇ ਸੁਆਦ ਅਤੇ ਇੱਜ਼ਤ ਹਮੇਸ਼ਾ ਪਹਿਲੇ ਨੰਬਰ 'ਤੇ ਹੈ।",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0B0907] via-[#120E0B] to-[#0B0907] py-20 lg:py-28 border-t border-stone-800/80">
      <div className="relative mx-auto max-w-[1360px] px-5 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-[#D49B55] uppercase inline-flex items-center gap-2">
            <CheckCircle2 className="size-3.5 text-[#D49B55]" />
            {lang === "pa" ? "ਸਾਡੀਆਂ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ" : "THE DAWAT PROMISE"}
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FAF5EE]">
            {t("why_dawat_title")}
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-stone-300/80 leading-relaxed">
            {t("why_dawat_desc")}
          </p>
        </div>

        {/* 6 Features Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.id}
                className="group relative rounded-2xl border border-stone-800/90 bg-[#15110E] p-6 sm:p-7 transition-all duration-300 hover:border-[#D49B55]/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60"
              >
                <div
                  aria-hidden="true"
                  className={`absolute top-0 right-0 size-32 rounded-bl-full bg-gradient-to-bl ${f.bgGradient} opacity-60 transition-opacity group-hover:opacity-100`}
                />

                <div className="relative">
                  <div className="inline-grid size-12 place-items-center rounded-xl border border-stone-800 bg-stone-900/90 shadow-inner">
                    <Icon className={`size-6 ${f.iconColor}`} />
                  </div>

                  <h3 className="mt-5 font-display text-lg font-medium text-stone-100 group-hover:text-[#D49B55] transition-colors">
                    {lang === "pa" ? f.titlePa : f.titleEn}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-stone-400 group-hover:text-stone-300/90 transition-colors">
                    {lang === "pa" ? f.descPa : f.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Prominent Opening Hours Highlight Card */}
        <div className="mt-12 rounded-3xl border border-[#D49B55]/30 bg-gradient-to-r from-[#1E1712] via-[#16120E] to-[#120F0D] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 right-0 size-72 rounded-full bg-[#D49B55]/10 blur-3xl"
          />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="grid size-14 shrink-0 place-items-center rounded-2xl border border-[#D49B55]/40 bg-[#251D16] text-[#E5B869] shadow-inner">
                <Clock className="size-7 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <span className="relative flex size-2.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-[11px] font-bold tracking-widest text-[#D49B55] uppercase">
                    {lang === "pa" ? "ਖੁੱਲ੍ਹਣ ਦਾ ਸਮਾਂ · ਰੋਜ਼ਾਨਾ ਸਰਵਿਸ" : "OPERATING HOURS · OPEN DAILY"}
                  </span>
                </div>
                <h3 className="mt-1 font-display text-xl sm:text-2xl font-medium text-[#FAF5EE]">
                  {lang === "pa" ? "ਸਵੇਰੇ 11:00 ਵਜੇ ਤੋਂ ਰਾਤ 11:30 ਵਜੇ ਤੱਕ" : "11:00 AM — 11:30 PM (All 7 Days)"}
                </h3>
                <p className="mt-1 text-xs text-stone-400">
                  {lang === "pa"
                    ? "ਡਾਇਨ-ਇਨ, ਟੇਕਅਵੇ ਅਤੇ SKY ਲਾਊਂਜ ਬਾਰ ਹਰ ਰੋਜ਼ ਚਾਲੂ ਹਨ।"
                    : "Full dine-in service, takeaway packaging, and SKY Lounge bar service available every day."}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={site.phoneHref}
                className="luxury-shimmer inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D49B55] via-[#E5B869] to-[#C08845] px-6 py-3 text-xs sm:text-sm font-semibold text-stone-950 shadow-lg shadow-[#D49B55]/20 hover:scale-105 active:scale-95 transition-all"
              >
                <Phone className="size-4" />
                <span>{lang === "pa" ? "ਹੁਣੇ ਕਾਲ ਕਰੋ" : "Call to Reserve"}</span>
              </a>
              <a
                href={site.directionsLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-stone-700 bg-stone-900/80 px-5 py-3 text-xs sm:text-sm font-medium text-stone-300 hover:text-white hover:border-[#D49B55] transition-all"
              >
                <MapPin className="size-4 text-rose-400" />
                <span>{lang === "pa" ? "ਰਾਹ ਵੇਖੋ" : "Get Directions"}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
