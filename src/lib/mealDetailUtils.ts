import { useState } from "react";
import type { IRawMeal, IMealDetail } from "../types/mealDetail.types";

export const transformMeal = (raw: IRawMeal): IMealDetail => {
  const ingredients = Array.from({ length: 20 }, (_, i) => ({
    name: raw[`strIngredient${i + 1}`]?.trim() ?? "",
    measure: raw[`strMeasure${i + 1}`]?.trim() ?? "",
  })).filter((item) => item.name !== "");

  const instructions = raw.strInstructions
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter(Boolean);

  const tags = raw.strTags ? raw.strTags.split(",").map((t) => t.trim()) : [];

  return {
    id: raw.idMeal,
    name: raw.strMeal,
    category: raw.strCategory,
    area: raw.strArea,
    instructions,
    thumbnail: raw.strMealThumb,
    youtube: raw.strYoutube || null,
    source: raw.strSource || null,
    tags,
    ingredients,
  };
};
