// src/components/NavBar.jsx
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import AIFFLogo from '../assets/logo.png';

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => setMobileOpen(!mobileOpen);

  const navLinks = ['Home', 'About', 'Films', 'Schedule', 'Venue', 'Contact'];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#" className="flex items-center">
          <img
            src={AIFFLogo}
            alt="aifflogo"
            className="h-[60px] object-contain"
          />

          </a>
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="nav-link relative text-gray-800 hover:text-yellow-700">
                {link}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              <FaBars className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white w-full px-4 pb-4 mobile-menu transition-all duration-300 ease-in-out">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="nav-link py-2 text-gray-800 hover:text-yellow-600"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
