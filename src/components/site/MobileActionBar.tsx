import { Link } from "@tanstack/react-router";
import { Phone, UtensilsCrossed, Navigation } from "lucide-react";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "./SocialIcons";

export function MobileActionBar() {
  return (
    <aside
      aria-label="Quick Mobile Actions"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[#D49B55]/30 bg-gradient-to-r from-[#0E0C09]/98 via-[#14100D]/98 to-[#0E0C09]/98 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_32px_rgba(0,0,0,0.9)] backdrop-blur-2xl lg:hidden select-none"
    >
      {/* Top Gold Hairline Glow */}
      <div
        aria-hidden="true"
        className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#D49B55]/60 to-transparent"
      />

      <nav className="grid grid-cols-4 items-center">
        {/* 1. Call */}
        <a
          href={site.phoneHref}
          className="group flex min-h-[56px] flex-col items-center justify-center gap-1 text-[10px] sm:text-[11px] font-semibold tracking-[0.1em] text-stone-300 uppercase transition-all hover:text-white active:scale-95"
        >
          <span className="grid size-6 place-items-center rounded-full bg-stone-900/90 text-[#D49B55] group-hover:bg-[#D49B55]/20 transition-colors">
            <Phone className="size-3.5" aria-hidden="true" />
          </span>
          <span>Call</span>
        </a>

        {/* 2. WhatsApp */}
        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex min-h-[56px] flex-col items-center justify-center gap-1 border-l border-white/[0.06] text-[10px] sm:text-[11px] font-semibold tracking-[0.1em] text-emerald-300 uppercase transition-all hover:text-emerald-200 active:scale-95"
        >
          <span className="grid size-6 place-items-center rounded-full bg-emerald-950/80 text-emerald-400 group-hover:bg-emerald-900/50 transition-colors shadow-[0_0_8px_rgba(16,185,129,0.25)]">
            <WhatsAppIcon className="size-3.5 text-emerald-400" />
          </span>
          <span>WhatsApp</span>
        </a>

        {/* 3. Menu */}
        <Link
          to="/menu"
          className="group flex min-h-[56px] flex-col items-center justify-center gap-1 border-l border-white/[0.06] text-[10px] sm:text-[11px] font-semibold tracking-[0.1em] text-[#F5D28E] uppercase transition-all hover:text-white active:scale-95"
        >
          <span className="grid size-6 place-items-center rounded-full bg-[#D49B55]/20 text-[#D49B55] group-hover:bg-[#D49B55]/40 transition-colors shadow-[0_0_8px_rgba(212,155,85,0.25)]">
            <UtensilsCrossed className="size-3.5 text-[#D49B55]" aria-hidden="true" />
          </span>
          <span>Menu</span>
        </Link>

        {/* 4. Directions */}
        <a
          href={site.directionsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex min-h-[56px] flex-col items-center justify-center gap-1 border-l border-white/[0.06] text-[10px] sm:text-[11px] font-semibold tracking-[0.1em] text-stone-300 uppercase transition-all hover:text-white active:scale-95"
        >
          <span className="grid size-6 place-items-center rounded-full bg-stone-900/90 text-sky-400 group-hover:bg-sky-950/60 transition-colors">
            <Navigation className="size-3.5" aria-hidden="true" />
          </span>
          <span>Directions</span>
        </a>
      </nav>
    </aside>
  );
}

