/**
 * Official Dawat Restaurant & Lounge Bar Menu Data
 * Source of Truth: Physical printed bar menu photograph of Dawat Restaurant & Lounge Bar
 */

export type BarCategory =
  | "All"
  | "Whisky"
  | "Scotch"
  | "Vodka"
  | "Rum"
  | "Beer"
  | "Breezer"
  | "Mocktail"
  | "Draught Beer";

export interface DualPriceItem {
  id: string;
  name: string;
  category: "Whisky" | "Scotch" | "Vodka" | "Rum";
  price30ml: number;
  price60ml: number;
  tag?: string;
  type: "dual";
}

export interface SinglePriceItem {
  id: string;
  name: string;
  category: "Beer" | "Breezer" | "Mocktail";
  price: number;
  servingLabel: string;
  tag?: string;
  type: "single";
}

export interface DraughtBeerItem {
  id: string;
  name: string;
  category: "Draught Beer";
  mugPrice: number;
  jugPrice: number;
  pitcherPrice: number;
  tag?: string;
  type: "draught";
}

export type BarMenuItem = DualPriceItem | SinglePriceItem | DraughtBeerItem;

export const barCategories: { id: BarCategory; label: string; icon: string; count: number }[] = [
  { id: "All", label: "Full Bar Collection", icon: "✨", count: 26 },
  { id: "Whisky", label: "Whisky", icon: "🥃", count: 6 },
  { id: "Scotch", label: "Scotch", icon: "🍷", count: 5 },
  { id: "Vodka", label: "Vodka", icon: "🍸", count: 2 },
  { id: "Rum", label: "Rum", icon: "🍹", count: 2 },
  { id: "Beer", label: "Beer (Bottles)", icon: "🍺", count: 7 },
  { id: "Breezer", label: "Breezer", icon: "🍾", count: 1 },
  { id: "Mocktail", label: "Mocktail", icon: "🍹", count: 1 },
  { id: "Draught Beer", label: "Draught Beer", icon: "🍻", count: 2 },
];

