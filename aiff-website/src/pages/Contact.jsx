import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // for success/error message

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Example submission to Formspree — replace with your own endpoint
      const res = await fetch("https://formspree.io/f/mblkzbpv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Network error. Try again later.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold">Contact Us</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have questions about the festival? Get in touch with our team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {[
              { id: "name", label: "Full Name", type: "text" },
              { id: "email", label: "Email Address", type: "email" },
              { id: "subject", label: "Subject", type: "text" },
            ].map(({ id, label, type }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-gray-700 font-medium mb-2">
                  {label}
                </label>
                <input
                  type={type}
                  id={id}
                  required
                  value={formData[id]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            ))}

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
            >
              Send Message
            </button>

            {status && <p className="text-sm text-center text-green-700">{status}</p>}
          </form>

          {/* Contact Info */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                {[
                  {
                    icon: "envelope",
                    title: "Email",
                    text: "info@arewafilmfestival.com",
                  },
                  {
                    icon: "clock",
                    title: "Office Hours",
                    text: "Monday - Friday: 9:00 AM - 5:00 PM",
                  },
                ].map(({ icon, title, text }, i) => (
                  <div key={i} className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <i className={`fas fa-${icon} text-green-600`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold">{title}</h4>
                      <p className="text-gray-600">{text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Socials */}
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {["facebook-f"].map((icon, i) => (
                    <a
                      key={i}
                      href="https://facebook.com/arewaintlfilmfestival"
                      className="bg-gray-200 hover:bg-green-600 hover:text-white p-3 rounded-full transition duration-300"
                    >
                      <i className={`fab fa-${icon}`}></i>
                    </a>
                  ))}

                  {["twitter"].map((icon, i) => (
                    <a
                      key={i}
                      href="https://x.com/AiffN32830?t=ltCu6e1jDRjEEe4TvtODQg&s=09"
                      className="bg-gray-200 hover:bg-green-600 hover:text-white p-3 rounded-full transition duration-300"
                    >
                      <i className={`fab fa-${icon}`}></i>
                    </a>
                  ))}

                  {["instagram"].map((icon, i) => (
                    <a
                      key={i}
                      href="https://www.instagram.com/arewafilmfestival"
                      className="bg-gray-200 hover:bg-green-600 hover:text-white p-3 rounded-full transition duration-300"
                    >
                      <i className={`fab fa-${icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
