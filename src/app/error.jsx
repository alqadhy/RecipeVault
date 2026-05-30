"use client";

// Components
import MainContainer from "@/components/ui/MainContainer";

function Error({ error, reset }) {
  return (
    <section className="error py-20 text-center">
      <MainContainer>
        <h2 className="text-destructive text-3xl font-bold mb-5">
          Something went wrong!
        </h2>
        <button
          className="bg-theme px-6 py-3 rounded-lg text-white font-bold cursor-pointer transition-colors hover:bg-theme-alt"
          onClick={() => reset()}
        >
          Try Again
        </button>
      </MainContainer>
    </section>
  );
}

export default Error;
