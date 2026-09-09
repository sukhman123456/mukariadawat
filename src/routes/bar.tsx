import { createFileRoute, Link } from "@tanstack/react-router";
import { Wine, Beer, Sparkles, Phone, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { BarLoungeSection } from "@/components/site/BarLoungeSection";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppIcon } from "@/components/site/SocialIcons";
import { site } from "@/lib/site";
import realIndoorLounge from "@/assets/real/dawat-real-indoor-lounge.jpg";

export const Route = createFileRoute("/bar")({
  head: () => ({
    meta: [
      { title: "Bar & SKY Lounge Menu — Dawat Restaurant Mukerian" },
      {
        name: "description",
        content:
          "Official Bar & Lounge menu of Dawat Restaurant Mukerian. Whiskies, scotches, chilled draught beers, bottled lagers and handcrafted mocktails.",
      },
    ],
  }),
  component: BarPage,
});

function BarPage() {
  return (
    <div className="bg-[#0B0907] text-[#FAF5EE]">
      {/* Page Hero */}
      <PageHero
        title="BAR & LOUNGE"
        subtitle="Raise a Glass. Make It Memorable."
        description="Explore the official spirits, imported scotches, chilled draught beers, and handcrafted mocktails served at Dawat's signature SKY Lounge on G.T. Road, Mukerian."
        badge="✦ OFFICIAL DAWAT BAR MENU"
        imageSrc={realIndoorLounge}
      />

      {/* Real Bar Atmosphere Showcase */}
      <section className="py-12 sm:py-16 border-b border-stone-800/60 bg-[#120F0D]">
        <div className="mx-auto max-w-[1360px] px-5 lg:px-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.2fr]">
            <Reveal className="relative overflow-hidden rounded-2xl border border-stone-800 shadow-2xl">
              <img
                src={realIndoorLounge}
                alt="Dawat Restaurant SKY Lounge Bar with neon sign and rustic pendant lamps"
                width={900}
                height={600}
                className="w-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="rounded-full bg-black/80 border border-[#38BDF8]/60 px-3 py-1 text-[11px] font-semibold text-[#38BDF8] backdrop-blur-md">
                  ● Authentic SKY Lounge Bar
                </span>
              </div>
            </Reveal>

            <Reveal delay={100} className="flex flex-col justify-center">
              <span className="text-[11px] font-sans font-semibold tracking-[0.25em] text-[#D49B55] uppercase">
                ROOFTOP EVENING AMBIANCE
              </span>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl text-[#FAF5EE]">
                Dawat SKY Lounge & Bar Counter
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-stone-300/80 leading-relaxed">
                Enjoy a relaxed, high-energy dining and drinks atmosphere on G.T. Road. Our bar counter features chilled draughts on tap, premium domestic and imported spirits, ice-cold bottled lagers, and signature non-alcoholic mocktails.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="#bar-menu"
                  className="luxury-shimmer inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D49B55] to-[#C08845] px-6 py-2.5 text-xs font-semibold text-stone-950 shadow-md"
                >
                  View Bar Menu Below <ArrowRight className="size-3.5" />
                </a>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/40 px-5 py-2.5 text-xs font-medium text-emerald-300 hover:bg-emerald-500/20 transition-all"
                >
                  <WhatsAppIcon size={14} />
                  <span>WhatsApp Inquiries</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Official Interactive Bar Menu Section */}
      <BarLoungeSection id="bar-menu" />
    </div>
  );
}
