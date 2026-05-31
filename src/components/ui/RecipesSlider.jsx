"use client";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Components
import RecipeCard from "./RecipeCard";

function RecipesSlider({ recipes }) {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={24}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 5,
        },
      }}
    >
      {recipes.map((recipe) => (
        <SwiperSlide key={recipe.id}>
          <RecipeCard
            id={recipe.idMeal}
            img={`${recipe.strMealThumb}/large`}
            title={recipe.strMeal}
            area={recipe.strArea || recipe.strCountry}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default RecipesSlider;
