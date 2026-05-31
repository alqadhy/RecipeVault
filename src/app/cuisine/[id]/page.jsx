// Components
import PageBanner from "@/components/ui/PageBanner";
import MainContainer from "@/components/ui/MainContainer";
import RecipeCard from "@/components/ui/RecipeCard";

// APIs
import { filterMealsByArea } from "@/services/filter.service";

async function CuisinePage({ params }) {
  const { id: area } = await params;
  const recipes = await filterMealsByArea(area);

  return (
    <>
      <PageBanner
        heading={`${area} Cuisines`}
        paragraph={`Discover ${recipes ? recipes.length : 0} authentic ${area} recipes`}
        fromColor="#004E89"
        toColor="#0077B6"
      />

      <section className="recipes py-16">
        <MainContainer>
          {recipes ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {recipes.map((recipe) => (
                <RecipeCard
                  key={recipe.idMeal}
                  id={recipe.idMeal}
                  img={`${recipe.strMealThumb}/large`}
                  title={recipe.strMeal}
                  area={recipe.strArea || recipe.strCountry}
                />
              ))}
            </div>
          ) : (
            <div className="no-results py-24 text-center">
              <h2 className="text-2xl font-bold text-sidebar-foreground mb-2">
                No recipes found
              </h2>
              <p className="text-muted-foreground">
                Check back later for more {area} recipes
              </p>
            </div>
          )}
        </MainContainer>
      </section>
    </>
  );
}

export default CuisinePage;
