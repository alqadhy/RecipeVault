// Components
import MainContainer from "./MainContainer";
import MotionContainer from "./MotionContainer";
import Link from "next/link";
import Image from "next/image";

// Icons
import { ArrowRight } from "lucide-react";

// APIs
import { getRandomMeal } from "@/services/meals.service";

async function Hero() {
  const randomMeal = await getRandomMeal();

  return (
    <section className="hero h-[600px] py-8 relative text-background">
      <div className="overlay w-full h-full absolute inset-0 z-[-1] bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      <Image
        src={`${randomMeal.strMealThumb}/large`}
        alt={randomMeal.strMeal}
        width={2000}
        height={2000}
        loading="eager"
        className="w-full h-full object-cover absolute inset-0 z-[-2]"
      />
      <MainContainer className="h-full flex items-center">
        <MotionContainer>
          <span className="inline-block bg-theme mb-4 px-4 py-2 rounded-full font-medium">
            Featured Recipe
          </span>
          <h1 className="font-playfair-display text-4xl font-bold leading-tight mb-6 md:max-w-2xl md:text-6xl">
            {randomMeal.strMeal}
          </h1>
          <p className="text-white/90 text-xl mb-8">
            {randomMeal.strCategory} • {randomMeal.strCountry} Cuisine
          </p>
          <Link
            href={`/cuisine/${randomMeal.idMeal}`}
            title="View recipe"
            className="bg-theme w-fit px-8 py-4 rounded-lg flex items-center gap-2 text-lg font-medium transition-colors hover:bg-theme-alt"
          >
            View Recipe
            <ArrowRight size={20} />
          </Link>
        </MotionContainer>
      </MainContainer>
    </section>
  );
}

export default Hero;
