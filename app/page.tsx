import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main
      className="relative bg-black-100 text-white flex 
    justify-center overflow-hidden items-center flex-col mx-auto sm:px-10 px-5"
    >
      <div className="max-w-7xl  w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
