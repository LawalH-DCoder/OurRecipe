export interface IMeal {
  id: string;
  name: string;
  category: string;
  prepTime: string;
  rating: number;
  ratingCount: number;
  author: string;
  thumbnail: string;
  featured?: boolean;
  mealName: string;
  mealThumb: string;
  instructions: string;
}

export interface ApiIngredient {
  idIngredient: string;
  strIngredient: string;
  strDescription: string | null;
  strThumb: string;
  strType: string | null;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
}

export interface ApiResponse {
  meals: ApiIngredient[];
}

