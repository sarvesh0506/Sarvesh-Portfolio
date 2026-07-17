import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';

const EDUCATION_DATA = [
  {
    id: 1,
    institution: "SRM Institute of Science and Technology",
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    score: "CGPA 7.6",
    period: "2023 – Present"
  },
  {
    id: 2,
    institution: "Sri Aanoor Vidyalaya",
    degree: "Higher Secondary Education",
    field: "Science & Mathematics Streams",
    score: "Percentage 75%",
    period: "Graduated 2023"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-5xl mx-auto relative overflow-hidden">
      {/* Background glow circle */}
      <div className="absolute right-10 bottom-1/4 w-[300px] h-[300px] bg-coca-red/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.84, y: 80 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-coca-red font-display text-sm font-bold tracking-widest uppercase mb-2">
            My Academic Path
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white">
            Education Timeline
          </h2>
          <div className="w-16 h-1 bg-coca-red mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 md:mx-auto max-w-3xl pl-8 md:pl-12 py-4">
          {/* Timeline Indicator Line */}
          <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-coca-red via-coca-red/40 to-transparent" />

          {EDUCATION_DATA.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Glow Node Circle */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-[18px] md:w-[22px] h-[18px] md:h-[22px] rounded-full bg-matte-black border-4 border-coca-red flex items-center justify-center shadow-[0_0_12px_rgba(228,30,38,0.8)] z-10" />

              {/* Content Glass Card */}
              <div className="glass-card p-6 md:p-8 rounded-xl hover:border-coca-red/40 relative">
                {/* Floating Date Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coca-red/10 border border-coca-red/20 text-coca-red text-xs font-semibold mb-4">
                  <FaCalendarAlt size={10} />
                  <span>{edu.period}</span>
                </div>

                {/* Institution */}
                <h3 className="font-display font-black text-white text-xl md:text-2xl mb-1.5 flex items-center gap-2.5">
                  <FaGraduationCap className="text-coca-red text-lg md:text-xl" />
                  {edu.institution}
                </h3>

                {/* Degree */}
                <p className="text-gray-300 text-sm md:text-base font-semibold mb-1">
                  {edu.degree} — <span className="text-gray-400 font-normal">{edu.field}</span>
                </p>

                {/* Performance Score */}
                <p className="text-coca-red font-display text-xs md:text-sm font-bold uppercase tracking-wide mt-3">
                  Academics: {edu.score}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
