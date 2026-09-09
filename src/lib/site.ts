export const site = {
  name: "Dawat Restaurant & SKY Lounge",
  namePunjabi: "ਦਾਵਤ ਰੇਸਟੋਰੇਂਟ ਤੇ ਸਕਾਈ ਲਾਊਂਜ",
  type: "North Indian Restaurant & Bar",
  address: "G.T. Road, Opp. P.W.D. Rest House, Kishan Pura, Mukerian, Punjab 144211",
  addressShort: "G.T. Road, Kishan Pura, Mukerian",
  locality: "Mukerian",
  region: "Punjab",
  postalCode: "144211",
  street: "G.T. Road, Opp. P.W.D. Rest House, Kishan Pura",
  phone: "01883-245160",
  phoneHref: "tel:+911883245160",
  whatsapp: "01883-245160",
  whatsappHref: "https://wa.me/911883245160?text=Hi%20Dawat%20Restaurant,%20I%20would%20like%20to%20reserve%20a%20table%20/%20order",
  facebook: "https://www.facebook.com/DawatRestaurantMukerian",
  facebookHandle: "@DawatRestaurantMukerian",
  website: "https://dawatrestaurant.in",
  priceRange: "₹200–₹400",
  rating: "4.0",
  reviewCount: "965",
  orderLink: "tel:+911883245160",
  openingHours: "11:00 AM – 11:30 PM",
  directionsLink:
    "https://www.google.com/maps/search/?api=1&query=Dawat+Restaurant+G.T.+Road+Kishan+Pura+Mukerian+Punjab+144211",
  mapEmbed:
    "https://www.google.com/maps?q=Dawat+Restaurant+G.T.+Road+Kishan+Pura+Mukerian+Punjab+144211&output=embed",
  reviewsLink:
    "https://www.google.com/search?q=Dawat+Restaurant+Mukerian+reviews",
} as const;

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/bar", label: "Bar & Lounge" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://dawatrestaurant.in/#restaurant",
  name: site.name,
  alternateName: site.namePunjabi,
  description:
    "Dawat Restaurant & SKY Lounge on G.T. Road, Mukerian. Authentic clay tandoor cooking, rich North Indian curries, AC family dining hall, and exclusive SKY Lounge bar.",
  servesCuisine: ["North Indian", "Punjabi", "Mughlai", "Tandoori"],
  priceRange: "₹200-₹400",
  telephone: "+91-1883-245160",
  url: site.website,
  sameAs: [
    "https://www.facebook.com/DawatRestaurantMukerian",
  ],
  menu: `${site.website}/menu`,
  hasMap: site.directionsLink,
  acceptsReservations: "True",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Google Pay, PhonePe",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.9566,
    longitude: 75.6179,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    addressLocality: site.locality,
    addressRegion: site.region,
    postalCode: site.postalCode,
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "11:00",
      closes: "23:30",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating,
    reviewCount: site.reviewCount,
    bestRating: "5",
    worstRating: "1",
  },
};
