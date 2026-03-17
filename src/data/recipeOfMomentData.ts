import testImage from "../assets/test-image.jpg";
import type { IRecipeOfMoment } from "../types/recipeOfMoment.types";

export const recipeOfMoment: IRecipeOfMoment = {
  id: "rom-1",
  name: "Slow-Roasted Lamb Shoulder",
  description:
    "Fall-apart tender lamb infused with garlic, rosemary, and a splash of white wine. A dish that turns any Sunday into something worth remembering.",
  category: "Dinner",
  prepTime: "3 hrs 20 min",
  servings: 6,
  difficulty: "Medium",
  chef: "Isabelle Fontaine",
  ingredients: [
    "Lamb Shoulder",
    "Rosemary",
    "Garlic",
    "White Wine",
    "Olive Oil",
    "Lemon",
  ],
  thumbnail: testImage,
};
