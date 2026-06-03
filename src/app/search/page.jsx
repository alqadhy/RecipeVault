// Components
import MainContainer from "@/components/ui/MainContainer";
import SearchResults from "@/components/ui/SearchResults";
import SearchDetails from "./../../components/ui/SearchDetails";

async function SearchPage({ searchParams }) {
  const { q } = await searchParams;

  return (
    <section className="search-page">
      <MainContainer>
        <SearchDetails searchQuery={q} />
        <SearchResults />
      </MainContainer>
    </section>
  );
}

export default SearchPage;
