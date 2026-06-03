"use client";

// Components
import RecipeCard from "@/components/ui/RecipeCard";
import EmptySearchResults from "./EmptySearchResults";

// Contexts
import { useSearchResults } from "@/contexts/searchResultsContext";

function SearchResults() {
  const { searchResults } = useSearchResults();

  return searchResults.length == 0 ? (
    <EmptySearchResults />
  ) : (
    <div className="search-results pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {searchResults.map((meal) => (
        <RecipeCard
          key={meal.idMeal}
          id={meal.idMeal}
          img={`${meal.strMealThumb}/large`}
          title={meal.strMeal}
          area={meal.strArea || meal.strCountry}
        />
      ))}
    </div>
  );
}

export default SearchResults;
