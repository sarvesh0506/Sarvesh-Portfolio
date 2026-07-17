import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Real-Time Data Drift Detection",
    description: "Developed a real-time system to monitor deployed Machine Learning models by detecting data drift using Population Stability Index (PSI) and Kolmogorov-Smirnov Test (KS Test). Alerts engineering teams when data distributions skew.",
    image: "/drift.png",
    technologies: ["Python", "Flask", "Scikit-learn", "NumPy", "Pandas", "SciPy", "Matplotlib"],
    github: "https://github.com/sarvesh0506",
    demo: "#"
  },
  {
    id: 2,
    title: "Driver Drowsiness Detection System",
    description: "Built a real-time driver monitoring system using facial landmark detection and Eye Aspect Ratio (EAR) to detect drowsiness and fatigue. Automatically triggers alarm audio alerts to prevent road accidents.",
    image: "/drowsiness.png",
    technologies: ["Python", "OpenCV", "Dlib"],
    github: "https://github.com/sarvesh0506",
    demo: "#"
  }
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background glow spot */}
      <div className="absolute right-1/4 top-1/3 w-[500px] h-[500px] bg-coca-red/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.84, y: 80 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-coca-red font-display text-sm font-bold tracking-widest uppercase mb-2">
            My Creations
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white">
            Recent Projects
          </h2>
          <div className="w-16 h-1 bg-coca-red mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {PROJECTS_DATA.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="glass-card flex flex-col rounded-2xl overflow-hidden hover:border-coca-red/40 group h-full"
            >
              {/* Project Image Panel */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-matte-black">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-matte-black/90 via-matte-black/20 to-transparent" />
              </div>

              {/* Project Content Info */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  {/* Title */}
                  <h3 className="font-display font-black text-white text-xl md:text-2xl mb-3 group-hover:text-coca-red transition-colors duration-300">
                    {project.title}
                  </h3>
                  {/* Description */}
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>
                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 text-xs font-semibold rounded-full bg-coca-red/10 border border-coca-red/20 text-coca-red uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-display font-semibold text-xs tracking-wider uppercase bg-transparent text-white border border-white/10 hover:border-coca-red hover:text-coca-red transition-all duration-300"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-display font-semibold text-xs tracking-wider uppercase bg-coca-red text-white hover:bg-coca-dark transition-all duration-300 shadow-[0_0_15px_rgba(228,30,38,0.25)]"
                  >
                    <FaExternalLinkAlt size={10} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
