import { useNavigate } from "react-router-dom";
import { ArrowLeft, Youtube } from "lucide-react";
import MealDetailHeader from "../component/MealDetailHeader";
import MealDetailBody from "../component/MealDetailBody";
import type {
  IMealDetail,
  IRawMeal,
  IRandomMealResponse,
} from "../types/mealDetail.types";
import { transformMeal } from "../lib/mealDetailUtils";
import { useFetch } from "../hooks/use-fetch";
import MealDetailSkeleton from "../component/MealDetailSkeleton";

const MealDetail = () => {
  const navigate = useNavigate();

  const { data, loading, error } = useFetch<IRandomMealResponse>(
    "https://www.themealdb.com/api/json/v1/1/random.php",
  );

  const rawMeal: IRawMeal | undefined = data?.meals?.[0];
  const meal: IMealDetail | null = rawMeal ? transformMeal(rawMeal) : null;

  if (loading) return <MealDetailSkeleton />;

  if (error || !meal) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "var(--bg-page)" }}
      >
        <p style={{ color: "var(--text-secondary)" }}>Failed to load recipe.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg-page)" }}>
      <div className="max-w-[1440px] mx-auto md:px-12 sm:px-8 px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm font-semibold"
            style={{ color: "var(--text-secondary)" }}
          >
            <ArrowLeft size={16} />
            Back
          </button>

          {meal.youtube && (
            <a
              href={meal.youtube}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full border"
              style={{
                borderColor: "var(--border-medium)",
                color: "var(--text-primary)",
              }}
            >
              <Youtube size={14} style={{ color: "#F97316" }} />
              Watch on YouTube
            </a>
          )}
        </div>

        <MealDetailHeader meal={meal} />

        <div
          className="w-full h-px my-10"
          style={{ backgroundColor: "var(--border-light)" }}
        />

        <MealDetailBody meal={meal} />
      </div>
    </div>
  );
};

export default MealDetail;
