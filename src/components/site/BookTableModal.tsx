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
        className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-[#D49B55]/40 bg-gradient-to-b from-[#1E1914] via-[#14110E] to-black p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.95)] text-stone-200 animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-40 bg-[#D49B55]/20 blur-3xl"
        />

        {/* Header */}
        <div className="flex items-start justify-between border-b border-stone-800 pb-4">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D49B55]/40 bg-black/60 px-3 py-0.5 text-[10px] font-semibold tracking-wider text-[#D49B55] uppercase">
              <Sparkles className="size-2.5" />
              {lang === "pa" ? "ਤੁਰੰਤ ਟੇਬਲ ਬੁਕਿੰਗ" : "Instant Table Reservation"}
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl text-[#FAF5EE]">
              {t("bookModalTitle")}
            </h2>
            <p className="mt-1 text-xs text-stone-400">
              {t("bookModalSubtitle")}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="rounded-full border border-stone-800 p-2 text-stone-400 hover:bg-stone-900 hover:text-white transition-colors"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Reservation Form */}
        <form onSubmit={handleWhatsAppSubmit} className="mt-5 space-y-4 text-xs">
          {/* Name & Phone */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="block text-stone-300 font-medium mb-1">
                {t("nameLabel")} *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Jaspreet Singh"
                className="w-full rounded-xl border border-stone-800 bg-[#120F0D] px-3.5 py-2.5 text-stone-100 placeholder:text-stone-600 focus:border-[#D49B55] focus:outline-none focus:ring-1 focus:ring-[#D49B55]/30 transition-all"
              />
            </div>
            <div>
              <label className="block text-stone-300 font-medium mb-1">
                {t("phoneLabel")} *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 98765-XXXXX"
                className="w-full rounded-xl border border-stone-800 bg-[#120F0D] px-3.5 py-2.5 text-stone-100 placeholder:text-stone-600 focus:border-[#D49B55] focus:outline-none focus:ring-1 focus:ring-[#D49B55]/30 transition-all"
              />
            </div>
          </div>

          {/* Date & Time */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="block text-stone-300 font-medium mb-1">
                {t("dateLabel")}
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-xl border border-stone-800 bg-[#120F0D] px-3.5 py-2.5 text-stone-100 focus:border-[#D49B55] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-stone-300 font-medium mb-1">
                {t("timeSlotLabel")}
              </label>
              <select
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="w-full rounded-xl border border-stone-800 bg-[#120F0D] px-3.5 py-2.5 text-stone-100 focus:border-[#D49B55] focus:outline-none"
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
              <label className="block text-stone-300 font-medium mb-1">
                {t("guestsLabel")}
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full rounded-xl border border-stone-800 bg-[#120F0D] px-3.5 py-2.5 text-stone-100 focus:border-[#D49B55] focus:outline-none"
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
              <label className="block text-stone-300 font-medium mb-1">
                {t("hallLabel")}
              </label>
              <select
                value={hall}
                onChange={(e) => setHall(e.target.value)}
                className="w-full rounded-xl border border-stone-800 bg-[#120F0D] px-3.5 py-2.5 text-stone-100 focus:border-[#D49B55] focus:outline-none"
              >
                <option value="Family AC Dining Hall">{t("hallOptionDining")}</option>
                <option value="SKY Lounge & Bar">{t("hallOptionSky")}</option>
                <option value="Rooftop Starlight Terrace">{t("hallOptionRooftop")}</option>
              </select>
            </div>
          </div>

          {/* Optional notes */}
          <div>
            <label className="block text-stone-300 font-medium mb-1">
              Special Requests (Birthday, high chair, spice preference)
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Birthday anniversary, quiet corner table"
              className="w-full rounded-xl border border-stone-800 bg-[#120F0D] px-3.5 py-2 text-stone-100 placeholder:text-stone-600 focus:border-[#D49B55] focus:outline-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col gap-2.5 pt-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-emerald-900/30 hover:scale-[1.02] active:scale-98 transition-all"
            >
              <WhatsAppIcon className="size-4" />
              <span>{t("bookViaWhatsapp")}</span>
            </button>

            <a
              href={site.phoneHref}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-stone-700 bg-stone-900/70 py-2.5 text-xs font-semibold text-stone-200 hover:border-[#D49B55] hover:text-white transition-all"
            >
              <Phone className="size-3.5 text-[#D49B55]" />
              <span>{t("callToBook")}: {site.phone}</span>
            </a>
          </div>

          <p className="text-[11px] text-center text-stone-500 mt-2">
            ✦ Walk-ins are always welcomed on G.T. Road! Advance booking recommended for weekend dinners & groups.
          </p>
        </form>
      </div>
    </div>
  );
}
