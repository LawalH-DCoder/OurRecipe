import { useNavigate } from "react-router-dom";
import type { IMeal } from "../types/discovery.types";
import { Star } from "lucide-react";

interface Props {
  meal: IMeal;
}

const StarRating = ({ rating, count }: { rating: number; count: number }) => (
  <div className="flex flex-col gap-1">
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={13}
          fill={i <= Math.round(rating) ? "#F97316" : "none"}
          stroke="#F97316"
          strokeWidth={1.5}
        />
      ))}
    </div>

    <span className="text-xs text-[var(--text-tertiary)]">{count} ratings</span>
  </div>
);

const DiscoveryCard: React.FC<Props> = ({ meal }) => {
  const navigate = useNavigate();
  const { id, name, thumbnail, rating, ratingCount } = meal;

  return (
    <div
      onClick={() => navigate(`/meal/${id}`)}
      className="flex items-start gap-4 cursor-pointer group"
    >
      <div className="w-[90px] h-[90px] rounded-xl overflow-hidden shrink-0">
        <img
          src={thumbnail}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-2 pt-1">
        <h3 className="text-sm font-bold leading-snug text-[var(--text-primary)] group-hover:text-[#F97316] transition-colors duration-150">
          {name}
        </h3>

        <StarRating rating={rating} count={ratingCount ?? 0} />
      </div>
    </div>
  );
};

export default DiscoveryCard;
