// Components
import MainContainer from "@/components/ui/MainContainer";

// Icons
import { LoaderCircle } from "lucide-react";

function PageLoader() {
  return (
    <section className="page-loader h-[460px]">
      <MainContainer className="h-full flex justify-center items-center">
        <LoaderCircle size={70} color="var(--theme)" className="animate-spin" />
      </MainContainer>
    </section>
  );
}

export default PageLoader;
