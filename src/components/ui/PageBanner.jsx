// Components
import MainContainer from "./MainContainer";
import Link from "next/link";

// Icnos
import { ArrowLeft } from "lucide-react";

function PageBanner({ heading, paragraph, fromColor, toColor }) {
  return (
    <div
      className={`page-banner bg-gradient-to-r from-[${fromColor}] to-[${toColor}] text-white py-20`}
    >
      <MainContainer>
        <Link
          href="/"
          title="Return to the home page"
          className="flex items-center gap-2 text-white/90 transition-colors hover:text-white"
        >
          <ArrowLeft size={20} /> Back to home
        </Link>
        <h1 className="font-playfair-display text-3xl font-bold leading-tight mt-6 mb-4 md:text-5xl">
          {heading}
        </h1>
        <p className="text-white/90 md:text-xl">{paragraph}</p>
      </MainContainer>
    </div>
  );
}

export default PageBanner;
