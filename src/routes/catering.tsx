import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  PartyPopper,
  Sparkles,
  Check,
  Phone,
  ArrowRight,
  Send,
  CheckCircle2,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/lib/site";
import heroFeast from "@/assets/dawat-hero-feast.jpg";
import realPartyHall from "@/assets/real/dawat-real-balloons-party-hall.jpg";

export const Route = createFileRoute("/catering")({
  head: () => ({
    meta: [
      { title: "Catering & Banquet Hall — Dawat Restaurant Mukerian" },
      {
        name: "description",
        content:
          "Outdoor live tandoor catering and private banquet hall bookings in Mukerian, Punjab. Birthday parties, anniversaries, kitty parties and family events.",
      },
    ],
  }),
  component: CateringPage,
});

const packages = [
  {
    name: "Silver Dawat",
    price: "₹350",
    unit: "per guest",
    desc: "Perfect for casual family gatherings, small kitty parties and intimate luncheons.",
    features: [
      "2 Welcome Refreshing Drinks",
      "2 Hot Starters (Paneer Tikka, Crispy Veg)",
      "2 Main Course Curries (Shahi Paneer, Mix Veg)",
      "Signature Dal Makhani slow-cooked in handi",
      "Fresh Tandoori Roti & Butter Naan",
      "Jeera Basmati Rice & Boondi Raita",
      "Hot Gulab Jamun with Elaichi",
    ],
    highlight: false,
  },
  {
    name: "Royal Gold Feast",
    price: "₹550",
    unit: "per guest",
    desc: "Our most sought-after banquet package for birthdays, ring ceremonies and anniversaries.",
    features: [
      "3 Welcome Mocktails & Shakes",
      "4 Signature Starters (Malai Tikka, Chaap, Hara Bhara, Corn)",
      "3 Premium Main Curries (Kadhai Paneer, Dal Makhani, Kofta)",
      "Dum Hyderabadi Veg Biryani with Burani Raita",
      "Tandoor Bread Basket (Lachha Paratha, Garlic Naan, Butter Roti)",
      "Green Salad Bar & Assorted Chutneys",
      "2 Gourmet Desserts (Rasmalai / Hot Gulab Jamun + Ice Cream)",
    ],
    highlight: true,
  },
  {
    name: "Grand Imperial Live",
    price: "₹750",
    unit: "per guest",
    desc: "Full-service VIP experience with live tandoor chefs and live chaat counters at your venue.",
    features: [
      "Live Tandoor Counter (piping hot breads straight from clay oven)",
      "Live Delhi-style Street Chaat & Golgappa counter",
      "5 Signature Starters cooked fresh live on skewers",
      "4 Royal Mughlai & Punjabi Gravies",
      "Dal Bukhara slow-simmered for 12 hours",
      "Subz Biryani, Dahi Bhalla & Pomegranate Raita",
      "3 Festive Desserts + Fresh Fruit counter & Espresso Coffee",
    ],
    highlight: false,
  },
];

