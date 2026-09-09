export interface OfficialMenuItem {
  name: string;
  category:
    | "Soup"
    | "Veg Starters"
    | "Non-Veg Starters"
    | "Veg Curries"
    | "Dal & Veggies"
    | "Non-Veg Curries"
    | "Indian Breads"
    | "Rice & Biryani"
    | "Raita & Salads"
    | "Papad & Snacks"
    | "Beverages"
    | "Dessert";
  isVeg: boolean;
  price: number | string;
  priceHalf?: number;
  priceFull?: number;
  isSpecial?: boolean;
}

export const OFFICIAL_CATEGORIES = [
  "All",
  "Soup",
  "Veg Starters",
  "Non-Veg Starters",
  "Veg Curries",
  "Dal & Veggies",
  "Non-Veg Curries",
  "Indian Breads",
  "Rice & Biryani",
  "Raita & Salads",
  "Papad & Snacks",
  "Beverages",
  "Dessert",
] as const;

export const officialMenu: OfficialMenuItem[] = [
  // ---------------- SOUPS ----------------
  { name: "Cream of Tomato", category: "Soup", isVeg: true, price: 120 },
  { name: "Sweet Corn Soup", category: "Soup", isVeg: true, price: 120 },
  { name: "Hot & Sour (Vegetarian)", category: "Soup", isVeg: true, price: 120 },
  { name: "Manchow Soup (Vegetarian)", category: "Soup", isVeg: true, price: 120 },
  { name: "Cream of Chicken", category: "Soup", isVeg: false, price: 180 },
  { name: "Chicken Lemon Coriander", category: "Soup", isVeg: false, price: 180 },
  { name: "Hot & Sour (Non-Veg.)", category: "Soup", isVeg: false, price: 180 },
  { name: "Manchow Soup (Non-Veg.)", category: "Soup", isVeg: false, price: 180 },

  // ---------------- VEG STARTERS ----------------
  { name: "Veg. Seekh Kabab", category: "Veg Starters", isVeg: true, price: 310 },
  { name: "Paneer Seekh Kabab", category: "Veg Starters", isVeg: true, price: 395 },
  { name: "Cocktail Kabab", category: "Veg Starters", isVeg: true, price: 360 },
  { name: "Krispy Veg.", category: "Veg Starters", isVeg: true, price: 395 },
  { name: "Krispy Corn", category: "Veg Starters", isVeg: true, price: 335 },
  { name: "Mushroom Tikka", category: "Veg Starters", isVeg: true, price: 380 },
  { name: "Mushroom Malai Tikka", category: "Veg Starters", isVeg: true, price: 395 },
  { name: "Stuffed Mushroom Tikka", category: "Veg Starters", isVeg: true, price: 410 },
  { name: "Paneer Tikka", category: "Veg Starters", isVeg: true, price: 380, isSpecial: true },
  { name: "Achari Paneer Tikka", category: "Veg Starters", isVeg: true, price: 390 },
  { name: "Chatpata Pudina Paneer Tikka", category: "Veg Starters", isVeg: true, price: 390 },
  { name: "Ginger Garlic Paneer Tikka", category: "Veg Starters", isVeg: true, price: 390 },
  { name: "Paneer Malai Tikka", category: "Veg Starters", isVeg: true, price: 390 },
  { name: "Mushroom Duplex", category: "Veg Starters", isVeg: true, price: 380 },
  { name: "Mushroom Chilli", category: "Veg Starters", isVeg: true, price: 400 },
  { name: "Chilli Paneer", category: "Veg Starters", isVeg: true, price: 380 },
  { name: "Veg. Manchurian", category: "Veg Starters", isVeg: true, price: 200 },
  { name: "Spring Roll", category: "Veg Starters", isVeg: true, price: 200 },
  { name: "Cheese Fingers", category: "Veg Starters", isVeg: true, price: 330 },
  { name: "French Fries", category: "Veg Starters", isVeg: true, price: 140 },
  { name: "Sweet Potato (Honey Flavoured)", category: "Veg Starters", isVeg: true, price: 260 },
  { name: "Channa Chat", category: "Veg Starters", isVeg: true, price: 140 },
  { name: "Aloo Chat", category: "Veg Starters", isVeg: true, price: 140 },
  { name: "Corn Chat", category: "Veg Starters", isVeg: true, price: 180 },
  { name: "Chinese Bhel", category: "Veg Starters", isVeg: true, price: 220 },
  { name: "Veg. Noodles", category: "Veg Starters", isVeg: true, price: 220 },

  // ---------------- NON-VEG STARTERS ----------------
  { name: "Chicken Seekh Kabab", category: "Non-Veg Starters", isVeg: false, price: 400 },
  { name: "Tandoori Chicken", category: "Non-Veg Starters", isVeg: false, price: "320 / 550", priceHalf: 320, priceFull: 550, isSpecial: true },
  { name: "Chicken Tikka Tandoori", category: "Non-Veg Starters", isVeg: false, price: "390 / 660", priceHalf: 390, priceFull: 660 },
  { name: "Chicken Malai Tikka", category: "Non-Veg Starters", isVeg: false, price: "400 / 690", priceHalf: 400, priceFull: 690 },
  { name: "Ginger Garlic Chicken Tikka", category: "Non-Veg Starters", isVeg: false, price: "400 / 690", priceHalf: 400, priceFull: 690 },
  { name: "Kali Mirch Chicken Tikka", category: "Non-Veg Starters", isVeg: false, price: "400 / 690", priceHalf: 400, priceFull: 690 },
  { name: "Achari Chicken Tikka", category: "Non-Veg Starters", isVeg: false, price: "400 / 690", priceHalf: 400, priceFull: 690 },
  { name: "Tangari Kabab", category: "Non-Veg Starters", isVeg: false, price: "390 / 660", priceHalf: 390, priceFull: 660 },
  { name: "Afgani Chicken", category: "Non-Veg Starters", isVeg: false, price: "400 / 690", priceHalf: 400, priceFull: 690 },
  { name: "Chilli Chicken", category: "Non-Veg Starters", isVeg: false, price: "360 / 600", priceHalf: 360, priceFull: 600 },
  { name: "Lemon Chilli Chicken", category: "Non-Veg Starters", isVeg: false, price: "370 / 660", priceHalf: 370, priceFull: 660 },
  { name: "Chicken Manchurian (8 Pieces)", category: "Non-Veg Starters", isVeg: false, price: 500 },
  { name: "Fried Chicken", category: "Non-Veg Starters", isVeg: false, price: "320 / 560", priceHalf: 320, priceFull: 560 },
  { name: "Fried Fish", category: "Non-Veg Starters", isVeg: false, price: 490 },
  { name: "Lemon Butter Fish", category: "Non-Veg Starters", isVeg: false, price: 510 },
  { name: "Fish Tikka", category: "Non-Veg Starters", isVeg: false, price: 510 },
  { name: "Ajwain Fish Tikka", category: "Non-Veg Starters", isVeg: false, price: 550 },
  { name: "Fish Chilli", category: "Non-Veg Starters", isVeg: false, price: 570 },
  { name: "Crispy Chicken (BBQ Sauce)", category: "Non-Veg Starters", isVeg: false, price: 450 },
  { name: "Roti Pe Boti", category: "Non-Veg Starters", isVeg: false, price: 450 },

  // ---------------- DAL & VEGGIES ----------------
  { name: "Dal Arhar", category: "Dal & Veggies", isVeg: true, price: 240 },
  { name: "Dal Bukhara", category: "Dal & Veggies", isVeg: true, price: 240, isSpecial: true },
  { name: "Dal Fry", category: "Dal & Veggies", isVeg: true, price: 240 },
  { name: "Dal Dhabha", category: "Dal & Veggies", isVeg: true, price: 250 },
  { name: "Dum Aloo", category: "Dal & Veggies", isVeg: true, price: 300 },
  { name: "Tawa Vegetables", category: "Dal & Veggies", isVeg: true, price: 300 },

  // ---------------- VEG CURRIES & PANEER ----------------
  { name: "Mushroom Do Pyaza", category: "Veg Curries", isVeg: true, price: 335 },
  { name: "Mushroom Matar", category: "Veg Curries", isVeg: true, price: 335 },
  { name: "Pindi Channa", category: "Veg Curries", isVeg: true, price: 300 },
  { name: "Channa Masala", category: "Veg Curries", isVeg: true, price: 300 },
  { name: "Paneer Tawa Masala", category: "Veg Curries", isVeg: true, price: 335 },
  { name: "Paneer Makhni", category: "Veg Curries", isVeg: true, price: 335 },
  { name: "Cheese Tomato", category: "Veg Curries", isVeg: true, price: 335 },
  { name: "Kadai Paneer", category: "Veg Curries", isVeg: true, price: 335, isSpecial: true },
  { name: "Shahi Paneer", category: "Veg Curries", isVeg: true, price: 360 },
  { name: "Palak Paneer", category: "Veg Curries", isVeg: true, price: 335 },
  { name: "Paneer Tikka Masala", category: "Veg Curries", isVeg: true, price: 385 },
  { name: "Paneer Butter Masala", category: "Veg Curries", isVeg: true, price: 350 },
  { name: "Paneer Pasanda", category: "Veg Curries", isVeg: true, price: 385 },
  { name: "Paneer Do Pyaza", category: "Veg Curries", isVeg: true, price: 335 },
  { name: "Paneer Bhurji", category: "Veg Curries", isVeg: true, price: 360 },
  { name: "Methi Malai Paneer", category: "Veg Curries", isVeg: true, price: 335 },
  { name: "Kofta-e-Shalimar", category: "Veg Curries", isVeg: true, price: 335 },
  { name: "Malai Kofta", category: "Veg Curries", isVeg: true, price: 360 },
  { name: "Palak Kofta", category: "Veg Curries", isVeg: true, price: 335 },
  { name: "Palak Corn", category: "Veg Curries", isVeg: true, price: 335 },

  // ---------------- NON-VEG CURRIES ----------------
  { name: "Murgh Makhni", category: "Non-Veg Curries", isVeg: false, price: "380 / 690", priceHalf: 380, priceFull: 690, isSpecial: true },
  { name: "Murgh Kadai", category: "Non-Veg Curries", isVeg: false, price: "380 / 690", priceHalf: 380, priceFull: 690 },
  { name: "Methi Murgh", category: "Non-Veg Curries", isVeg: false, price: "385 / 690", priceHalf: 385, priceFull: 690 },
  { name: "Murgh Kalimirich", category: "Non-Veg Curries", isVeg: false, price: "385 / 690", priceHalf: 385, priceFull: 690 },
  { name: "Murgh Tikka Makhni (Portion)", category: "Non-Veg Curries", isVeg: false, price: 660 },
  { name: "Chicken Punjabi", category: "Non-Veg Curries", isVeg: false, price: "370 / 660", priceHalf: 370, priceFull: 660 },
  { name: "Chicken Kohlapuri", category: "Non-Veg Curries", isVeg: false, price: "380 / 690", priceHalf: 380, priceFull: 690 },
  { name: "Tawa Chicken", category: "Non-Veg Curries", isVeg: false, price: "370 / 660", priceHalf: 370, priceFull: 660 },
  { name: "Chicken do Pyaza", category: "Non-Veg Curries", isVeg: false, price: "380 / 690", priceHalf: 380, priceFull: 690 },
  { name: "Rahara Chicken", category: "Non-Veg Curries", isVeg: false, price: "430 / 700", priceHalf: 430, priceFull: 700 },
  { name: "Garlic Chicken", category: "Non-Veg Curries", isVeg: false, price: "380 / 660", priceHalf: 380, priceFull: 660 },
  { name: "Lemon Chicken", category: "Non-Veg Curries", isVeg: false, price: "380 / 660", priceHalf: 380, priceFull: 660 },
  { name: "Fish Curry (Portion Food)", category: "Non-Veg Curries", isVeg: false, price: 630 },
  { name: "Mutton Curry (Portion Food)", category: "Non-Veg Curries", isVeg: false, price: 600, isSpecial: true },

  // ---------------- INDIAN BREADS ----------------
  { name: "Tandoori Roti", category: "Indian Breads", isVeg: true, price: 25 },
  { name: "Butter Roti", category: "Indian Breads", isVeg: true, price: 30 },
  { name: "Missi Roti", category: "Indian Breads", isVeg: true, price: 55 },
  { name: "Lachcha Prantha", category: "Indian Breads", isVeg: true, price: 70 },
  { name: "Dawat Special Roti", category: "Indian Breads", isVeg: true, price: 60, isSpecial: true },
  { name: "Ajwain Prantha", category: "Indian Breads", isVeg: true, price: 70 },
  { name: "Pudina Prantha", category: "Indian Breads", isVeg: true, price: 70 },
  { name: "Tandoori Naan", category: "Indian Breads", isVeg: true, price: 50 },
  { name: "Butter Naan", category: "Indian Breads", isVeg: true, price: 55 },
  { name: "Garlic Naan", category: "Indian Breads", isVeg: true, price: 70, isSpecial: true },
  { name: "Cheese Naan", category: "Indian Breads", isVeg: true, price: 145 },
  { name: "Stuffed Naan", category: "Indian Breads", isVeg: true, price: 115 },
  { name: "Stuffed Naan With Gravy", category: "Indian Breads", isVeg: true, price: 210 },
  { name: "Cheese Naan With Gravy", category: "Indian Breads", isVeg: true, price: 230 },

  // ---------------- RICE & BIRYANI ----------------
  { name: "Steamed Rice", category: "Rice & Biryani", isVeg: true, price: 110 },
  { name: "Jeera Pulao", category: "Rice & Biryani", isVeg: true, price: 140 },
  { name: "Vegetable Pulao", category: "Rice & Biryani", isVeg: true, price: 220 },
  { name: "Vegetable Biryani", category: "Rice & Biryani", isVeg: true, price: 250 },
  { name: "Vegetable Fried Rice", category: "Rice & Biryani", isVeg: true, price: 250 },
  { name: "Chicken Biryani", category: "Rice & Biryani", isVeg: false, price: 300, isSpecial: true },
  { name: "Chicken Tikka Biryani", category: "Rice & Biryani", isVeg: false, price: 410 },
  { name: "Chicken Fried Rice", category: "Rice & Biryani", isVeg: false, price: 330 },
  { name: "Egg Fried Rice", category: "Rice & Biryani", isVeg: false, price: 215 },

  // ---------------- RAITA & SALADS ----------------
  { name: "Mixed Raita", category: "Raita & Salads", isVeg: true, price: 140 },
  { name: "Boondi Raita", category: "Raita & Salads", isVeg: true, price: 120 },
  { name: "Mint & Coriander Raita", category: "Raita & Salads", isVeg: true, price: 140 },
  { name: "Pineapple Raita", category: "Raita & Salads", isVeg: true, price: 180, isSpecial: true },
  { name: "Plain Curd", category: "Raita & Salads", isVeg: true, price: 65 },
  { name: "Onion Salad", category: "Raita & Salads", isVeg: true, price: 70 },
  { name: "Green Salad", category: "Raita & Salads", isVeg: true, price: 95 },
  { name: "Cream Kachumber Salad", category: "Raita & Salads", isVeg: true, price: 135 },
  { name: "Dawat Special Salad", category: "Raita & Salads", isVeg: true, price: 190, isSpecial: true },
  { name: "Tandoori Salad", category: "Raita & Salads", isVeg: true, price: 210 },
  { name: "Lemon Wedges", category: "Raita & Salads", isVeg: true, price: 20 },

  // ---------------- PAPAD & SNACKS ----------------
  { name: "Fried Papad", category: "Papad & Snacks", isVeg: true, price: 25 },
  { name: "Roasted Papad", category: "Papad & Snacks", isVeg: true, price: 25 },
  { name: "Masala Papad", category: "Papad & Snacks", isVeg: true, price: 120 },
  { name: "Plain Peanut", category: "Papad & Snacks", isVeg: true, price: 50 },
  { name: "Peanut Masala", category: "Papad & Snacks", isVeg: true, price: 145 },

  // ---------------- BEVERAGES ----------------
  { name: "Energy Drink", category: "Beverages", isVeg: true, price: 150 },
  { name: "Soft Drink", category: "Beverages", isVeg: true, price: 40 },
  { name: "Packaged Drinking Water", category: "Beverages", isVeg: true, price: 40 },
  { name: "Soda", category: "Beverages", isVeg: true, price: 40 },
  { name: "Juice", category: "Beverages", isVeg: true, price: 50 },
  { name: "Special Lassi", category: "Beverages", isVeg: true, price: 40, isSpecial: true },
  { name: "Lemonade", category: "Beverages", isVeg: true, price: 40 },
  { name: "Lemonade with Soda", category: "Beverages", isVeg: true, price: 50 },
  { name: "Tea", category: "Beverages", isVeg: true, price: 35 },
  { name: "Hot Coffee", category: "Beverages", isVeg: true, price: 50 },
  { name: "Cold Coffee", category: "Beverages", isVeg: true, price: 90 },
  { name: "Cold Coffee with Ice Cream", category: "Beverages", isVeg: true, price: 150 },

  // ---------------- DESSERT ----------------
  { name: "Ice Cream", category: "Dessert", isVeg: true, price: 80 },
  { name: "Gulab Jaman", category: "Dessert", isVeg: true, price: 60, isSpecial: true },
];