export const barMenuData: BarMenuItem[] = [
  // ----------------------------------------------------
  // 1. WHISKY (30ML / 60ML)
  // ----------------------------------------------------
  {
    id: "whisky-royal-stag",
    name: "Royal Stag Deluxe",
    category: "Whisky",
    price30ml: 80,
    price60ml: 120,
    type: "dual",
    tag: "Classic Favourite",
  },
  {
    id: "whisky-royal-challenge",
    name: "Royal Challenge Gold",
    category: "Whisky",
    price30ml: 80,
    price60ml: 120,
    type: "dual",
  },
  {
    id: "whisky-blenders-pride",
    name: "Blenders Pride Ultra Premium",
    category: "Whisky",
    price30ml: 100,
    price60ml: 150,
    type: "dual",
    tag: "Ultra Premium",
  },
  {
    id: "whisky-signature",
    name: "Signature Rare Aged",
    category: "Whisky",
    price30ml: 100,
    price60ml: 150,
    type: "dual",
    tag: "Rare Aged",
  },
  {
    id: "whisky-peter-scot",
    name: "Peter Scot Premium",
    category: "Whisky",
    price30ml: 100,
    price60ml: 150,
    type: "dual",
  },
  {
    id: "whisky-antiquity-blue",
    name: "Antiquity Blue",
    category: "Whisky",
    price30ml: 110,
    price60ml: 170,
    type: "dual",
    tag: "Top Shelf",
  },

  // ----------------------------------------------------
  // 2. SCOTCH (30ML / 60ML)
  // ----------------------------------------------------
  {
    id: "scotch-vat-69",
    name: "VAT 69",
    category: "Scotch",
    price30ml: 130,
    price60ml: 240,
    type: "dual",
    tag: "Blended Scotch",
  },
  {
    id: "scotch-black-white",
    name: "Black & White",
    category: "Scotch",
    price30ml: 130,
    price60ml: 240,
    type: "dual",
  },
  {
    id: "scotch-100-pipers",
    name: "100 Pipers Deluxe",
    category: "Scotch",
    price30ml: 130,
    price60ml: 240,
    type: "dual",
    tag: "Deluxe Scotch",
  },
  {
    id: "scotch-teachers",
    name: "Teacher's Highland Cream",
    category: "Scotch",
    price30ml: 170,
    price60ml: 260,
    type: "dual",
    tag: "Highland Cream",
  },
  {
    id: "scotch-black-dog",
    name: "Black Dog Centenary Black Reserve",
    category: "Scotch",
    price30ml: 170,
    price60ml: 260,
    type: "dual",
    tag: "Centenary Reserve",
  },

  // ----------------------------------------------------
  // 3. VODKA (30ML / 60ML)
  // ----------------------------------------------------
  {
    id: "vodka-magic-moments",
    name: "Magic Moments",
    category: "Vodka",
    price30ml: 80,
    price60ml: 120,
    type: "dual",
  },
  {
    id: "vodka-smirnoff",
    name: "Smirnoff",
    category: "Vodka",
    price30ml: 110,
    price60ml: 170,
    type: "dual",
    tag: "Triple Distilled",
  },

  // ----------------------------------------------------
  // 4. RUM (30ML / 60ML)
  // ----------------------------------------------------
  {
    id: "rum-old-monk",
    name: "Old Monk Extra Special XXX Rare",
    category: "Rum",
    price30ml: 80,
    price60ml: 120,
    type: "dual",
    tag: "Legendary Dark Rum",
  },
  {
    id: "rum-bacardi",
    name: "Bacardi Carta Blanca",
    category: "Rum",
    price30ml: 110,
    price60ml: 170,
    type: "dual",
    tag: "White Rum Superior",
  },

  // ----------------------------------------------------
  // 5. BEER (BOTTLE)
  // ----------------------------------------------------
  {
    id: "beer-kingfisher-ultra",
    name: "Kingfisher Ultra",
    category: "Beer",
    price: 400,
    servingLabel: "BOTTLE",
    type: "single",
    tag: "Ultra Smooth",
  },
  {
    id: "beer-miller-ace",
    name: "Miller Ace",
    category: "Beer",
    price: 400,
    servingLabel: "BOTTLE",
    type: "single",
  },
  {
    id: "beer-heineken",
    name: "Heineken",
    category: "Beer",
    price: 400,
    servingLabel: "BOTTLE",
    type: "single",
    tag: "Pure Malt Lager",
  },
  {
    id: "beer-budweiser-magnum",
    name: "Budweiser Magnum",
    category: "Beer",
    price: 400,
    servingLabel: "BOTTLE",
    type: "single",
    tag: "Strong Brew",
  },
  {
    id: "beer-carlsberg",
    name: "Carlsberg",
    category: "Beer",
    price: 400,
    servingLabel: "BOTTLE",
    type: "single",
    tag: "Danish Pilsner",
  },
  {
    id: "beer-carling",
    name: "Carling",
    category: "Beer",
    price: 400,
    servingLabel: "BOTTLE",
    type: "single",
  },
  {
    id: "beer-corona-extra",
    name: "Corona Extra",
    category: "Beer",
    price: 400,
    servingLabel: "BOTTLE",
    type: "single",
    tag: "Imported Mexican Lager",
  },

  // ----------------------------------------------------
  // 6. BREEZER
  // ----------------------------------------------------
  {
    id: "breezer-original",
    name: "Breezer",
    category: "Breezer",
    price: 200,
    servingLabel: "BOTTLE",
    type: "single",
    tag: "Flavoured Refreshment",
  },

  // ----------------------------------------------------
  // 7. MOCKTAIL
  // ----------------------------------------------------
  {
    id: "mocktail-signature",
    name: "Mocktail",
    category: "Mocktail",
    price: 140,
    servingLabel: "GLASS",
    type: "single",
    tag: "Handcrafted Non-Alcoholic",
  },

  // ----------------------------------------------------
  // 8. DRAUGHT BEER (Mug / Jug / Pitcher)
  // ----------------------------------------------------
  {
    id: "draught-kingfisher",
    name: "Kingfisher",
    category: "Draught Beer",
    mugPrice: 190,
    jugPrice: 700,
    pitcherPrice: 1350,
    type: "draught",
    tag: "Fresh From Tap",
  },
  {
    id: "draught-beach-beauty",
    name: "Beach Beauty",
    category: "Draught Beer",
    mugPrice: 210,
    jugPrice: 750,
    pitcherPrice: 1400,
    type: "draught",
    tag: "Signature Craft Tap",
  },
];

export const barNotices = [
  { text: "Exclusive of tax", icon: "receipt" },
  { text: "Outside Drinks & Food Not Allowed", icon: "ban" },
] as const;
