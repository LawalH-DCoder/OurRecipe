import { MapPin, Tag, Youtube } from "lucide-react";
import type { IMealDetail } from "../types/mealDetail.types";

interface Props {
  meal: IMealDetail;
}

const MealDetailHero: React.FC<Props> = ({ meal }) => {
  const { name, category, area, thumbnail, youtube, tags } = meal;

  return (
    <div className="relative w-full h-[55vh] min-h-[380px] rounded-3xl overflow-hidden">
      <img
        src={thumbnail}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

      {youtube && (
        <a
          href={youtube}
          target="_blank"
          rel="noreferrer"
          className="absolute top-5 right-5 flex items-center gap-2 text-white text-xs font-bold px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 bg-[rgba(0,0,0,0.4)]"
        >
          <Youtube size={14} />
          Watch
        </a>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="flex items-center gap-1.5 text-white text-[10px] font-bold tracking-[1.5px] uppercase px-3 py-1.5 rounded-full bg-[#F97316]">
            {category}
          </span>

          <span className="flex items-center gap-1 text-white/70 text-xs">
            <MapPin size={11} />
            {area}
          </span>

          {tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 text-white/60 text-[10px] font-medium px-2.5 py-1 rounded-full border border-white/20"
            >
              <Tag size={9} />
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-white font-bold leading-tight tracking-[-1px] text-[clamp(2rem,5vw,3.2rem)] font-[var(--font-serif-display)]">
          {name}
        </h1>
      </div>
    </div>
  );
};

export default MealDetailHero;
