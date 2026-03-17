import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, Youtube } from "lucide-react";
import MealDetailHeader from "../component/MealDetailHeader";
import MealDetailBody from "../component/MealDetailBody";
import type { IMealDetail, IRawMeal } from "../types/mealDetail.types";
import { transformMeal } from "../lib/mealDetailUtils";

const MealDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [meal, setMeal] = useState<IMealDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        const raw: IRawMeal = data.meals?.[0];
        if (raw) setMeal(transformMeal(raw));
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "var(--bg-page)" }}
      >
        <div className="flex flex-col items-center gap-3">
          <div
            className="w-10 h-10 rounded-full border-2 animate-spin"
            style={{ borderColor: "#F97316", borderTopColor: "transparent" }}
          />
          <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>
            Loading recipe…
          </p>
        </div>
      </div>
    );
  }

  if (!meal) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "var(--bg-page)" }}
      >
        <p style={{ color: "var(--text-secondary)" }}>Recipe not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg-page)" }}>
      <div className="max-w-[1440px] mx-auto md:px-12 sm:px-8 px-4 py-8">
        {/* Top bar: back + youtube */}
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

        {/* Header: image left + meta right */}
        <MealDetailHeader meal={meal} />

        {/* Divider */}
        <div
          className="w-full h-px my-10"
          style={{ backgroundColor: "var(--border-light)" }}
        />

        {/* Tabbed body: ingredients + instructions */}
        <MealDetailBody meal={meal} />
      </div>
    </div>
  );
};

export default MealDetail;
