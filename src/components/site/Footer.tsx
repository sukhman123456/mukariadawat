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
      <footer className="border-t border-[#D49B55]/30 bg-[#070605] text-[#FAF5EE] relative overflow-hidden">
        {/* Subtle royal background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 size-96 rounded-full bg-[#D49B55]/5 blur-3xl"
        />

        <div className="relative mx-auto max-w-[1360px] px-5 py-14 lg:px-10 lg:py-20">
          {/* Main 3-Column Grid */}
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-14">
            {/* COLUMN 1: BRAND HERITAGE & REPUTATION */}
            <div className="flex flex-col justify-between">
              <div>
                <DawatLogo variant="horizontal" size="md" light={true} />
                <p className="mt-3 font-gurmukhi text-sm text-[#D49B55]/90">
                  {site.namePunjabi} · ਜੀ.ਟੀ. ਰੋਡ, ਮੁਕੇਰੀਆਂ
                </p>
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-stone-300/80 max-w-sm">
                  Mukerian's landmark culinary destination for authentic clay tandoor delicacies, slow-cooked North Indian curries, and the premier SKY Lounge bar.
                </p>

                {/* Rating Badge */}
                <div className="mt-6 inline-flex items-center gap-2.5 rounded-xl border border-stone-800 bg-[#120F0D] p-3 shadow-md">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-3.5 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs text-stone-200">
                    <span className="font-bold text-[#FAF5EE]">{site.rating} ★</span>{" "}
                    <span className="text-stone-400">({site.reviewCount}+ Google Reviews)</span>
                  </div>
                </div>

                {/* Official Social Media & WhatsApp Connect */}
                <div className="mt-6 flex flex-wrap items-center gap-2.5">
                  <a
                    href={site.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Visit Dawat Restaurant Mukerian on Facebook"
                    className="group inline-flex items-center gap-2 rounded-xl border border-sky-900/60 bg-[#0F172A]/40 p-2 px-3 text-xs text-sky-300 hover:border-sky-500 hover:text-white transition-all shadow-md"
                  >
                    <div className="grid size-6 place-items-center rounded-lg bg-sky-950/80 text-sky-400 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                      <FacebookIcon size={14} />
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-stone-400 block leading-tight">Official Facebook</span>
                      <span className="font-semibold text-sky-200 group-hover:text-white">{site.facebookHandle}</span>
                    </div>
                  </a>

                  <a
                    href={site.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Chat on WhatsApp with Dawat Restaurant"
                    className="group inline-flex items-center gap-2 rounded-xl border border-emerald-900/60 bg-[#062014]/40 p-2 px-3 text-xs text-emerald-300 hover:border-emerald-500 hover:text-white transition-all shadow-md"
                  >
                    <div className="grid size-6 place-items-center rounded-lg bg-emerald-950/80 text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <WhatsAppIcon size={14} />
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-stone-400 block leading-tight">WhatsApp Order</span>
                      <span className="font-semibold text-emerald-200 group-hover:text-white">{site.whatsapp}</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-800/80">
                <span className="text-[10px] font-mono tracking-wider text-[#D49B55] uppercase block">
                  ✦ FSSAI COMPLIANT · HYGIENIC KITCHEN
                </span>
                <p className="mt-1 text-[11px] text-stone-500">
                  Pure vegetarian and authentic non-vegetarian prepared in separated sanitized zones.
                </p>
              </div>
            </div>

            {/* COLUMN 2: TIMINGS, LOCATION & FACILITIES */}
            <div>
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#D49B55] uppercase block">
                VISIT & OPERATING HOURS
              </span>

              {/* Live Hours Box */}
              <div className="mt-5 rounded-2xl border border-stone-800/90 bg-[#120F0D] p-4 shadow-inner">
                <div className="flex items-center gap-2">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-xs font-semibold text-emerald-400">Open All 7 Days</span>
                </div>
                <div className="mt-2 flex items-center gap-2.5 text-stone-100">
                  <Clock className="size-4 text-[#D49B55]" />
                  <span className="font-display text-base">11:00 AM – 11:30 PM</span>
                </div>
                <p className="mt-1 text-[11px] text-stone-400">
                  Dine-In, Takeaway Packages & SKY Lounge Service
                </p>
              </div>

              {/* Address */}
              <address className="mt-5 space-y-3.5 text-xs sm:text-[13px] leading-relaxed text-stone-300 not-italic">
                <div className="flex gap-2.5">
                  <MapPin className="size-4 shrink-0 text-rose-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-stone-100">{site.street}</p>
                    <p className="text-stone-400">{site.locality}, {site.region} — {site.postalCode}</p>
                  </div>
                </div>

                <div className="flex gap-2.5 items-center">
                  <Phone className="size-4 shrink-0 text-[#D49B55]" />
                  <a
                    href={site.phoneHref}
                    className="font-medium text-stone-100 hover:text-[#D49B55] transition-colors"
                  >
                    Direct Phone: {site.phone}
                  </a>
                </div>
              </address>

              {/* Amenities Pills */}
              <div className="mt-6 flex flex-wrap gap-2 text-[11px]">
                <span className="rounded-full border border-stone-800 bg-stone-900/80 px-3 py-1 text-stone-300">
                  ❄ 100% AC Dining
                </span>
                <span className="rounded-full border border-[#38BDF8]/40 bg-[#38BDF8]/10 px-3 py-1 text-[#38BDF8]">
                  <Wine className="inline size-3 mr-1" /> SKY Bar & Lounge
                </span>
                <span className="rounded-full border border-stone-800 bg-stone-900/80 px-3 py-1 text-stone-300">
                  🅿 Free Highway Parking
                </span>
              </div>
            </div>

            {/* COLUMN 3: QUICK NAVIGATION & INSTANT RESERVATIONS */}
            <div>
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#D49B55] uppercase block">
                EXPLORE & CONNECT
              </span>

              {/* Navigation Links Grid */}
              <ul className="mt-5 grid grid-cols-2 gap-2.5 text-xs sm:text-[13px]">
                {navLinks.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-stone-300/80 hover:text-[#D49B55] transition-colors flex items-center gap-1.5"
                    >
                      <span className="text-stone-600">›</span>
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
                  className="luxury-shimmer w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D49B55] via-[#E5B869] to-[#C08845] py-3 text-xs font-bold uppercase tracking-wider text-stone-950 shadow-lg shadow-[#D49B55]/20 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <UtensilsCrossed className="size-3.5" />
                  <span>{t("book_a_table")}</span>
                </button>

                <div className="grid grid-cols-3 gap-2">
                  <a
                    href={site.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1 rounded-full border border-emerald-700/60 bg-emerald-950/40 py-2.5 text-xs font-medium text-emerald-300 hover:bg-emerald-950/80 transition-colors"
                  >
                    <WhatsAppIcon className="size-3 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={site.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Dawat Restaurant Mukerian Facebook"
                    className="inline-flex items-center justify-center gap-1 rounded-full border border-sky-800/60 bg-sky-950/40 py-2.5 text-xs font-medium text-sky-300 hover:bg-sky-950/80 transition-colors"
                  >
                    <FacebookIcon className="size-3 text-sky-400" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href={site.directionsLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1 rounded-full border border-stone-800 bg-stone-900/90 py-2.5 text-xs font-medium text-stone-200 hover:border-[#D49B55] hover:text-white transition-colors"
                  >
                    <Navigation className="size-3 text-[#D49B55]" />
                    <span>Map</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar with Back to Top */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-800/80 pt-6 text-xs text-stone-500">
            <p>© {new Date().getFullYear()} Dawat Restaurant & SKY Lounge, Mukerian. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span className="text-[11px] text-stone-400">
                Opp. P.W.D. Rest House, G.T. Road, Mukerian (Pb)
              </span>
              <button
                type="button"
                onClick={scrollToTop}
                title="Scroll back to top"
                className="inline-flex items-center gap-1 text-[#D49B55] hover:text-white transition-colors cursor-pointer text-xs"
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
