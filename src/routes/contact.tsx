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
    <div className="bg-[#1C1917] text-[#F5EFE6] selection:bg-[#A87545] selection:text-[#F5EFE6] min-h-screen">
      <PageHero
        badge="✦ PRIME HIGHWAY LOCATION"
        eyebrow="Visit & Inquire"
        title="Reach Dawat Restaurant"
        subtitle="Conveniently Situated on G.T. Road Opposite P.W.D. Rest House, Mukerian"
        intro="Whether you are a local family planning a dinner, travellers breaking your journey on the highway, or hosting an event — our team is here to assist you."
        bgImage={mapCard}
      />

      <section className="mx-auto max-w-[1360px] px-4 py-12 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 items-start">
          {/* Left: Contact Card (Dark Coffee Card) */}
          <Reveal>
            <div className="rounded-3xl border border-[#A87545]/30 bg-[#241B16] p-5 xs:p-7 sm:p-10 shadow-2xl backdrop-blur-xl text-[#F5EFE6]">
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] sm:tracking-[0.25em] text-[#C8A875] uppercase block">
                ✦ OFFICIAL ADDRESS & REACH
              </span>
              <h2 className="font-display text-2xl sm:text-3xl text-[#F5EFE6] mt-2">{site.name}</h2>
              <p className="font-gurmukhi text-sm text-[#C8A875] mt-1">
                {site.namePunjabi}
              </p>
              <div className="mt-4 h-[1.5px] w-14 bg-gradient-to-r from-[#A87545] to-transparent" />

              <address className="mt-6 sm:mt-8 space-y-4 sm:space-y-5 text-xs sm:text-sm leading-relaxed text-[#D8C8B8] not-italic">
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-[#C8A875]" aria-hidden="true" />
                  <span>{site.address}</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="size-4 shrink-0 text-[#C8A875]" aria-hidden="true" />
                  <a href={site.phoneHref} className="hover:text-[#C8A875] text-[#F5EFE6] transition-colors font-medium">
                    {site.phone}
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Clock className="size-4 shrink-0 text-[#C8A875]" aria-hidden="true" />
                  <span className="text-[#D8C8B8]">Open Daily: 11:00 AM – 11:30 PM</span>
                </p>
                <p className="flex items-center gap-3">
                  <WhatsAppIcon className="size-4 shrink-0 text-emerald-400" aria-hidden="true" />
                  <a
                    href={site.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-300 transition-colors font-medium text-[#D8C8B8] truncate"
                  >
                    WhatsApp: {site.whatsapp} ↗
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <FacebookIcon className="size-4 shrink-0 text-sky-400" aria-hidden="true" />
                  <a
                    href={site.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sky-300 transition-colors font-medium text-[#D8C8B8] truncate"
                  >
                    Facebook: {site.facebookHandle} ↗
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Globe className="size-4 shrink-0 text-[#C8A875]" aria-hidden="true" />
                  <span className="text-[#D8C8B8]">dawatrestaurant.in</span>
                </p>
              </address>

              <dl className="mt-6 sm:mt-8 grid grid-cols-1 xs:grid-cols-2 gap-3 border-t border-[#A87545]/20 pt-5 sm:pt-6 text-xs">
                <div className="rounded-xl border border-[#A87545]/20 bg-[#1C1917] p-3">
                  <dt className="text-[10px] tracking-[0.2em] text-[#C8A875] uppercase font-bold">Services</dt>
                  <dd className="mt-1 text-[#D8C8B8]">Dine-in · Bar · Takeaway · Delivery</dd>
                </div>
                <div className="rounded-xl border border-[#A87545]/20 bg-[#1C1917] p-3">
                  <dt className="text-[10px] tracking-[0.2em] text-[#C8A875] uppercase font-bold">Pricing</dt>
                  <dd className="mt-1 text-[#D8C8B8]">{site.priceRange} / person</dd>
                </div>
              </dl>

              {/* Action Buttons - 2 Column Mobile Grid */}
              <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap">
                <a
                  href={site.phoneHref}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#A87545] px-4 sm:px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F5EFE6] hover:bg-[#B98350] shadow-md shadow-[#A87545]/20 hover:scale-105 active:scale-95 transition-all text-center"
                >
                  <Phone className="size-3.5 sm:size-4" aria-hidden="true" /> <span>Call</span>
                </a>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/40 px-4 sm:px-6 py-3 text-xs sm:text-sm font-medium tracking-wide text-emerald-300 hover:bg-emerald-500/20 transition-all text-center"
                >
                  <WhatsAppIcon className="size-3.5 sm:size-4 text-emerald-400" /> <span>WhatsApp</span>
                </a>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-sky-500/40 bg-sky-950/40 px-4 sm:px-6 py-3 text-xs sm:text-sm font-medium tracking-wide text-sky-300 hover:bg-sky-500/20 transition-all text-center"
                >
                  <FacebookIcon className="size-3.5 sm:size-4 text-sky-400" /> <span>Facebook</span>
                </a>
                <a
                  href={site.directionsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#A87545]/30 bg-[#1C1917] px-4 sm:px-6 py-3 text-xs sm:text-sm font-semibold tracking-wide text-[#F5EFE6] hover:border-[#C8A875] hover:text-[#C8A875] transition-all text-center shadow-sm"
                >
                  <Navigation className="size-3.5 sm:size-4 text-[#C8A875]" aria-hidden="true" /> <span>Directions</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right: Embedded Map in Luxury Frame */}
          <Reveal delay={120} className="w-full">
            <div className="rounded-3xl border border-[#A87545]/30 p-2 sm:p-3.5 bg-[#241B16] shadow-2xl">
              <div className="overflow-hidden rounded-2xl border border-[#A87545]/20 bg-[#1C1917] min-h-[280px] sm:min-h-[420px]">
                <iframe
                  title="Map showing Dawat Restaurant on G.T. Road, Mukerian"
                  src={site.mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="size-full min-h-[280px] sm:min-h-[420px] w-full border-0"
                />
              </div>
              <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 px-2 text-xs text-[#D8C8B8]">
                <span>✦ Opposite P.W.D. Rest House, Mukerian</span>
                <span className="text-[#C8A875] font-medium">Free Highway Parking Available</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
