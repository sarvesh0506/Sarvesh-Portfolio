import { motion } from 'framer-motion';
import { FaCertificate, FaAward, FaGlobe } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

const CERTIFICATIONS = [
  {
    title: "Oracle Generative AI Professional",
    issuer: "Oracle University",
    icon: FaGlobe,
    description: "Hands-on expertise in deploying large language models, setting up search retrieval pipelines (RAG), and designing conversational assistants."
  },
  {
    title: "IBM Machine Learning with Python",
    issuer: "IBM / Coursera",
    icon: FaCertificate,
    description: "Deep dive in regression, classification, clustering, recommender systems, and deploying analytical algorithms to solve business problems."
  },
  {
    title: "MongoDB Basics",
    issuer: "MongoDB University",
    icon: SiMongodb,
    description: "Foundational database development covering CRUD queries, indexing, data modeling, aggregation frameworks, and cluster setup."
  },
  {
    title: "Technical Certifications",
    issuer: "ICT Academy",
    icon: FaAward,
    description: "Comprehensive software engineering, database design, and algorithmic problem solving frameworks certification course."
  }
];

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="certifications" className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background glow bubble */}
      <div className="absolute left-1/3 bottom-10 w-[300px] h-[300px] bg-coca-red/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-coca-red font-display text-sm font-bold tracking-widest uppercase mb-2"
        >
          My Credentials
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-black text-white"
        >
          Certifications
        </motion.h2>
        <div className="w-16 h-1 bg-coca-red mx-auto mt-4 rounded-full" />
      </div>

      {/* Cards Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {CERTIFICATIONS.map((cert, index) => {
          const IconComponent = cert.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-8 rounded-xl hover:border-coca-red/40 hover:-translate-y-2 group transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-full bg-coca-red/10 border border-coca-red/20 flex items-center justify-center text-2xl text-coca-red mb-6 group-hover:scale-110 group-hover:bg-coca-red group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(228,30,38,0.15)]">
                  {IconComponent ? <IconComponent /> : <FaCertificate />}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-coca-red transition-colors duration-300">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-coca-red text-xs font-semibold tracking-wider uppercase mb-4">
                  {cert.issuer}
                </p>

                {/* Description */}
                <p className="text-gray-400 text-xs leading-relaxed font-light">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
