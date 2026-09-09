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
    <div className="bg-[#0E0C0A] text-[#FAF5EE]">
      <PageHero
        eyebrow="Our Culinary Heritage"
        title="Chef's Specialties"
        intro="The dishes that define Dawat. Rooted in authentic Punjabi culinary traditions, slow-cooking techniques, and the magic of the clay tandoor."
        bgImage={spicesBanner}
      />

      {/* 3 Pillars */}
      <section className="mx-auto max-w-[1360px] px-5 py-16 sm:py-20 lg:px-12 border-b border-stone-800/60">
        <div className="grid gap-8 md:grid-cols-3">
          <Reveal className="rounded-2xl border border-stone-800 bg-[#14110E] p-7">
            <div className="grid size-12 place-items-center rounded-full bg-[#D49B55]/15 text-[#D49B55]">
              <Flame className="size-6" />
            </div>
            <h3 className="mt-5 font-display text-xl text-[#FAF5EE]">The 400°C Clay Tandoor</h3>
            <p className="mt-2 text-xs sm:text-sm text-stone-400 leading-relaxed">
              Our traditional tandoor is cured daily with mustard oil and spinach water, creating the unmistakable smoky aroma in every naan and roti.
            </p>
          </Reveal>

          <Reveal delay={100} className="rounded-2xl border border-stone-800 bg-[#14110E] p-7">
            <div className="grid size-12 place-items-center rounded-full bg-[#D49B55]/15 text-[#D49B55]">
              <Sparkles className="size-6" />
            </div>
            <h3 className="mt-5 font-display text-xl text-[#FAF5EE]">Slow-Simmered Handis</h3>
            <p className="mt-2 text-xs sm:text-sm text-stone-400 leading-relaxed">
              No shortcuts. Our curries develop their rich depth over hours of gentle simmering in heavy copper vessels, allowing the spices to mature naturally.
            </p>
          </Reveal>

          <Reveal delay={200} className="rounded-2xl border border-stone-800 bg-[#14110E] p-7">
            <div className="grid size-12 place-items-center rounded-full bg-[#D49B55]/15 text-[#D49B55]">
              <Award className="size-6" />
            </div>
            <h3 className="mt-5 font-display text-xl text-[#FAF5EE]">Pure Punjab Dairy & Spices</h3>
            <p className="mt-2 text-xs sm:text-sm text-stone-400 leading-relaxed">
              Fresh paneer sourced daily, pure churned butter, and whole spices ground in-house ensure wholesome and unforgettable flavours.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Signature Dish Spotlights */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1360px] px-5 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="font-sans text-xs font-semibold tracking-[0.25em] text-[#D49B55] uppercase">
              MASTERPIECES FROM OUR KITCHEN
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl text-[#FAF5EE]">
              Dishes You Won't Forget
            </h2>
          </div>

          <div className="space-y-16">
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
                    className={`overflow-hidden rounded-2xl shadow-2xl border border-stone-800 ${
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
                    <p className="font-sans text-xs font-semibold tracking-[0.2em] text-[#D49B55] uppercase">
                      {dish.tag}
                    </p>
                    <h3 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl text-[#FAF5EE]">
                      {dish.name}
                    </h3>
                    <p className="mt-4 font-sans text-sm sm:text-base text-stone-300/85 leading-relaxed">
                      {dish.desc}
                    </p>
                    <div className="mt-6 rounded-xl border border-stone-800 bg-[#14110E] p-4 text-xs text-stone-400">
                      <strong className="text-stone-200">Key Spices & Ingredients:</strong>{" "}
                      {dish.spices}
                    </div>
                    <div className="mt-8 flex items-center gap-4">
                      <Link
                        to="/menu"
                        className="inline-flex items-center gap-2 rounded-full bg-[#D49B55] px-6 py-2.5 text-xs sm:text-sm font-medium text-stone-950 hover:bg-[#C08845] transition-colors"
                      >
                        Order on Menu <ArrowRight className="size-4" />
                      </Link>
                      <a
                        href={site.phoneHref}
                        className="inline-flex items-center gap-2 rounded-full border border-stone-700 px-6 py-2.5 text-xs sm:text-sm font-medium text-stone-300 hover:border-[#D49B55] hover:text-white transition-colors"
                      >
                        <Phone className="size-3.5" /> Call: {site.phone}
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
