import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaCode } from 'react-icons/fa';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-coca-red/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-coca-red font-display text-sm font-bold tracking-widest uppercase mb-2"
        >
          Get To Know
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-black text-white"
        >
          About Me
        </motion.h2>
        <div className="w-16 h-1 bg-coca-red mx-auto mt-4 rounded-full" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        {/* Profile Image Column (Lg: 5 columns) */}
        <motion.div 
          variants={itemVariants} 
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative group max-w-sm w-full aspect-square rounded-2xl overflow-hidden glass-card p-3 border border-white/10 hover:border-coca-red/50 transition-all duration-300">
            <div className="w-full h-full rounded-xl overflow-hidden bg-matte-black relative">
              <img 
                src="/avatar.png" 
                alt="Sarveshkumar S Avatar" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>
            
            {/* Decorative Corner Glow borders */}
            <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-coca-red rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-coca-red rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>

        {/* Text and Cards Column (Lg: 7 columns) */}
        <motion.div 
          variants={itemVariants} 
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light text-justify md:text-left">
            Computer Science and Engineering undergraduate at SRM Institute of Science and Technology with strong skills in Python, Machine Learning, Salesforce, Full Stack Development, and Data Science. Passionate about solving real-world problems through technology and continuously learning modern software development practices.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Education Card */}
            <div className="glass-card p-6 flex flex-col items-center text-center rounded-xl hover:border-coca-red/40 group">
              <div className="w-12 h-12 rounded-full bg-coca-red/10 flex items-center justify-center text-coca-red text-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaGraduationCap />
              </div>
              <h3 className="font-display font-bold text-white text-base mb-1">Education</h3>
              <p className="text-gray-400 text-xs mb-1">SRM Institute of Science &amp; Tech</p>
              <p className="text-gray-500 text-[10px]">B.Tech CSE (2023 - Present)</p>
            </div>

            {/* CGPA Card */}
            <div className="glass-card p-6 flex flex-col items-center text-center rounded-xl hover:border-coca-red/40 group">
              <div className="w-12 h-12 rounded-full bg-coca-red/10 flex items-center justify-center text-coca-red text-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaAward />
              </div>
              <h3 className="font-display font-bold text-white text-base mb-1">Academics</h3>
              <p className="text-gray-400 text-xs mb-1">7.6 CGPA</p>
              <p className="text-gray-500 text-[10px]">Current Cumulative Grade</p>
            </div>

            {/* Specialization Card */}
            <div className="glass-card p-6 flex flex-col items-center text-center rounded-xl hover:border-coca-red/40 group">
              <div className="w-12 h-12 rounded-full bg-coca-red/10 flex items-center justify-center text-coca-red text-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaCode />
              </div>
              <h3 className="font-display font-bold text-white text-base mb-1">Focus Areas</h3>
              <p className="text-gray-400 text-xs mb-1">Machine Learning</p>
              <p className="text-gray-500 text-[10px]">Salesforce &amp; Python Dev</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
