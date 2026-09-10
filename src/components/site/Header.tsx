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
      <header className="sticky top-0 z-50 transition-all duration-300 w-full">
        {/* 1. Hairline Top Champagne Border */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C8A875] to-transparent" />

        {/* 2. Top Utility & Live Operating Status Bar */}
        <div className="border-b border-[#A87545]/20 bg-[#151210] px-3 sm:px-6 lg:px-10 py-1.5 text-xs text-[#F5EFE6] transition-colors">
          <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-2">
            {/* Left: Live Operating Pill */}
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-2.5 py-0.5 text-[11px] text-emerald-300 backdrop-blur-sm">
                <span className="relative flex size-2 shrink-0">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
                </span>
                <span className="font-semibold tracking-wide">Open Daily</span>
                <span className="hidden sm:inline text-emerald-400/40 font-mono">·</span>
                <span className="hidden sm:inline text-[#D8C8B8] font-normal tracking-wider">11:00 AM – 11:30 PM</span>
              </div>

              <div aria-hidden="true" className="hidden xl:block h-3.5 w-[1px] bg-[#A87545]/25" />

              <div className="hidden xl:inline-flex items-center gap-2 text-[11px] text-[#D8C8B8] tracking-wide">
                <span className="font-gurmukhi text-[#C8A875] font-medium">ਦਾਵਤ ਰੈਸਟੋਰੈਂਟ</span>
                <span className="text-[#A87545]/30">|</span>
                <span className="text-[#D8C8B8]">G.T. Road, Mukerian · AC Dining & SKY Lounge</span>
              </div>
            </div>

            {/* Right: Language Selector, WhatsApp, Facebook, Directions */}
            <div className="flex items-center gap-1 sm:gap-2.5 lg:gap-3 shrink-0">
              {/* Language Switcher Button */}
              <button
                type="button"
                onClick={toggleLang}
                title={lang === "en" ? "ਪੰਜਾਬੀ ਵਿੱਚ ਬਦਲੋ (Switch to Punjabi)" : "Switch to English"}
                className="group relative inline-flex items-center gap-1.5 rounded-full border border-[#A87545]/40 bg-[#241B16] px-2 sm:px-3 py-1 text-[10.5px] sm:text-[11px] font-medium text-[#F5EFE6] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_2px_6px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 hover:border-[#C8A875] hover:shadow-[0_0_14px_rgba(200,168,117,0.3)] hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <Globe className="size-3 text-[#C8A875] transition-transform duration-500 group-hover:rotate-180 shrink-0" />
                <span className="flex items-center gap-1 tracking-wider uppercase font-semibold text-[10px] sm:text-[10.5px]">
                  <span
                    className={cn(
                      "transition-all duration-200 px-1 py-0.5 rounded",
                      lang === "en"
                        ? "text-[#F5EFE6] bg-[#A87545] shadow-[0_0_8px_rgba(168,117,69,0.4)] font-bold"
                        : "text-[#D8C8B8] group-hover:text-[#F5EFE6]"
                    )}
                  >
                    EN
                  </span>
                  <span className="text-[#A87545]/30 font-light">/</span>
                  <span
                    className={cn(
                      "font-gurmukhi transition-all duration-200 px-1 py-0.5 rounded",
                      lang === "pa"
                        ? "text-[#F5EFE6] bg-[#A87545] shadow-[0_0_8px_rgba(168,117,69,0.4)] font-bold"
                        : "text-[#D8C8B8] group-hover:text-[#F5EFE6]"
                    )}
                  >
                    ਪੰ
                  </span>
                </span>
              </button>

              <div aria-hidden="true" className="h-3 w-[1px] bg-[#A87545]/25" />

              {/* WhatsApp Link */}
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noreferrer"
                title={`WhatsApp: ${site.whatsapp}`}
                className="group inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-transparent p-1 sm:px-2.5 sm:py-1 text-[11px] font-medium text-[#D8C8B8] transition-all duration-300 hover:border-emerald-500/30 hover:bg-emerald-950/30 hover:text-emerald-300"
              >
                <span className="relative flex size-5 sm:size-4 items-center justify-center rounded-full bg-emerald-500/15 sm:bg-emerald-500/10 text-emerald-400 transition-all duration-300 group-hover:bg-emerald-500/25 group-hover:scale-110">
                  <WhatsAppIcon className="size-3 sm:size-2.5 text-emerald-400 group-hover:text-emerald-300" />
                </span>
                <span className="hidden md:inline text-[#D8C8B8] font-normal tracking-wide">WhatsApp:</span>
                <span className="hidden sm:inline font-semibold text-emerald-400 tracking-wider font-mono text-[11px] group-hover:text-emerald-300 transition-colors">
                  {site.whatsapp}
                </span>
              </a>

              <div aria-hidden="true" className="h-3 w-[1px] bg-[#A87545]/25" />

              {/* Facebook Link */}
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                title="Follow Dawat Restaurant Mukerian on Facebook"
                className="group inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-transparent p-1 sm:px-2.5 sm:py-1 text-[11px] font-medium text-[#D8C8B8] transition-all duration-300 hover:border-sky-500/30 hover:bg-sky-950/30 hover:text-sky-300"
              >
                <span className="relative flex size-5 sm:size-4 items-center justify-center rounded-full bg-sky-500/15 sm:bg-sky-500/10 text-sky-400 transition-all duration-300 group-hover:bg-sky-500/25 group-hover:scale-110">
                  <FacebookIcon className="size-3 sm:size-2.5 text-sky-400 group-hover:text-sky-300" />
                </span>
                <span className="hidden md:inline text-sky-300/90 group-hover:text-sky-200 tracking-wide font-medium">
                  {site.facebookHandle}
                </span>
              </a>

              <div aria-hidden="true" className="hidden xs:block h-3 w-[1px] bg-[#A87545]/25" />

              {/* Directions Link */}
              <a
                href={site.directionsLink}
                target="_blank"
                rel="noreferrer"
                title="Google Maps Directions to Dawat Restaurant"
                className="group hidden xs:inline-flex items-center gap-1 rounded-full border border-transparent px-2 sm:px-2.5 py-1 text-[11px] font-medium text-[#D8C8B8] transition-all duration-300 hover:border-[#A87545]/30 hover:bg-[#241B16] hover:text-[#F5EFE6]"
              >
                <Navigation className="size-3 text-[#A87545] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#C8A875]" />
                <span className="hidden sm:inline tracking-wide text-[#D8C8B8] group-hover:text-[#F5EFE6] transition-colors">
                  Directions
                </span>
                <span className="text-[10px] text-[#A87545] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* 3. Main Navigation Bar with Deep Espresso & Dark Coffee */}
        <div
          className={cn(
            "relative border-b transition-all duration-300",
            scrolled
              ? "border-[#A87545]/35 bg-[#1C1917]/98 py-2 sm:py-2.5 shadow-[0_12px_35px_rgba(0,0,0,0.7)] backdrop-blur-2xl"
              : "border-[#A87545]/25 bg-[#1C1917]/95 py-2.5 sm:py-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl"
          )}
        >
          {/* Subtle Ambient Radial Lighting Flare behind Header Center */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_-20%,rgba(168,117,69,0.15),rgba(0,0,0,0))]"
          />

          <div className="relative z-10 mx-auto flex max-w-[1380px] items-center justify-between gap-3 px-3 sm:px-6 lg:px-8">
            {/* Left: Logo with Regal Gurmukhi Crest */}
            <div className="flex items-center gap-3 min-w-0 shrink">
              <DawatLogo variant="horizontal" size="sm" light={true} />
              <div className="hidden xl:flex items-center gap-2.5 pl-3 border-l border-[#A87545]/30">
                <div className="flex flex-col">
                  <span className="font-gurmukhi text-[11.5px] font-bold tracking-wide text-[#C8A875] leading-tight flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-[#C8A875] shadow-[0_0_6px_#C8A875]" />
                    ਦਾਵਤ ਰੈਸਟੋਰੈਂਟ
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#D8C8B8]/80 font-medium">
                    Fine Dining · Mukerian
                  </span>
                </div>
              </div>
            </div>

            {/* Center: Desktop Navigation Frosted Capsule Bar */}
            <nav
              aria-label="Main Navigation"
              className="hidden lg:flex items-center p-1 rounded-full bg-[#241B16]/85 border border-[#A87545]/35 shadow-[inset_0_1px_2px_rgba(255,255,255,0.06),0_4px_16px_rgba(0,0,0,0.45)] backdrop-blur-xl gap-0.5 xl:gap-1"
            >
              {navLinks.map((l) => {
                const label =
                  lang === "pa"
                    ? l.to === "/"
                      ? t("navHome")
                      : l.to === "/about"
                      ? t("navAbout")
                      : l.to === "/menu"
                      ? t("navMenu")
                      : l.to === "/bar"
                      ? t("navBar")
                      : l.to === "/gallery"
                      ? t("navGallery")
                      : l.to === "/reviews"
                      ? t("navReviews")
                      : l.to === "/contact"
                      ? t("navContact")
                      : l.label
                    : l.label;

                return (
                  <Link
                    key={l.to}
                    to={l.to}
                    activeOptions={{ exact: l.to === "/" }}
                    className="group relative rounded-full px-3 xl:px-3.5 py-1.5 text-[11.5px] xl:text-[12px] font-bold tracking-[0.12em] uppercase transition-all duration-300 select-none"
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <span
                            className="absolute inset-0 rounded-full bg-gradient-to-r from-[#A87545] via-[#B98350] to-[#A87545] shadow-[0_2px_12px_rgba(168,117,69,0.5),inset_0_1px_1px_rgba(255,255,255,0.25)] border border-[#C8A875]/60"
                            aria-hidden="true"
                          />
                        )}
                        <span
                          className={cn(
                            "relative z-10 flex items-center gap-1.5 transition-all duration-200",
                            isActive
                              ? "text-[#F5EFE6] font-bold"
                              : "text-[#D8C8B8] group-hover:text-[#F5EFE6] group-hover:drop-shadow-[0_0_6px_rgba(200,168,117,0.5)]"
                          )}
                        >
                          <span>{label}</span>
                          {l.to === "/bar" && (
                            <span
                              className={cn(
                                "relative flex size-2 shrink-0",
                                isActive ? "opacity-100" : "opacity-90"
                              )}
                            >
                              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#C8A875] opacity-75" />
                              <span className="relative inline-flex size-2 rounded-full bg-[#C8A875] shadow-[0_0_6px_#C8A875]" />
                            </span>
                          )}
                        </span>
                        {!isActive && (
                          <span className="absolute inset-0 rounded-full bg-white/0 transition-all duration-200 group-hover:bg-white/[0.08] group-hover:border group-hover:border-[#A87545]/25" />
                        )}
                      </>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Items Cluster */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              {/* Book Table Button (Desktop) */}
              <button
                type="button"
                onClick={() => setBookModalOpen(true)}
                className="group relative hidden md:inline-flex items-center gap-2 rounded-full border border-[#C8A875]/50 bg-gradient-to-r from-[#2A201A] to-[#1F1813] px-3.5 py-2 text-xs font-bold tracking-wider text-[#F5EFE6] shadow-[0_4px_12px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-[#C8A875] hover:bg-gradient-to-r hover:from-[#A87545] hover:to-[#B98350] hover:shadow-[0_0_18px_rgba(200,168,117,0.4)] hover:scale-105 active:scale-95 cursor-pointer touch-target shrink-0"
                title="Book a Table at Dawat Restaurant"
              >
                <span className="flex size-5 items-center justify-center rounded-full bg-[#A87545]/30 text-[#C8A875] transition-transform duration-300 group-hover:scale-110 group-hover:text-[#F5EFE6] group-hover:bg-black/30">
                  <UtensilsCrossed className="size-3" />
                </span>
                <span className="whitespace-nowrap font-medium">
                  {lang === "pa" ? "ਟੇਬਲ ਬੁੱਕ ਕਰੋ" : "Book Table"}
                </span>
              </button>

              {/* Phone Call Link (Desktop) */}
              <a
                href={site.phoneHref}
                className="hidden xl:inline-flex items-center gap-2 rounded-full border border-[#A87545]/35 bg-[#241B16]/85 px-3 py-2 text-xs font-semibold tracking-wider text-[#D8C8B8] backdrop-blur-md transition-all duration-300 hover:border-[#C8A875] hover:bg-[#2A201A] hover:text-[#F5EFE6] hover:shadow-[0_0_14px_rgba(200,168,117,0.25)] touch-target shrink-0"
                title={`Call Dawat Restaurant: ${site.phone}`}
              >
                <span className="relative flex size-2 shrink-0">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500 shadow-[0_0_6px_#10B981]" />
                </span>
                <Phone className="size-3 text-[#C8A875]" aria-hidden="true" />
                <span className="font-mono text-[11.5px] text-[#F5EFE6]">{site.phone}</span>
              </a>

              {/* Order Online CTA */}
              <OrderButton
                size="sm"
                variant="gold"
                label={lang === "pa" ? "ਆਰਡਰ ਕਰੋ" : "Order Online"}
                className="hidden sm:inline-flex shadow-[0_4px_16px_rgba(168,117,69,0.35)] hover:shadow-[0_0_22px_rgba(200,168,117,0.5)] hover:scale-105 active:scale-95 shrink-0"
              />

              {/* Mobile Quick Call Button */}
              <a
                href={site.phoneHref}
                className="flex md:hidden size-10 min-h-[40px] min-w-[40px] items-center justify-center rounded-full border border-[#A87545]/40 bg-[#241B16] text-[#C8A875] transition-all active:scale-95 shadow-sm hover:border-[#C8A875] hover:text-[#F5EFE6]"
                title={`Call Dawat Restaurant: ${site.phone}`}
                aria-label="Call Dawat Restaurant"
              >
                <Phone className="size-4" />
              </a>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-nav"
                aria-label={open ? "Close menu" : "Open menu"}
                className="grid size-11 min-h-[44px] min-w-[44px] place-items-center rounded-full border border-[#A87545]/50 bg-gradient-to-b from-[#241B16] to-[#1C1917] text-[#F5EFE6] transition-all duration-300 hover:border-[#C8A875] hover:text-[#C8A875] hover:shadow-[0_0_15px_rgba(200,168,117,0.35)] active:scale-95 shadow-md shadow-black/50 lg:hidden shrink-0"
              >
                {open ? <X className="size-5 text-[#C8A875]" /> : <Menu className="size-5.5" />}
              </button>
            </div>
          </div>
        </div>

        {/* 4. Mobile Navigation Drawer */}
        {open ? (
          <nav
            id="mobile-nav"
            aria-label="Mobile Navigation"
            className="border-t border-[#A87545]/25 bg-[#1C1917]/98 px-5 py-6 shadow-2xl backdrop-blur-2xl lg:hidden animate-in slide-in-from-top-2 duration-300 max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain pb-12"
          >
            <div className="mb-4 flex items-center justify-between border-b border-[#A87545]/20 pb-3">
              <span className="text-xs font-semibold tracking-widest text-[#C8A875] uppercase">
                ✦ Dawat Restaurant & SKY Lounge
              </span>
              <button
                type="button"
                onClick={toggleLang}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#A87545]/40 bg-[#241B16] px-3 py-1 text-[11px] font-medium text-[#F5EFE6] touch-target"
              >
                <Globe className="size-3.5 text-[#C8A875]" />
                <span>{lang === "pa" ? "ਪੰਜਾਬੀ" : "English"}</span>
              </button>
            </div>

            <ul className="space-y-1">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: l.to === "/" }}
                    activeProps={{
                      className:
                        "text-[#C8A875] font-bold bg-[#241B16] pl-4 border-l-2 border-[#C8A875]",
                    }}
                    className="flex min-h-[44px] items-center justify-between rounded-lg px-3 py-3 font-display text-base tracking-wider text-[#F5EFE6] transition-all hover:bg-[#241B16] hover:text-[#C8A875] active:bg-[#241B16]"
                  >
                    <span>{l.label}</span>
                    {l.to === "/bar" && (
                      <span className="rounded-full border border-[#C8A875]/40 bg-[#C8A875]/10 px-2 py-0.5 font-sans text-[10px] font-semibold text-[#C8A875]">
                        SKY Lounge
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-3 border-t border-[#A87545]/20 pt-5">
              {/* Book Table Button Mobile */}
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setBookModalOpen(true);
                }}
                className="w-full min-h-[46px] inline-flex items-center justify-center gap-2 rounded-full border border-[#A87545]/50 bg-[#241B16] py-3 text-sm font-semibold text-[#F5EFE6] shadow-lg hover:bg-[#A87545] hover:text-[#F5EFE6] transition-all active:scale-95"
              >
                <UtensilsCrossed className="size-4" />
                <span>{t("book_a_table")}</span>
              </button>

              <OrderButton
                className="w-full min-h-[46px] rounded-full bg-[#A87545] hover:bg-[#B98350] py-3 text-sm font-bold text-[#F5EFE6] shadow-lg shadow-[#A87545]/20"
                variant="gold"
              />

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={site.phoneHref}
                  className="min-h-[44px] inline-flex items-center justify-center gap-2 rounded-full border border-[#A87545]/30 bg-[#241B16] py-2.5 text-xs font-medium text-[#D8C8B8] hover:border-[#C8A875] hover:text-[#F5EFE6] active:scale-95"
                >
                  <Phone className="size-3.5 text-[#C8A875]" />
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
              <p className="mt-2 text-center text-[11px] text-[#D8C8B8]">
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
