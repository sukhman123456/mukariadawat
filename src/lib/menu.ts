import roti from "@/assets/dish-roti.jpg";
import paneerTikka from "@/assets/dish-paneer-tikka.jpg";
import raita from "@/assets/dish-raita.jpg";
import riceBowl from "@/assets/dish-rice-bowl.jpg";

export type Dish = {
  name: string;
  image: string;
  alt: string;
  course: string;
};

export const favourites: Dish[] = [
  {
    name: "Dawat Special Roti",
    course: "From the tandoor",
    image: roti,
    alt: "Freshly made Indian roti being brushed with butter",
  },
  {
    name: "Paneer Tikka",
    course: "Starters",
    image: paneerTikka,
    alt: "Paneer tikka skewers with peppers and onion on a slate plate",
  },
  {
    name: "Pineapple Raita",
    course: "Accompaniments",
    image: raita,
    alt: "Pineapple raita served in a small ceramic bowl",
  },
  {
    name: "Rice Bowl",
    course: "Rice",
    image: riceBowl,
    alt: "Steaming bowl of basmati rice with fried onion garnish",
  },
];

export const MENU_PRICE = "[MENU PRICE]";
export const MENU_DESCRIPTION = "[MENU DESCRIPTION]";
