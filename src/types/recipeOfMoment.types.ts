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

export interface ApiIngredient {
  idIngredient: string;
  strIngredient: string;
  strDescription: string | null;
  strThumb: string;
  strType: string | null;
}

export interface ApiResponse {
  meals: ApiIngredient[];
}
