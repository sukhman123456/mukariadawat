import { useState } from "react";
import { X, Calendar, Clock, Users, Phone, MapPin, Sparkles, Send, Wine, Utensils } from "lucide-react";
import { site } from "@/lib/site";
import { useLanguage } from "@/lib/translations";
import { WhatsAppIcon } from "./SocialIcons";

interface BookTableModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookTableModal({ isOpen, onClose }: BookTableModalProps) {
  const { t, lang } = useLanguage();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });
  const [timeSlot, setTimeSlot] = useState("8:00 PM (Dinner)");
  const [guests, setGuests] = useState("4 Guests");
  const [hall, setHall] = useState("Family AC Dining Hall");
  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert("Please enter your name and phone number");
      return;
    }

    const message = encodeURIComponent(
      `*✦ TABLE RESERVATION INQUIRY — DAWAT RESTAURANT*\n` +
      `--------------------------------\n` +
      `👤 *Name:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `📅 *Date:* ${date}\n` +
      `⏰ *Time:* ${timeSlot}\n` +
      `👥 *Guests:* ${guests}\n` +
      `🏛️ *Seating Area:* ${hall}\n` +
      (notes ? `📝 *Notes:* ${notes}\n` : "") +
      `--------------------------------\n` +
      `Please confirm table availability for us. Thank you!`
    );

    window.open(`https://wa.me/911883245160?text=${message}`, "_blank");
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg max-h-[92dvh] overflow-y-auto rounded-3xl border border-[#A87545]/40 bg-gradient-to-b from-[#1C1917] via-[#241B16] to-[#1C1917] p-4 xs:p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.95)] text-[#F5EFE6] animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-40 bg-[#A87545]/20 blur-3xl"
        />

        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#A87545]/20 pb-3 sm:pb-4">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C8A875]/40 bg-black/60 px-3 py-0.5 text-[10px] font-semibold tracking-wider text-[#C8A875] uppercase">
              <Sparkles className="size-2.5" />
              {lang === "pa" ? "ਤੁਰੰਤ ਟੇਬਲ ਬੁਕਿੰਗ" : "Instant Table Reservation"}
            </span>
            <h2 className="mt-2 font-display text-xl sm:text-2xl text-[#F5EFE6]">
              {t("bookModalTitle")}
            </h2>
            <p className="mt-1 text-xs text-[#D8C8B8]">
              {t("bookModalSubtitle")}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="grid size-9 place-items-center rounded-full border border-[#A87545]/30 bg-[#241B16] text-[#D8C8B8] hover:bg-[#A87545]/20 hover:text-[#F5EFE6] transition-colors cursor-pointer"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Reservation Form */}
        <form onSubmit={handleWhatsAppSubmit} className="mt-5 space-y-4 text-xs">
          {/* Name & Phone */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="block text-[#D8C8B8] font-medium mb-1">
                {t("nameLabel")} *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Jaspreet Singh"
                className="w-full rounded-xl border border-[#A87545]/30 bg-[#1C1917] px-3.5 py-2.5 text-[#F5EFE6] placeholder:text-[#D8C8B8]/40 focus:border-[#C8A875] focus:outline-none focus:ring-1 focus:ring-[#C8A875]/30 transition-all text-sm sm:text-xs"
              />
            </div>
            <div>
              <label className="block text-[#D8C8B8] font-medium mb-1">
                {t("phoneLabel")} *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 98765-XXXXX"
                className="w-full rounded-xl border border-[#A87545]/30 bg-[#1C1917] px-3.5 py-2.5 text-[#F5EFE6] placeholder:text-[#D8C8B8]/40 focus:border-[#C8A875] focus:outline-none focus:ring-1 focus:ring-[#C8A875]/30 transition-all text-sm sm:text-xs"
              />
            </div>
          </div>

          {/* Date & Time */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="block text-[#D8C8B8] font-medium mb-1">
                {t("dateLabel")}
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-xl border border-[#A87545]/30 bg-[#1C1917] px-3.5 py-2.5 text-[#F5EFE6] focus:border-[#C8A875] focus:outline-none focus:ring-1 focus:ring-[#C8A875]/30 transition-all text-sm sm:text-xs"
              />
            </div>
            <div>
              <label className="block text-[#D8C8B8] font-medium mb-1">
                {t("timeSlotLabel")}
              </label>
              <select
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="w-full rounded-xl border border-[#A87545]/30 bg-[#1C1917] px-3.5 py-2.5 text-[#F5EFE6] focus:border-[#C8A875] focus:outline-none focus:ring-1 focus:ring-[#C8A875]/30 transition-all text-sm sm:text-xs"
              >
                <option value="12:30 PM (Lunch)">12:30 PM (Lunch)</option>
                <option value="1:30 PM (Lunch)">1:30 PM (Lunch)</option>
                <option value="2:30 PM (Lunch)">2:30 PM (Lunch)</option>
                <option value="5:30 PM (Evening Tea/Snacks)">5:30 PM (Evening Snacks)</option>
                <option value="7:30 PM (Dinner)">7:30 PM (Dinner)</option>
                <option value="8:00 PM (Dinner)">8:00 PM (Dinner)</option>
                <option value="8:30 PM (Dinner)">8:30 PM (Dinner)</option>
                <option value="9:30 PM (Dinner)">9:30 PM (Dinner)</option>
                <option value="10:30 PM (Late Dining)">10:30 PM (Late Dining)</option>
              </select>
            </div>
          </div>

          {/* Number of Guests & Seating Preference */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="block text-[#D8C8B8] font-medium mb-1">
                {t("guestsLabel")}
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full rounded-xl border border-[#A87545]/30 bg-[#1C1917] px-3.5 py-2.5 text-[#F5EFE6] focus:border-[#C8A875] focus:outline-none focus:ring-1 focus:ring-[#C8A875]/30 transition-all text-sm sm:text-xs"
              >
                <option value="2 Guests">2 Guests (Couple)</option>
                <option value="4 Guests">4 Guests (Family Table)</option>
                <option value="6 Guests">6 Guests (Family Table)</option>
                <option value="8 Guests">8 Guests (Large Group)</option>
                <option value="12+ Guests">12+ Guests (Party / Celebration)</option>
                <option value="20+ Guests (Banquet)">20+ Guests (Banquet Hall)</option>
              </select>
            </div>
            <div>
              <label className="block text-[#D8C8B8] font-medium mb-1">
                {t("hallLabel")}
              </label>
              <select
                value={hall}
                onChange={(e) => setHall(e.target.value)}
                className="w-full rounded-xl border border-[#A87545]/30 bg-[#1C1917] px-3.5 py-2.5 text-[#F5EFE6] focus:border-[#C8A875] focus:outline-none focus:ring-1 focus:ring-[#C8A875]/30 transition-all text-sm sm:text-xs"
              >
                <option value="Family AC Dining Hall">{t("hallOptionDining")}</option>
                <option value="SKY Lounge & Bar">{t("hallOptionSky")}</option>
                <option value="Rooftop Starlight Terrace">{t("hallOptionRooftop")}</option>
              </select>
            </div>
          </div>

          {/* Optional notes */}
          <div>
            <label className="block text-[#D8C8B8] font-medium mb-1">
              Special Requests (Birthday, high chair, spice preference)
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Birthday anniversary, quiet corner table"
              className="w-full rounded-xl border border-[#A87545]/30 bg-[#1C1917] px-3.5 py-2 text-[#F5EFE6] placeholder:text-[#D8C8B8]/40 focus:border-[#C8A875] focus:outline-none focus:ring-1 focus:ring-[#C8A875]/30 transition-all text-sm sm:text-xs"
            />
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col gap-2.5 pt-2">
            <button
              type="submit"
              className="luxury-shimmer w-full min-h-[46px] inline-flex items-center justify-center gap-2 rounded-full bg-[#A87545] hover:bg-[#B98350] py-3 text-xs sm:text-sm font-bold text-[#F5EFE6] shadow-lg shadow-[#A87545]/25 hover:shadow-[0_0_20px_rgba(200,168,117,0.40)] hover:scale-[1.01] active:scale-98 transition-all cursor-pointer"
            >
              <WhatsAppIcon className="size-4" />
              <span>{t("bookViaWhatsapp")}</span>
            </button>

            <a
              href={site.phoneHref}
              className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 rounded-full border border-[#A87545]/40 bg-[#241B16] py-2.5 text-xs font-semibold text-[#F5EFE6] hover:border-[#C8A875] hover:text-[#C8A875] transition-all"
            >
              <Phone className="size-3.5 text-[#C8A875]" />
              <span>{t("callToBook")}: {site.phone}</span>
            </a>
          </div>

          <p className="text-[11px] text-center text-[#D8C8B8] mt-2">
            ✦ Walk-ins are always welcomed on G.T. Road! Advance booking recommended for weekend dinners & groups.
          </p>
        </form>
      </div>
    </div>
  );
}
