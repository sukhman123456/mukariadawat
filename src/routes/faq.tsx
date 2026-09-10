import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown, Phone, HelpCircle, Search, MessageSquare, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/lib/site";
import realSkyLounge from "@/assets/real/dawat-real-sky-lounge.jpg";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions — Dawat Restaurant Mukerian" },
      {
        name: "description",
        content:
          "Find answers to common questions about Dawat Restaurant Mukerian: opening hours, G.T. Road parking, vegetarian options, home delivery and party bookings.",
      },
    ],
  }),
  component: FAQPage,
});

interface FAQItem {
  q: string;
  a: string;
  category: "Dining" | "Food" | "Delivery" | "Events";
}

const faqs: FAQItem[] = [
  {
    category: "Dining",
    q: "What are Dawat Restaurant's opening hours?",
    a: "We are open 7 days a week from 11:00 AM to 11:30 PM for lunch, evening tea/snacks, and dinner. Both dine-in and takeaway counters remain fully operational throughout the day.",
  },
  {
    category: "Dining",
    q: "Is parking available at Dawat on G.T. Road?",
    a: "Yes! We have spacious, free parking space right outside the restaurant on G.T. Road, opposite the P.W.D. Rest House in Mukerian. There is ample room for personal cars, SUVs, and highway tourist buses.",
  },
  {
    category: "Dining",
    q: "Do I need a prior booking for dining?",
    a: "No prior reservation is required — walk-in guests are always warmly welcomed! For large family gatherings or catering events, feel free to message us on WhatsApp or call our team directly at 01883-245160.",
  },
  {
    category: "Food",
    q: "Is your kitchen suitable for pure vegetarians and Jain diners?",
    a: "Absolutely. We maintain strict hygiene and separate preparation areas for vegetarian cooking. We also prepare Jain meals (without onion and garlic) upon prior request.",
  },
  {
    category: "Food",
    q: "Can spice levels be customized for children or elders?",
    a: "Yes! Every curry and starter is made fresh to order. Please let your server know your preferred spice level (Mild, Medium, or Punjabi Spicy) when placing your order.",
  },
  {
    category: "Food",
    q: "Are the breads made live in a traditional clay tandoor?",
    a: "Yes, every naan, roti, and kulcha is freshly rolled and slapped onto the red-hot terracotta walls of our authentic charcoal clay tandoor just moments before reaching your table.",
  },
  {
    category: "Delivery",
    q: "Do you offer home delivery in Mukerian?",
    a: "Yes, we deliver across Mukerian city, Kishan Pura, and nearby areas within a 10 km radius. Our thermal packaging ensures your gravies and tandoori breads stay steaming hot.",
  },
  {
    category: "Delivery",
    q: "How do I place an order for takeaway or delivery?",
    a: "You can place your order directly by calling our phone counter at 01883-245160 or by using the Order button on our website. Takeaway orders are usually packed within 15–20 minutes.",
  },
  {
    category: "Events",
    q: "Can I host a birthday, anniversary, or kitty party at Dawat?",
    a: "Yes! We have dedicated banquet and private dining areas suitable for 15 to 150+ guests. We provide custom decoration setups, specialized multi-course menus, and attentive service.",
  },
  {
    category: "Events",
    q: "Do you offer live outdoor catering in Mukerian and nearby towns?",
    a: "Yes, our outdoor catering team sets up live tandoors, buffet spreads, and live snack counters for weddings, ring ceremonies, and lawn parties across Mukerian, Dasuya, and Talwara.",
  },
];

