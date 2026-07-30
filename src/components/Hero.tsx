import { motion } from "motion/react";
import { ArrowRight, Download, ChevronDown, Award, CheckCircle, Linkedin } from "lucide-react";
import { BRAND_NAME, BRAND_ROLE } from "../data";

export default function Hero() {
  const handleScrollToSection = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      const offset = 85;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
    <section id="home" className="relative pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-bg-white border-b border-soft-gray/5">
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full radial-glow opacity-50 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Text Column */}
          <div className="lg:col-span-7 text-left space-y-6 md:space-y-8 z-10">

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card-white border border-soft-gray/20 shadow-3xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-lime"></span>
              </span>
              <span className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-wider text-pure-black">
                Available for QA Engineer Roles
              </span>
            </motion.div>

            <div className="space-y-4 select-none">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-sans font-extrabold tracking-tight text-pure-black uppercase leading-none"
              >
                Hi, I'm {BRAND_NAME}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif italic text-[#ABC724] font-semibold leading-tight tracking-tight block"
              >
                {BRAND_ROLE}
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl font-sans text-soft-gray leading-relaxed max-w-2xl font-normal"
            >
              Results-driven MCA student with project-based experience in manual testing, automation testing, API testing, and mobile application testing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <button
                onClick={() => handleScrollToSection("#projects")}
                className="px-6 py-4 rounded-full bg-pure-black text-white hover:bg-neon-lime hover:text-pure-black hover:scale-105 active:scale-95 shadow-md font-sans text-sm font-bold flex items-center gap-1.5 transition-all duration-300 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight size={14} />
              </button>

              <a
                href="/diya-patel-resume.pdf"
                download
                className="px-6 py-4 rounded-full bg-card-white border border-soft-gray/20 text-pure-black hover:bg-neutral-100 hover:scale-105 active:scale-95 shadow-3xs hover:shadow-2xs font-sans text-sm font-bold flex items-center gap-2 transition-all duration-300 cursor-pointer"
                aria-label="Download Diya Patel Resume PDF"
              >
                <Download size={14} />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => handleScrollToSection("#contact")}
                className="px-6 py-4 rounded-full bg-card-white border border-soft-gray/20 text-pure-black hover:bg-neutral-100 hover:scale-105 active:scale-95 shadow-3xs hover:shadow-2xs font-sans text-sm font-bold transition-all duration-300 cursor-pointer"
              >
                <span>Contact Me</span>
              </button>

              <a
                href="https://linkedin.com/in/diya-patel-863417281"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-full bg-blue-50 border border-blue-100 text-blue-700 hover:bg-blue-600 hover:text-white hover:scale-105 active:scale-95 shadow-3xs font-sans text-sm font-bold flex items-center gap-2 transition-all duration-300 cursor-pointer"
                aria-label="Visit Diya Patel LinkedIn Profile"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col xs:flex-row items-start xs:items-center gap-3 xs:gap-6 pt-6"
            >
              <div className="flex items-center gap-2 text-xs text-soft-gray font-mono">
                <Award size={14} className="text-pure-black" />
                <span>MCA, Ganpat University (CGPA 8.60)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-soft-gray font-mono">
                <CheckCircle size={14} className="text-neon-lime stroke-pure-black" />
                <span>Aspiring Automation QA Engineer</span>
              </div>
            </motion.div>

          </div>

          {/* Right – QA-themed visual card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="absolute top-[10%] w-[260px] sm:w-[320px] h-[260px] sm:h-[320px] rounded-full bg-neon-lime/20 blur-3xl pointer-events-none z-0" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[240px] xs:w-[280px] sm:w-[325px] h-[300px] xs:h-[360px] sm:h-[400px] rounded-[32px] overflow-hidden shadow-lg border-4 border-white z-10"
              aria-label="Diya Patel QA Engineer profile photo"
            >
              <img
                src="/diya-patel-photo.jpg"
                alt="Diya Patel – QA Engineer"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-pure-black/80 to-transparent flex flex-wrap justify-center gap-1.5">
                {["Selenium", "Appium", "Postman", "Katalon"].map((tag) => (
                  <span key={tag} className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border border-white/20 text-white/70 uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

        </div>

      </div>

      <div className="w-full flex justify-center mt-12 text-center relative z-10 hidden sm:flex">
        <button
          onClick={() => handleScrollToSection("#about")}
          className="p-2.5 rounded-full bg-card-white border border-soft-gray/15 text-soft-gray hover:text-pure-black hover:border-pure-black hover:scale-110 cursor-pointer transition-all duration-300 animate-bounce"
          aria-label="Scroll down to About Section"
        >
          <ChevronDown size={16} />
        </button>
      </div>
    </section>
    </motion.section>
  );
}
