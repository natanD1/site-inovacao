import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";


const Hero = () => {
  const words = [
    {
      text: "Conectando pessoas com",
    },
    {
      text: "Técnologia e Inovação",
      className: "text-blue-500 dark:text-blue-500"
    },
  ];

  return (
    <>
      <div className="container">
        <div className="flex flex-col items-center justify-center h-[40rem]">
          <p className="text-neutral-600 dark:text-neutral-200 text-lg sm:text-lg">
            Rafael favaro
          </p>
          <TypewriterEffectSmooth words={words} />
        </div>
        <BackgroundBeams />
      </div>
    </>
  );
};

export default Hero;
