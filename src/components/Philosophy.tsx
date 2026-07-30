import { motion } from "motion/react";
import { Target, CheckSquare, Wrench, Code } from "lucide-react";
import { BIO_PARAGRAPHS, CAREER_OBJECTIVE } from "../data";

export default function Philosophy() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
    <section id="about" className="relative py-20 md:py-28 bg-bg-white overflow-hidden border-b border-soft-gray/5">
      <div className="absolute top-[40%] right-[-10%] w-[450px] h-[450px] rounded-full radial-glow-smaller opacity-45 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#7C8072] bg-[#E7EBDC] px-3 py-1 rounded-full">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-extrabold tracking-tight text-pure-black uppercase mt-3">
              Professional Profile
            </h2>
          </div>
          <p className="text-xs md:text-sm font-mono text-soft-gray mt-2 md:mt-0 select-none">
            01 // QA ENGINEER PROFILE
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

          {/* Left Column: Full bio + Career objective */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 text-left"
            >
              <h3 className="text-xl font-serif italic text-pure-black font-semibold">
                About Me
              </h3>
              <div className="space-y-3">
                {BIO_PARAGRAPHS.map((para, i) => (
                  <p key={i} className="text-xs md:text-sm font-sans text-soft-gray leading-relaxed text-left">
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 rounded-[24px] bg-card-white border-2 border-[#E7EBDC] shadow-3xs hover:border-[#ABC724]/40 transition-all duration-300 text-left"
            >
              <div className="flex items-center gap-3 mb-3">
                <Target size={18} className="text-[#ABC724]" />
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-pure-black">
                  Career Objective
                </h4>
              </div>
              <p className="text-xs md:text-sm font-sans text-pure-black font-semibold leading-relaxed">
                {CAREER_OBJECTIVE}
              </p>
            </motion.div>
          </div>

          {/* Right Column: QA Focus Areas */}
          <div className="lg:col-span-6 space-y-4 md:space-y-6 text-left">
            <h3 className="text-xl font-serif italic text-pure-black font-semibold mb-2 lg:mb-4 lg:pl-1">
              QA Engineering Focus
            </h3>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex gap-4 p-5 rounded-[20px] bg-card-white border border-soft-gray/10 hover:border-[#ABC724]/35 hover:shadow-2xs transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-[#E7EBDC] text-pure-black self-start flex-shrink-0">
                <CheckSquare size={18} />
              </div>
              <div className="space-y-1">
                <h4 className="font-sans font-bold text-sm text-pure-black uppercase tracking-tight">
                  1. Manual &amp; Automation Testing
                </h4>
                <p className="text-xs md:text-sm font-sans text-soft-gray leading-relaxed">
                  Designing and executing test cases for functional, regression, smoke, sanity, and integration testing. Skilled with Selenium WebDriver, Katalon Studio, and Appium for automation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex gap-4 p-5 rounded-[20px] bg-card-white border border-soft-gray/10 hover:border-[#ABC724]/35 hover:shadow-2xs transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-neon-lime/20 text-pure-black self-start flex-shrink-0">
                <Wrench size={18} />
              </div>
              <div className="space-y-1">
                <h4 className="font-sans font-bold text-sm text-pure-black uppercase tracking-tight">
                  2. API &amp; Mobile App Testing
                </h4>
                <p className="text-xs md:text-sm font-sans text-soft-gray leading-relaxed">
                  Validating REST APIs with Postman and performing mobile application testing with Appium on Android and iOS platforms. Tracking defects using Mantis Bug Tracker.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-4 p-5 rounded-[20px] bg-card-white border border-soft-gray/10 hover:border-[#ABC724]/35 hover:shadow-2xs transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-pure-black text-neon-lime self-start flex-shrink-0">
                <Code size={18} />
              </div>
              <div className="space-y-1">
                <h4 className="font-sans font-bold text-sm text-pure-black uppercase tracking-tight">
                  3. Developer-Backed QA
                </h4>
                <p className="text-xs md:text-sm font-sans text-soft-gray leading-relaxed">
                  Knowledge of Java, Python, PHP, HTML, CSS, and MySQL enables deeper root cause analysis and effective collaboration with development teams on defect resolution.
                </p>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
    </motion.section>
  );
}
