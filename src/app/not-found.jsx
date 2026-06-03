// Components
import MainContainer from "@/components/ui/MainContainer";
import Link from "next/link";

// Icons
import { TriangleAlert } from "lucide-react";

function NotFound() {
  return (
    <section className="not-found-page py-24">
      <MainContainer className="grid justify-center gap-4 text-center">
        <TriangleAlert
          size={64}
          className="block mx-auto text-sidebar-border"
        />
        <h1 className="font-playfair-display text-3xl font-bold leading-tight md:text-5xl">
          Not Found
        </h1>
        <p className="text-muted-foreground">
          Seems like this page doesn't exist
        </p>
        <Link
          href="/"
          title="Return to the home page"
          className="bg-theme w-fit mx-auto px-6 py-3 rounded-lg text-white font-bold transition-colors hover:bg-theme-alt cursor-pointer"
        >
          Return Home
        </Link>
      </MainContainer>
    </section>
  );
}

export default NotFound;
