import { ChevronRight } from "lucide-react";
import DiscoveryCard from "./DiscoveryCard";
import { useFetch } from "../hooks/use-fetch";
import type { ApiResponse, IMeal } from "../types/discovery.types";


const LatestDiscovery = () => {
  const { data, loading, error } = useFetch<ApiResponse>(
    "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
  );

  // transform API → UI format
  const meals: IMeal[] =
    data?.meals.slice(0, 20).map((item) => ({
      id: item.idIngredient,
      name: item.strIngredient,
      category: item.strType ?? "Ingredient",
      prepTime: "—",
      rating: Math.random() * 5, // fake for now
      ratingCount: Math.floor(Math.random() * 200),
      author: "ThemealDB",
      thumbnail: item.strThumb,
    })) ?? [];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <section className="w-full max-w-360 mx-auto md:px-12 sm:px-8 px-4 py-10">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-[clamp(1.8rem,4vw,1.5rem)] font-bold tracking-[-2px] leading-none text-[var(--text-primary)]">
          Latest <em className="not-italic italic">Discovery</em>
        </h2>

        <a
          href="/explore"
          className="hidden sm:inline-flex items-center gap-1.5 text-md font-semibold pb-0.5 border-b text-[var(--text-secondary)] border-[var(--border-medium)]"
        >
          View all <ChevronRight className="w-6 h-6" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
        {meals.map((meal) => (
          <DiscoveryCard key={meal.id} meal={meal} />
        ))}
      </div>
    </section>
  );
};

export default LatestDiscovery;