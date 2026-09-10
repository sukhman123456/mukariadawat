import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, Sparkles, Award, ArrowRight, HeartHandshake, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/lib/site";

import dishRoti from "@/assets/dish-roti.jpg";
import dishRiceBowl from "@/assets/dish-rice-bowl.jpg";
import dishCurry from "@/assets/food-curry.jpg";
import foodBreads from "@/assets/food-breads.jpg";
import heroFeast from "@/assets/dawat-hero-feast.jpg";
import spicesBanner from "@/assets/dawat-spices-banner.jpg";

export const Route = createFileRoute("/specialties")({
  head: () => ({
    meta: [
      { title: "Chef's Specialties — Dawat Restaurant Mukerian" },
      {
        name: "description",
        content:
          "Discover the signature North Indian dishes at Dawat Restaurant Mukerian. Slow-cooked dal makhani, authentic clay tandoor breads and royal paneer curries.",
      },
    ],
  }),
  component: SpecialtiesPage,
});

const signatureDishes = [
  {
    name: "Dawat Special Roti",
    tag: "Signature Tandoor Bread",
    desc: "Hand-stretched whole wheat dough baked upon the scorching terracotta walls of our clay tandoor. Finished with generous dollops of fresh churned butter for an earthy, blistered perfection.",
    spices: "Fresh Desi Makhan, Roasted Carom Seeds (Ajwain), Kasuri Methi",
    image: dishRoti,
  },
  {
    name: "Paneer Tikka Pineapple Raita Rice Bowl",
    tag: "Chef's Fusion Special",
    desc: "Plump cubes of fresh malai paneer marinated in hung curd and mustard oil, charred over coals and laid on a bed of aromatic cumin basmati rice, paired with cooling chilled pineapple raita.",
    spices: "Yellow Mustard Oil, Degi Mirch, Hand-crushed Cumin, Fresh Mint",
    image: dishRiceBowl,
  },
  {
    name: "Dal Dawat (Handi Simmered 12 Hours)",
    tag: "Slow-Cooked Heritage",
    desc: "Our pride. Whole black lentils and red kidney beans slow-simmered over low embers throughout the night with vine-ripened tomatoes, ginger, and garlic, rounded off with fresh cream and butter.",
    spices: "Smoked Cloves, Black Cardamom, Kashmiri Chillies, Pure Ghee",
    image: dishCurry,
  },
  {
    name: "Garlic Butter Naan & Amritsari Kulcha",
    tag: "From the Clay Oven",
    desc: "Flaky, multi-layered tandoori breads infused with finely crushed roasted garlic and cilantro, or stuffed with spiced potatoes and cottage cheese, served straight from the oven to your table.",
    spices: "Roasted Garlic, Kalonji (Nigella seeds), Fresh Coriander",
    image: foodBreads,
  },
];

