import logo1 from "../assets/sponsors/nfclogo.jpg"; 
import logo2 from "../assets/sponsors/fmactcelogo.png"; 
import logo3 from "../assets/sponsors/nitdalogo.png"; 
import logo4 from "../assets/sponsors/cbaaclogo.jpg";

const Sponsors = () => {
  const sponsorLogos = [
    { src: logo1, alt: "NFC Logo" },
    { src: logo2, alt: "FMACTCE Logo" },
    { src: logo3, alt: "NITDA Logo" },
    { src: logo4, alt: "CBAAC Logo" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold text-gray-600">Supported By</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {sponsorLogos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
