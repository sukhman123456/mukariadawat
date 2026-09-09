import { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone,
  Search,
  Sparkles,
  ArrowRight,
  X,
  Info,
  CheckCircle2,
  Clock,
  CupSoda,
  Wine,
  Flame,
  UtensilsCrossed,
} from "lucide-react";

import { site } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { WhatsAppIcon } from "@/components/site/SocialIcons";
import { BarLoungeSection } from "@/components/site/BarLoungeSection";
import heroFeast from "@/assets/dawat-hero-feast.jpg";

// High quality food assets
import dishRoti from "@/assets/dish-roti.jpg";
import dishRiceBowl from "@/assets/dish-rice-bowl.jpg";
import dishPaneerTikka from "@/assets/dish-paneer-tikka.jpg";
import dishRaita from "@/assets/dish-raita.jpg";
import foodCurry from "@/assets/food-curry.jpg";
import foodBreads from "@/assets/food-breads.jpg";
import foodTable from "@/assets/food-table.jpg";
import dawatTandooriChicken from "@/assets/dawat-tandoori-chicken.jpg";
import dawatDrinksLassi from "@/assets/dawat-drinks-lassi.jpg";
import dawatMuttonCurry from "@/assets/dawat-mutton-curry.jpg";
import dawatFishTikka from "@/assets/dawat-fish-tikka.jpg";
import dawatGulabJamun from "@/assets/dawat-gulab-jamun.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Complete Dining & Bar Menu — Dawat Restaurant Mukerian" },
      {
        name: "description",
        content:
          "Official dining menu of Dawat Restaurant Mukerian. Vegetarian, Non-Vegetarian, Drinks, and complete SKY Lounge Bar with 26 authentic drinks on G.T. Road.",
      },
    ],
  }),
  component: PremiumMenuPage,
});

interface DetailedFoodItem {
  id: string;
  name: string;
  category: "VEGETARIAN" | "NON_VEGETARIAN" | "DRINKS";
  subCategory: string;
  price: string;
  priceHalf?: number;
  priceFull?: number;
  image: string;
  description: string;
  isSpecial?: boolean;
  isSpicy?: boolean;
  isVeg: boolean;
}

