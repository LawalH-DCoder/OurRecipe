import { useState } from "react";
import type { IMealDetail } from "../types/mealDetail.types";

interface Props {
  meal: IMealDetail;
}

const MealDetailBody: React.FC<Props> = ({ meal }) => {
  const { ingredients, instructions, source } = meal;
  const [tab, setTab] = useState<"ingredients" | "instructions">("ingredients");

  return (
    <div className="mt-10">
      <div className="flex border-b border-[var(--border-light)] mb-8">
        {(["ingredients", "instructions"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-1 pb-3 mr-8 text-sm font-semibold capitalize border-b-2 -mb-px transition-colors duration-150 ${
              tab === t
                ? "border-[#F97316] text-[#F97316]"
                : "border-transparent text-[var(--text-tertiary)]"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "ingredients" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0">
          {ingredients.map(({ name, measure }, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-3 border-b border-[var(--border-light)]"
            >
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-[#F97316]" />
                <span className="text-sm font-medium text-[var(--text-primary)]">
                  {name}
                </span>
              </div>

              <span className="text-xs font-semibold ml-4 text-[var(--text-secondary)]">
                {measure}
              </span>
            </div>
          ))}
        </div>
      )}

      {tab === "instructions" && (
        <div className="max-w-[720px] flex flex-col gap-7">
          {instructions.map((step, i) => (
            <div key={i} className="flex gap-5">
              <div className="shrink-0 flex flex-col items-center gap-2">
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                    i === 0 ? "bg-[#F97316]" : "bg-[var(--text-tertiary)]"
                  }`}
                >
                  {i + 1}
                </span>

                {i < instructions.length - 1 && (
                  <div className="w-px flex-1 min-h-[20px] bg-[var(--border-light)]" />
                )}
              </div>

              <p className="text-sm leading-relaxed pt-1.5 pb-4 text-[var(--text-secondary)]">
                {step}
              </p>
            </div>
          ))}

          {source && (
            <a
              href={source}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold underline underline-offset-2 mt-2 text-[var(--text-tertiary)]"
            >
              View original recipe →
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default MealDetailBody;
