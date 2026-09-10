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
    <div className="bg-[#1C1917] text-[#F5EFE6] selection:bg-[#A87545] selection:text-[#F5EFE6]">
      {/* Page Hero */}
      <PageHero
        title="BAR & LOUNGE"
        subtitle="Raise a Glass. Make It Memorable."
        description="Explore the official spirits, imported scotches, chilled draught beers, and handcrafted mocktails served at Dawat's signature SKY Lounge on G.T. Road, Mukerian."
        badge="✦ OFFICIAL DAWAT BAR MENU"
        imageSrc={realIndoorLounge}
      />

      {/* Real Bar Atmosphere Showcase */}
      <section className="py-10 sm:py-16 border-b border-[#A87545]/20 bg-[#241B16]">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.2fr]">
            <Reveal className="relative overflow-hidden rounded-2xl border border-[#A87545]/25 shadow-2xl">
              <img
                src={realIndoorLounge}
                alt="Dawat Restaurant SKY Lounge Bar with neon sign and rustic pendant lamps"
                width={900}
                height={600}
                className="w-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="rounded-full bg-[#1C1917]/90 border border-[#A87545]/40 px-3 py-1 text-[11px] font-semibold text-[#C8A875] backdrop-blur-md">
                  ● Authentic SKY Lounge Bar
                </span>
              </div>
            </Reveal>

            <Reveal delay={100} className="flex flex-col justify-center">
              <span className="text-[11px] font-sans font-semibold tracking-[0.25em] text-[#C8A875] uppercase">
                ROOFTOP EVENING AMBIANCE
              </span>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl text-[#F5EFE6]">
                Dawat SKY Lounge & Bar Counter
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-[#D8C8B8] leading-relaxed">
                Enjoy a relaxed, high-energy dining and drinks atmosphere on G.T. Road. Our bar counter features chilled draughts on tap, premium domestic and imported spirits, ice-cold bottled lagers, and signature non-alcoholic mocktails.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="#bar-menu"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#A87545] px-6 py-3 text-xs font-semibold text-[#F5EFE6] hover:bg-[#B98350] transition-all shadow-md text-center"
                >
                  View Bar Menu Below <ArrowRight className="size-3.5" />
                </a>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/40 px-5 py-3 text-xs sm:text-sm font-medium text-emerald-300 hover:bg-emerald-500/20 transition-all text-center"
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
