// Components
import MainContainer from "./MainContainer";
import MotionContainer from "./MotionContainer";
import Image from "next/image";

function Hero({
  img,
  alt = "",
  className = "",
  alignItems = "items-center",
  children,
}) {
  return (
    <section className={`hero py-8 relative text-background ${className}`}>
      <div className="overlay w-full h-full absolute inset-0 z-[-1] bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>
      <Image
        src={`${img}/large`}
        alt={alt}
        width={800}
        height={800}
        loading="eager"
        className="w-full h-full object-cover absolute inset-0 z-[-2]"
      />
      <MainContainer className={`h-full flex ${alignItems}`}>
        <MotionContainer>{children}</MotionContainer>
      </MainContainer>
    </section>
  );
}

export default Hero;
