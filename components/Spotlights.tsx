import { Spotlight } from "./ui/Spotlight";

export default function Spotlights() {
  return (
    <>
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:top-20 h-screen"
        fill="white"
      />
      <Spotlight className="-top-10 left-full h-[80vh] w-[50vw]" fill="blue" />
      <Spotlight className="-top-30 -left-85 h-[80vh] w-[50vw]" fill="red" />
    </>
  );
}
