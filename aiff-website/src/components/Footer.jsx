import { FaEnvelope } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AIFFLogo from "./AIFFLogo";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const quickLinks = ["home", "about", "films", "schedule", "submit"];

  const handleFooterNav = (id) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <AIFFLogo />
            </div>
            <p className="text-gray-400">
              Celebrating the rich cinematic heritage of Northern Nigeria and
              promoting cultural exchange through film.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((id) => (
                <li key={id}>
                  <button
                    onClick={() => handleFooterNav(id)}
                    className="text-gray-400 hover:text-green-500 transition duration-300"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {[
                { name: "Terms of Service", path: "/legal/terms" },
                { name: "Privacy Policy", path: "/legal/privacy" },
                { name: "Cookie Policy", path: "/legal/cookies" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-green-500 transition duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-green-500" />
                <span>info@arewafilmfest.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 Arewa International Film Festival. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
