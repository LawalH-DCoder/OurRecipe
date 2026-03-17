export interface IRecipeOfMoment {
  id: string;
  name: string;
  description: string;
  category: string;
  prepTime: string;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  chef: string;
  ingredients: string[];
  thumbnail: string;
}
