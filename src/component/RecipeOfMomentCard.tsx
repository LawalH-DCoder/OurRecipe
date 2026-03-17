import { useNavigate } from "react-router-dom";
import { Clock, Users, ChefHat, ArrowRight } from "lucide-react";
import type { IRecipeOfMoment } from "../types/recipeOfMoment.types";

interface Props {
  recipe: IRecipeOfMoment;
}

const RecipeOfMomentCard: React.FC<Props> = ({ recipe }) => {
  const navigate = useNavigate();

  const {
    id,
    name,
    description,
    category,
    prepTime,
    servings,
    chef,
    ingredients,
    thumbnail,
  } = recipe;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden border border-[gainsboro] bg-[var(--bg-primary)]">
      
     
      <div className="relative min-h-90 md:min-h-120
      |t rgb">
        <img
          src={thumbnail}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

  
        <span className="absolute top-5 left-5 text-white text-[10px] font-bold tracking-[2px] uppercase px-3 py-1.5 rounded-full bg-[#F97316]">
          {category}
        </span>

 
        <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5">
            <Clock size={12} className="text-white" />
            <span className="text-white text-[11px] font-semibold">
              {prepTime}
            </span>
          </div>

          <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5">
            <Users size={12} className="text-white" />
            <span className="text-white text-[11px] font-semibold">
              {servings} servings
            </span>
          </div>
        </div>
      </div>


      <div className="flex flex-col justify-between p-8 md:p-10 bg-[var(--bg-secondary)]">
        <div>
         
          <p className="text-[6rem] leading-none mb-[-1rem] select-none text-[var(--border-light)] font-[var(--font-serif-display)]">
            01
          </p>

        
          <h3 className="text-[1.85rem] font-bold leading-tight mb-3 tracking-[-0.5px] text-[var(--text-primary)]">
            {name}
          </h3>

   
          <p className="text-sm leading-relaxed mb-6 text-[var(--text-secondary)] line-clamp-4">
            {description}
          </p>

          <div className="w-10 h-[2px] mb-6 rounded-full bg-[#F97316]" />


          <div className="flex flex-wrap gap-2 mb-8">
            {ingredients.map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="text-xs font-medium px-3 py-1 rounded-full border text-[var(--text-secondary)] border-[var(--border-medium)] bg-[var(--bg-primary)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[var(--bg-page)]">
              <ChefHat size={16} className="text-[#F97316]" />
            </div>
            <div>
              <p className="text-[10px] font-medium text-[var(--text-tertiary)]">
                Recipe by
              </p>
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                {chef}
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate(`/meal/${id}`)}
            className="ms-auto flex items-center gap-2 text-white text-sm font-bold px-5 py-3 rounded-full bg-[#F97316] hover:opacity-90 transition"
          >
            View Recipe
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeOfMomentCard;