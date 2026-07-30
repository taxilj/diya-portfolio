import { motion } from "motion/react";
import { SKILL_CATEGORIES } from "../data";
import { CheckSquare, Wrench, GitBranch, Code, Globe, Database } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  CheckSquare: <CheckSquare size={20} className="text-[#ABC724]" />,
  Wrench: <Wrench size={20} className="text-blue-500" />,
  GitBranch: <GitBranch size={20} className="text-indigo-500" />,
  Code: <Code size={20} className="text-emerald-500" />,
  Globe: <Globe size={20} className="text-orange-500" />,
  Database: <Database size={20} className="text-purple-500" />,
};

export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
    <section id="skills" className="relative py-20 md:py-28 bg-bg-white overflow-hidden border-b border-soft-gray/5">
      <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] rounded-full radial-glow-smaller opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#7C8072] bg-[#E7EBDC] px-3 py-1 rounded-full">
              Competencies
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-extrabold tracking-tight text-pure-black uppercase mt-3">
              Technical Skillset
            </h2>
          </div>
          <p className="text-xs md:text-sm font-mono text-soft-gray mt-2 md:mt-0 select-none">
            02 // QA TOOLKIT &amp; METHODOLOGY
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, index) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="relative p-6 rounded-[22px] bg-card-white border border-soft-gray/10 hover:border-pure-black/20 hover:shadow-3xs transition-all duration-300 group flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-bg-white border border-soft-gray/5 group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                  {iconMap[cat.iconName]}
                </div>
                <h3 className="font-sans font-black text-sm text-pure-black uppercase tracking-tight">
                  {cat.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#E7EBDC] text-[#5a6030] border border-[#d4d9c0] hover:bg-neon-lime hover:text-pure-black hover:border-transparent transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
    </motion.section>
  );
}
