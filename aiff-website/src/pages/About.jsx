import React from 'react';
import Img_1 from "../assets/images/img_1.jpg";


const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-800">
            About the Festival
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-green-700">
              Telling the Sahel Stories, Transforming Global Screens.
            </h3>
            <p className="text-gray-700 mb-4">
              The Arewa International Film Festival (AIFF) is the heartbeat of cinema and creative expression from Arewa to the world. Held annually in Kaduna, Nigeria, AIFF is a dynamic platform that celebrates storytelling, empowers creatives, and amplifies indigenous narratives across Africa and the global South.
            </p>
            <p className="text-gray-700 mb-4">
              Our vision is to become Africa’s leading platform for showcasing authentic Sahel cinema and rebranding Northern Nigeria as a hub for innovation and art. From award-winning films to cultural showcases and empowerment labs, AIFF is more than a festival—it’s a movement.
            </p>

            <div className="mt-6 space-y-3 text-gray-800">
              <div className="flex items-start gap-2">
                <i className="fas fa-video text-green-600 mt-1"></i>
                <span>100+ films from Nigeria, Africa, and the global South</span>
              </div>
              <div className="flex items-start gap-2">
                <i className="fas fa-chalkboard-teacher text-green-600 mt-1"></i>
                <span>Masterclasses & workshops led by global mentors</span>
              </div>
              <div className="flex items-start gap-2">
                <i className="fas fa-globe-africa text-green-600 mt-1"></i>
                <span>Inclusive programs empowering youth and women</span>
              </div>
              <div className="flex items-start gap-2">
                <i className="fas fa-hands-helping text-green-600 mt-1"></i>
                <span>Partnerships with global film institutions and embassies</span>
              </div>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="relative">
            <img
              src={Img_1}
              alt="Film Festival"
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-4 rounded-lg shadow-lg hidden md:block">
              <div className="text-2xl font-bold">1st</div>
              <div className="text-sm">Edition</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
