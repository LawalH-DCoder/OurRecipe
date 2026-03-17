import { useNavigate } from "react-router-dom";

interface ICategoryCard {
  name: string;
  thumbnail: string;
  id: string;
}

const CategoryCard: React.FC<ICategoryCard> = ({ name, thumbnail, id }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/?category=${id}`)}
      className="group flex flex-col items-center gap-3 cursor-pointer w-[100px] select-none"
    >
      <div className="w-[80px] h-[80px] rounded-full p-[2.5px] bg-[linear-gradient(135deg,#F97316,#e5e5e5)]">
        <div className="w-full h-full rounded-full overflow-hidden bg-neutral-100">
          <img
            src={thumbnail}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>

      <span className="text-xs font-semibold text-neutral-700 group-hover:text-[#F97316] transition-colors duration-200 text-center">
        {name}
      </span>
    </div>
  );
};

export default CategoryCard;
