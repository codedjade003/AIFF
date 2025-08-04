const Sponsors = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold text-gray-600">Supported By</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {[1, 2, 3, 4].map((sponsor) => (
            <div key={sponsor} className="flex justify-center">
              <img
                src={`https://via.placeholder.com/150x80?text=Sponsor+${sponsor}`}
                alt={`Sponsor ${sponsor}`}
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
