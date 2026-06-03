// Categories
import PageBanner from "@/components/ui/PageBanner";
import MainContainer from "@/components/ui/MainContainer";
import RecipeCard from "@/components/ui/RecipeCard";

// APIs
import { filterMealsByCategory } from "@/services/filter.service";

async function CategoryPage({ params }) {
  const { id: category } = await params;
  const recipes = await filterMealsByCategory(category);

  if (category)
    return (
      <>
        <PageBanner
          heading={`${category} Recipes`}
          paragraph={`Explore ${recipes.length} delicious ${category} recipes`}
          fromColor="#FF6B35"
          toColor="#F7B32B"
        />
        <section className="recipes py-16">
          <MainContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.idMeal}
                id={recipe.idMeal}
                img={`${recipe.strMealThumb}/large`}
                title={recipe.strMeal}
                category={category}
                area={recipe.strArea || recipe.strCountry}
              />
            ))}
          </MainContainer>
        </section>
      </>
    );
}

export default CategoryPage;
