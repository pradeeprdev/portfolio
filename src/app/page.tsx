import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Highlights from "./components/Highlights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-black text-white">

      {/* FIXED NAVBAR */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="">

        {/* CENTERED SECTION */}
        <div className="flex justify-center">
          <div className="w-full max-w-[70rem] px-4">
            <Hero />
            <About />
            <Resume />
            <Services />
            <Skills />
            <Projects />
          </div>
        </div>

        {/* FULL WIDTH SECTION */}
        <Highlights />

        {/* CONTACT + FOOTER */}
        <div className="flex justify-center">
          <div className="w-full max-w-[70rem] px-4">
            <Contact />
            <Footer />
          </div>
        </div>

      </main>
    </div>
  );
}