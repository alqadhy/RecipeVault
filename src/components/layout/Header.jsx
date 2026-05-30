// Components
import Image from "next/image";
import MainContainer from "../ui/MainContainer";
import Link from "next/link";
import SearchBar from "../ui/SearchBar";

// Logo Icon
import logoIcon from "../../../public/imgs/logo_icon.png";

function Logo() {
  return (
    <Link href="/" title="RecipeVault" className="flex items-center gap-2">
      <Image src={logoIcon} alt="RecipeVault" className="w-[32px] h-[32px]" />
      <span className="font-playfair-display text-2xl font-bold">
        RecipeVault
      </span>
    </Link>
  );
}

function Header() {
  return (
    <header className="bg-white py-4 shadow-sm sticky inset-0">
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
