import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Home from "@/sections/Home";
import Projects from "@/sections/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/sections/Skills";

export default function Main() {
  return (
    <main className="flex flex-col items-center px-4">
      <Home />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Contact />
    </main>
  );
}
