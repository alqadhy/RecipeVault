// Components
import MainContainer from "./MainContainer";
import Link from "next/link";

// Icons
import { ArrowRight } from "lucide-react";

// APIs
import { getRandomMeal } from "@/services/meals.service";
import Image from "next/image";

async function Hero() {
  const randomMeal = await getRandomMeal();

  console.log(randomMeal);

  return (
    <section className="hero">
      <Image
        src={`${randomMeal.strMealThumb}/large`}
        alt={randomMeal.strMeal}
        width={200}
        height={200}
        loading="eager"
      />
      <MainContainer>
        <span>Featured Recipe</span>
        <h1>{randomMeal.strMeal}</h1>
        <p>
          {randomMeal.strCategory} • {randomMeal.strCountry} Cuisine
        </p>
        <Link href={`/cusine/${randomMeal.idMeal}`}>
          View Recipe
          <ArrowRight size={16} />
        </Link>
      </MainContainer>
    </section>
  );
}

export default Hero;
