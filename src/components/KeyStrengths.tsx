import { motion } from "motion/react";
import { KEY_STRENGTHS } from "../data";
import { Star } from "lucide-react";

export default function KeyStrengths() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
    <section id="strengths" className="relative py-20 md:py-28 bg-bg-white overflow-hidden border-b border-soft-gray/5">
      <div className="absolute top-[30%] right-[-10%] w-[450px] h-[450px] rounded-full radial-glow-smaller opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#7C8072] bg-[#E7EBDC] px-3 py-1 rounded-full">
              Key Strengths
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-extrabold tracking-tight text-pure-black uppercase mt-3">
              What Sets Me Apart
            </h2>
          </div>
          <p className="text-xs md:text-sm font-mono text-soft-gray mt-2 md:mt-0 select-none">
            06 // PROFESSIONAL STRENGTHS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {KEY_STRENGTHS.map((strength, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative p-6 md:p-7 rounded-[22px] bg-card-white border border-soft-gray/10 hover:border-pure-black/20 hover:shadow-3xs transition-all duration-300 group flex gap-4 items-start text-left"
            >
              <div className="p-2.5 rounded-xl bg-neon-lime/15 border border-neon-lime/20 group-hover:bg-neon-lime group-hover:scale-105 transition-all duration-300 flex-shrink-0 mt-0.5">
                <Star size={16} className="text-pure-black" />
              </div>
              <p className="text-xs md:text-sm font-sans text-soft-gray leading-relaxed font-normal">
                {strength}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
    </motion.section>
  );
}
