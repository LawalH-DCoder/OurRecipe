import CategoryCard from "./CategoriesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/swiper-bundle.css";
import { useFetch } from "../hooks/use-fetch";
import type { ICategoriesResponse } from "../types/categories";


const Categories = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const { data, loading, error } = useFetch<ICategoriesResponse>(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  const categories = data?.categories ?? [];

  return (
    <section className="w-full max-w-360 mx-auto md:px-12 sm:px-8 px-4 py-10 overflow-hidden">
      <div className="mb-8">
        <span className="inline-block rounded-full px-3 py-1 text-[10px] font-bold tracking-[2px] uppercase mb-3 text-white bg-[#F97316]">
          Explore
        </span>

        <h2 className="text-[clamp(1.8rem,4vw,1rem)] font-bold tracking-[-2px] leading-none text-[#F97316]">
          Browse by Categories </h2>
      </div>

    
      {loading && (
        <div className="flex gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-3 w-30">
              <div className="w-30 h-30 rounded-full bg-neutral-200 animate-pulse" />
              <div className="w-16 h-3 rounded bg-neutral-200 animate-pulse" />
            </div>
          ))}
        </div>
      )}

   {/* error */}
      {error && (
        <p className="text-sm text-red-500">
          Failed to load categories. Please try again.
        </p>
      )}

      {/* Data  */}
      {!loading && !error && (
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-8 z-10 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-white to-transparent" />

          <Swiper
            modules={[FreeMode, Mousewheel]}
            freeMode={{ enabled: true, momentum: true, momentumRatio: 0.6 }}
            mousewheel={{ forceToAxis: true }}
            slidesPerView="auto"
            spaceBetween={16}
            grabCursor
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="!overflow-visible"
          >
            {categories.map(({ idCategory, strCategory, strCategoryThumb }) => (
              <SwiperSlide key={idCategory} className="!w-auto">
                <div className="transition-transform duration-300 hover:-translate-y-2">
                  <CategoryCard
                    name={strCategory}
                    id={idCategory}
                    thumbnail={strCategoryThumb}
                  />
                </div>
              </SwiperSlide>
            ))}

            <SwiperSlide className="!w-8 pointer-events-none" />
          </Swiper>
        </div>
      )}
    </section>
  );
};

export default Categories;