import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiPython, SiC, SiJavascript, SiHtml5, 
  SiMysql, SiMongodb, SiScikitlearn, SiNumpy, 
  SiPandas, SiFlask, SiGit, SiGithub 
} from 'react-icons/si';
import { 
  FaBrain, FaEye, FaRobot, FaChartLine, 
  FaCheckDouble, FaComments, FaSyncAlt, 
  FaLightbulb, FaUsers, FaChartBar,
  FaCss3Alt, FaSalesforce, FaCode
} from 'react-icons/fa';

const SKILLS_DATA = {
  programming: {
    title: "Programming",
    skills: [
      { name: "Python", level: 90, icon: SiPython },
      { name: "C", level: 75, icon: SiC },
      { name: "JavaScript", level: 80, icon: SiJavascript },
      { name: "HTML", level: 90, icon: SiHtml5 },
      { name: "CSS", level: 85, icon: FaCss3Alt },
    ]
  },
  databases_ml: {
    title: "Databases & ML Libraries",
    skills: [
      { name: "MySQL", level: 80, icon: SiMysql },
      { name: "MongoDB", level: 75, icon: SiMongodb },
      { name: "Scikit-learn", level: 85, icon: SiScikitlearn },
      { name: "NumPy", level: 90, icon: SiNumpy },
      { name: "Pandas", level: 90, icon: SiPandas },
      { name: "Matplotlib & SciPy", level: 80, icon: FaChartBar },
    ]
  },
  frameworks_tools: {
    title: "Frameworks & Tools",
    skills: [
      { name: "Flask", level: 80, icon: SiFlask },
      { name: "Salesforce", level: 85, icon: FaSalesforce },
      { name: "Git", level: 85, icon: SiGit },
      { name: "GitHub", level: 90, icon: SiGithub },
      { name: "VS Code", level: 90, icon: FaCode },
    ]
  },
  concepts_soft: {
    title: "Concepts & Soft Skills",
    skills: [
      { name: "Generative AI & NLP", level: 80, icon: FaRobot },
      { name: "Computer Vision & Facial Mesh", level: 85, icon: FaEye },
      { name: "Data Drift & Stats Testing", level: 85, icon: FaChartLine },
      { name: "Problem Solving", level: 90, icon: FaLightbulb },
      { name: "Teamwork & Adaptability", level: 95, icon: FaUsers },
      { name: "Communication", level: 90, icon: FaComments },
    ]
  }
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('programming');

  const tabKeys = Object.keys(SKILLS_DATA);

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-10 top-1/4 w-[300px] h-[300px] bg-coca-red/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-coca-red font-display text-sm font-bold tracking-widest uppercase mb-2"
        >
          My Capabilities
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-black text-white"
        >
          Skills &amp; Expertise
        </motion.h2>
        <div className="w-16 h-1 bg-coca-red mx-auto mt-4 rounded-full" />
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {tabKeys.map((key) => {
          const isActive = activeTab === key;
          return (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-5 py-2.5 rounded-full font-display font-semibold text-xs md:text-sm tracking-wider uppercase transition-all duration-300 border cursor-pointer
                ${isActive 
                  ? 'bg-coca-red border-coca-red text-white shadow-[0_0_15px_rgba(228,30,38,0.25)]' 
                  : 'bg-transparent border-white/10 text-gray-400 hover:text-white hover:border-coca-red/40'}`}
            >
              {SKILLS_DATA[key].title}
            </button>
          );
        })}
      </div>

      {/* Skills Content Area */}
      <div className="min-h-[350px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {SKILLS_DATA[activeTab].skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={index} 
                  className="glass-card p-6 rounded-xl flex items-center gap-6 hover:border-coca-red/40 relative group"
                >
                  {/* Skill Icon */}
                  <div className="w-12 h-12 rounded-lg bg-coca-red/10 flex items-center justify-center text-2xl text-coca-red group-hover:scale-110 transition-transform duration-300">
                    <Icon />
                  </div>

                  {/* Skill Progress Bar Container */}
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-display font-bold text-white text-sm md:text-base tracking-wide">
                        {skill.name}
                      </span>
                      <span className="text-xs text-coca-red font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress track */}
                    <div className="w-full h-2 bg-matte-black border border-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-coca-red to-coca-dark rounded-full shadow-[0_0_10px_rgba(228,30,38,0.5)]"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