const detailedMenuItems: DetailedFoodItem[] = [
  // ========================================================
  // 01 — VEGETARIAN DISHES
  // ========================================================
  {
    id: "veg-1",
    name: "Dawat Special Roti",
    category: "VEGETARIAN",
    subCategory: "Indian Breads",
    price: "₹60",
    image: dishRoti,
    description:
      "Hand-stretched whole wheat tandoori flatbread cooked against scorching clay oven walls and brushed with generous fresh churned butter.",
    isSpecial: true,
    isVeg: true,
  },
  {
    id: "veg-2",
    name: "Kadai Paneer Peshawari",
    category: "VEGETARIAN",
    subCategory: "Veg Curries",
    price: "₹335",
    image: foodCurry,
    description:
      "Fresh cottage cheese batons tossed with crunchy bell peppers, onions, and freshly roasted coriander-cumin spice blend.",
    isSpecial: true,
    isSpicy: true,
    isVeg: true,
  },
  {
    id: "veg-3",
    name: "Dal Bukhara Handi",
    category: "VEGETARIAN",
    subCategory: "Dal Specialties",
    price: "₹240",
    image: heroFeast,
    description:
      "Our slow-cooked pride. Whole black lentils and red kidney beans simmered overnight in heavy copper handis with cream and butter.",
    isSpecial: true,
    isVeg: true,
  },
  {
    id: "veg-4",
    name: "Paneer Tikka Shashlik",
    category: "VEGETARIAN",
    subCategory: "Tandoori Starters",
    price: "₹380",
    image: dishPaneerTikka,
    description:
      "Plump malai paneer cubes marinated in spiced hung yogurt, mustard oil, and carom seeds, skewered with onions and capsicum.",
    isSpecial: true,
    isVeg: true,
  },
  {
    id: "veg-5",
    name: "Garlic Butter Naan",
    category: "VEGETARIAN",
    subCategory: "Indian Breads",
    price: "₹70",
    image: foodBreads,
    description:
      "Classic refined flour flatbread baked in the clay tandoor, topped with fragrant roasted minced garlic, coriander, and butter.",
    isVeg: true,
  },
  {
    id: "veg-6",
    name: "Paneer Tikka Rice Bowl",
    category: "VEGETARIAN",
    subCategory: "Rice & Biryani",
    price: "₹240",
    image: dishRiceBowl,
    description:
      "Smoked charcoal-grilled paneer over a bed of fluffy cumin-infused basmati rice, served alongside cooling raita.",
    isVeg: true,
  },
  {
    id: "veg-7",
    name: "Shahi Paneer Royal",
    category: "VEGETARIAN",
    subCategory: "Veg Curries",
    price: "₹360",
    image: foodCurry,
    description:
      "Silky smooth Mughlai gravy enriched with cashew nut paste, fresh cream, green cardamom, and tender cottage cheese cubes.",
    isVeg: true,
  },
  {
    id: "veg-8",
    name: "Pineapple Raita Chilled",
    category: "VEGETARIAN",
    subCategory: "Raita & Accompaniments",
    price: "₹180",
    image: dishRaita,
    description:
      "Sweet diced pineapples folded into creamy whipped spiced dahi with hand-roasted cumin and fresh mint leaves.",
    isSpecial: true,
    isVeg: true,
  },
  {
    id: "veg-9",
    name: "Amritsari Stuffed Kulcha",
    category: "VEGETARIAN",
    subCategory: "Indian Breads",
    price: "₹85",
    image: foodBreads,
    description:
      "Crisp, flaky multi-layered tandoori kulcha stuffed with spiced mashed potatoes, fresh paneer, and crushed coriander seeds.",
    isVeg: true,
  },
  {
    id: "veg-10",
    name: "Paneer Butter Masala",
    category: "VEGETARIAN",
    subCategory: "Veg Curries",
    price: "₹350",
    image: heroFeast,
    description:
      "Tender cottage cheese simmered in a velvety, mildly spiced and buttery vine-ripened tomato sauce.",
    isVeg: true,
  },
  {
    id: "veg-11",
    name: "Subz Dum Biryani",
    category: "VEGETARIAN",
    subCategory: "Rice & Biryani",
    price: "₹250",
    image: dishRiceBowl,
    description:
      "Aged royal basmati rice layered with seasonal farm vegetables, caramelized onions, mint, and saffron, slow-cooked on dum.",
    isVeg: true,
  },
  {
    id: "veg-12",
    name: "Mushroom Malai Tikka",
    category: "VEGETARIAN",
    subCategory: "Tandoori Starters",
    price: "₹395",
    image: dishPaneerTikka,
    description:
      "Whole tender button mushrooms coated with rich cashew cream, grated cheese, and mild spices, grilled to golden perfection.",
    isVeg: true,
  },
  {
    id: "veg-13",
    name: "Cheese Naan with Gravy",
    category: "VEGETARIAN",
    subCategory: "Indian Breads",
    price: "₹230",
    image: foodBreads,
    description:
      "Decadent tandoor naan stuffed with melted cheese, served with a rich bowl of aromatic makhani gravy.",
    isSpecial: true,
    isVeg: true,
  },
  {
    id: "veg-14",
    name: "Pindi Channa Masala",
    category: "VEGETARIAN",
    subCategory: "Veg Curries",
    price: "₹300",
    image: foodCurry,
    description:
      "Authentic Punjabi chickpeas cooked dry and tangy with whole spices, black tea leaves, and ginger juliennes.",
    isVeg: true,
  },

  // ========================================================
  // 02 — NON-VEGETARIAN DISHES
  // ========================================================
  {
    id: "nonveg-1",
    name: "Tandoori Chicken Special",
    category: "NON_VEGETARIAN",
    subCategory: "Tandoori Starters",
    price: "₹320 / ₹550",
    priceHalf: 320,
    priceFull: 550,
    image: dawatTandooriChicken,
    description:
      "Whole spring chicken steeped in Punjabi tandoori spices and mustard oil, roasted to smoky perfection over live charcoal in our clay tandoor.",
    isSpecial: true,
    isSpicy: true,
    isVeg: false,
  },
  {
    id: "nonveg-2",
    name: "Murgh Makhni (Butter Chicken)",
    category: "NON_VEGETARIAN",
    subCategory: "Chicken Curries",
    price: "₹380 / ₹690",
    priceHalf: 380,
    priceFull: 690,
    image: heroFeast,
    description:
      "Succulent tandoori chicken shredded and cooked in a luxurious satin-smooth gravy of tomatoes, butter, cashew paste, and dried fenugreek.",
    isSpecial: true,
    isVeg: false,
  },
  {
    id: "nonveg-3",
    name: "Mutton Curry Traditional",
    category: "NON_VEGETARIAN",
    subCategory: "Mutton Specialties",
    price: "₹600",
    image: dawatMuttonCurry,
    description:
      "Tender goat meat slow-simmered in a heavy brass kadhai with caramelized onions, whole cloves, black cardamom, and fragrant rogan.",
    isSpecial: true,
    isSpicy: true,
    isVeg: false,
  },
  {
    id: "nonveg-4",
    name: "Ajwain Fish Tikka",
    category: "NON_VEGETARIAN",
    subCategory: "Fish Specialties",
    price: "₹550",
    image: dawatFishTikka,
    description:
      "Flaky river fish fillets marinated in pungent mustard oil, crushed carom seeds (ajwain), and lime juice, charred on skewers.",
    isSpecial: true,
    isVeg: false,
  },
  {
    id: "nonveg-5",
    name: "Chicken Tikka Tandoori",
    category: "NON_VEGETARIAN",
    subCategory: "Tandoori Starters",
    price: "₹390 / ₹660",
    priceHalf: 390,
    priceFull: 660,
    image: dawatTandooriChicken,
    description:
      "Boneless chicken cubes marinated in red chili paste, garam masala, and yogurt, roasted on long iron skewers over red-hot coals.",
    isVeg: false,
  },
  {
    id: "nonveg-6",
    name: "Chicken Biryani Dum Handi",
    category: "NON_VEGETARIAN",
    subCategory: "Rice & Biryani",
    price: "₹300",
    image: dishRiceBowl,
    description:
      "Fragrant royal basmati rice cooked with spiced chicken cuts, saffron, brown onions, and whole spices in a sealed handi.",
    isSpecial: true,
    isVeg: false,
  },
  {
    id: "nonveg-7",
    name: "Murgh Kadai Peshawari",
    category: "NON_VEGETARIAN",
    subCategory: "Chicken Curries",
    price: "₹380 / ₹690",
    priceHalf: 380,
    priceFull: 690,
    image: dawatMuttonCurry,
    description:
      "Chicken pieces tossed in a cast-iron wok with crushed coriander seeds, Kashmiri chilies, and crunchy green peppers.",
    isSpicy: true,
    isVeg: false,
  },
  {
    id: "nonveg-8",
    name: "Tangari Kabab",
    category: "NON_VEGETARIAN",
    subCategory: "Tandoori Starters",
    price: "₹390 / ₹660",
    priceHalf: 390,
    priceFull: 660,
    image: dawatTandooriChicken,
    description:
      "Tender chicken drumsticks stuffed with spiced minced meat, marinated in cream and tandoori masala, and charcoal roasted.",
    isVeg: false,
  },
  {
    id: "nonveg-9",
    name: "Fish Curry (Portion Food)",
    category: "NON_VEGETARIAN",
    subCategory: "Fish Specialties",
    price: "₹630",
    image: foodCurry,
    description:
      "Delicate fish simmered in a spiced onion, tomato, and mustard seed gravy with fresh coriander leaves.",
    isVeg: false,
  },
  {
    id: "nonveg-10",
    name: "Chicken Punjabi Homestyle",
    category: "NON_VEGETARIAN",
    subCategory: "Chicken Curries",
    price: "₹370 / ₹660",
    priceHalf: 370,
    priceFull: 660,
    image: heroFeast,
    description:
      "Robust rustic highway chicken curry cooked with roughly crushed onions, garlic, ginger, and desi spices.",
    isSpicy: true,
    isVeg: false,
  },
  {
    id: "nonveg-11",
    name: "Afgani Chicken",
    category: "NON_VEGETARIAN",
    subCategory: "Tandoori Starters",
    price: "₹400 / ₹690",
    priceHalf: 400,
    priceFull: 690,
    image: dawatTandooriChicken,
    description:
      "Mild and creamy tandoori preparation with cashews, white pepper, cream, and cheese.",
    isVeg: false,
  },
  {
    id: "nonveg-12",
    name: "Chicken Seekh Kabab",
    category: "NON_VEGETARIAN",
    subCategory: "Tandoori Starters",
    price: "₹400",
    image: dawatTandooriChicken,
    description:
      "Finely minced spiced chicken skewers infused with mint, ginger, and cilantro, grilled over charcoal.",
    isVeg: false,
  },

  // ========================================================
  // 03 — DRINKS & BEVERAGES
  // ========================================================
  {
    id: "drink-1",
    name: "Special Punjabi Sweet Lassi",
    category: "DRINKS",
    subCategory: "Traditional Lassis & Coolers",
    price: "₹40",
    image: dawatDrinksLassi,
    description:
      "Thick, velvety churned whole-milk yogurt drink served in a traditional tumbler, crowned with clotted malai, saffron, and pistachios.",
    isSpecial: true,
    isVeg: true,
  },
  {
    id: "drink-2",
    name: "Cold Coffee with Ice Cream",
    category: "DRINKS",
    subCategory: "Coffees & Shakes",
    price: "₹150",
    image: dawatDrinksLassi,
    description:
      "Rich espresso blended with chilled milk and chocolate drizzle, topped with a generous scoop of vanilla ice cream.",
    isSpecial: true,
    isVeg: true,
  },
  {
    id: "drink-3",
    name: "Fresh Lemonade with Soda",
    category: "DRINKS",
    subCategory: "Mocktails & Coolers",
    price: "₹50",
    image: dawatDrinksLassi,
    description:
      "Freshly squeezed lemon juice, crushed mint, rock salt, and effervescent soda served over cracked ice.",
    isVeg: true,
  },
  {
    id: "drink-4",
    name: "Hot Gulab Jamun with Kesar",
    category: "DRINKS",
    subCategory: "Desserts",
    price: "₹60",
    image: dawatGulabJamun,
    description:
      "Warm, pillowy fried mawa dumplings steeped in sweet saffron and green cardamom syrup with silver leaf.",
    isSpecial: true,
    isVeg: true,
  },
  {
    id: "drink-5",
    name: "Classic Cold Coffee",
    category: "DRINKS",
    subCategory: "Coffees & Shakes",
    price: "₹90",
    image: dawatDrinksLassi,
    description:
      "Smooth chilled coffee whipped with whole milk and ice, finished with cocoa dust.",
    isVeg: true,
  },
  {
    id: "drink-6",
    name: "Royal Hot Coffee",
    category: "DRINKS",
    subCategory: "Coffees & Shakes",
    price: "₹50",
    image: dawatDrinksLassi,
    description:
      "Steaming hot freshly brewed coffee with thick frothy milk and chocolate sprinkles.",
    isVeg: true,
  },
  {
    id: "drink-7",
    name: "Traditional Indian Spiced Tea",
    category: "DRINKS",
    subCategory: "Hot Brews",
    price: "₹35",
    image: dawatDrinksLassi,
    description:
      "Freshly brewed strong tea infused with crushed ginger, cardamom pods, and whole milk.",
    isVeg: true,
  },
  {
    id: "drink-8",
    name: "Ice Cream Scoop Special",
    category: "DRINKS",
    subCategory: "Desserts",
    price: "₹80",
    image: dawatGulabJamun,
    description:
      "Creamy gourmet ice cream served with roasted nuts and chocolate/strawberry sauce.",
    isVeg: true,
  },
  {
    id: "drink-9",
    name: "Chilled Fruit Juice",
    category: "DRINKS",
    subCategory: "Mocktails & Coolers",
    price: "₹50",
    image: dawatDrinksLassi,
    description: "Refreshing cold packaged fruit juice served over chilled ice.",
    isVeg: true,
  },
  {
    id: "drink-10",
    name: "Energy Drink",
    category: "DRINKS",
    subCategory: "Packaged Drinks",
    price: "₹150",
    image: dawatDrinksLassi,
    description: "Chilled canned energy drink for refreshing highway travel stamina.",
    isVeg: true,
  },
  {
    id: "drink-11",
    name: "Soft Drink / Chilled Soda",
    category: "DRINKS",
    subCategory: "Packaged Drinks",
    price: "₹40",
    image: dawatDrinksLassi,
    description: "Assorted chilled carbonated beverages and club sodas.",
    isVeg: true,
  },
  {
    id: "drink-12",
    name: "Packaged Mineral Drinking Water",
    category: "DRINKS",
    subCategory: "Packaged Drinks",
    price: "₹40",
    image: dawatDrinksLassi,
    description: "Sealed hygienic 1-litre bottled mineral water.",
    isVeg: true,
  },
];

