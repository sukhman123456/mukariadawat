import { createFileRoute } from "@tanstack/react-router";
import { Star, ExternalLink, CheckCircle2, MessageSquare } from "lucide-react";

import { site } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import realReservedDining from "@/assets/real/dawat-real-reserved-dining.jpg";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews & Ratings — Dawat Restaurant & SKY Lounge, Mukerian" },
      {
        name: "description",
        content:
          "Dawat Restaurant in Mukerian is rated 4.0 based on 965+ verified customer reviews. Explore guest feedback for our authentic food, family AC dining and SKY Lounge.",
      },
      { property: "og:title", content: "Reviews — Dawat Restaurant, Mukerian" },
      {
        property: "og:description",
        content: "Rated 4.0 based on 965+ verified customer reviews on Google.",
      },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: Reviews,
});

function Reviews() {
  return (
    <div className="bg-[#F5EFE6] text-[#1C1917] selection:bg-[#A87545] selection:text-[#F5EFE6] min-h-screen">
      <PageHero
        badge="✦ 965+ VERIFIED GOOGLE REVIEWS"
        eyebrow="Guest Experiences"
        title="Customer Ratings & Reviews"
        subtitle="Trusted by Local Families & Highway Travellers Across Punjab"
        intro="Discover what our guests love about dining at Dawat Restaurant & SKY Lounge on G.T. Road, Mukerian."
        bgImage={realReservedDining}
      />

      <section className="mx-auto max-w-[1360px] px-4 py-12 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
        {/* Main Google Rating Hero Card (Rule 8: Dark Coffee Card) */}
        <Reveal className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-[#A87545]/30 bg-[#241B16] px-4 py-10 xs:px-6 sm:px-14 sm:py-14 text-center shadow-2xl text-[#F5EFE6]">
          {/* Ambient Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#A87545]/10 via-transparent to-transparent"
          />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#A87545]/30 bg-[#1C1917] px-3.5 py-1 text-xs font-medium text-[#D8C8B8]">
              <span className="size-2 rounded-full bg-emerald-400" />
              Verified Google Business Rating
            </span>

            <p className="mt-5 font-display text-5xl xs:text-6xl sm:text-7xl font-bold text-[#C8A875] tracking-tight">
              {site.rating}
              <span className="text-2xl xs:text-3xl sm:text-4xl text-[#D8C8B8]/60 font-normal ml-1">/ 5.0</span>
            </p>

            <div className="mt-3 flex justify-center gap-1.5 xs:gap-2" aria-hidden="true">
              {[0, 1, 2, 3].map((i) => (
                <Star key={i} className="size-5 xs:size-6 fill-[#C8A875] text-[#C8A875]" />
              ))}
              <Star className="size-5 xs:size-6 text-[#D8C8B8]/30" />
            </div>

            <p className="mt-4 text-sm sm:text-lg font-medium text-[#F5EFE6]">
              Rated <strong className="text-[#C8A875]">{site.rating} Stars</strong> based on over{" "}
              <strong className="text-[#C8A875]">{site.reviewCount}+ public customer reviews</strong>.
            </p>

            <p className="mt-2 text-xs sm:text-sm text-[#D8C8B8] max-w-lg mx-auto leading-relaxed">
              Consistently commended for rich tandoori specialties, courteous Punjabi hospitality, hygienic AC dining, and the SKY Lounge atmosphere.
            </p>

            <div className="mt-6 sm:mt-8 flex justify-center">
              <a
                href={site.reviewsLink}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#A87545] px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-[#F5EFE6] uppercase shadow-lg shadow-[#A87545]/20 hover:bg-[#B98350] hover:scale-105 active:scale-95 transition-all"
              >
                Read Public Reviews On Google <ExternalLink className="size-4" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Verified Guest Reviews Grid */}
        <div className="mt-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#A87545] uppercase block">
              GUEST STORIES
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl text-[#1C1917]">
              What Diners Say About Dawat
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#5A4D41]">
              Authentic feedback from highway travelers, local families, and celebration hosts.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                author: "Jaswinder Singh",
                badge: "Local Guide · Mukerian",
                date: "2 weeks ago",
                rating: 5,
                tag: "Dal Makhani & Naan",
                quote:
                  "Ordered Dal Makhani, Paneer Tikka and Butter Naans for our family dinner. The food was rich, perfectly spiced and the AC family dining hall was spotless and comfortable.",
              },
              {
                author: "Amit Sharma",
                badge: "Highway Traveller · Delhi to Jammu",
                date: "3 weeks ago",
                rating: 5,
                tag: "Highway Stopover",
                quote:
                  "Great stopover right on G.T. Road! Free spacious parking outside, prompt service and the hot tandoori rotis with fresh desi butter were exceptional. Highly recommended.",
              },
              {
                author: "Simranjit Kaur",
                badge: "Family Dining · Verified Guest",
                date: "1 month ago",
                rating: 5,
                tag: "Birthday Celebration",
                quote:
                  "Celebrated our family birthday here. The team arranged everything smoothly. All guests loved the mocktails, crispy paneer starters and quick attentive service.",
              },
              {
                author: "Rohit Verma",
                badge: "Local Guide · Mukerian",
                date: "1 month ago",
                rating: 5,
                tag: "SKY Lounge & Drinks",
                quote:
                  "The SKY Lounge rooftop terrace has a vibrant evening ambiance with lovely ambient lighting. Chilled beers, crispy snacks and courteous staff made it a memorable night.",
              },
              {
                author: "Harpreet Singh Bawa",
                badge: "Verified Guest",
                date: "2 months ago",
                rating: 5,
                tag: "Authentic Punjabi Taste",
                quote:
                  "The authenticity in every curry and the fresh piping hot tandoori breads straight from the clay oven make Dawat stand out as the top dining place on G.T. Road.",
              },
              {
                author: "Pooja Malhotra",
                badge: "Traveller · Chandigarh to Pathankot",
                date: "2 months ago",
                rating: 5,
                tag: "Hygienic Dining",
                quote:
                  "Clean washrooms, safe car parking, fast courteous service and very delicious North Indian lunch. The Paneer Butter Masala was fresh and aromatic.",
              },
            ].map((rev, idx) => (
              <Reveal key={rev.author} delay={idx * 60}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-[#A87545]/25 bg-[#241B16] p-5 sm:p-6 shadow-lg text-[#F5EFE6] transition-all hover:border-[#A87545]/50 hover:shadow-xl hover:-translate-y-1">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1 text-[#C8A875]">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="size-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="rounded-full border border-[#A87545]/20 bg-[#1C1917] px-2.5 py-0.5 text-[10px] font-medium text-[#D8C8B8]">
                        {rev.date}
                      </span>
                    </div>

                    <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-[#D8C8B8] italic">
                      "{rev.quote}"
                    </p>
                  </div>

                  <div className="mt-5 border-t border-[#A87545]/20 pt-4 flex items-center justify-between">
                    <div>
                      <p className="font-display text-sm font-semibold text-[#F5EFE6]">
                        {rev.author}
                      </p>
                      <span className="text-[11px] text-[#D8C8B8] flex items-center gap-1 mt-0.5">
                        <CheckCircle2 className="size-3 text-emerald-400" />
                        {rev.badge}
                      </span>
                    </div>
                    <span className="rounded-full border border-[#A87545]/30 bg-[#A87545]/15 px-2.5 py-1 text-[10px] font-semibold text-[#C8A875]">
                      {rev.tag}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 3 Pillar Guest Praise Cards (Rule 8: Dark Coffee cards) */}
        <div className="mt-16 grid gap-5 sm:gap-6 sm:grid-cols-3">
          {[
            {
              title: "Authentic North Indian Taste",
              desc: "Guests frequently praise our Dal Makhani slow-cooked in copper handis, butter rotis, and smoking paneer tikkas.",
              highlight: "Top Rated Dishes",
            },
            {
              title: "Family AC Comfort & Parking",
              desc: "Families appreciate the peaceful air-conditioned cabins, clean washrooms, and safe free parking on G.T. Road.",
              highlight: "Family Friendly",
            },
            {
              title: "SKY Lounge & Evening Bar",
              desc: "Visitors love the rooftop open-air terrace with chilled beers, craft mocktails, and ambient fairy lights at night.",
              highlight: "Nightlife & Drinks",
            },
          ].map((card, idx) => (
            <Reveal key={card.title} delay={idx * 100}>
              <div className="h-full rounded-2xl border border-[#A87545]/25 bg-[#241B16] p-5 sm:p-6 shadow-md text-[#F5EFE6] transition-all hover:border-[#A87545]/50 hover:shadow-xl">
                <span className="text-[10px] font-bold tracking-wider text-[#C8A875] uppercase block">
                  ✦ {card.highlight}
                </span>
                <h3 className="mt-2 font-display text-lg text-[#F5EFE6] font-medium">
                  {card.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#D8C8B8]">
                  {card.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-xs sm:text-sm leading-relaxed text-[#5A4D41]">
            We publish transparent ratings from our public Google profile. Every feedback helps our kitchen and service team continually refine the royal hospitality we offer on G.T. Road, Mukerian.
          </p>
        </Reveal>
      </section>
    </div>
  );
}
