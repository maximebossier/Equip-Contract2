import { About } from "@/components/About";
import { Confidentiality } from "@/components/Confidentiality";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Manufacturing } from "@/components/Manufacturing";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <main>
      <div className="noise" />
      <Navbar />
      <Hero />
      <About />
      <Manufacturing />
      <Services />
      <Projects />
      <Confidentiality />
      <Contact />
      <Footer />
    </main>
  );
}
