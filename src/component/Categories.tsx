import testImage from "../assets/test-image.jpg";
import CategoryCard from "./CategoriesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/swiper-bundle.css";

const data = [
  { name: "Breakfast", thumbnail: testImage, id: "1" },
  { name: "Lunch", thumbnail: testImage, id: "2" },
  { name: "Dinner", thumbnail: testImage, id: "3" },
  { name: "Snack", thumbnail: testImage, id: "4" },
  { name: "Dessert", thumbnail: testImage, id: "5" },
  { name: "Drinks", thumbnail: testImage, id: "6" },
];

const Categories = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="w-full max-w-[1440px] mx-auto md:px-12 sm:px-8 px-4 py-10 overflow-hidden">
      <div className="mb-8">
        <span className="inline-block rounded-full px-3 py-1 text-[10px] font-bold tracking-[2px] uppercase mb-3 text-white bg-[#F97316]">
          Explore
        </span>

        <h2 className="text-[clamp(1.8rem,4vw,1rem)] font-[700] tracking-[-2px] leading-none">
          Browse by{" "}
          <em className="not-italic italic text-[#F97316]">Categories</em>
        </h2>
      </div>

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
          {data.map(({ name, thumbnail, id }) => (
            <SwiperSlide key={id} className="!w-auto">
              <div className="transition-transform duration-300 hover:-translate-y-2">
                <CategoryCard name={name} id={id} thumbnail={thumbnail} />
              </div>
            </SwiperSlide>
          ))}

          <SwiperSlide className="!w-8 pointer-events-none" />
        </Swiper>
      </div>
    </section>
  );
};

export default Categories;
