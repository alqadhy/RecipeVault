// Components
import Link from "next/link";

// Icons
import { Search } from "lucide-react";

function EmptySearchResults() {
  return (
    <div className="empty-search-results py-24 text-center">
      <Search size={64} className="block mx-auto text-sidebar-border" />
      <h2 className="mt-4 text-2xl font-bold text-text-sidebar-foreground">
        No results to show
      </h2>
      <p className="mt-2 mb-6 text-muted-foreground">
        Try adjusting your search
      </p>
      <Link
        href="/"
        title="Return to the home page"
        className="bg-theme px-6 py-3 rounded-lg text-white font-bold transition-colors hover:bg-theme-alt cursor-pointer"
      >
        Return Home
      </Link>
    </div>
  );
}

export default EmptySearchResults;
