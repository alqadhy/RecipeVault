// Icons
import { Search } from "lucide-react";

function SearchBar({ placeholder, className = "" }) {
  return (
    <form className={`search-bar relative ${className}`}>
      <Search
        size={20}
        className="text-muted-foreground absolute left-4 top-1/2 -translate-y-1/2 size-5"
      />
      <input
        type="text"
        name="s"
        placeholder={placeholder}
        className="block w-full h-14 pl-12 pr-4 border-2 border-sidebar-border rounded-lg transition-colors focus:border-theme"
      />
    </form>
  );
}

export default SearchBar;
