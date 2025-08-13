import venue from "../assets/images/venue.jpg";
const Venue = () => {
  return (
    <section id="venue" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold">Festival Venue</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Experience the festival at the heart of Kaduna's cultural scene.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Muritala Square Arena</h3>
            <p className="text-gray-600 mb-4">
              Located in the heart of Kaduna, Muritala Square Arena is a historic and versatile venue 
              that hosts some of the city’s most memorable events. 
            </p>
            <p className="text-gray-600 mb-6">        
            With expansive open spaces, multiple 
            halls, and facilities suited for film screenings, workshops, and cultural showcases, it’s 
            the perfect setting for this year’s festival.
            </p>

            {/* Details */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-green-600 mt-1 mr-3"></i>
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-gray-600">Muritala Square Arena, Yar'dua Hall and the Pavilion, Kaduna, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start">
                <i className="fas fa-car text-green-600 mt-1 mr-3"></i>
                <div>
                  <h4 className="font-semibold">Parking</h4>
                  <p className="text-gray-600">Ample secure parking available on-site</p>
                </div>
              </div>

              <div className="flex items-start">
                <i className="fas fa-utensils text-green-600 mt-1 mr-3"></i>
                <div>
                  <h4 className="font-semibold">Dining</h4>
                  <p className="text-gray-600">Multiple food vendors and restaurants nearby</p>
                </div>
              </div>
            </div>

            {/* Map Button */}
            <a
              href="https://maps.app.goo.gl/ZPTCdhUNGArF9gpK9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
            >
              <i className="fas fa-map-marked-alt mr-2"></i> Get Directions
            </a>
          </div>
          {/* Venue Photo with Embedded Map Overlay */}
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            {/* Venue Image */}
            <img
              src={venue} // replace with your actual image path
              alt="Muritala Square Arena"
              className="w-full h-96 object-cover"
            />

            {/* Map Overlay */}
            <div className="absolute bottom-4 right-4 w-48 h-32 border-4 border-white rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3922.568117829547!2d7.4411130000000005!3d10.534642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDMyJzA0LjciTiA3wrAyNicyOC4wIkU!5e0!3m2!1sen!2sng!4v1755120931733!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Muritala Square Arena"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