type MainTab = "01 — VEGETARIAN" | "02 — NON-VEGETARIAN" | "03 — DRINKS" | "04 — BAR & LOUNGE";

function PremiumMenuPage() {
  const [activeTab, setActiveTab] = useState<MainTab>("01 — VEGETARIAN");
  const [subFilter, setSubFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedFood, setSelectedFood] = useState<DetailedFoodItem | null>(null);

  // Filter based on active main tab, subcategory, and search
  const currentCategoryKey =
    activeTab === "01 — VEGETARIAN"
      ? "VEGETARIAN"
      : activeTab === "02 — NON-VEGETARIAN"
      ? "NON_VEGETARIAN"
      : "DRINKS";

  const currentCategoryDishes = useMemo(() => {
    if (activeTab === "04 — BAR & LOUNGE") return [];
    return detailedMenuItems.filter((item) => item.category === currentCategoryKey);
  }, [currentCategoryKey, activeTab]);

  // Available subcategories for the active tab
  const availableSubCategories = useMemo(() => {
    const subs = new Set<string>();
    currentCategoryDishes.forEach((item) => subs.add(item.subCategory));
    return ["All", ...Array.from(subs)];
  }, [currentCategoryDishes]);

  // Final filtered list
  const displayItems = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return currentCategoryDishes.filter((item) => {
      const matchesSub = subFilter === "All" || item.subCategory === subFilter;
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.subCategory.toLowerCase().includes(q);
      return matchesSub && matchesSearch;
    });
  }, [currentCategoryDishes, subFilter, searchQuery]);

  // Handle tab switch
  const handleTabChange = (tab: MainTab) => {
    setActiveTab(tab);
    setSubFilter("All");
    setSearchQuery("");
  };

  return (
    <div className="bg-[#0E0C0A] text-[#FAF5EE] selection:bg-[#D49B55] selection:text-stone-950">
      {/* Hero */}
      <PageHero
        title="Dawat Restaurant Menu"
        subtitle="Culinary Collection & Official Bar"
        description="Prepared fresh upon order with traditional techniques, clay tandoors, and authentic Punjabi recipes. Select a category below to explore our food offerings or browse our 26 official bar drinks."
        imageSrc={heroFeast}
      />

      {/* Main Container */}
      <section className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-12 py-12 sm:py-20">
        {/* ======================================================== */}
        {/* 4 MAIN CATEGORY TABS (01 VEG, 02 NON-VEG, 03 DRINKS, 04 BAR) */}
        {/* ======================================================== */}
        <div className="flex flex-col items-center justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 rounded-2xl border border-stone-800 bg-[#14110E] p-2 shadow-2xl">
            {(
              [
                "01 — VEGETARIAN",
                "02 — NON-VEGETARIAN",
                "03 — DRINKS",
                "04 — BAR & LOUNGE",
              ] as MainTab[]
            ).map((tab) => {
              const isActive = activeTab === tab;
              const isVeg = tab.includes("VEGETARIAN") && !tab.includes("NON");
              const isNonVeg = tab.includes("NON-VEGETARIAN");
              const isDrinks = tab.includes("03 — DRINKS");
              const isBar = tab.includes("04 — BAR");

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => handleTabChange(tab)}
                  className={`group relative flex items-center gap-2.5 rounded-xl px-5 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-sm font-sans font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#D49B55] text-stone-950 font-semibold shadow-lg shadow-[#D49B55]/20 scale-[1.02]"
                      : "text-stone-300 hover:text-white hover:bg-stone-900/80 border border-transparent"
                  }`}
                >
                  {/* Category icon / indicator */}
                  {isVeg && (
                    <span
                      className={`grid size-4 place-items-center rounded-sm border p-0.5 ${
                        isActive ? "border-stone-950" : "border-emerald-500"
                      }`}
                    >
                      <span
                        className={`size-2 rounded-full ${
                          isActive ? "bg-stone-950" : "bg-emerald-500"
                        }`}
                      />
                    </span>
                  )}
                  {isNonVeg && (
                    <span
                      className={`grid size-4 place-items-center rounded-sm border p-0.5 ${
                        isActive ? "border-stone-950" : "border-rose-500"
                      }`}
                    >
                      <span
                        className={`size-2 rounded-full ${
                          isActive ? "bg-stone-950" : "bg-rose-500"
                        }`}
                      />
                    </span>
                  )}
                  {isDrinks && (
                    <CupSoda
                      className={`size-4 ${
                        isActive ? "text-stone-950" : "text-amber-400"
                      }`}
                    />
                  )}
                  {isBar && (
                    <Wine
                      className={`size-4 ${
                        isActive ? "text-stone-950" : "text-[#38BDF8]"
                      }`}
                    />
                  )}

                  <span>{tab}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "04 — BAR & LOUNGE" ? (
          <div className="mt-12">
            <BarLoungeSection id="bar-menu" asSubSection={true} />
          </div>
        ) : (
          <>
            {/* Sub-bar: Search and Subcategories */}
            <div className="mt-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-stone-800">
              {/* Subcategory Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                {availableSubCategories.map((sub) => (
                  <button
                    key={sub}
                    type="button"
                    onClick={() => setSubFilter(sub)}
                    className={`rounded-full px-4 py-1.5 text-xs whitespace-nowrap transition-all cursor-pointer ${
                      subFilter === sub
                        ? "bg-[#8C5E35] text-white font-medium shadow-sm"
                        : "border border-stone-800 bg-stone-900/60 text-stone-400 hover:text-stone-200 hover:border-stone-700"
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-72 shrink-0">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Search in ${(activeTab.split("—")[1] ?? activeTab).trim()}...`}
                  className="w-full rounded-full border border-stone-800 bg-stone-900/90 pl-9 pr-4 py-2 text-xs text-stone-200 placeholder:text-stone-500 focus:border-[#D49B55] focus:outline-none"
                />
                <Search className="absolute left-3.5 top-2.5 size-3.5 text-stone-500" />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-2 text-[10px] text-stone-400 hover:text-white"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Category Header Banner */}
            <div className="mt-8 flex items-center justify-between">
              <div>
                <p className="font-sans text-xs font-semibold tracking-[0.25em] text-[#D49B55] uppercase">
                  {activeTab === "01 — VEGETARIAN"
                    ? "100% PURE VEGETARIAN DELICACIES"
                    : activeTab === "02 — NON-VEGETARIAN"
                    ? "CHARCOAL TANDOORI & RICH GRAVIES"
                    : "REFRESHING BEVERAGES, TEAS & CONFECTIONS"}
                </p>
                <h2 className="mt-1 font-display text-2xl sm:text-3xl text-[#FAF5EE]">
                  {(activeTab.split("—")[1] ?? activeTab).trim()} Selection
                </h2>
              </div>
              <span className="text-xs text-stone-400 font-mono">
                {displayItems.length} Offerings
              </span>
            </div>

            {/* Food Cards Grid */}
            <div
              key={activeTab + subFilter}
              className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-in fade-in slide-in-from-bottom-3 duration-300"
            >
              {displayItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedFood(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setSelectedFood(item)}
                  className="luxury-shimmer group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-stone-800/80 bg-[#14110E] transition-all duration-300 hover:border-[#D49B55]/50 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/80 cursor-pointer text-left focus:outline-none focus:ring-1 focus:ring-[#D49B55]"
                >
                  {/* Image Container with Zoom and Warm Dark Overlay */}
                  <div className="relative aspect-[16/11] overflow-hidden bg-stone-900">
                    <img
                      src={item.image}
                      alt={item.name}
                      width={700}
                      height={480}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Dark gradient overlay that deepens on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14110E] via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      {item.category !== "DRINKS" && (
                        <span
                          className={`grid size-5 place-items-center rounded-sm border backdrop-blur-md p-0.5 ${
                            item.isVeg
                              ? "border-emerald-500 bg-black/60 text-emerald-400"
                              : "border-rose-500 bg-black/60 text-rose-400"
                          }`}
                          title={item.isVeg ? "Pure Vegetarian" : "Non-Vegetarian"}
                        >
                          <span
                            className={`size-2.5 rounded-full ${
                              item.isVeg ? "bg-emerald-500" : "bg-rose-500"
                            }`}
                          />
                        </span>
                      )}

                      {item.isSpecial && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-[#D49B55] px-2.5 py-0.5 text-[9px] font-bold text-stone-950 uppercase tracking-wider shadow-md">
                          <Sparkles className="size-2.5" /> Dawat Special
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex flex-col flex-1 justify-between">
                    <div>
                      <span className="text-[10px] font-semibold text-[#D49B55] uppercase tracking-wider">
                        {item.subCategory}
                      </span>

                      <h3 className="mt-1 font-display text-lg sm:text-xl font-medium text-[#FAF5EE] group-hover:text-[#D49B55] transition-colors leading-snug line-clamp-1">
                        {item.name}
                      </h3>

                      <p className="mt-2 font-sans text-xs text-stone-400 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Price & Details Arrow */}
                    <div className="mt-5 pt-3.5 border-t border-stone-800/80 flex items-center justify-between">
                      <div>
                        <span className="font-display text-lg font-semibold text-[#FAF5EE]">
                          {item.price}
                        </span>
                        {item.priceHalf && (
                          <span className="block text-[9px] text-stone-400">
                            Half / Full portion
                          </span>
                        )}
                      </div>

                      <div className="inline-flex items-center gap-1 text-xs font-medium text-stone-400 group-hover:text-[#D49B55] transition-colors">
                        <span className="text-[11px]">Details</span>
                        <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Official Notes from Menu */}
            <div className="mt-16 rounded-2xl border border-stone-800 bg-[#120F0D] p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#D49B55] uppercase tracking-wider">
                <Info className="size-4" /> Official Dawat Kitchen Policies
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-3 text-xs text-stone-300/80 leading-relaxed">
                <div className="rounded-xl border border-stone-800 bg-stone-900/50 p-4">
                  <strong className="block text-stone-200 font-medium mb-1">
                    Outside Food Notice
                  </strong>
                  Outside Drinks & Food Not Allowed inside the dining areas.
                </div>
                <div className="rounded-xl border border-stone-800 bg-stone-900/50 p-4">
                  <strong className="block text-stone-200 font-medium mb-1">
                    Boneless Chicken Preparation
                  </strong>
                  Additional charges for boneless chicken: ₹25 (Half) / ₹50 (Full).
                </div>
                <div className="rounded-xl border border-stone-800 bg-stone-900/50 p-4">
                  <strong className="block text-stone-200 font-medium mb-1">
                    Dedicated Kitchen Stations
                  </strong>
                  Pure vegetarian gravies and tandoori breads are prepared in separate hygienic sections.
                </div>
              </div>
            </div>
          </>
        )}

        {/* Bottom Call & Order CTA */}
        <div className="mt-12 rounded-2xl border border-stone-800 bg-gradient-to-r from-[#1A1613] via-[#14110E] to-[#120F0D] p-8 sm:p-12 text-center">
          <h3 className="font-display text-2xl sm:text-3xl text-[#FAF5EE]">
            Ready to Order from Dawat?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-stone-400 max-w-lg mx-auto">
            Give us a call for fast takeaway pickups or visit our dining hall & SKY lounge for an authentic Punjabi dining feast.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-[#D49B55] px-7 py-3 text-xs sm:text-sm font-medium text-stone-950 hover:bg-[#C08845] transition-colors"
            >
              <Phone className="size-4" /> Call {site.phone}
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/40 px-6 py-3 text-xs sm:text-sm font-medium text-emerald-300 hover:bg-emerald-500/20 transition-all"
            >
              <WhatsAppIcon size={16} />
              <span>WhatsApp Inquiries</span>
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* FOOD DETAIL MODAL (Smooth Scale + Fade Animation)        */}
      {/* ======================================================== */}
      {selectedFood && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedFood(null)}
        >
          <div
            className="relative max-w-2xl w-full rounded-2xl overflow-hidden bg-[#14110E] border border-stone-800 shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedFood(null)}
              className="absolute top-4 right-4 z-20 grid size-10 place-items-center rounded-full bg-black/70 text-white hover:text-[#D49B55] transition-colors cursor-pointer"
              aria-label="Close food details"
            >
              <X className="size-5" />
            </button>

            {/* Large Food Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900">
              <img
                src={selectedFood.image}
                alt={selectedFood.name}
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14110E] via-transparent to-black/30" />

              {/* Modal Top Badges */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                {selectedFood.category !== "DRINKS" && (
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md ${
                      selectedFood.isVeg
                        ? "bg-emerald-950/80 border border-emerald-700 text-emerald-300"
                        : "bg-rose-950/80 border border-rose-700 text-rose-300"
                    }`}
                  >
                    <span
                      className={`size-2 rounded-full ${
                        selectedFood.isVeg ? "bg-emerald-400" : "bg-rose-400"
                      }`}
                    />
                    {selectedFood.isVeg ? "Pure Veg" : "Non-Veg"}
                  </span>
                )}
                {selectedFood.isSpecial && (
                  <span className="rounded-full bg-[#D49B55] px-3 py-1 text-[11px] font-bold text-stone-950 uppercase tracking-wider">
                    Dawat Signature
                  </span>
                )}
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <span className="text-xs font-semibold text-[#D49B55] uppercase tracking-wider">
                    {selectedFood.subCategory}
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl text-[#FAF5EE] mt-1">
                    {selectedFood.name}
                  </h2>
                </div>
                <span className="font-display text-2xl sm:text-3xl font-semibold text-[#D49B55]">
                  {selectedFood.price}
                </span>
              </div>

              <p className="mt-4 font-sans text-sm sm:text-base text-stone-300/90 leading-relaxed">
                {selectedFood.description}
              </p>

              {/* Portion breakdown if applicable */}
              {selectedFood.priceHalf && selectedFood.priceFull && (
                <div className="mt-4 rounded-xl border border-stone-800 bg-[#0E0C0A] p-3 text-xs text-stone-400 flex items-center justify-between">
                  <span>Portion Pricing:</span>
                  <span className="text-stone-200">
                    Half: <strong className="text-[#D49B55]">₹{selectedFood.priceHalf}</strong> · Full: <strong className="text-[#D49B55]">₹{selectedFood.priceFull}</strong>
                  </span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full bg-[#D49B55] px-6 py-2.5 text-xs sm:text-sm font-medium text-stone-950 hover:bg-[#C08845] transition-colors"
                >
                  <Phone className="size-4" /> Order by Phone ({site.phone})
                </a>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/40 px-5 py-2.5 text-xs sm:text-sm font-medium text-emerald-300 hover:bg-emerald-500/20 transition-all"
                >
                  <WhatsAppIcon size={14} />
                  <span>WhatsApp Inquire</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