function FAQPage() {
  const [activeCat, setActiveCat] = useState<string>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter((item) => {
    const matchesCat = activeCat === "All" || item.category === activeCat;
    const matchesSearch =
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-[#1C1917] text-[#F5EFE6] selection:bg-[#A87545] selection:text-[#F5EFE6]">
      <PageHero
        eyebrow="Visitor Guide"
        title="Frequently Asked Questions"
        intro="Everything you need to know about dining, reservations, highway parking, dietary preferences, and home delivery at Dawat Restaurant."
        bgImage={realSkyLounge}
      />

      {/* Main FAQ - Warm Ivory Contrast Section */}
      <section className="bg-[#F5EFE6] text-[#1C1917] py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-[1100px] px-4 lg:px-8">
          {/* Search & Categories */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between pb-6 sm:pb-8 border-b border-[#A87545]/20">
            {/* Category Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 w-full md:w-auto">
              {["All", "Dining", "Food", "Delivery", "Events"].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCat(cat)}
                  className={`shrink-0 rounded-full px-4 sm:px-5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                    activeCat === cat
                      ? "bg-[#A87545] text-[#F5EFE6] shadow-md shadow-[#A87545]/25 scale-[1.02]"
                      : "border border-[#A87545]/25 bg-[#FAF7F2] text-[#5A4D41] hover:border-[#A87545] hover:text-[#1C1917]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions..."
                className="w-full rounded-full border border-[#A87545]/25 bg-white pl-9 pr-4 py-2 text-xs text-[#1C1917] placeholder:text-[#5A4D41]/60 focus:border-[#A87545] focus:outline-none focus:ring-1 focus:ring-[#A87545]/30 transition-all shadow-sm"
              />
              <Search className="absolute left-3 top-2.5 size-3.5 text-[#A87545]" />
            </div>
          </div>

          {/* FAQ Accordion List - Dark Coffee Cards on Warm Ivory */}
          <div className="mt-8 space-y-4">
            {filteredFaqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <Reveal
                  key={faq.q}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-[#241B16] border-[#A87545] shadow-xl text-[#F5EFE6]"
                      : "bg-[#241B16] border-[#A87545]/20 shadow-md text-[#F5EFE6] hover:border-[#A87545]/50"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between text-left gap-4 p-5 sm:p-6 group cursor-pointer"
                  >
                    <span className="font-display text-base sm:text-lg text-[#F5EFE6] group-hover:text-[#C8A875] transition-colors">
                      {faq.q}
                    </span>
                    <span
                      className={`grid size-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 border-[#A87545] text-[#F5EFE6] bg-[#A87545]"
                          : "border-[#A87545]/30 bg-[#1C1917] text-[#C8A875] group-hover:border-[#A87545]"
                      }`}
                    >
                      <ChevronDown className="size-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 font-sans text-xs sm:text-sm text-[#D8C8B8] leading-relaxed border-t border-[#A87545]/20 pt-4 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>

          {/* Still Have Questions Box - Dark Espresso / Coffee Hero Card */}
          <div className="mt-12 sm:mt-16 rounded-3xl border border-[#A87545]/35 bg-[#241B16] p-5 sm:p-12 text-center shadow-2xl relative overflow-hidden text-[#F5EFE6]">
            <div className="pointer-events-none absolute -right-20 -bottom-20 size-60 rounded-full bg-[#A87545]/10 blur-3xl" />
            <div className="mx-auto grid size-14 sm:size-16 place-items-center rounded-full bg-[#A87545]/20 text-[#C8A875] border border-[#A87545]/40">
              <HelpCircle className="size-7 sm:size-8" />
            </div>
            <h3 className="mt-4 font-display text-xl sm:text-2xl text-[#F5EFE6]">
              Still have a question?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#D8C8B8] max-w-md mx-auto leading-relaxed">
              Our team in Mukerian is always ready to assist you with special requests, custom menus, and directions.
            </p>
            <div className="mt-6 flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 relative">
              <a
                href={site.phoneHref}
                className="w-full xs:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 rounded-full bg-[#A87545] px-6 py-2.5 text-xs sm:text-sm font-semibold text-[#F5EFE6] hover:bg-[#B98350] transition-all hover:shadow-lg hover:shadow-[#A87545]/30"
              >
                <Phone className="size-4" /> Call {site.phone}
              </a>
              <Link
                to="/contact"
                className="w-full xs:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 rounded-full border border-[#A87545]/40 bg-[#1C1917] px-6 py-2.5 text-xs sm:text-sm font-semibold text-[#F5EFE6] hover:border-[#C8A875] hover:text-[#C8A875] transition-all shadow-sm"
              >
                Visit Location <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
