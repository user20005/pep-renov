import Hero from "@/components/sections/hero";
import Parcours from "@/components/sections/Parcours";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import Avis from "@/components/sections/Avis";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal y={80} duration={1}><Parcours /></Reveal>
      <Reveal y={80} duration={1.5}><Portfolio /></Reveal>
      <Reveal y={80} duration={1.5}><Contact /></Reveal>
      <Reveal y={80} duration={1.5}><Avis /></Reveal>
    </>
  );
}