"use client";

// Components
import MainContainer from "@/components/ui/MainContainer";
import SearchBar from "@/components/ui/SearchBar";
import FiltersBox from "./FiltersBox";

// Icons
import { Funnel } from "lucide-react";

// Hooks
import { useState } from "react";

// APIs
import { searchMealsByName } from "@/services/search.service";

// Contexts
import { useSearchResults } from "@/contexts/searchResultsContext";

function SearchAndFilteration({ allCategories, allAreas }) {
  const [isShown, setIsShown] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { setSearchResults } = useSearchResults();

  async function handleSearch(e) {
    e.preventDefault();
    const meals = await searchMealsByName(searchValue);
    setSearchResults(meals);
  }

  return (
    <section className="search-layout pt-12 pb-8">
      <MainContainer>
        <h1 className="text-sidebar-foreground font-playfair-display text-4xl md:text-5xl font-bold mb-6">
          Search Recipes
        </h1>

        <div className="row flex flex-wrap items-center gap-4">
          <SearchBar
            title="Search recipes"
            placeholder="Search by recipe name..."
            className="flex-grow"
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onSubmitFn={handleSearch}
          />
          <button
            className="px-6 py-3 border-2 border-sidebar-border rounded-lg transition-colors flex items-center gap-2 font-medium cursor-pointer hover:border-theme hover:text-theme"
            onClick={() => setIsShown((prev) => !prev)}
          >
            <Funnel size={20} /> Filters
          </button>
        </div>

        <FiltersBox
          isShown={isShown}
          allCategories={allCategories}
          allAreas={allAreas}
        />
      </MainContainer>
    </section>
  );
}

export default SearchAndFilteration;
