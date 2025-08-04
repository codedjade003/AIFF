import React from 'react';
import Img_2 from "../assets/images/img_2.jpg"; // use a different but similar image

const Submit = () => {
  return (
    <section id="submit" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-800">
            Submit a Film
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-green-700">
              Your Story Matters — Share it on the AIFF Stage.
            </h3>
            <p className="text-gray-700 mb-4">
              Are you a filmmaker with a powerful story rooted in culture, identity, or social change? AIFF 2025 is calling for entries that amplify underrepresented voices and bold perspectives.
            </p>
            <p className="text-gray-700 mb-4">
              We welcome works from directors in Nigeria, Africa, and the global South—especially stories centered around themes of resilience, migration, peace, gender, and indigenous identity.
            </p>

            <div className="mt-6 space-y-3 text-gray-800">
              <div className="flex items-start gap-2">
                <i className="fas fa-film text-green-600 mt-1"></i>
                <span>Open to student films and emerging filmmakers</span>
              </div>
              <div className="flex items-start gap-2">
                <i className="fas fa-calendar-alt text-green-600 mt-1"></i>
                <span>Submission Deadline: August 15, 2025</span>
              </div>
              <div className="flex items-start gap-2">
                <i className="fas fa-upload text-green-600 mt-1"></i>
                <span>
                  Submit via <a href="#" className="font-semibold text-green-700 hover:underline">FilmFreeway</a>
                </span>
              </div>
              <div className="flex items-start gap-2">
                <i className="fas fa-award text-green-600 mt-1"></i>
                <span>Eligible for 6 major award categories</span>
              </div>
            </div>
          </div>

          {/* Right Side: Image + Awards Box */}
          <div className="relative">
            <img
              src={Img_2}
              alt="Submit Film"
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-white p-4 rounded-lg shadow-lg hidden md:block">
              <div className="text-base font-semibold mb-1">Awards</div>
              <ul className="text-sm space-y-1">
                <li>• Best Arewa Story</li>
                <li>• Best Short Film</li>
                <li>• Best Documentary</li>
                <li>• Best Female Director</li>
                <li>• Jury Mention</li>
                <li>• Audience Choice</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Submit;
