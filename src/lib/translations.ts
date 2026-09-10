import { useState, useEffect, createContext, useContext, createElement, type ReactNode } from "react";

export type Language = "en" | "pa";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: keyof typeof translations.en) => string;
}

export const translations = {
  en: {
    // Nav
    navHome: "Home",
    navAbout: "About",
    navMenu: "Menu",
    navBar: "Bar & Lounge",
    navGallery: "Gallery",
    navReviews: "Reviews",
    navContact: "Contact",
    navOrderOnline: "Order Online",
    navBookTable: "Book a Table",
    book_a_table: "Book a Table",

    // Top Strip & Hours
    hoursNotice: "Open Daily: 11:00 AM – 11:30 PM",
    addressShort: "G.T. Road, Mukerian (Family AC Dining & SKY Lounge)",
    whatsappChat: "WhatsApp Us",
    directions: "Directions",

    // Hero
    heroBadge: "✦ G.T. ROAD · MUKERIAN · ESTABLISHED TASTE ✦",
    heroTitle: "A Royal Feast of Authentic North Indian Flavours.",
    heroSubtitle: "Welcome to Dawat Restaurant & SKY Lounge. Enjoy pure tandoori breads, rich gravies simmered in copper handis, and our signature SKY Lounge bar on G.T. Road, Mukerian.",
    heroExploreMenu: "Explore Dining Menu",
    heroSkyBar: "SKY Bar & Lounge ↓",
    heroBookTable: "Book a Table ✦",

    // Today's Special
    specialBadge: "CHEF'S DAILY SELECTION",
    specialTitle: "Today's Special Delicacies",
    specialSubtitle: "Handpicked daily creations simmered in copper handis and charred in our authentic charcoal clay tandoor.",

    // Signature Dishes
    sigBadge: "DAWAT SIGNATURES",
    sigTitle: "Iconic Culinary Staples",
    sigSubtitle: "Generations of Punjabi taste crafted with pure desi makhan, whole roasted spices, and slow fire.",

    // Why Dawat
    whyBadge: "WHY CHOOSE DAWAT",
    whyTitle: "The Standard of Royal Punjabi Hospitality",
    whySubtitle: "From our red-hot clay tandoor to Mukerian's premier rooftop lounge, here is what makes every visit special.",

    // Booking Modal
    bookModalTitle: "Reserve a Royal Table",
    bookModalSubtitle: "Dawat Restaurant & SKY Lounge · G.T. Road, Mukerian",
    nameLabel: "Your Name",
    phoneLabel: "Phone Number",
    dateLabel: "Reservation Date",
    timeSlotLabel: "Preferred Time Slot",
    guestsLabel: "Number of Guests",
    hallLabel: "Dining Preference",
    hallOptionDining: "Family AC Dining Hall",
    hallOptionSky: "SKY Lounge & Bar",
    hallOptionRooftop: "Rooftop Starlight Terrace",
    bookViaWhatsapp: "Confirm Table via WhatsApp ↗",
    callToBook: "Or Call Immediately",

    // Footer
    footerDesc: "Authentic North Indian family dining, clay tandoori specialties, and premier SKY Lounge bar on G.T. Road, Mukerian.",
    footerHoursTitle: "Opening Timings",
    footerDailyHours: "Monday – Sunday: 11:00 AM to 11:30 PM",
    footerHighwayParking: "Spacious Free Highway Parking Outside",
    footerQuickLinks: "Quick Navigation",
    footerContactTitle: "Location & Reservations",
  },
  pa: {
    // Nav
    navHome: "ਮੁੱਖ ਪੰਨਾ",
    navAbout: "ਸਾਡੇ ਬਾਰੇ",
    navMenu: "ਮੈਨੂ",
    navBar: "ਬਾਰ ਅਤੇ ਲਾਊਂਜ",
    navGallery: "ਗੈਲਰੀ",
    navReviews: "ਰੀਵਿਊਜ਼",
    navContact: "ਸੰਪਰਕ",
    navOrderOnline: "ਆਰਡਰ ਕਰੋ",
    navBookTable: "ਜਗ੍ਹਾ ਬੁੱਕ ਕਰੋ",
    book_a_table: "ਟੇਬਲ ਬੁੱਕ ਕਰੋ",

    // Top Strip & Hours
    hoursNotice: "ਰੋਜ਼ਾਨਾ ਖੁੱਲ੍ਹਾ: ਸਵੇਰੇ 11:00 ਤੋਂ ਰਾਤ 11:30",
    addressShort: "ਜੀ.ਟੀ. ਰੋਡ, ਮੁਕੇਰੀਆਂ (ਏ.ਸੀ. ਫੈਮਿਲੀ ਹਾਲ ਅਤੇ ਸਕਾਈ ਲਾਊਂਜ)",
    whatsappChat: "ਵਟਸਐਪ 'ਤੇ ਗੱਲ ਕਰੋ",
    directions: "ਰਸਤਾ ਦੇਖੋ",

    // Hero
    heroBadge: "✦ ਜੀ.ਟੀ. ਰੋਡ · ਮੁਕੇਰੀਆਂ · ਸ਼ਾਹੀ ਪੰਜਾਬੀ ਸਵਾਦ ✦",
    heroTitle: "ਅਸਲ ਉੱਤਰੀ ਭਾਰਤੀ ਸਵਾਦਾਂ ਦੀ ਸ਼ਾਹੀ ਦਾਵਤ।",
    heroSubtitle: "ਦਾਵਤ ਰੈਸਟੋਰੈਂਟ ਅਤੇ ਸਕਾਈ ਲਾਊਂਜ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ। ਤਾਂਬੇ ਦੀਆਂ ਹਾਂਡੀਆਂ ਵਿੱਚ ਰਿੱਝੀਆਂ ਗਰੇਵੀਆਂ, ਤੰਦੂਰੀ ਰੋਟੀਆਂ ਅਤੇ ਸਾਡਾ ਮਸ਼ਹੂਰ ਸਕਾਈ ਲਾਊਂਜ ਬਾਰ।",
    heroExploreMenu: "ਮੈਨੂ ਦੇਖੋ",
    heroSkyBar: "ਸਕਾਈ ਬਾਰ ਤੇ ਲਾਊਂਜ ↓",
    heroBookTable: "ਟੇਬਲ ਬੁੱਕ ਕਰੋ ✦",

    // Today's Special
    specialBadge: "ਸ਼ੈੱਫ ਦੀ ਖ਼ਾਸ ਪੇਸ਼ਕਸ਼",
    specialTitle: "ਅੱਜ ਦੇ ਖ਼ਾਸ ਪਕਵਾਨ",
    specialSubtitle: "ਤਾਂਬੇ ਦੀ ਹਾਂਡੀ ਵਿੱਚ ਧੀਮੀ ਅੱਗ 'ਤੇ ਤਿਆਰ ਕੀਤੀਆਂ ਖ਼ਾਸ ਦਾਲਾਂ, ਪਨੀਰ ਅਤੇ ਮਹਿਕਦੇ ਤੰਦੂਰੀ ਸਵਾਦ।",

    // Signature Dishes
    sigBadge: "ਦਾਵਤ ਦੇ ਸਿਗਨੇਚਰ ਪਕਵਾਨ",
    sigTitle: "ਸਾਡੇ ਮਸ਼ਹੂਰ ਰਵਾਇਤੀ ਸਵਾਦ",
    sigSubtitle: "ਦੇਸੀ ਮੱਖਣ, ਖੜ੍ਹੇ ਮਸਾਲਿਆਂ ਅਤੇ ਰਵਾਇਤੀ ਮਿੱਟੀ ਦੇ ਤੰਦੂਰ ਨਾਲ ਤਿਆਰ ਪੰਜਾਬੀ ਰਸੋਈ ਦੀ ਸ਼ਾਨ।",

    // Why Dawat
    whyBadge: "ਦਾਵਤ ਹੀ ਕਿਉਂ?",
    whyTitle: "ਸ਼ਾਹੀ ਪੰਜਾਬੀ ਮਹਿਮਾਨਨਿਵਾਜ਼ੀ ਦਾ ਪ੍ਰਤੀਕ",
    whySubtitle: "ਅਸਲੀ ਮਿੱਟੀ ਦੇ ਤੰਦੂਰ ਤੋਂ ਲੈ ਕੇ ਮੁਕੇਰੀਆਂ ਦੇ ਸਭ ਤੋਂ ਪ੍ਰੀਮੀਅਮ ਰੂਫਟੌਪ ਲਾਊਂਜ ਤੱਕ।",

    // Booking Modal
    bookModalTitle: "ਰਾਇਲ ਟੇਬਲ ਬੁੱਕ ਕਰੋ",
    bookModalSubtitle: "ਦਾਵਤ ਰੈਸਟੋਰੈਂਟ ਅਤੇ ਸਕਾਈ ਲਾਊਂਜ · ਜੀ.ਟੀ. ਰੋਡ, ਮੁਕੇਰੀਆਂ",
    nameLabel: "ਤੁਹਾਡਾ ਨਾਮ",
    phoneLabel: "ਫ਼ੋਨ ਨੰਬਰ",
    dateLabel: "ਤਾਰੀਖ਼",
    timeSlotLabel: "ਸਮਾਂ",
    guestsLabel: "ਮਹਿਮਾਨਾਂ ਦੀ ਗਿਣਤੀ",
    hallLabel: "ਬੈਠਣ ਦੀ ਪਸੰਦ",
    hallOptionDining: "ਏ.ਸੀ. ਫੈਮਿਲੀ ਹਾਲ",
    hallOptionSky: "ਸਕਾਈ ਲਾਊਂਜ ਬਾਰ",
    hallOptionRooftop: "ਓਪਨ-ਏਅਰ ਰੂਫਟੌਪ ਟੈਰੇਸ",
    bookViaWhatsapp: "ਵਟਸਐਪ ਰਾਹੀਂ ਬੁਕਿੰਗ ਭੇਜੋ ↗",
    callToBook: "ਜਾਂ ਸਿੱਧਾ ਫ਼ੋਨ 'ਤੇ ਗੱਲ ਕਰੋ",

    // Footer
    footerDesc: "ਪੰਜਾਬੀ ਪਰਿਵਾਰਕ ਏ.ਸੀ. ਡਾਇਨਿੰਗ, ਮਿੱਟੀ ਦੇ ਤੰਦੂਰੀ ਪਕਵਾਨ ਅਤੇ ਮੁਕੇਰੀਆਂ ਦਾ ਪ੍ਰੀਮੀਅਮ ਸਕਾਈ ਲਾਊਂਜ ਬਾਰ।",
    footerHoursTitle: "ਖੁੱਲ੍ਹਣ ਦਾ ਸਮਾਂ",
    footerDailyHours: "ਸੋਮਵਾਰ – ਐਤਵਾਰ: ਸਵੇਰੇ 11:00 ਤੋਂ ਰਾਤ 11:30",
    footerHighwayParking: "ਜੀ.ਟੀ. ਰੋਡ 'ਤੇ ਵੱਡੀ ਮੁਫ਼ਤ ਪਾਰਕਿੰਗ ਉਪਲਬਧ",
    footerQuickLinks: "ਜ਼ਰੂਰੀ ਲਿੰਕ",
    footerContactTitle: "ਸੰਪਰਕ ਅਤੇ ਬੁਕਿੰਗ",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  toggleLang: () => {},
  t: (key) => translations.en[key] || "",
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("dawat_lang") as Language;
      if (saved === "en" || saved === "pa") {
        setLangState(saved);
      }
    } catch {
      // Ignore localStorage unavailable in SSR
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("dawat_lang", newLang);
    } catch {
      // Ignore
    }
  };

  const toggleLang = () => {
    setLang(lang === "en" ? "pa" : "en");
  };

  const t = (key: keyof typeof translations.en): string => {
    return translations[lang][key] || translations.en[key] || "";
  };

  return createElement(
    LanguageContext.Provider,
    { value: { lang, setLang, toggleLang, t } },
    children
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
