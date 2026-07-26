import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#contact"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-brand-900"
      >
        Skip to contact details
      </a>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
