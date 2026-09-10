import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, ArrowRight, ShieldCheck, Sparkles, Utensils, Wine } from "lucide-react";

import foodTable from "@/assets/food-table.jpg";
import foodBreads from "@/assets/food-breads.jpg";
import aboutHall from "@/assets/dawat-about-hall.jpg";
import { site } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { OrderButton } from "@/components/site/OrderButton";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dawat Restaurant — North Indian Restaurant in Mukerian" },
      {
        name: "description",
        content:
          "About Dawat Restaurant & SKY Lounge, a royal North Indian restaurant on G.T. Road in Mukerian, Punjab, offering family dining, takeaway, delivery and bar.",
      },
      { property: "og:title", content: "About Dawat Restaurant & SKY Lounge, Mukerian" },
      {
        property: "og:description",
        content:
          "A North Indian restaurant in Mukerian serving dine-in, takeaway and delivery on G.T. Road.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div className="bg-[#F5EFE6] text-[#1C1917] selection:bg-[#A87545] selection:text-[#F5EFE6] min-h-screen">
      <PageHero
        badge="✦ TRADITION & HOSPITALITY"
        eyebrow="About Us"
        title="Good Food. Warm Hospitality."
        subtitle="Serving Authentic North Indian Flavours on G.T. Road, Mukerian"
        intro="Dawat Restaurant is a premier North Indian culinary landmark in Mukerian, Punjab, welcoming families, travellers, and locals for grand feasts, celebrations, and relaxing evenings at our SKY Lounge."
        bgImage={aboutHall}
      />

      {/* Main Philosophy Section (Warm Ivory with Dark Typography per Rule 6) */}
      <section className="mx-auto max-w-[1360px] px-4 sm:px-6 py-12 sm:py-16 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <Reveal className="space-y-6 text-base leading-relaxed text-[#5A4D41]">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#A87545] uppercase block">
              OUR HERITAGE & PASSION
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1C1917] leading-tight">
              Where Every Meal Becomes a{" "}
              <span className="text-[#A87545]">
                Celebration.
              </span>
            </h2>
            <p>
              <span className="font-display font-semibold text-[#A87545]">Dawat</span> (ਦਾਵਤ) means a royal feast shared with
              people you cherish, and that spirit is at the core of everything we do. From bubbling copper handis of Dal Bukhara to tender Paneer Tikka sizzling fresh from our red-hot clay tandoor, our kitchen honours authentic North Indian culinary recipes.
            </p>
            <p>
              You will find us centrally situated on <strong>G.T. Road in Kishan Pura</strong>, directly opposite the P.W.D. Rest House. With generous free highway parking, we are a favourite dining stop for Mukerian families as well as travellers journeying through Punjab.
            </p>
            <p className="text-[#5A4D41]/90">
              A lavish full meal usually averages around <strong className="text-[#A87545]">{site.priceRange}</strong> per person. Whether you dine in our air-conditioned family hall, relax at the rooftop SKY Lounge, or order takeaway for home — every dish is crafted with equal dedication.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4">
              <OrderButton variant="gold" />
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#A87545]/40 bg-white px-7 py-3 text-xs sm:text-sm font-semibold tracking-wider text-[#1C1917] hover:border-[#A87545] hover:text-[#A87545] transition-all shadow-sm text-center"
              >
                View Full Menu <ArrowRight className="size-4 text-[#A87545]" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative rounded-3xl border border-[#A87545]/20 p-2 sm:p-3 bg-white shadow-xl">
              <img
                src={foodTable}
                alt="North Indian dishes laid out on a restaurant table at Dawat"
                width={1200}
                height={912}
                loading="lazy"
                className="w-full rounded-2xl object-cover lg:aspect-[4/5]"
              />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 rounded-xl border border-[#A87545]/25 bg-white/95 p-3 sm:p-4 backdrop-blur-md shadow-lg">
                <p className="text-xs font-semibold text-[#A87545]">✦ Authentic Handcrafted Dishes</p>
                <p className="text-[11px] text-[#5A4D41] mt-0.5">Copper handi gravies & clay tandoori flatbreads</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services & Hospitality Section (Alternating Dark Coffee Section) */}
      <section className="border-y border-[#A87545]/20 bg-[#241B16] py-12 sm:py-16 lg:py-28 text-[#F5EFE6]">
        <div className="mx-auto grid max-w-[1360px] gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20 lg:px-10">
          <Reveal>
            <div className="relative rounded-3xl border border-[#A87545]/25 p-2 sm:p-3 bg-[#1C1917] shadow-2xl">
              <img
                src={foodBreads}
                alt="Buttered Indian breads stacked on a brass plate at Dawat"
                width={1200}
                height={900}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 rounded-xl border border-[#A87545]/30 bg-[#241B16]/95 p-3 sm:p-3.5 backdrop-blur-md shadow-lg">
                <p className="text-xs font-semibold text-[#C8A875]">Clay Tandoori Specialties</p>
                <p className="text-[10px] text-[#D8C8B8] mt-0.5">Hot butter naans, lachha parathas & rotis</p>
              </div>
            </div>
          </Reveal>

          <div>
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#C8A875] uppercase block">
              WHAT WE OFFER
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl text-[#F5EFE6]">
              Dine-in, Takeaway & Royal Bar Lounge
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#D8C8B8] leading-relaxed">
              Sit down for a lavish family meal, enjoy craft beverages at the SKY Lounge, collect freshly packed takeaway, or order home delivery.
            </p>
            <address className="mt-8 space-y-4 text-sm leading-relaxed text-[#D8C8B8] not-italic">
              <p className="flex items-start gap-3">
                <MapPin className="mt-1 size-4 shrink-0 text-[#C8A875]" aria-hidden="true" />
                <span>{site.address}</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-[#C8A875]" aria-hidden="true" />
                <a href={site.phoneHref} className="hover:text-[#C8A875] text-[#F5EFE6] transition-colors">
                  {site.phone}
                </a>
              </p>
            </address>

            <div className="mt-8 grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 border-t border-[#A87545]/20 pt-6 text-xs">
              <div className="rounded-xl border border-[#A87545]/20 bg-[#1C1917] p-3.5 shadow-sm">
                <span className="text-[10px] font-bold text-[#C8A875] uppercase tracking-wider block">TIMINGS</span>
                <span className="text-[#D8C8B8] mt-1 block">Open Daily: 11:00 AM – 11:30 PM</span>
              </div>
              <div className="rounded-xl border border-[#A87545]/20 bg-[#1C1917] p-3.5 shadow-sm">
                <span className="text-[10px] font-bold text-[#C8A875] uppercase tracking-wider block">SERVICES</span>
                <span className="text-[#D8C8B8] mt-1 block">AC Hall · Bar · Takeaway · Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
