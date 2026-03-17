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
