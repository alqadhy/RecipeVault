// Components
import MainContainer from "@/components/ui/MainContainer";
import Link from "next/link";
import Hero from "@/components/ui/Hero";
import RecipesSlider from "@/components/ui/RecipesSlider";

// Icons
import { ArrowLeft } from "lucide-react";

// APIs
import { getMealById, getMealIngredients } from "@/services/meals.service";
import { filterMealsByCategory } from "@/services/filter.service";

// React Video Player
import { YouTubeEmbed } from "@next/third-parties/google";
import styles from "@/styles/video.module.css";

// Utils
import shuffleArray from "@/utils/shuffleArray";

async function RecipeDetailsPage({ params }) {
  const { id } = await params;
  const meal = await getMealById(id);

  const similarRecipes = await filterMealsByCategory(meal.strCategory);
  const shuffledRecipes = shuffleArray(
    [...similarRecipes].filter((r) => r.idMeal != id),
  );
  const displayableRecipes = shuffledRecipes.slice(0, 8);

  const ingredients = getMealIngredients(meal);

  return (
    <>
      <div className="top-bar py-6">
        <MainContainer>
          <Link
            href="/"
            title="Return to the home page"
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-theme"
          >
            <ArrowLeft size={20} /> Back to home
          </Link>
        </MainContainer>
      </div>

      <Hero
        img={meal.strMealThumb}
        alt={meal.strMeal}
        alignItems="items-end"
        className="h-[500px]"
      >
        <div className="row flex items-center gap-3 mb-4">
          <span className="inline-block bg-theme mb-4 px-4 py-2 rounded-full font-medium">
            {meal.strCategory}
          </span>
          <span className="inline-block bg-white/90 mb-4 px-4 py-2 rounded-full text-sidebar-foreground font-medium">
            {meal.strArea || meal.strCountry}
          </span>
        </div>
        <h1 className="font-playfair-display text-3xl font-bold leading-tight mt-6 mb-4 md:text-5xl">
          {meal.strMeal}
        </h1>
      </Hero>

      <section className="recipe py-16">
        <MainContainer className="grid lg:grid-cols-3 items-start gap-12">
          <aside className="ingredients bg-white rounded-xl p-8 shadow-md lg:sticky top-24">
            <h2 className="text-sidebar-foreground font-playfair-display text-2xl font-bold mb-6">
              Ingredients
            </h2>
            <ul className="grid gap-3">
              {ingredients.map((i) => (
                <li
                  key={i.id}
                  className="pl-4 relative before:content-[''] before:bg-theme before:w-[8px] before:h-[8px] before:rounded-full before:absolute before:top-[50%] before:left-0 before:translate-[-50%]"
                >
                  <span className="font-medium">{i.ingredient}</span>
                  <span className="text-muted-foreground"> - {i.measure}</span>
                </li>
              ))}
            </ul>
          </aside>
          <div className="content lg:col-span-2">
            <div className="instructions">
              <h2 className="text-sidebar-foreground font-playfair-display text-2xl font-bold mb-6">
                Instructions
              </h2>
              {meal.strInstructions.split("\r\n").map((p, i) => (
                <p
                  key={i}
                  className="text-sidebar-foreground mb-4 leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>
            <div className="video-tutorial">
              <h2 className="text-sidebar-foreground font-playfair-display text-2xl font-bold mb-6">
                Video Tutorial
              </h2>
              <div className={styles.videoWrapper}>
                <YouTubeEmbed
                  videoid={meal.strYoutube.split("v=")[1]}
                  params="controls=1&loop=1"
                />
              </div>
            </div>
          </div>
        </MainContainer>
      </section>

      <section className="more-recipes bg-white py-16">
        <MainContainer>
          <h2 className="text-sidebar-foreground font-playfair-display text-2xl font-bold mb-6">
            More {meal.strCategory} Recipes
          </h2>
          <RecipesSlider recipes={displayableRecipes} />
        </MainContainer>
      </section>
    </>
  );
}

export default RecipeDetailsPage;
