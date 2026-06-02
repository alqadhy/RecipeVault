"use client";

// Components
import MainContainer from "./MainContainer";
import RecipeCard from "@/components/ui/RecipeCard";

// Icons
import { X } from "lucide-react";

// Contexts
import { useSearchResults } from "@/contexts/searchResultsContext";

function SearchResults({ meals }) {
  const { searchResults, setSearchResults } = useSearchResults();

  setSearchResults([...meals]);

  return (
    <section className="search-results pb-12">
      <MainContainer>
        <div className="row flex flex-wrap items-center gap-3 mb-6 text-sm">
          <span className="text-muted-foreground">Active filters:</span>
          <button className="text-sm text-muted-foreground hover:text-theme transition-colors flex items-center gap-1">
            <X size={16} /> Clear all
          </button>
        </div>
        <p className="text-muted-foreground mb-6">
          Found {searchResults.length} recipes
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
      </MainContainer>
    </section>
  );
}

export default SearchResults;
