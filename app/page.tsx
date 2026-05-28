import { About } from "@/components/About";
import { Confidentiality } from "@/components/Confidentiality";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Manufacturing } from "@/components/Manufacturing";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Manufacturing />
        <Services />
        <Projects />
        <Confidentiality />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
