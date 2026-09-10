import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Star, ArrowUp, UtensilsCrossed, Wine, Navigation } from "lucide-react";
import { site, navLinks } from "@/lib/site";
import { DawatLogo } from "./DawatLogo";
import { WhatsAppIcon, FacebookIcon } from "./SocialIcons";
import { useLanguage } from "@/lib/translations";
import { BookTableModal } from "./BookTableModal";

export function Footer() {
  const { lang, t } = useLanguage();
  const [bookModalOpen, setBookModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="border-t border-[#A87545]/20 bg-[#151210] text-[#F5EFE6] relative overflow-hidden">
        {/* Subtle warm bronze background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 size-96 rounded-full bg-[#A87545]/5 blur-3xl"
        />

        <div className="relative mx-auto max-w-[1360px] px-4 pt-12 sm:pt-14 lg:pt-20 pb-28 sm:pb-32 lg:pb-16 sm:px-6 lg:px-10">
          {/* Main 3-Column Grid */}
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-14">
            {/* COLUMN 1: BRAND HERITAGE & REPUTATION */}
            <div className="flex flex-col justify-between">
              <div>
                <DawatLogo variant="horizontal" size="md" light={true} />
                <p className="mt-3 font-gurmukhi text-sm text-[#C8A875]">
                  {site.namePunjabi} · ਜੀ.ਟੀ. ਰੋਡ, ਮੁਕੇਰੀਆਂ
                </p>
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#D8C8B8] max-w-sm">
                  Mukerian's landmark culinary destination for authentic clay tandoor delicacies, slow-cooked North Indian curries, and the premier SKY Lounge bar.
                </p>

                {/* Rating Badge */}
                <div className="mt-6 inline-flex items-center gap-2.5 rounded-xl border border-[#A87545]/25 bg-[#241B16] p-3 shadow-md">
                  <div className="flex items-center text-[#C8A875]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-3.5 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs text-[#F5EFE6]">
                    <span className="font-bold text-[#F5EFE6]">{site.rating} ★</span>{" "}
                    <span className="text-[#D8C8B8]">({site.reviewCount}+ Google Reviews)</span>
                  </div>
                </div>

                {/* Official Social Media & WhatsApp Connect */}
                <div className="mt-6 flex flex-col xs:flex-row items-stretch xs:items-center gap-2.5">
                  <a
                    href={site.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Visit Dawat Restaurant Mukerian on Facebook"
                    className="group inline-flex items-center gap-2 rounded-xl border border-sky-900/60 bg-[#0F172A]/40 p-2 px-3 text-xs text-sky-300 hover:border-sky-500 hover:text-white transition-all shadow-md"
                  >
                    <div className="grid size-6 place-items-center rounded-lg bg-sky-950/80 text-sky-400 group-hover:bg-sky-600 group-hover:text-white transition-colors shrink-0">
                      <FacebookIcon size={14} />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[9px] uppercase tracking-wider text-[#D8C8B8] block leading-tight">Official Facebook</span>
                      <span className="font-semibold text-sky-200 group-hover:text-white truncate block">{site.facebookHandle}</span>
                    </div>
                  </a>

                  <a
                    href={site.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Chat on WhatsApp with Dawat Restaurant"
                    className="group inline-flex items-center gap-2 rounded-xl border border-emerald-900/60 bg-[#062014]/40 p-2 px-3 text-xs text-emerald-300 hover:border-emerald-500 hover:text-white transition-all shadow-md"
                  >
                    <div className="grid size-6 place-items-center rounded-lg bg-emerald-950/80 text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                      <WhatsAppIcon size={14} />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[9px] uppercase tracking-wider text-[#D8C8B8] block leading-tight">WhatsApp Order</span>
                      <span className="font-semibold text-emerald-200 group-hover:text-white truncate block">{site.whatsapp}</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#A87545]/20">
                <span className="text-[10px] font-mono tracking-wider text-[#C8A875] uppercase block">
                  ✦ FSSAI COMPLIANT · HYGIENIC KITCHEN
                </span>
                <p className="mt-1 text-[11px] text-[#D8C8B8]/70">
                  Pure vegetarian and authentic non-vegetarian prepared in separated sanitized zones.
                </p>
              </div>
            </div>

            {/* COLUMN 2: TIMINGS, LOCATION & FACILITIES */}
            <div>
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#C8A875] uppercase block">
                VISIT & OPERATING HOURS
              </span>

              {/* Live Hours Box */}
              <div className="mt-5 rounded-2xl border border-[#A87545]/25 bg-[#241B16] p-4 shadow-inner">
                <div className="flex items-center gap-2">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-xs font-semibold text-emerald-400">Open All 7 Days</span>
                </div>
                <div className="mt-2 flex items-center gap-2.5 text-[#F5EFE6]">
                  <Clock className="size-4 text-[#C8A875]" />
                  <span className="font-display text-base">11:00 AM – 11:30 PM</span>
                </div>
                <p className="mt-1 text-[11px] text-[#D8C8B8]">
                  Dine-In, Takeaway Packages & SKY Lounge Service
                </p>
              </div>

              {/* Address */}
              <address className="mt-5 space-y-3.5 text-xs sm:text-[13px] leading-relaxed text-[#D8C8B8] not-italic">
                <div className="flex gap-2.5">
                  <MapPin className="size-4 shrink-0 text-rose-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#F5EFE6]">{site.street}</p>
                    <p className="text-[#D8C8B8]">{site.locality}, {site.region} — {site.postalCode}</p>
                  </div>
                </div>

                <div className="flex gap-2.5 items-center">
                  <Phone className="size-4 shrink-0 text-[#C8A875]" />
                  <a
                    href={site.phoneHref}
                    className="font-medium text-[#F5EFE6] hover:text-[#C8A875] transition-colors"
                  >
                    Direct Phone: {site.phone}
                  </a>
                </div>
              </address>

              {/* Amenities Pills */}
              <div className="mt-6 flex flex-wrap gap-2 text-[11px]">
                <span className="rounded-full border border-[#A87545]/20 bg-[#241B16] px-3 py-1 text-[#D8C8B8]">
                  ❄ 100% AC Dining
                </span>
                <span className="rounded-full border border-[#C8A875]/40 bg-[#C8A875]/10 px-3 py-1 text-[#C8A875]">
                  <Wine className="inline size-3 mr-1" /> SKY Bar & Lounge
                </span>
                <span className="rounded-full border border-[#A87545]/20 bg-[#241B16] px-3 py-1 text-[#D8C8B8]">
                  🅿 Free Highway Parking
                </span>
              </div>
            </div>

            {/* COLUMN 3: QUICK NAVIGATION & INSTANT RESERVATIONS */}
            <div>
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#C8A875] uppercase block">
                EXPLORE & CONNECT
              </span>

              {/* Navigation Links Grid */}
              <ul className="mt-5 grid grid-cols-2 gap-2.5 text-xs sm:text-[13px]">
                {navLinks.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-[#D8C8B8] hover:text-[#C8A875] transition-colors flex items-center gap-1.5"
                    >
                      <span className="text-[#A87545]/60">›</span>
                      <span>{l.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="mt-7 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => setBookModalOpen(true)}
                  className="luxury-shimmer w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#A87545] hover:bg-[#B98350] hover:shadow-[0_0_20px_rgba(200,168,117,0.35)] py-3 text-xs font-bold uppercase tracking-wider text-[#F5EFE6] shadow-lg shadow-[#A87545]/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
                >
                  <UtensilsCrossed className="size-3.5" />
                  <span>{t("book_a_table")}</span>
                </button>

                <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                  <a
                    href={site.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1 rounded-full border border-emerald-700/60 bg-emerald-950/40 py-2 sm:py-2.5 px-1 text-[11px] sm:text-xs font-medium text-emerald-300 hover:bg-emerald-950/80 transition-colors"
                  >
                    <WhatsAppIcon className="size-3 text-emerald-400 shrink-0" />
                    <span className="truncate">WhatsApp</span>
                  </a>
                  <a
                    href={site.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Dawat Restaurant Mukerian Facebook"
                    className="inline-flex items-center justify-center gap-1 rounded-full border border-sky-800/60 bg-sky-950/40 py-2 sm:py-2.5 px-1 text-[11px] sm:text-xs font-medium text-sky-300 hover:bg-sky-950/80 transition-colors"
                  >
                    <FacebookIcon className="size-3 text-sky-400 shrink-0" />
                    <span className="truncate">Facebook</span>
                  </a>
                  <a
                    href={site.directionsLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1 rounded-full border border-[#A87545]/30 bg-[#241B16] py-2 sm:py-2.5 px-1 text-[11px] sm:text-xs font-medium text-[#F5EFE6] hover:border-[#C8A875] hover:text-[#C8A875] transition-colors"
                  >
                    <Navigation className="size-3 text-[#C8A875] shrink-0" />
                    <span>Map</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar with Back to Top */}
          <div className="mt-12 sm:mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#A87545]/20 pt-6 text-xs text-[#D8C8B8]/70 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Dawat Restaurant & SKY Lounge, Mukerian. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-4">
              <span className="text-[11px] text-[#D8C8B8]">
                Opp. P.W.D. Rest House, G.T. Road, Mukerian (Pb)
              </span>
              <button
                type="button"
                onClick={scrollToTop}
                title="Scroll back to top"
                className="inline-flex items-center gap-1 text-[#C8A875] hover:text-[#F5EFE6] transition-colors cursor-pointer text-xs"
              >
                <span>Top</span>
                <ArrowUp className="size-3.5" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Book Table Modal */}
      <BookTableModal
        isOpen={bookModalOpen}
        onClose={() => setBookModalOpen(false)}
      />
    </>
  );
}
