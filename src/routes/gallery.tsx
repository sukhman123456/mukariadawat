import { createFileRoute } from "@tanstack/react-router";

import heroSpread from "@/assets/hero-spread.jpg";
import foodCurry from "@/assets/food-curry.jpg";
import foodBreads from "@/assets/food-breads.jpg";
import foodTable from "@/assets/food-table.jpg";
import paneerTikka from "@/assets/dish-paneer-tikka.jpg";
import riceBowl from "@/assets/dish-rice-bowl.jpg";

import realSkyLounge from "@/assets/real/dawat-real-sky-lounge.jpg";
import realIndoorLounge from "@/assets/real/dawat-real-indoor-lounge.jpg";
import realSaagRoti from "@/assets/real/dawat-real-saag-roti.jpg";
import realTableMocktail from "@/assets/real/dawat-real-table-mocktail-feast.jpg";
import realReservedDining from "@/assets/real/dawat-real-reserved-dining.jpg";
import realDiningPerspective from "@/assets/real/dawat-real-dining-perspective.jpg";
import realPartyHall from "@/assets/real/dawat-real-balloons-party-hall.jpg";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Dawat Restaurant & SKY Lounge, Mukerian" },
      {
        name: "description",
        content:
          "Explore photographs of Dawat Restaurant & SKY Lounge on G.T. Road, Mukerian. Real dining spaces, rooftop lounge, family hall and authentic food.",
      },
      { property: "og:title", content: "Gallery — Dawat Restaurant & SKY Lounge" },
      {
        property: "og:description",
        content: "Authentic atmosphere, SKY Lounge bar, celebration hall and North Indian specialties at Dawat Restaurant.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const items = [
  {
    src: realIndoorLounge,
    alt: "Dawat SKY Lounge Bar with neon sign and rustic pendant lamps",
    caption: "✦ SKY Lounge & Bar Counter",
    span: "sm:col-span-2",
  },
  {
    src: realSkyLounge,
    alt: "Rooftop SKY Lounge outdoor exterior view at twilight",
    caption: "Rooftop SKY Lounge at Dusk",
    span: "",
  },
  {
    src: realSaagRoti,
    alt: "Traditional Punjabi Sarson Ka Saag with Makki Di Roti, white butter and pickles",
    caption: "Authentic Punjabi Saag & Makki Roti",
    span: "",
  },
  {
    src: realTableMocktail,
    alt: "Family dining banquet table with artisanal mocktails and starters",
    caption: "Royal Dining Feast & Mocktails",
    span: "sm:col-span-2",
  },
  {
    src: realReservedDining,
    alt: "Reserved VIP dining setup with crisp glassware and warm lighting",
    caption: "Reserved VIP Dining Table",
    span: "",
  },
  {
    src: realDiningPerspective,
    alt: "Spacious air-conditioned dining perspective with timber paneling",
    caption: "Air-Conditioned Dining Hall",
    span: "",
  },
  {
    src: realPartyHall,
    alt: "Grand celebration hall decorated with party balloons for birthdays and anniversaries",
    caption: "Banquet & Celebration Hall",
    span: "sm:col-span-2",
  },
  {
    src: heroSpread,
    alt: "Full North Indian meal with paneer curry, dal, naan, rice and raita",
    caption: "Traditional Feast Spread",
    span: "",
  },
  {
    src: paneerTikka,
    alt: "Paneer tikka skewers on a slate plate with mint chutney",
    caption: "Charcoal Paneer Tikka",
    span: "",
  },
  {
    src: foodCurry,
    alt: "North Indian curry in a black karahi",
    caption: "Slow-Cooked Punjabi Gravies",
    span: "",
  },
];

function Gallery() {
  return (
    <div className="bg-[#0B0907] text-[#FAF5EE]">
      <PageHero
        title="Photo Gallery"
        subtitle="Inside Dawat & The SKY Lounge"
        description="Take a visual tour through our authentic dining halls, the signature SKY Lounge bar, party celebrations, and handcrafted North Indian specialties in Mukerian."
        imageSrc={realIndoorLounge}
      />

      <section className="mx-auto max-w-[1360px] px-5 py-20 lg:px-10 lg:py-28">
        <ul className="grid gap-6 sm:grid-cols-3">
          {items.map((item, i) => (
            <Reveal as="li" key={item.caption + i} delay={(i % 3) * 80} className={item.span}>
              <figure className="group relative overflow-hidden rounded-2xl border border-stone-800 bg-[#14110E] transition-all duration-300 hover:border-[#D49B55]/60 hover:-translate-y-1">
                <div className="overflow-hidden aspect-[16/11]">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-4 flex items-center justify-between border-t border-stone-800/80 bg-[#120F0D]">
                  <span className="font-sans text-xs font-semibold tracking-wider text-stone-200">
                    {item.caption}
                  </span>
                  <span className="text-[10px] text-[#D49B55] uppercase tracking-widest font-mono">Dawat</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </section>
    </div>
  );
}
