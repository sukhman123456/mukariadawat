import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Globe, Navigation, Clock, ShieldCheck } from "lucide-react";

import { site, restaurantJsonLd } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { OrderButton } from "@/components/site/OrderButton";
import { WhatsAppIcon, FacebookIcon } from "@/components/site/SocialIcons";
import mapCard from "@/assets/dawat-map-card.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location — Dawat Restaurant & SKY Lounge, Mukerian" },
      {
        name: "description",
        content:
          "Visit Dawat Restaurant & SKY Lounge on G.T. Road, Opp. P.W.D. Rest House, Mukerian, Punjab. Call 01883-245160 for table reservations, takeaway or directions.",
      },
      { property: "og:title", content: "Contact Dawat Restaurant, Mukerian" },
      {
        property: "og:description",
        content: "Find us on G.T. Road in Mukerian. Call 01883-245160 for dine-in, takeaway or delivery.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(restaurantJsonLd) }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="bg-[#0B0907] text-[#FAF5EE] selection:bg-[#D49B55] selection:text-stone-950 min-h-screen">
      <PageHero
        badge="✦ PRIME HIGHWAY LOCATION"
        eyebrow="Visit & Inquire"
        title="Reach Dawat Restaurant"
        subtitle="Conveniently Situated on G.T. Road Opposite P.W.D. Rest House, Mukerian"
        intro="Whether you are a local family planning a dinner, travellers breaking your journey on the highway, or hosting an event — our team is here to assist you."
        bgImage={mapCard}
      />

      <section className="mx-auto max-w-[1360px] px-5 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 items-start">
          {/* Left: Contact Card */}
          <Reveal>
            <div className="rounded-3xl border border-[#D49B55]/30 bg-gradient-to-b from-[#1C1713] via-[#14110E] to-black p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#D49B55] uppercase block">
                ✦ OFFICIAL ADDRESS & REACH
              </span>
              <h2 className="font-display text-3xl text-white mt-2">{site.name}</h2>
              <p className="font-gurmukhi text-sm text-[#D49B55]/90 mt-1">
                {site.namePunjabi}
              </p>
              <div className="mt-4 h-[1.5px] w-14 bg-gradient-to-r from-[#D49B55] to-transparent" />

              <address className="mt-8 space-y-5 text-sm leading-relaxed text-stone-200 not-italic">
                <p className="flex items-start gap-3">
                  <MapPin className="mt-1 size-4 shrink-0 text-[#D49B55]" aria-hidden="true" />
                  <span>{site.address}</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="size-4 shrink-0 text-[#D49B55]" aria-hidden="true" />
                  <a href={site.phoneHref} className="hover:text-[#D49B55] transition-colors font-medium">
                    {site.phone}
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Clock className="size-4 shrink-0 text-[#D49B55]" aria-hidden="true" />
                  <span>Open Daily: 11:00 AM – 11:30 PM</span>
                </p>
                <p className="flex items-center gap-3">
                  <WhatsAppIcon className="size-4 shrink-0 text-emerald-400" aria-hidden="true" />
                  <a
                    href={site.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors font-medium text-stone-200"
                  >
                    WhatsApp: {site.whatsapp} ↗
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <FacebookIcon className="size-4 shrink-0 text-[#38BDF8]" aria-hidden="true" />
                  <a
                    href={site.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#38BDF8] transition-colors font-medium text-stone-200"
                  >
                    Facebook: {site.facebookHandle} ↗
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Globe className="size-4 shrink-0 text-[#D49B55]" aria-hidden="true" />
                  <span className="text-stone-300">dawatrestaurant.in</span>
                </p>
              </address>

              <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-stone-800 pt-6 text-xs">
                <div className="rounded-xl border border-stone-800/90 bg-stone-900/40 p-3">
                  <dt className="text-[10px] tracking-[0.2em] text-[#D49B55] uppercase font-bold">Services</dt>
                  <dd className="mt-1 text-stone-300">Dine-in · Bar · Takeaway · Delivery</dd>
                </div>
                <div className="rounded-xl border border-stone-800/90 bg-stone-900/40 p-3">
                  <dt className="text-[10px] tracking-[0.2em] text-[#D49B55] uppercase font-bold">Pricing</dt>
                  <dd className="mt-1 text-stone-300">{site.priceRange} / person</dd>
                </div>
              </dl>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D49B55] via-[#E5B869] to-[#C08845] px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-950 shadow-lg shadow-[#D49B55]/20 hover:scale-105 active:scale-95 transition-all"
                >
                  <Phone className="size-4" aria-hidden="true" /> Call Counter
                </a>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-800/60 bg-emerald-950/40 px-6 py-3 text-xs sm:text-sm font-medium tracking-wide text-emerald-300 hover:bg-emerald-950/70 transition-all"
                >
                  <WhatsAppIcon className="size-4 text-emerald-400" /> WhatsApp
                </a>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-800/60 bg-sky-950/40 px-6 py-3 text-xs sm:text-sm font-medium tracking-wide text-sky-300 hover:bg-sky-950/70 transition-all"
                >
                  <FacebookIcon className="size-4 text-sky-400" /> Facebook
                </a>
                <a
                  href={site.directionsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-700 bg-stone-900/80 px-6 py-3 text-xs sm:text-sm font-semibold tracking-wide text-stone-200 hover:border-[#D49B55] hover:text-white transition-all"
                >
                  <Navigation className="size-4 text-[#D49B55]" aria-hidden="true" /> Directions
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right: Embedded Map in Luxury Dark Frame */}
          <Reveal delay={120} className="w-full">
            <div className="rounded-3xl border border-stone-800/90 p-2 sm:p-3.5 bg-gradient-to-b from-[#1C1713] to-black shadow-2xl">
              <div className="overflow-hidden rounded-2xl border border-stone-800/80 bg-stone-950 min-h-[420px]">
                <iframe
                  title="Map showing Dawat Restaurant on G.T. Road, Mukerian"
                  src={site.mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="size-full min-h-[420px] w-full"
                />
              </div>
              <div className="mt-3 flex items-center justify-between px-2 text-xs text-stone-400">
                <span>✦ Opposite P.W.D. Rest House, Mukerian</span>
                <span className="text-[#D49B55]">Free Highway Parking Available</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
