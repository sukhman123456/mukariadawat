import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, UtensilsCrossed, CalendarCheck, Navigation } from "lucide-react";
import { site } from "@/lib/site";
import { BookTableModal } from "./BookTableModal";

export function MobileActionBar() {
  const [bookModalOpen, setBookModalOpen] = useState(false);

  return (
    <>
      <aside
        aria-label="Quick Mobile Actions"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-[#A87545]/30 bg-[#1C1917]/98 pb-[env(safe-area-inset-bottom)] shadow-[0_-6px_25px_rgba(0,0,0,0.85)] backdrop-blur-2xl lg:hidden select-none"
      >
        {/* Top Gold Hairline Glow */}
        <div
          aria-hidden="true"
          className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C8A875]/50 to-transparent"
        />

        <nav className="grid grid-cols-4 items-center">
          {/* 1. Call */}
          <a
            href={site.phoneHref}
            className="group flex min-h-[48px] py-1.5 flex-col items-center justify-center gap-1 text-[10px] font-semibold tracking-[0.08em] text-[#D8C8B8] uppercase transition-all hover:text-[#F5EFE6] active:scale-95"
          >
            <span className="grid size-6 place-items-center rounded-full bg-[#241B16] text-[#C8A875] group-hover:bg-[#A87545]/25 transition-colors border border-[#A87545]/20">
              <Phone className="size-3" aria-hidden="true" />
            </span>
            <span className="text-[#F5EFE6]">Call</span>
          </a>

          {/* 2. Menu */}
          <Link
            to="/menu"
            className="group flex min-h-[48px] py-1.5 flex-col items-center justify-center gap-1 border-l border-[#A87545]/15 text-[10px] font-semibold tracking-[0.08em] text-[#D8C8B8] uppercase transition-all hover:text-[#F5EFE6] active:scale-95"
          >
            <span className="grid size-6 place-items-center rounded-full bg-[#241B16] text-[#C8A875] group-hover:bg-[#A87545]/25 transition-colors border border-[#A87545]/20">
              <UtensilsCrossed className="size-3" aria-hidden="true" />
            </span>
            <span className="text-[#F5EFE6]">Menu</span>
          </Link>

          {/* 3. Book Table */}
          <button
            type="button"
            onClick={() => setBookModalOpen(true)}
            className="group flex min-h-[48px] py-1.5 flex-col items-center justify-center gap-1 border-l border-[#A87545]/15 text-[10px] font-semibold tracking-[0.08em] text-[#C8A875] uppercase transition-all hover:text-[#F5EFE6] active:scale-95 cursor-pointer"
          >
            <span className="grid size-6 place-items-center rounded-full bg-[#A87545]/25 text-[#C8A875] group-hover:bg-[#A87545]/40 transition-colors border border-[#A87545]/40 shadow-[0_0_8px_rgba(200,168,117,0.25)]">
              <CalendarCheck className="size-3" aria-hidden="true" />
            </span>
            <span className="text-[#F5EFE6]">Book</span>
          </button>

          {/* 4. Directions */}
          <a
            href={site.directionsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-[48px] py-1.5 flex-col items-center justify-center gap-1 border-l border-[#A87545]/15 text-[10px] font-semibold tracking-[0.08em] text-[#D8C8B8] uppercase transition-all hover:text-[#F5EFE6] active:scale-95"
          >
            <span className="grid size-6 place-items-center rounded-full bg-[#241B16] text-[#C8A875] group-hover:bg-[#A87545]/25 transition-colors border border-[#A87545]/20">
              <Navigation className="size-3" aria-hidden="true" />
            </span>
            <span className="text-[#F5EFE6]">Directions</span>
          </a>
        </nav>
      </aside>

      {/* Instant Reservation Modal */}
      <BookTableModal
        isOpen={bookModalOpen}
        onClose={() => setBookModalOpen(false)}
      />
    </>
  );
}
