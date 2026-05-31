// Components
import MainContainer from "../ui/MainContainer";
import Logo from "../ui/Logo";
import SearchBar from "../ui/SearchBar";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-white py-4 shadow-sm sticky inset-0 z-1000">
      <MainContainer className="flex flex-wrap justify-between items-center gap-x-8 gap-y-3">
        <Logo />
        <SearchBar
          placeholder="Search recipes..."
          className="flex-grow-1 max-w-xl"
        />
        <Link
          href="/search"
          title="Browse all recipes"
          className="bg-theme px-6 py-3 rounded-lg text-white font-bold transition-colors hover:bg-theme-alt"
        >
          Browse All
        </Link>
      </MainContainer>
    </header>
  );
}

export default Header;
