import { FaLocationArrow } from "react-icons/fa";

import Spotlights from "./Spotlights";
import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
const words = "Welcome To Adnan Khan's Portfolio";
export default function Hero() {
  return (
    <div className="pb-20 pt-36">
      <Spotlights />

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute left-0 top-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20">
        <div className="max-w-[89vw] md:max-w-2 lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Created using Next.js and Acenternity UI
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words={words}
          />
          <p className="text-center md:tracking-wider mb-4 text-sm  md:text-lg lg:text-2xl">
            Hi, I&apos;m Adnan, a WED DEVELOPER. Who likes exploring.
          </p>
          <a href="#projects">
            <MagicButton
              title={"My Works"}
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
