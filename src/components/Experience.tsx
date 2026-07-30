import { motion } from "motion/react";
import { TIMELINE_ITEMS, CERTIFICATIONS } from "../data";
import { GraduationCap, Award, Calendar, BookOpen } from "lucide-react";

export default function Experience() {
  return (
    <>
      {/* Education Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
      <section id="education" className="relative py-20 md:py-28 bg-bg-white overflow-hidden border-b border-soft-gray/5">
        <div className="absolute bottom-[10%] right-[-10%] w-[450px] h-[450px] rounded-full radial-glow-smaller opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#7C8072] bg-[#E7EBDC] px-3 py-1 rounded-full">
                Education
              </span>
              <h2 className="text-3xl md:text-4xl font-sans font-extrabold tracking-tight text-pure-black uppercase mt-3">
                Academic Background
              </h2>
            </div>
            <p className="text-xs md:text-sm font-mono text-soft-gray mt-2 md:mt-0 select-none">
              04 // EDUCATION &amp; HISTORY
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-left">
            <div className="relative border-l-2 border-soft-gray/10 pl-6 sm:pl-8 space-y-12">
              {TIMELINE_ITEMS.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group text-left"
                >
                  <div className="absolute -left-[38px] sm:-left-[45px] top-1 p-2 rounded-full bg-card-white border border-soft-gray/20 group-hover:bg-neon-lime group-hover:scale-110 group-hover:border-pure-black transition-all duration-300 shadow-3xs">
                    <GraduationCap size={16} className="text-pure-black" />
                  </div>

                  <div className="p-6 md:p-8 rounded-[24px] bg-card-white border border-soft-gray/10 hover:border-pure-black/15 shadow-3xs hover:shadow-2xs transition-all duration-300 relative">

                    <div className="flex flex-wrap gap-2 items-center justify-between mb-4">
                      <span className="text-[9px] font-mono tracking-widest text-[#7C8072] uppercase font-bold bg-[#E7EBDC] px-2.5 py-0.5 rounded-full">
                        University Degree
                      </span>
                      {item.duration && (
                        <span className="text-[10px] font-mono font-bold text-pure-black bg-bg-white border border-soft-gray/10 rounded-full px-3 py-1 flex items-center gap-1.5 shadow-3xs">
                          <Calendar size={11} className="text-[#ABC724]" />
                          {item.duration}
                        </span>
                      )}
                    </div>

                    <div className="space-y-1 mb-4 select-none">
                      <h3 className="text-lg md:text-xl font-sans font-black text-pure-black uppercase tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs md:text-sm font-sans font-extrabold text-[#ABC724]">
                        {item.organization}
                      </p>
                      {item.subtitle && (
                        <p className="text-xs font-sans text-soft-gray font-medium">
                          {item.subtitle}
                        </p>
                      )}
                      {item.score && (
                        <p className="text-xs font-mono font-bold text-pure-black mt-1">
                          <span className="text-[#7C8072]">{item.scoreLabel}:</span>{" "}
                          <span className="text-pure-black">{item.score}</span>
                        </p>
                      )}
                    </div>

                    <p className="text-xs md:text-sm text-soft-gray leading-relaxed font-light text-left">
                      {item.description}
                    </p>

                    {item.skillsAcquired && item.skillsAcquired.length > 0 && (
                      <div className="mt-5 pt-4 border-t border-soft-gray/10 flex flex-wrap gap-1.5 items-center">
                        <span className="text-[9px] font-mono uppercase tracking-widest text-soft-gray mr-1.5 font-bold">
                          Focus:
                        </span>
                        {item.skillsAcquired.map((skill) => (
                          <span
                            key={skill}
                            className="text-[9px] font-mono text-pure-black bg-soft-gray/5 border border-soft-gray/10 rounded-md px-2 py-0.5"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>
      </motion.section>

      {/* Certifications Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
      <section id="certifications" className="relative py-20 md:py-28 bg-bg-white overflow-hidden border-b border-soft-gray/5">
        <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] rounded-full radial-glow-smaller opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#7C8072] bg-[#E7EBDC] px-3 py-1 rounded-full">
                Certification Courses
              </span>
              <h2 className="text-3xl md:text-4xl font-sans font-extrabold tracking-tight text-pure-black uppercase mt-3">
                Professional Certifications
              </h2>
            </div>
            <p className="text-xs md:text-sm font-mono text-soft-gray mt-2 md:mt-0 select-none">
              05 // VERIFIED CREDENTIALS
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-left">
            <div className="relative border-l-2 border-soft-gray/10 pl-6 sm:pl-8 space-y-10">
              {CERTIFICATIONS.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group text-left"
                >
                  <div className="absolute -left-[38px] sm:-left-[45px] top-1 p-2 rounded-full bg-card-white border border-soft-gray/20 group-hover:bg-neon-lime group-hover:scale-110 group-hover:border-pure-black transition-all duration-300 shadow-3xs">
                    <Award size={16} className="text-pure-black" />
                  </div>

                  <div className="p-6 md:p-8 rounded-[24px] bg-card-white border border-soft-gray/10 hover:border-pure-black/15 shadow-3xs hover:shadow-2xs transition-all duration-300 relative">

                    <div className="flex flex-wrap gap-2 items-center justify-between mb-4">
                      <span className="text-[9px] font-mono tracking-widest text-[#7C8072] uppercase font-bold bg-[#E7EBDC] px-2.5 py-0.5 rounded-full">
                        Verified Credential
                      </span>
                    </div>

                    <div className="space-y-1 mb-4 select-none">
                      <h3 className="text-base md:text-lg font-sans font-black text-pure-black uppercase tracking-tight leading-tight">
                        {cert.title}
                      </h3>
                      <p className="text-xs md:text-sm font-sans font-extrabold text-[#ABC724]">
                        {cert.organization}
                      </p>
                    </div>

                    <p className="text-xs md:text-sm text-soft-gray leading-relaxed font-light text-left">
                      {cert.description}
                    </p>

                    {cert.skillsAcquired && cert.skillsAcquired.length > 0 && (
                      <div className="mt-5 pt-4 border-t border-soft-gray/10 flex flex-wrap gap-1.5 items-center">
                        <span className="text-[9px] font-mono uppercase tracking-widest text-soft-gray mr-1.5 font-bold">
                          <BookOpen size={10} className="inline mr-1" />
                          Topics:
                        </span>
                        {cert.skillsAcquired.map((skill) => (
                          <span
                            key={skill}
                            className="text-[9px] font-mono text-pure-black bg-soft-gray/5 border border-soft-gray/10 rounded-md px-2 py-0.5"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>
      </motion.section>
    </>
  );
}
