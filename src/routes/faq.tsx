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
    <div className="bg-[#0E0C0A] text-[#FAF5EE]">
      <PageHero
        eyebrow="Visitor Guide"
        title="Frequently Asked Questions"
        intro="Everything you need to know about dining, reservations, highway parking, dietary preferences, and home delivery at Dawat Restaurant."
        bgImage={realSkyLounge}
      />

      <section className="mx-auto max-w-[1100px] px-5 py-16 sm:py-24 lg:px-8">
        {/* Search & Categories */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between pb-8 border-b border-[#D49B55]/20">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {["All", "Dining", "Food", "Delivery", "Events"].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCat(cat)}
                className={`rounded-full px-5 py-1.5 text-xs font-medium transition-all ${
                  activeCat === cat
                    ? "bg-gradient-to-r from-[#D49B55] to-[#E5B869] text-stone-950 font-semibold shadow-md shadow-[#D49B55]/20"
                    : "border border-stone-800 bg-[#14110E] text-stone-300 hover:border-[#D49B55]/40 hover:text-white"
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
              className="w-full rounded-full border border-[#D49B55]/20 bg-[#14110E] pl-9 pr-4 py-2 text-xs text-stone-200 placeholder:text-stone-500 focus:border-[#D49B55] focus:outline-none focus:ring-1 focus:ring-[#D49B55]/30 transition-all"
            />
            <Search className="absolute left-3 top-2.5 size-3.5 text-stone-500" />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-8 divide-y divide-stone-800/80">
          {filteredFaqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={faq.q} className="py-5">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer"
                >
                  <span className="font-display text-base sm:text-lg text-[#FAF5EE] group-hover:text-[#D49B55] transition-colors">
                    {faq.q}
                  </span>
                  <span
                    className={`grid size-7 shrink-0 place-items-center rounded-full border border-stone-800 bg-[#14110E] transition-all duration-300 ${
                      isOpen ? "rotate-180 border-[#D49B55] text-[#D49B55] bg-[#D49B55]/10 shadow-sm shadow-[#D49B55]/20" : "text-stone-400 group-hover:border-stone-700"
                    }`}
                  >
                    <ChevronDown className="size-4" />
                  </span>
                </button>

                {isOpen && (
                  <p className="mt-3 font-sans text-xs sm:text-sm text-stone-300/80 leading-relaxed max-w-3xl animate-in fade-in duration-200">
                    {faq.a}
                  </p>
                )}
              </Reveal>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-16 rounded-3xl border border-[#D49B55]/25 bg-gradient-to-br from-[#1A1613] via-[#14110E] to-[#120F0D] p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="pointer-events-none absolute -right-20 -bottom-20 size-60 rounded-full bg-[#D49B55]/10 blur-3xl" />
          <div className="mx-auto grid size-16 place-items-center rounded-full bg-[#D49B55]/15 text-[#D49B55] border border-[#D49B55]/30">
            <HelpCircle className="size-8" />
          </div>
          <h3 className="mt-4 font-display text-2xl text-[#FAF5EE]">
            Still have a question?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-stone-300 max-w-md mx-auto">
            Our team in Mukerian is always ready to assist you with special requests, custom menus, and directions.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 relative">
            <a
              href={site.phoneHref}
              className="luxury-shimmer inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D49B55] to-[#E5B869] px-6 py-2.5 text-xs sm:text-sm font-semibold text-stone-950 transition-all hover:shadow-lg hover:shadow-[#D49B55]/20"
            >
              <Phone className="size-4" /> Call {site.phone}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#D49B55]/40 px-6 py-2.5 text-xs sm:text-sm font-medium text-[#E5B869] hover:bg-[#D49B55]/10 hover:border-[#D49B55] transition-all"
            >
              Visit Location <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
