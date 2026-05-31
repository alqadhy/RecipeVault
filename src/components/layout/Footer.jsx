// Components
import MainContainer from "../ui/MainContainer";
import Link from "next/link";

// Icons
import { Heart } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-card-foreground mt-24 py-12">
      <MainContainer>
        <p className="flex flex-wrap items-center justify-center gap-2 text-secondary">
          Made with <Heart size={16} fill="var(--theme)" color="var(--theme)" />{" "}
          using TheMealDB API by{" "}
          <Link
            href="https://www.linkedin.com/in/alqadhy/"
            target="_blank"
            title="My linkedin"
            className="text-theme font-bold transition-colors hover:text-theme-alt"
          >
            Abdelrahman Alqadhy
          </Link>
        </p>
        <p className="mt-4 text-muted-foreground text-center">
          A modern recipe platform for discovering meals from around the world
        </p>
      </MainContainer>
    </footer>
  );
}

export default Footer;