function SpecialtiesPage() {
  return (
    <div className="bg-[#1C1917] text-[#F5EFE6] selection:bg-[#A87545] selection:text-[#F5EFE6]">
      <PageHero
        eyebrow="Our Culinary Heritage"
        title="Chef's Specialties"
        intro="The dishes that define Dawat. Rooted in authentic Punjabi culinary traditions, slow-cooking techniques, and the magic of the clay tandoor."
        bgImage={spicesBanner}
      />

      {/* 3 Pillars - Warm Ivory Contrast Section */}
      <section className="bg-[#F5EFE6] text-[#1C1917] py-12 sm:py-16 lg:py-20 border-b border-[#A87545]/15">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-12">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            <Reveal className="rounded-2xl border border-[#A87545]/20 bg-[#FAF7F2] p-5 sm:p-7 shadow-sm">
              <div className="grid size-12 place-items-center rounded-full bg-[#A87545]/15 text-[#A87545]">
                <Flame className="size-6" />
              </div>
              <h3 className="mt-5 font-display text-xl text-[#1C1917]">The 400°C Clay Tandoor</h3>
              <p className="mt-2 text-xs sm:text-sm text-[#5A4D41] leading-relaxed">
                Our traditional tandoor is cured daily with mustard oil and spinach water, creating the unmistakable smoky aroma in every naan and roti.
              </p>
            </Reveal>

            <Reveal delay={100} className="rounded-2xl border border-[#A87545]/20 bg-[#FAF7F2] p-5 sm:p-7 shadow-sm">
              <div className="grid size-12 place-items-center rounded-full bg-[#A87545]/15 text-[#A87545]">
                <Sparkles className="size-6" />
              </div>
              <h3 className="mt-5 font-display text-xl text-[#1C1917]">Slow-Simmered Handis</h3>
              <p className="mt-2 text-xs sm:text-sm text-[#5A4D41] leading-relaxed">
                No shortcuts. Our curries develop their rich depth over hours of gentle simmering in heavy copper vessels, allowing the spices to mature naturally.
              </p>
            </Reveal>

            <Reveal delay={200} className="rounded-2xl border border-[#A87545]/20 bg-[#FAF7F2] p-5 sm:p-7 shadow-sm">
              <div className="grid size-12 place-items-center rounded-full bg-[#A87545]/15 text-[#A87545]">
                <Award className="size-6" />
              </div>
              <h3 className="mt-5 font-display text-xl text-[#1C1917]">Pure Punjab Dairy & Spices</h3>
              <p className="mt-2 text-xs sm:text-sm text-[#5A4D41] leading-relaxed">
                Fresh paneer sourced daily, pure churned butter, and whole spices ground in-house ensure wholesome and unforgettable flavours.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Signature Dish Spotlights - Dark Espresso Background (Rule 5) */}
      <section className="bg-gradient-to-b from-[#1C1917] via-[#241B16] to-[#1C1917] py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
            <p className="font-sans text-xs font-semibold tracking-[0.25em] text-[#C8A875] uppercase">
              MASTERPIECES FROM OUR KITCHEN
            </p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl text-[#F5EFE6]">
              Dishes You Won't Forget
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-16 bg-[#A87545]" />
          </div>

          <div className="space-y-10 sm:space-y-16">
            {signatureDishes.map((dish, i) => {
              const isEven = i % 2 === 1;
              return (
                <Reveal
                  key={dish.name}
                  className={`grid gap-10 items-center lg:grid-cols-2 lg:gap-16 ${
                    isEven ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Dish Image */}
                  <div
                    className={`overflow-hidden rounded-2xl shadow-2xl border border-[#A87545]/30 bg-[#241B16] ${
                      isEven ? "lg:col-start-2" : ""
                    }`}
                  >
                    <img
                      src={dish.image}
                      alt={dish.name}
                      width={900}
                      height={600}
                      loading="lazy"
                      className="size-full aspect-[16/11] object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  {/* Dish Details */}
                  <div className="flex flex-col justify-center">
                    <p className="font-sans text-xs font-semibold tracking-[0.2em] text-[#C8A875] uppercase">
                      {dish.tag}
                    </p>
                    <h3 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl text-[#F5EFE6]">
                      {dish.name}
                    </h3>
                    <p className="mt-4 font-sans text-sm sm:text-base text-[#D8C8B8] leading-relaxed">
                      {dish.desc}
                    </p>
                    <div className="mt-6 rounded-xl border border-[#A87545]/25 bg-[#241B16] p-4 text-xs text-[#D8C8B8]">
                      <strong className="text-[#C8A875]">Key Spices & Ingredients:</strong>{" "}
                      {dish.spices}
                    </div>
                    <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                      <Link
                        to="/menu"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#A87545] px-6 py-3 text-xs sm:text-sm font-semibold text-[#F5EFE6] hover:bg-[#B98350] transition-all shadow-md text-center"
                      >
                        Order on Menu <ArrowRight className="size-4" />
                      </Link>
                      <a
                        href={site.phoneHref}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-[#A87545]/40 bg-[#241B16] px-6 py-3 text-xs sm:text-sm font-semibold text-[#F5EFE6] hover:border-[#C8A875] hover:text-[#C8A875] transition-all text-center shadow-sm"
                      >
                        <Phone className="size-3.5 text-[#C8A875]" /> Call: {site.phone}
                      </a>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
