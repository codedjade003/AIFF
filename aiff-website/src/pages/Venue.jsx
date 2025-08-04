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
            <h3 className="text-2xl font-bold mb-4">Kaduna International Conference Center</h3>
            <p className="text-gray-600 mb-4">
              Located in the vibrant city of Kaduna, the conference center offers state-of-the-art
              facilities perfect for film screenings, workshops, and networking events.
            </p>
            <p className="text-gray-600 mb-6">
              With multiple auditoriums, comfortable seating, and excellent acoustics, it's the ideal
              venue to experience the best of African cinema.
            </p>

            {/* Details */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-green-600 mt-1 mr-3"></i>
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-gray-600">Murtala Mohammed Way, Kaduna, Nigeria</p>
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
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
            >
              <i className="fas fa-map-marked-alt mr-2"></i> Get Directions
            </a>
          </div>

          {/* Map Embed */}
          <div className="rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.105365518647!2d7.432215314794676!3d10.51474739248385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104d3568e8e0c3a1%3A0x4e1c3a3e1a3e1a3e!2sKaduna%20International%20Conference%20Centre!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Kaduna Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
