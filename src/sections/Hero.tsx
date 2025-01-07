import memojiImage from "@/assets/images/memoji-computer.png";
import grainImage from "@/assets/images/grain.jpg";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FlipWords } from "@/components/ui/flip-words";

export const HeroSection = () => {
  const words = ["Best", "Fantastic", "Exceptional", "Nice"];
  return (
    <div id="hero" className="py-28 md:py-48 lg:py-60 relative z-0">
      <div>
        <BackgroundBeams className="-z-30" />
      </div>

      <div className="absolute inset-0"></div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className="size-[100px]" alt="Person" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex flex-container gap-4 rounded-lg items-center">
            <div className="bg-green-500 size-2.5 relative rounded-full">
              <div className="bg-green-500 absolute animate-ping inset-0 rounded-full"></div>
            </div>
            <div className="text-sm font-medium">Available for new projects</div>
          </div>
          <div className="max-w-lg mx-auto">
            <h1 className="md:text-5xl font-serif text-3xl text-center mt-8 tracking-wide">
              Building
              <FlipWords words={words} className="text-emerald-400" /> <br />
              User Experiences
            </h1>
            <h1 className="text-center text-3xl my-4">
              I am <span className="text-emerald-400 font-serif">Abhishek</span>
            </h1>
            <p className="mt-4 text-center text-white/60 md:text-lg">
              I specialize in transforming designs into functional, high performing web applications. Let's discuss your next project.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
            <a href="#project" className="z-40 inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
              <span className="font-semibold">Explore My Work</span>
              <ArrowDown className="size-4" />
            </a>
            <a href="#about" className="z-40 inline-flex items-center border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
              <span>👋</span>
              <span className="font-semibold">Let's Connect</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};