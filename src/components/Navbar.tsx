import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Download } from "lucide-react";
import { BRAND_NAME } from "../data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Certifications", href: "#certifications" },
    { label: "Strengths", href: "#strengths" },
    { label: "Contact", href: "#contact" },
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      const offset = 85;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg-white/80 backdrop-blur-md py-4 border-b border-soft-gray/10 shadow-3xs"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleScrollTo("#home"); }}
            className="font-sans text-2xl font-extrabold tracking-tight text-pure-black hover:opacity-85 transition-opacity flex items-center gap-2"
            aria-label="Diya Patel – Home"
          >
            <span>{BRAND_NAME}</span>
            <span className="text-neon-lime font-sans text-xs bg-pure-black px-1.5 py-1 rounded font-black uppercase tracking-widest hidden sm:inline-block">
              QA
            </span>
          </a>

          <nav
            aria-label="Main navigation"
            className="hidden lg:flex items-center gap-5 text-[10px] font-semibold uppercase tracking-wider text-pure-black/70"
          >
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleScrollTo(item.href); }}
                className="hover:text-pure-black relative group py-1.5 transition-colors duration-200"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-lime transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="/diya-patel-resume.pdf"
              download
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full bg-neon-lime hover:bg-pure-black hover:text-white border border-transparent shadow-2xs hover:shadow-sm cursor-pointer transition-all duration-300"
              aria-label="Download Diya Patel Resume PDF"
            >
              <Download size={13} />
              <span>Resume</span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-full bg-pure-black text-white hover:bg-neon-lime hover:text-pure-black transition-colors ring-1 ring-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-pure-black/40 backdrop-blur-sm z-40 lg:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 24, stiffness: 200 }}
              className="fixed top-0 right-0 w-[280px] h-full bg-pure-black text-white z-50 p-6 flex flex-col justify-between lg:hidden shadow-2xl"
              role="dialog"
              aria-label="Mobile navigation menu"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
                  <span className="font-serif text-lg tracking-wide text-soft-gray font-semibold">Menu</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full bg-white/10 hover:bg-neon-lime hover:text-pure-black transition-colors"
                    aria-label="Close Mobile Navigation"
                  >
                    <X size={14} />
                  </button>
                </div>

                <div className="flex flex-col gap-4">
                  {menuItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => { e.preventDefault(); handleScrollTo(item.href); }}
                      className="text-lg font-sans font-semibold py-1.5 border-b border-white/5 hover:text-neon-lime transition-colors block text-left"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-white/10">
                <a
                  href="/diya-patel-resume.pdf"
                  download
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 bg-neon-lime text-pure-black font-semibold text-xs rounded-full uppercase tracking-wider flex items-center justify-center gap-2 block text-center"
                  aria-label="Download Resume PDF"
                >
                  <Download size={14} />
                  Download CV
                </a>
                <p className="text-[10px] text-soft-gray font-mono text-center">Available for QA Roles – 2026</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
