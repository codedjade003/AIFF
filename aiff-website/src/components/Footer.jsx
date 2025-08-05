import { FaFilm, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import AIFFLogo from "./AIFFLogo";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <AIFFLogo />
            </div>
            <p className="text-gray-400">
              Celebrating the rich cinematic heritage of Northern Nigeria and
              promoting cultural exchange through film.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["home", "about", "films", "schedule", "submit"].map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="text-gray-400 hover:text-green-500 transition duration-300"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {["Terms of Service", "Privacy Policy", "Cookie Policy"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-green-500 transition duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-green-500" />
                <span>123 Cinema Road, Kaduna, Nigeria</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-green-500" />
                <span>info@arewafilmfest.com</span>
              </li>
              <li className="flex items-start">
                <FaPhoneAlt className="mt-1 mr-3 text-green-500" />
                <span>+234 812 345 6789</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Arewa International Film Festival. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
