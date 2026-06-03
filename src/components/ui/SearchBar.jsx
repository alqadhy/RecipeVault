"use client";

// Components
import { Suspense } from "react";
import Loader from "../layout/Loader";

// Icons
import { Search } from "lucide-react";

// Hooks
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// React Toastify
import { toast } from "react-toastify";

function SearchBar({ placeholder, className = "" }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get the current search query from the URL to initialize the input value
  const currentQuery = searchParams.get("q") || "";

  const [searchValue, setSearchValue] = useState(currentQuery);

  function handleSubmit(e) {
    e.preventDefault();

    const searchQuery = searchValue.trim();

    if (searchQuery == "") {
      toast.error("Search query cannot be empty!");
      return;
    }

    const params = new URLSearchParams();
    params.set("q", searchQuery);

    router.push(`/search?${params.toString()}`);
  }

  return (
    <Suspense fallback={<Loader />}>
      <form
        className={`search-bar relative ${className}`}
        onSubmit={handleSubmit}
      >
        <Search
          size={20}
          className="text-muted-foreground absolute left-4 top-1/2 -translate-y-1/2 size-5"
        />
        <input
          type="text"
          name="s"
          placeholder={placeholder}
          title="Search recipes"
          className="block w-full h-14 pl-12 pr-4 border-2 border-sidebar-border rounded-lg transition-colors focus:border-theme"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </form>
    </Suspense>
  );
}

export default SearchBar;
