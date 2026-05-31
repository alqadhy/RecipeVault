"use client";

// Components
import Link from "next/link";
import Image from "next/image";

// Logo Icon
import logoIcon from "../../../public/imgs/logo_icon.png";

// Hooks
import { usePathname } from "next/navigation";

function Logo() {
  const currentPath = usePathname();

  const handleClick = (e) => {
    if (currentPath == "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Link
      href="/"
      title="RecipeVault"
      className="group flex items-center gap-2"
      onClick={handleClick}
    >
      <Image
        src={logoIcon}
        alt="RecipeVault"
        className="w-[32px] h-[32px] transition-transform group-hover:scale-110"
      />
      <span className="font-playfair-display text-2xl font-bold">
        RecipeVault
      </span>
    </Link>
  );
}

export default Logo;
