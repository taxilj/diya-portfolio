import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Skills from "./components/Skills";
import ProjectsGrid from "./components/ProjectsGrid";
import Experience from "./components/Experience";
import KeyStrengths from "./components/KeyStrengths";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bg-white text-pure-black font-sans relative selection:bg-neon-lime selection:text-pure-black">
      <Navbar />

      <main>
        <Hero />
        <Philosophy />
        <Skills />
        <ProjectsGrid />
        <Experience />
        <KeyStrengths />
      </main>

      <Footer />
    </div>
  );
}
