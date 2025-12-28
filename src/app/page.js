import Hero from "@/components/sections/hero";
import Parcours from "@/components/sections/Parcours";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import Avis from "@/components/sections/Avis";

export default function Home() {
  return (
    <>
      <Hero />
      <Parcours />
      <Portfolio />
      <Contact />
      <Avis />
    </>
  );
}