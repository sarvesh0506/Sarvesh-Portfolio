import { animateScroll as scroll } from 'react-scroll';
import { FaGithub, FaLinkedin, FaArrowUp, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: true });
  };

  return (
    <footer className="mt-20 border-t border-white/5 bg-matte-black py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Copyright */}
        <div className="text-gray-500 text-xs md:text-sm order-3 md:order-1 text-center md:text-left">
          &copy; {new Date().getFullYear()} Sarveshkumar S. All rights reserved.
        </div>

        {/* Center: Branding and Made with */}
        <div className="text-gray-400 text-xs md:text-sm flex items-center justify-center gap-1.5 order-1 md:order-2">
          Made with <FaHeart className="text-coca-red animate-pulse" /> by{" "}
          <span className="font-display font-bold text-white hover:text-coca-red transition-colors duration-300">
            Sarveshkumar S
          </span>
        </div>

        {/* Right Side: Links & Scroll to top */}
        <div className="flex items-center gap-6 order-2 md:order-3">
          {/* Socials */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/sarvesh0506" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-white transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub size={18} />
            </a>
            <a 
              href="https://linkedin.com/in/sarveshkumar-s-43b44b2aa" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={18} />
            </a>
          </div>

          {/* Vertical divider */}
          <div className="w-[1px] h-4 bg-white/10" />

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-coca-red/10 hover:bg-coca-red text-coca-red hover:text-white flex justify-center items-center cursor-pointer transition-all duration-300 shadow-[0_0_10px_rgba(228,30,38,0.1)] hover:scale-105"
            aria-label="Back to Top"
          >
            <FaArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
