import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const NAV_LINKS = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'education', label: 'Education' },
  { to: 'certifications', label: 'Certifications' },
  { to: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="home" smooth={true} duration={500} className="cursor-pointer flex items-center gap-2 group">
          <span className="font-display font-black text-2xl tracking-tighter text-white">
            SARVESH<span className="text-coca-red group-hover:text-white transition-colors duration-300">.S</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="text-coca-red font-semibold after:scale-x-100"
              className="relative text-gray-300 hover:text-white text-sm font-medium tracking-wide uppercase cursor-pointer transition-colors duration-300 py-1
                         after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-coca-red after:scale-x-0 after:origin-left after:transition-transform after:duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Burger Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-white hover:text-coca-red text-2xl transition-colors duration-300 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Slide-down Menu */}
      <div className={`fixed inset-y-0 right-0 w-64 bg-matte-black border-l border-coca-red/20 shadow-2xl z-40 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col gap-6 pt-24 px-8 h-full">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="text-coca-red font-semibold pl-2 border-l-2 border-coca-red"
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white text-lg font-semibold tracking-wide uppercase cursor-pointer transition-all duration-300 py-2"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
