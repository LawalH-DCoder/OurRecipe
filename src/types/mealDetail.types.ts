export interface IRawMeal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string | null;
  strSource: string | null;
  strTags: string | null;
  [key: `strIngredient${number}`]: string;
  [key: `strMeasure${number}`]: string;
}

export interface IIngredient {
  name: string;
  measure: string;
}

export interface IMealDetail {
  id: string;
  name: string;
  category: string;
  area: string;
  instructions: string[];
  thumbnail: string;
  youtube: string | null;
  source: string | null;
  tags: string[];
  ingredients: IIngredient[];
}
