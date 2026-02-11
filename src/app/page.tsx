import { Header } from "@/components/header/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { SoftSkills } from "@/components/sections/SoftSkills";
import { Portfolio } from "@/components/sections/Portfolio";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { CtaBand } from "@/components/sections/CtaBand";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <SoftSkills />
        <Portfolio />
        <QuoteBand />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
