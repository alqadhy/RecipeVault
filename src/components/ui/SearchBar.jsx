"use client";

// Icons
import { Search } from "lucide-react";

function SearchBar({
  placeholder,
  title = "",
  className = "",
  searchValue,
  setSearchValue,
  onSubmitFn,
}) {
  return (
    <form className={`search-bar relative ${className}`} onSubmit={onSubmitFn}>
      <Search
        size={20}
        className="text-muted-foreground absolute left-4 top-1/2 -translate-y-1/2 size-5"
      />
      <input
        type="text"
        name="s"
        placeholder={placeholder}
        title={title}
        className="block w-full h-14 pl-12 pr-4 border-2 border-sidebar-border rounded-lg transition-colors focus:border-theme"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </form>
  );
}

export default SearchBar;