function CateringPage() {
  const [guestsCount, setGuestsCount] = useState(75);
  const [selectedPkg, setSelectedPkg] = useState("Royal Gold Feast");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [eventType, setEventType] = useState("Birthday Celebration");
  const [submitted, setSubmitted] = useState(false);

  const pricePerGuest =
    selectedPkg === "Silver Dawat" ? 350 : selectedPkg === "Royal Gold Feast" ? 550 : 750;
  const estimatedTotal = guestsCount * pricePerGuest;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0E0C0A] text-[#FAF5EE]">
      <PageHero
        eyebrow="Banquets & Outdoor Catering"
        title="Celebrate with Dawat"
        intro="From intimate kitty parties and family milestones to grand celebrations, bring the authentic rich flavours of Dawat to your special day in Mukerian."
        bgImage={heroFeast}
      />

      {/* Intro Overview */}
      <section className="mx-auto max-w-[1360px] px-5 py-16 lg:px-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <Reveal>
            <p className="font-sans text-xs font-semibold tracking-[0.25em] text-[#D49B55] uppercase">
              HOSPITALITY FOR EVERY OCCASION
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-normal leading-tight text-[#FAF5EE]">
              Unforgettable Food for
              <br />
              Unforgettable Memories.
            </h2>
            <p className="mt-6 font-sans text-sm sm:text-base leading-relaxed text-stone-300/80">
              Whether you are hosting a gathering in our private banquet space on G.T. Road or
              need full outdoor catering at your home or lawn in Mukerian, Dasuya or Talwara, Dawat
              delivers seamless culinary excellence.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-stone-800 pt-6">
              <div>
                <p className="font-display text-2xl text-[#D49B55]">150+ Guests</p>
                <p className="text-xs text-stone-400 mt-1">Indoor AC Banquet Hall</p>
              </div>
              <div>
                <p className="font-display text-2xl text-[#D49B55]">Live Tandoor</p>
                <p className="text-xs text-stone-400 mt-1">On-Site Clay Oven Setup</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="overflow-hidden rounded-3xl shadow-2xl border border-[#D49B55]/30">
            <img
              src={realPartyHall}
              alt="Dawat Banquet Hall and decorated dining celebration setup"
              width={1200}
              height={800}
              loading="lazy"
              className="size-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </Reveal>
        </div>
      </section>

      {/* Catering Packages Grid */}
      <section className="bg-[#120F0D] py-20 lg:py-28 border-y border-stone-800/50">
        <div className="mx-auto max-w-[1360px] px-5 lg:px-12">
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-sans text-xs font-semibold tracking-[0.25em] text-[#D49B55] uppercase">
              CURATED MENUS
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl text-[#FAF5EE]">
              Event & Catering Packages
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-stone-400">
              Each package includes fine chinaware, dedicated service staff, and custom spice level options.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3 items-stretch">
            {packages.map((pkg, i) => (
              <Reveal
                key={pkg.name}
                delay={i * 100}
                className={`flex flex-col justify-between rounded-2xl p-7 sm:p-8 transition-all duration-300 relative ${
                  pkg.highlight
                    ? "bg-[#1A1612] border-2 border-[#D49B55] shadow-2xl shadow-[#D49B55]/10 -translate-y-2"
                    : "bg-[#14110E] border border-stone-800 hover:border-stone-700"
                }`}
              >
                {pkg.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#D49B55] px-4 py-1 text-[10px] font-semibold uppercase tracking-wider text-stone-950">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className="font-display text-2xl text-[#FAF5EE]">{pkg.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-display text-3xl sm:text-4xl font-semibold text-[#D49B55]">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-stone-400">/{pkg.unit}</span>
                  </div>
                  <p className="mt-3 text-xs text-stone-400 leading-relaxed">{pkg.desc}</p>

                  <div className="mt-6 border-t border-stone-800 pt-6">
                    <p className="text-[11px] font-semibold text-stone-300 uppercase tracking-wider mb-3">
                      Package Inclusions:
                    </p>
                    <ul className="space-y-2.5 text-xs text-stone-300/85">
                      {pkg.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5">
                          <Check className="size-3.5 text-[#D49B55] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedPkg(pkg.name);
                    const calcEl = document.getElementById("quote-calculator");
                    calcEl?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`mt-8 w-full rounded-full py-3 text-xs font-medium uppercase tracking-wider transition-colors ${
                    pkg.highlight
                      ? "bg-[#D49B55] text-stone-950 hover:bg-[#C08845]"
                      : "border border-stone-700 text-stone-200 hover:border-[#D49B55] hover:text-white"
                  }`}
                >
                  Select Package
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Quote Calculator & Inquiry Form */}
      <section id="quote-calculator" className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1360px] px-5 lg:px-12">
          <div className="rounded-2xl border border-stone-800 bg-[#14110E] p-6 sm:p-12 shadow-2xl">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
              {/* Left: Interactive Calculator */}
              <div>
                <p className="font-sans text-xs font-semibold tracking-[0.25em] text-[#D49B55] uppercase">
                  INSTANT ESTIMATOR
                </p>
                <h3 className="mt-2 font-display text-2xl sm:text-3xl text-[#FAF5EE]">
                  Calculate Your Catering Budget
                </h3>
                <p className="mt-2 text-xs text-stone-400">
                  Select your anticipated guest count and chosen tier to see live approximate pricing.
                </p>

                {/* Guest Slider */}
                <div className="mt-8 space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-stone-300 font-medium">Expected Guests:</span>
                    <span className="font-display text-xl text-[#D49B55] font-semibold">
                      {guestsCount} People
                    </span>
                  </div>
                  <input
                    type="range"
                    min={25}
                    max={500}
                    step={5}
                    value={guestsCount}
                    onChange={(e) => setGuestsCount(Number(e.target.value))}
                    className="w-full accent-[#D49B55] bg-stone-800 h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-500">
                    <span>25 Guests (Intimate)</span>
                    <span>250 Guests</span>
                    <span>500+ Guests (Grand)</span>
                  </div>
                </div>

                {/* Tier Picker */}
                <div className="mt-6">
                  <label className="block text-xs font-medium text-stone-300 mb-2">
                    Selected Menu Tier:
                  </label>
                  <div className="grid grid-cols-1 xs:grid-cols-3 gap-2">
                    {["Silver Dawat", "Royal Gold Feast", "Grand Imperial Live"].map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setSelectedPkg(p)}
                        className={`rounded-xl p-3 text-left border text-xs transition-all ${
                          selectedPkg === p
                            ? "border-[#D49B55] bg-[#D49B55]/10 text-white font-medium"
                            : "border-stone-800 bg-stone-900/60 text-stone-400 hover:border-stone-700"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Estimate Box */}
                <div className="mt-8 rounded-xl border border-stone-800 bg-[#0E0C0A] p-4 sm:p-6">
                  <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center gap-2">
                    <div>
                      <p className="text-xs text-stone-400">Estimated Total:</p>
                      <p className="font-display text-2xl sm:text-3xl font-semibold text-[#D49B55] mt-1">
                        ₹{estimatedTotal.toLocaleString("en-IN")}
                      </p>
                    </div>
                    <div className="text-left xs:text-right text-xs text-stone-400">
                      <p>{guestsCount} guests × ₹{pricePerGuest}</p>
                      <p className="text-[10px] text-stone-500 mt-0.5">Taxes & service included</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Booking / Inquiry Form */}
              <div>
                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 bg-[#0E0C0A] rounded-xl border border-stone-800">
                    <CheckCircle2 className="size-12 text-[#D49B55]" />
                    <h4 className="mt-4 font-display text-2xl text-[#FAF5EE]">
                      Inquiry Received!
                    </h4>
                    <p className="mt-2 text-xs text-stone-300 max-w-sm leading-relaxed">
                      Thank you, {name}. Our event manager will call you within 2 hours at{" "}
                      <strong>{phone}</strong> to confirm date availability and sample menu tastings.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-6 rounded-full border border-stone-700 px-5 py-2 text-xs text-stone-300 hover:border-[#D49B55]"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h4 className="font-display text-xl text-[#FAF5EE]">
                      Reserve Your Date or Request Menu Tasting
                    </h4>

                    <div>
                      <label className="block text-xs text-stone-300 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Gurpreet Singh"
                        className="w-full rounded-xl border border-stone-700 bg-stone-900/80 px-4 py-2.5 text-sm text-stone-200 placeholder:text-stone-600 focus:border-[#D49B55] focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-xs text-stone-300 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 98123 45678"
                          className="w-full rounded-xl border border-stone-700 bg-stone-900/80 px-4 py-2.5 text-sm text-stone-200 placeholder:text-stone-600 focus:border-[#D49B55] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-stone-300 mb-1">Event Date</label>
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full rounded-xl border border-stone-700 bg-stone-900/80 px-4 py-2.5 text-sm text-stone-200 focus:border-[#D49B55] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-stone-300 mb-1">Event Type</label>
                      <select
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        className="w-full rounded-xl border border-stone-700 bg-stone-900/80 px-4 py-2.5 text-sm text-stone-200 focus:border-[#D49B55] focus:outline-none"
                      >
                        <option value="Birthday Celebration">Birthday Celebration</option>
                        <option value="Ring Ceremony / Roka">Ring Ceremony / Roka</option>
                        <option value="Kitty Party">Kitty Party</option>
                        <option value="Anniversary Dinner">Anniversary Dinner</option>
                        <option value="Outdoor Lawn Catering">Outdoor Lawn Catering</option>
                        <option value="Corporate Gathering">Corporate Gathering</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-4 flex items-center justify-center gap-2 rounded-full bg-[#D49B55] py-3 text-xs sm:text-sm font-medium tracking-wide text-stone-950 transition-all hover:bg-[#C08845]"
                    >
                      <Send className="size-4" /> Send Catering Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
