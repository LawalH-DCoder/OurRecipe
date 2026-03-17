import { recipeOfMoment } from "../data/recipeOfMomentData";
import RecipeOfMomentCard from "./RecipeOfMomentCard";

const RecipeOfMoment = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto md:px-12 sm:px-8 px-4 py-10">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-[clamp(1.8rem,4vw,1rem)] font-[700] tracking-[-2px] leading-none text-[var(--text-primary)]">
            Recipe of the{" "}
            <em className="not-italic italic text-[#F97316]">Moment</em>
          </h2>
        </div>
      </div>

      <RecipeOfMomentCard recipe={recipeOfMoment} />
    </section>
  );
};

export default RecipeOfMoment;
