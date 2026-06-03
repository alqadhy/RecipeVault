// Components
import MainContainer from "../ui/MainContainer";
import Logo from "../ui/Logo";
import SearchBar from "../ui/SearchBar";

function Header() {
  return (
    <header className="bg-white py-4 shadow-sm sticky inset-0 z-1000">
      <MainContainer className="flex flex-wrap justify-between items-center gap-x-8 gap-y-3">
        <Logo />
        <SearchBar
          placeholder="Search recipes..."
          className="flex-grow-1 max-w-xl"
        />
      </MainContainer>
    </header>
  );
}

export default Header;
