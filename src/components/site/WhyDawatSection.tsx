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
      iconColor: "text-[#C9A227]",
      bgGradient: "from-[#C9A227]/10 to-transparent",
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
      iconColor: "text-[#C8A875]",
      bgGradient: "from-[#A87545]/15 to-transparent",
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
      iconColor: "text-[#C9A227]",
      bgGradient: "from-[#C9A227]/10 to-transparent",
      titleEn: "4.0 ★ Trusted by 965+ Diners",
      titlePa: "965+ ਗਾਹਕਾਂ ਦਾ ਅਟੁੱਟ ਭਰੋਸਾ",
      descEn:
        "Mukerian's most reliable culinary landmark for highway commuters and local residents seeking uncompromising taste and hospitality.",
      descPa:
        "ਮੁਕੇਰੀਆਂ ਅਤੇ ਜੀ.ਟੀ. ਰੋਡ ਦੇ ਮੁਸਾਫ਼ਰਾਂ ਦਾ ਪਸੰਦੀਦਾ ਰੈਸਟੋਰੈਂਟ, ਜਿੱਥੇ ਸੁਆਦ ਅਤੇ ਇੱਜ਼ਤ ਹਮੇਸ਼ਾ ਪਹਿਲੇ ਨੰਬਰ 'ਤੇ ਹੈ।",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F5EFE6] py-12 sm:py-16 lg:py-24 border-t border-[#A87545]/20">
      <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-[#A87545] uppercase inline-flex items-center gap-2">
            <CheckCircle2 className="size-3.5 text-[#A87545]" />
            {lang === "pa" ? "ਸਾਡੀਆਂ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ" : "THE DAWAT PROMISE"}
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1917]">
            {t("why_dawat_title")}
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-[#5A4D41] leading-relaxed">
            {t("why_dawat_desc")}
          </p>
        </div>

        {/* 6 Features Grid */}
        <div className="mt-8 sm:mt-14 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.id}
                className="group relative rounded-2xl border border-[#A87545]/25 bg-[#FAF7F2] p-6 sm:p-7 transition-all duration-300 hover:border-[#A87545]/60 hover:-translate-y-1 hover:shadow-lg shadow-sm"
              >
                <div
                  aria-hidden="true"
                  className={`absolute top-0 right-0 size-32 rounded-bl-full bg-gradient-to-bl ${f.bgGradient} opacity-60 transition-opacity group-hover:opacity-100`}
                />

                <div className="relative">
                  <div className="inline-grid size-12 place-items-center rounded-xl border border-[#A87545]/20 bg-white shadow-inner">
                    <Icon className={`size-6 ${f.iconColor}`} />
                  </div>

                  <h3 className="mt-5 font-display text-lg font-medium text-[#1C1917] group-hover:text-[#A87545] transition-colors">
                    {lang === "pa" ? f.titlePa : f.titleEn}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-[#5A4D41] group-hover:text-[#1C1917] transition-colors">
                    {lang === "pa" ? f.descPa : f.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Prominent Opening Hours Highlight Card (Dedicated Rich Espresso Panel) */}
        <div className="mt-8 sm:mt-12 rounded-3xl border border-[#A87545]/30 bg-gradient-to-r from-[#1C1917] via-[#241B16] to-[#1C1917] p-5 sm:p-8 shadow-2xl relative overflow-hidden text-[#F5EFE6]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 right-0 size-72 rounded-full bg-[#A87545]/10 blur-3xl"
          />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="grid size-14 shrink-0 place-items-center rounded-2xl border border-[#A87545]/40 bg-[#241B16] text-[#C8A875] shadow-inner">
                <Clock className="size-7 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="relative flex size-2.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-[11px] font-bold tracking-widest text-[#C8A875] uppercase">
                    {lang === "pa" ? "ਖੁੱਲ੍ਹਣ ਦਾ ਸਮਾਂ · ਰੋਜ਼ਾਨਾ ਸਰਵਿਸ" : "OPERATING HOURS · OPEN DAILY"}
                  </span>
                </div>
                <h3 className="mt-1 font-display text-xl sm:text-2xl font-medium text-[#F5EFE6]">
                  {lang === "pa" ? "ਸਵੇਰੇ 11:00 ਵਜੇ ਤੋਂ ਰਾਤ 11:30 ਵਜੇ ਤੱਕ" : "11:00 AM — 11:30 PM (All 7 Days)"}
                </h3>
                <p className="mt-1 text-xs text-[#D8C8B8] max-w-xl">
                  {lang === "pa"
                    ? "ਡਾਇਨ-ਇਨ, ਟੇਕਅਵੇ ਅਤੇ SKY ਲਾਊਂਜ ਬਾਰ ਹਰ ਰੋਜ਼ ਚਾਲੂ ਹਨ।"
                    : "Full dine-in service, takeaway packaging, and SKY Lounge bar service available every day."}
                </p>
              </div>
            </div>

            <div className="flex w-full sm:w-auto flex-col sm:flex-row items-center gap-2.5 sm:gap-3 shrink-0">
              <a
                href={site.phoneHref}
                className="luxury-shimmer w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 rounded-full bg-[#A87545] px-6 py-3 text-xs sm:text-sm font-semibold text-[#F5EFE6] shadow-lg shadow-[#A87545]/20 hover:bg-[#B98350] hover:scale-105 active:scale-95 transition-all"
              >
                <Phone className="size-4" />
                <span>{lang === "pa" ? "ਹੁਣੇ ਕਾਲ ਕਰੋ" : "Call to Reserve"}</span>
              </a>
              <a
                href={site.directionsLink}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 rounded-full border border-[#A87545]/40 bg-[#241B16] px-5 py-3 text-xs sm:text-sm font-medium text-[#F5EFE6] hover:border-[#C8A875] hover:text-[#C8A875] transition-all active:scale-95"
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
