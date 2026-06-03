// Contexts
import { SearchResultsProvider } from "@/contexts/searchResultsContext";

function SearchPageLayout({ children }) {
  return <SearchResultsProvider>{children}</SearchResultsProvider>;
}

export default SearchPageLayout;
