import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone, Navigation, UtensilsCrossed, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, site } from "@/lib/site";
import { OrderButton } from "./OrderButton";
import { DawatLogo } from "./DawatLogo";
import { WhatsAppIcon, FacebookIcon } from "./SocialIcons";
import { useLanguage } from "@/lib/translations";
import { BookTableModal } from "./BookTableModal";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bookModalOpen, setBookModalOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 transition-all duration-300">
        {/* 1. Subtle Royal Gold Accent Hairline at the Very Top */}
        <div
          aria-hidden="true"
          className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D49B55] to-transparent opacity-80"
        />

        {/* 2. Top Info & Status Strip (Luxury Glassmorphism Redesign - Zero Overflow Mobile) */}
        <div className="relative border-b border-white/[0.07] bg-gradient-to-r from-[#060504]/95 via-[#0D0B08]/92 to-[#060504]/95 px-2.5 sm:px-6 lg:px-10 py-1.5 sm:py-2 backdrop-blur-2xl shadow-[inset_0_-1px_0_rgba(212,155,85,0.12)] overflow-x-clip">
          {/* Subtle Ambient Radial Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 h-16 w-full max-w-4xl bg-gradient-to-b from-[#D49B55]/12 via-[#D49B55]/4 to-transparent blur-xl"
          />

          <div className="relative mx-auto flex max-w-[1360px] items-center justify-between gap-1.5 sm:gap-6">
            {/* Left: Operating Status & Heritage Identity */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Live Status Pill with soft emerald aura */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-emerald-500/25 bg-emerald-950/40 px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] font-medium text-emerald-300 backdrop-blur-md shadow-[0_0_12px_rgba(16,185,129,0.1)] transition-all hover:border-emerald-500/40">
                <span className="relative flex size-2 shrink-0">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
                </span>
                <span className="font-semibold tracking-wide">Open Daily</span>
                <span className="hidden sm:inline text-emerald-400/40 font-mono">·</span>
                <span className="hidden sm:inline text-stone-300 font-normal tracking-wider">11:00 AM – 11:30 PM</span>
              </div>

              <div aria-hidden="true" className="hidden xl:block h-3.5 w-[1px] bg-stone-800/80" />

              <div className="hidden xl:inline-flex items-center gap-2 text-[11px] text-stone-400 tracking-wide">
                <span className="font-gurmukhi text-[#D49B55] font-medium">ਦਾਵਤ ਰੈਸਟੋਰੈਂਟ</span>
                <span className="text-stone-700">|</span>
                <span className="text-stone-400">G.T. Road, Mukerian · AC Dining & SKY Lounge</span>
              </div>
            </div>

            {/* Right: Language Selector, WhatsApp, Facebook, Directions */}
            <div className="flex items-center gap-1 sm:gap-2.5 lg:gap-3 shrink-0">
              {/* Language Switcher Button (Jewel-like tactile pill) */}
              <button
                type="button"
                onClick={toggleLang}
                title={lang === "en" ? "ਪੰਜਾਬੀ ਵਿੱਚ ਬਦਲੋ (Switch to Punjabi)" : "Switch to English"}
                className="group relative inline-flex items-center gap-1.5 rounded-full border border-[#D49B55]/40 bg-gradient-to-b from-[#1C1610]/95 to-[#0A0806]/95 px-2 sm:px-3 py-1 text-[10.5px] sm:text-[11px] font-medium text-stone-200 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_2px_6px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 hover:border-[#D49B55] hover:shadow-[0_0_14px_rgba(212,155,85,0.3)] hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <Globe className="size-3 text-[#D49B55] transition-transform duration-500 group-hover:rotate-180 shrink-0" />
                <span className="flex items-center gap-1 tracking-wider uppercase font-semibold text-[10px] sm:text-[10.5px]">
                  <span
                    className={cn(
                      "transition-all duration-200 px-1 py-0.5 rounded",
                      lang === "en"
                        ? "text-[#F5D28E] bg-[#D49B55]/25 shadow-[0_0_8px_rgba(212,155,85,0.4)] font-bold"
                        : "text-stone-400 group-hover:text-stone-300"
                    )}
                  >
                    EN
                  </span>
                  <span className="text-stone-600 font-light">/</span>
                  <span
                    className={cn(
                      "font-gurmukhi transition-all duration-200 px-1 py-0.5 rounded",
                      lang === "pa"
                        ? "text-[#F5D28E] bg-[#D49B55]/25 shadow-[0_0_8px_rgba(212,155,85,0.4)] font-bold"
                        : "text-stone-400 group-hover:text-stone-300"
                    )}
                  >
                    ਪੰ
                  </span>
                </span>
              </button>

              <div aria-hidden="true" className="h-3 w-[1px] bg-white/[0.08]" />

              {/* WhatsApp Link with compact icon on small mobile */}
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noreferrer"
                title={`WhatsApp: ${site.whatsapp}`}
                className="group inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-transparent p-1 sm:px-2.5 sm:py-1 text-[11px] font-medium text-stone-300 transition-all duration-300 hover:border-emerald-500/30 hover:bg-emerald-950/30 hover:text-emerald-300 hover:shadow-[0_0_12px_rgba(16,185,129,0.15)]"
              >
                <span className="relative flex size-5 sm:size-4 items-center justify-center rounded-full bg-emerald-500/15 sm:bg-emerald-500/10 text-emerald-400 transition-all duration-300 group-hover:bg-emerald-500/25 group-hover:scale-110 group-hover:shadow-[0_0_10px_rgba(16,185,129,0.5)]">
                  <WhatsAppIcon className="size-3 sm:size-2.5 text-emerald-400 group-hover:text-emerald-300" />
                </span>
                <span className="hidden md:inline text-stone-400 font-normal tracking-wide">WhatsApp:</span>
                <span className="hidden sm:inline font-semibold text-emerald-400 tracking-wider font-mono text-[11px] group-hover:text-emerald-300 transition-colors">
                  {site.whatsapp}
                </span>
              </a>

              <div aria-hidden="true" className="h-3 w-[1px] bg-white/[0.08]" />

              {/* Facebook Link with compact icon on mobile */}
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                title="Follow Dawat Restaurant Mukerian on Facebook"
                className="group inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-transparent p-1 sm:px-2.5 sm:py-1 text-[11px] font-medium text-stone-300 transition-all duration-300 hover:border-sky-500/30 hover:bg-sky-950/30 hover:text-sky-300 hover:shadow-[0_0_12px_rgba(56,189,248,0.15)]"
              >
                <span className="relative flex size-5 sm:size-4 items-center justify-center rounded-full bg-sky-500/15 sm:bg-sky-500/10 text-sky-400 transition-all duration-300 group-hover:bg-sky-500/25 group-hover:scale-110 group-hover:shadow-[0_0_10px_rgba(56,189,248,0.5)]">
                  <FacebookIcon className="size-3 sm:size-2.5 text-sky-400 group-hover:text-sky-300" />
                </span>
                <span className="hidden md:inline text-sky-300/90 group-hover:text-sky-200 tracking-wide font-medium">
                  {site.facebookHandle}
                </span>
              </a>

              <div aria-hidden="true" className="hidden xs:block h-3 w-[1px] bg-white/[0.08]" />

              {/* Directions Link */}
              <a
                href={site.directionsLink}
                target="_blank"
                rel="noreferrer"
                title="Google Maps Directions to Dawat Restaurant"
                className="group hidden xs:inline-flex items-center gap-1 rounded-full border border-transparent px-2 sm:px-2.5 py-1 text-[11px] font-medium text-stone-400 transition-all duration-300 hover:border-[#D49B55]/30 hover:bg-stone-900/60 hover:text-[#FAF5EE]"
              >
                <Navigation className="size-3 text-[#D49B55] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#F5D28E]" />
                <span className="hidden sm:inline tracking-wide text-stone-300 group-hover:text-[#FAF5EE] transition-colors">
                  Directions
                </span>
                <span className="text-[10px] text-[#D49B55] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* 3. Main Navigation Bar with Royal Dark Glassmorphism */}
        <div
          className={cn(
            "border-b transition-all duration-300",
            scrolled
              ? "border-[#D49B55]/30 bg-[#070605]/98 py-2.5 sm:py-3 shadow-[0_12px_35px_rgba(0,0,0,0.95)] backdrop-blur-2xl"
              : "border-[#D49B55]/20 bg-[#0B0907]/92 py-3 sm:py-4 shadow-[0_6px_25px_rgba(0,0,0,0.7)] backdrop-blur-xl"
          )}
        >
          <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-3 px-3 sm:px-6 lg:px-10">
            {/* Logo with Gurmukhi Tag */}
            <div className="flex items-center gap-3 min-w-0 shrink">
              <DawatLogo variant="horizontal" size="sm" light={true} />
              <span className="hidden xl:inline-block rounded-full border border-[#D49B55]/30 bg-black/60 px-2.5 py-0.5 text-[10px] font-gurmukhi text-[#D49B55]">
                ਦਾਵਤ ਰੈਸਟੋਰੈਂਟ
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <nav aria-label="Main" className="hidden items-center gap-5 lg:gap-7 lg:flex">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className="group relative py-1 text-[13px] font-semibold tracking-[0.14em] uppercase text-stone-300 transition-colors duration-200 hover:text-white"
                  activeProps={{
                    className: "text-[#D49B55] font-bold",
                  }}
                >
                  {({ isActive }) => (
                    <>
                      <span className="flex items-center gap-1.5">
                        {l.label}
                        {l.to === "/bar" && (
                          <span
                            className="size-1.5 rounded-full bg-[#38BDF8] animate-pulse"
                            title="SKY Lounge & Bar"
                          />
                        )}
                      </span>
                      {isActive ? (
                        <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-[#D49B55] to-[#E5B869] shadow-[0_0_8px_rgba(212,155,85,0.9)]" />
                      ) : (
                        <span className="absolute -bottom-1.5 left-1/2 right-1/2 h-[2px] rounded-full bg-[#D49B55] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:right-0 group-hover:opacity-100" />
                      )}
                    </>
                  )}
                </Link>
              ))}
            </nav>

            {/* Right Action Items */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Book Table Button (Desktop) */}
              <button
                type="button"
                onClick={() => setBookModalOpen(true)}
                className="hidden xl:inline-flex items-center gap-1.5 rounded-full border border-[#D49B55]/60 bg-[#171310] px-4 py-2 text-xs font-semibold text-[#E5B869] hover:bg-[#D49B55] hover:text-stone-950 transition-all cursor-pointer shadow-md touch-target"
              >
                <UtensilsCrossed className="size-3.5" />
                <span>{t("book_a_table")}</span>
              </button>

              {/* Phone Call Link (Desktop) */}
              <a
                href={site.phoneHref}
                className="hidden items-center gap-2 rounded-full border border-stone-800/90 bg-black/60 px-3.5 py-2 text-xs font-semibold tracking-wider text-stone-200 backdrop-blur-md transition-all hover:border-[#D49B55]/70 hover:bg-stone-900 hover:text-white md:flex touch-target"
              >
                <Phone className="size-3.5 text-[#D49B55]" aria-hidden="true" />
                <span>{site.phone}</span>
              </a>

              {/* Order Online CTA */}
              <OrderButton
                size="sm"
                variant="gold"
                className="hidden sm:inline-flex rounded-full bg-gradient-to-r from-[#D49B55] via-[#E5B869] to-[#C08845] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-950 shadow-lg shadow-[#D49B55]/20 transition-all hover:scale-105 active:scale-95 border-0"
              />

              {/* Mobile Hamburger Button (Strict 44px touch area) */}
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-nav"
                aria-label={open ? "Close menu" : "Open menu"}
                className="grid size-11 min-h-[44px] min-w-[44px] place-items-center rounded-xl border border-stone-800 bg-black/80 text-stone-200 transition-all hover:border-[#D49B55] hover:text-[#D49B55] active:scale-95 lg:hidden"
              >
                {open ? <X className="size-5.5" /> : <Menu className="size-5.5" />}
              </button>
            </div>
          </div>
        </div>

        {/* 4. Mobile Navigation Drawer (Scrollable & Touch Optimized) */}
        {open ? (
          <nav
            id="mobile-nav"
            aria-label="Mobile Navigation"
            className="border-t border-[#D49B55]/20 bg-[#0B0907]/98 px-5 py-6 shadow-2xl backdrop-blur-2xl lg:hidden animate-in slide-in-from-top-2 duration-300 max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain pb-12"
          >
            <div className="mb-4 flex items-center justify-between border-b border-stone-800/80 pb-3">
              <span className="text-xs font-semibold tracking-widest text-[#D49B55] uppercase">
                ✦ Dawat Restaurant & SKY Lounge
              </span>
              <button
                type="button"
                onClick={toggleLang}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#D49B55]/40 bg-black/80 px-3 py-1 text-[11px] font-medium text-[#E5B869] touch-target"
              >
                <Globe className="size-3.5" />
                <span>{lang === "pa" ? "ਪੰਜਾਬੀ" : "English"}</span>
              </button>
            </div>

            <ul className="space-y-1">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    activeOptions={{ exact: l.to === "/" }}
                    activeProps={{
                      className:
                        "text-[#D49B55] font-bold bg-stone-900/60 pl-4 border-l-2 border-[#D49B55]",
                    }}
                    className="flex min-h-[44px] items-center justify-between rounded-lg px-3 py-3 font-display text-base tracking-wider text-stone-200 transition-all hover:bg-stone-900/40 hover:text-white active:bg-stone-900"
                  >
                    <span>{l.label}</span>
                    {l.to === "/bar" && (
                      <span className="rounded-full border border-[#38BDF8]/40 bg-[#38BDF8]/10 px-2 py-0.5 font-sans text-[10px] font-semibold text-[#38BDF8]">
                        SKY Lounge
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-3 border-t border-stone-800/80 pt-5">
              {/* Book Table Button Mobile */}
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setBookModalOpen(true);
                }}
                className="w-full min-h-[46px] inline-flex items-center justify-center gap-2 rounded-full border border-[#D49B55] bg-[#1B1612] py-3 text-sm font-bold text-[#E5B869] shadow-lg hover:bg-[#D49B55] hover:text-stone-950 transition-all active:scale-95"
              >
                <UtensilsCrossed className="size-4" />
                <span>{t("book_a_table")}</span>
              </button>

              <OrderButton
                className="w-full min-h-[46px] rounded-full bg-gradient-to-r from-[#D49B55] via-[#E5B869] to-[#C08845] py-3 text-sm font-bold text-stone-950 shadow-lg shadow-[#D49B55]/20"
                variant="gold"
              />

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={site.phoneHref}
                  className="min-h-[44px] inline-flex items-center justify-center gap-2 rounded-full border border-stone-800 bg-stone-950 py-2.5 text-xs font-medium text-stone-200 hover:border-[#D49B55] hover:text-white active:scale-95"
                >
                  <Phone className="size-3.5 text-[#D49B55]" />
                  Call Now
                </a>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="min-h-[44px] inline-flex items-center justify-center gap-2 rounded-full border border-emerald-800/60 bg-emerald-950/40 py-2.5 text-xs font-medium text-emerald-300 hover:bg-emerald-950/70 active:scale-95"
                >
                  <WhatsAppIcon className="size-3.5 text-emerald-400" />
                  WhatsApp
                </a>
              </div>

              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center justify-center gap-2 rounded-full border border-sky-800/60 bg-sky-950/40 py-2.5 text-xs font-medium text-sky-300 hover:bg-sky-950/70 transition-colors active:scale-95"
              >
                <FacebookIcon className="size-3.5 text-sky-400" />
                <span>Facebook: {site.facebookHandle}</span>
              </a>
              <p className="mt-2 text-center text-[11px] text-stone-400">
                G.T. Road, Opp. P.W.D. Rest House, Mukerian
              </p>
            </div>
          </nav>
        ) : null}
      </header>

      {/* Table Booking Modal */}
      <BookTableModal
        isOpen={bookModalOpen}
        onClose={() => setBookModalOpen(false)}
      />
    </>
  );
}
