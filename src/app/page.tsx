import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProp from "@/components/ValueProp";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ValueProp />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
