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

