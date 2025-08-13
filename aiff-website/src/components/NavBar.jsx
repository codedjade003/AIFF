import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AIFFLogo from "../assets/logo.png";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Films", id: "films" },
    { name: "Schedule", id: "schedule" },
    { name: "Venue", id: "venue" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={AIFFLogo} alt="aifflogo" className="h-[60px] object-contain" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="nav-link relative text-gray-800 hover:text-yellow-700"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <FaBars className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white w-full px-4 pb-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="nav-link py-2 text-gray-800 hover:text-yellow-600 text-left"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
