"use client";

import React, { createContext, useContext, useState, useMemo } from "react";

// 1. Define the shape of your context state
const searchResultsContext = createContext({
  searchResults: null,
  setSearchResults: null,
});

export function SearchResultsProvider({ children }) {
  // 2. Manage your state hooks here
  const [searchResults, setSearchResults] = useState([]);

  // 3. Optimize value with useMemo to prevent unnecessary rerenders
  const value = useMemo(
    () => ({
      searchResults,
      setSearchResults,
    }),
    [searchResults],
  );

  return (
    <searchResultsContext.Provider value={value}>
      {children}
    </searchResultsContext.Provider>
  );
}

// 4. Create a professional custom hook to consume this context cleanly
export function useSearchResults() {
  const context = useContext(searchResultsContext);
  return context;
}
