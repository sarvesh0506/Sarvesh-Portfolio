import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';

const TITLES = [
  "Computer Science Engineer",
  "Machine Learning Developer",
  "Python Developer",
  "Salesforce Developer"
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const handleLinkedInClick = (e) => {
    e.preventDefault();
    if (window.confirm("Open LinkedIn account?")) {
      window.open(
        "https://www.linkedin.com/in/sarveshkumar3005?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  useEffect(() => {
    let timer;
    const currentFullText = TITLES[titleIndex];
    
    // Typing / deletion speed logic
    const typingSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && displayedText === currentFullText) {
      // Hold text before starting delete
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(
          isDeleting
            ? currentFullText.substring(0, displayedText.length - 1)
            : currentFullText.substring(0, displayedText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, titleIndex]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden pt-16"
    >
      {/* Red ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-coca-red/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="z-10 max-w-4xl flex flex-col items-center">
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-coca-red font-display text-sm md:text-base font-bold tracking-widest uppercase mb-4"
        >
          Welcome! I promise my bugs are fewer than my commits
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-7xl font-display font-black tracking-tight text-white mb-6"
        >
          Hi, I am <span className="text-glow text-coca-red">SARVESHKUMAR S</span>
        </motion.h1>

        {/* Dynamic Typing Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-10 md:h-12 flex items-center justify-center mb-8"
        >
          <span className="text-lg md:text-3xl text-gray-300 font-medium font-sans">
            I am a <span className="text-white border-r-2 border-coca-red pr-1 animate-pulse font-semibold">{displayedText}</span>
          </span>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex gap-6 mb-12"
        >
          <a
            href="https://github.com/sarvesh0506"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-400 hover:text-coca-red hover:scale-115 transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            onClick={handleLinkedInClick}
            className="text-2xl text-gray-400 hover:text-coca-red hover:scale-115 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:sarveshkumarsps2006@gmail.com"
            className="text-2xl text-gray-400 hover:text-coca-red hover:scale-115 transition-all duration-300"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md sm:max-w-none"
        >
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-3 rounded-full font-display font-semibold text-sm uppercase tracking-wider bg-coca-red text-white hover:bg-coca-dark hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(228,30,38,0.3)] text-center cursor-pointer"
          >
            About Me
          </a>
          
          <Link
            to="projects"
            smooth={true}
            offset={-80}
            duration={500}
            className="w-full sm:w-auto px-8 py-3 rounded-full font-display font-semibold text-sm uppercase tracking-wider bg-transparent text-white border border-white/20 hover:border-coca-red hover:text-coca-red hover:scale-105 transition-all duration-300 text-center cursor-pointer"
          >
            View Projects
          </Link>
          
          <a
            href="/resume.pdf"
            download="SARVESHKUMAR_Resume.pdf"
            className="w-full sm:w-auto px-8 py-3 rounded-full font-display font-semibold text-sm uppercase tracking-wider bg-transparent text-white border border-white/20 hover:border-coca-red hover:text-coca-red hover:scale-105 transition-all duration-300 text-center cursor-pointer"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Floating social bar for desktop */}
      <div className="hidden lg:flex flex-col gap-4 fixed bottom-8 left-8 z-40">
        <a
          href="https://github.com/sarvesh0506"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full flex justify-center items-center border border-white/10 glass-card text-gray-400 hover:text-coca-red hover:border-coca-red transition-all duration-300"
        >
          <FaGithub size={18} />
        </a>
        <a
          href="#"
          onClick={handleLinkedInClick}
          className="w-10 h-10 rounded-full flex justify-center items-center border border-white/10 glass-card text-gray-400 hover:text-coca-red hover:border-coca-red transition-all duration-300"
        >
          <FaLinkedin size={18} />
        </a>
        <a
          href="mailto:sarveshkumarsps2006@gmail.com"
          className="w-10 h-10 rounded-full flex justify-center items-center border border-white/10 glass-card text-gray-400 hover:text-coca-red hover:border-coca-red transition-all duration-300"
        >
          <FaEnvelope size={18} />
        </a>
        <div className="w-[1px] h-20 bg-gradient-to-b from-white/15 to-transparent mx-auto mt-2" />
      </div>

      {/* Down arrow link */}
      <Link
        to="about"
        smooth={true}
        offset={-80}
        duration={500}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer text-gray-400 hover:text-coca-red animate-bounce z-10 transition-colors duration-300"
      >
        <FaChevronDown size={20} />
      </Link>
    </section>
  );
}
