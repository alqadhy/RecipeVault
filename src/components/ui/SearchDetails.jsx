"use client";

// Hooks
import { useEffect } from "react";

// Contexts
import { useSearchResults } from "@/contexts/searchResultsContext";

// APIs
import { searchMealsByName } from "@/services/search.service";

function SearchDetails({ searchQuery }) {
  const { searchResults, setSearchResults } = useSearchResults();

  useEffect(() => {
    async function getSeatchResults() {
      const results = await searchMealsByName(searchQuery);

      setSearchResults(results || []);
    }

    getSeatchResults();
  }, [searchQuery]);

  return (
    <section className="pt-12 pb-6">
      <h1 className="text-sidebar-foreground font-playfair-display text-4xl md:text-5xl font-bold mb-6">
        Search Results For {searchQuery}
      </h1>

      <p className="text-muted-foreground">
        Found {searchResults.length} recipes
      </p>
    </section>
  );
}

export default SearchDetails;
