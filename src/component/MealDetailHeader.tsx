import { Clock, Users, ChefHat, Bookmark, Star } from "lucide-react";
import type { IMealDetail } from "../types/mealDetail.types";

interface Props {
  meal: IMealDetail;
}

const MetaPill = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col items-center justify-center px-5 py-3 rounded-xl border text-center border-[var(--border-medium)] bg-[var(--bg-primary)]">
    <span className="text-[10px] font-semibold uppercase tracking-[1.2px] mb-0.5 text-[var(--text-tertiary)]">
      {label}
    </span>
    <span className="text-sm font-bold text-[var(--text-primary)]">
      {value}
    </span>
  </div>
);

const MealDetailHeader: React.FC<Props> = ({ meal }) => {
  const { name, category, area, thumbnail, tags, ingredients } = meal;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
      <div className="rounded-2xl overflow-hidden aspect-[4/3] w-full">
        <img
          src={thumbnail}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[10px] font-bold tracking-[1.5px] uppercase px-3 py-1.5 rounded-full text-white bg-[#F97316]">
            {category}
          </span>

          <span className="text-sm flex items-center gap-1 text-[var(--text-tertiary)]">
            <ChefHat size={13} />
            {area} Cuisine
          </span>
        </div>

        <h1 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-tight tracking-[-1px] text-[var(--text-primary)]">
          {name}
        </h1>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                size={15}
                fill={i <= 4 ? "#F97316" : "none"}
                stroke="#F97316"
                strokeWidth={1.5}
              />
            ))}
          </div>

          <span className="text-sm font-medium text-[var(--text-secondary)]">
            4.0
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <MetaPill label="Prep" value="20 min" />
          <MetaPill label="Cook" value="1 hr 50 min" />
          <MetaPill label="Serves" value="4 – 6" />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <Users size={13} className="text-[var(--text-tertiary)]" />
            <span className="text-sm text-[var(--text-secondary)]">
              {ingredients.length} ingredients
            </span>
          </div>

          <span className="text-sm font-semibold px-3 py-1 rounded-full bg-[var(--bg-secondary)] text-[var(--text-primary)]">
            Easy
          </span>
        </div>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full border border-[var(--border-light)] text-[var(--text-secondary)]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <button className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-white mt-1 bg-[#F97316]">
          <Bookmark size={15} />
          Save Recipe
        </button>
      </div>
    </div>
  );
};

export default MealDetailHeader;
