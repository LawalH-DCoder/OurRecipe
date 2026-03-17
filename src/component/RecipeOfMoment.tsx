import { useEffect, useState } from "react";
import RecipeOfMomentCard from "./RecipeOfMomentCard";
import { useFetch } from "../hooks/use-fetch";
import type { ApiResponse, IRecipeOfMoment } from "../types/recipeOfMoment.types";



const RecipeOfMoment = () => {
  const { data, loading, error } = useFetch<ApiResponse>(
    "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
  );

  const [recipe, setRecipe] = useState<IRecipeOfMoment | null>(null);

  useEffect(() => {
    if (!data) return;

    const randomItem =
      data.meals[Math.floor(Math.random() * data.meals.length)];

    const transformed: IRecipeOfMoment = {
      id: randomItem.idIngredient,
      name: randomItem.strIngredient,
      description:
        randomItem.strDescription ??
        `${randomItem.strIngredient} is a versatile ingredient you can use in a variety of dishes.`,
      category: randomItem.strType ?? "Ingredient",
      prepTime: `${10 + Math.floor(Math.random() * 20)} mins`,
      servings: 1 + Math.floor(Math.random() * 4),
      difficulty: "Easy",
      chef: "Community Recipe",
      ingredients: [
        randomItem.strIngredient,
        "Salt",
        "Olive Oil",
        "Garlic",
      ],
      thumbnail: randomItem.strThumb,
    };

    setRecipe(transformed);
  }, [data]);

  if (loading) return <p>Loading recipe of the moment...</p>;
  if (error || !recipe) return <p className="text-red-600 font-bold">Failed to load</p>;

  return (
    <section className="w-full max-w-360 mx-auto md:px-12 sm:px-8 px-4 py-10">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-[clamp(1.8rem,4vw,1rem)] font-bold tracking-[-2px] leading-none text-[var(--text-primary)]">  
         Community Recipe
        </h2>
      </div>

      <RecipeOfMomentCard recipe={recipe} />
    </section>
  );
};

export default RecipeOfMoment;