// Components
import Hero from "@/components/ui/Hero";
import MainContainer from "@/components/ui/MainContainer";
import MainHeading from "@/components/ui/MainHeading";
import Link from "next/link";
import Image from "next/image";
import RecipeCard from "@/components/ui/RecipeCard";

// Icons
import { ArrowRight } from "lucide-react";

// APIs
import {
  getAllCategories,
  getAllAreas,
  getMultipleRandomMeals,
} from "@/services/meals.service";

// Utils
import shuffleArray from "@/utils/shuffleArray";

async function Home() {
  const [allCategories, allAreas, multipleRandomMeals] = await Promise.all([
    getAllCategories(),
    getAllAreas(),
    getMultipleRandomMeals(12),
  ]);
  const displayableAreas = shuffleArray([...allAreas]).slice(0, 12);

  return (
    <>
      <Hero />

      <section className="categories py-16">
        <MainContainer>
          <MainHeading text="Browse by Category" />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {allCategories.map((cat) => (
              <Link
                key={cat.idCategory}
                href={`/category/${cat.strCategory}`}
                title={cat.strCategory}
                className="cat-box relative rounded-xl overflow-hidden shadow-md transition-all hover:shadow-xl hover:scale-[1.05]"
              >
                <div className="overlay absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <Image
                  src={`${cat.strCategoryThumb}`}
                  alt={cat.strCategory}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
                <h3 className="text-2xl font-bold text-white drop-shadow-lg absolute top-[50%] left-[50%] z-2 translate-[-50%]">
                  {cat.strCategory}
                </h3>
              </Link>
            ))}
          </div>
        </MainContainer>
      </section>

      <section className="areas bg-white py-16">
        <MainContainer>
          <MainHeading text="Explore World Cuisines" />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {displayableAreas.map((area) => (
              <Link
                key={area.strCountry}
                href={`/cuisine/${area.strArea}`}
                title={area.strArea}
                className="p-6 border-2 border-sidebar-border rounded-lg text-center transition-all group hover:border-theme hover:bg-theme/10"
              >
                <span className="font-semibold text-sidebar-foreground transition-colors group-hover:text-theme">
                  {area.strArea}
                </span>
              </Link>
            ))}
          </div>
        </MainContainer>
      </section>

      <section className="recipes py-16">
        <MainContainer>
          <div className="row flex flex-wrap items-center justify-between gap-x-15 gap-y-2 mb-8">
            <MainHeading text="Discover New Recipes" />
            <Link
              href="/search"
              title="View all recipes"
              className="text-theme hover:text-theme-alt font-medium flex items-center gap-2"
            >
              View All <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {multipleRandomMeals.map((meal) => (
              <RecipeCard
                key={meal.idMeal}
                id={meal.idMeal}
                img={`${meal.strMealThumb}/large`}
                title={meal.strMeal}
                category={meal.strCategory}
                area={meal.strArea || meal.strCountry}
              />
            ))}
          </div>
        </MainContainer>
      </section>
    </>
  );
}

export default Home;
