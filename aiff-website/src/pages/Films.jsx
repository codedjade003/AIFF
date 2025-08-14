import React from "react";
import filmImages from "../assets/films"; // { 'Film Title': imagePath }

const films = [
  {
    id: "sahel-art-film",
    title: "Sahel: Art and Empires on the Shores of the Sahara",
    year: 2020,
    description:
      "A sweeping visual journey through the Sahel, capturing the grandeur of its empires, the richness of its artistry, and the enduring spirit of its people.",
  },
  {
    id: "rariya",
    title: "Rariya",
    year: 2017,
    description:
      "A celebrated Kannywood classic that captures the drama, romance, and essence of Northern Nigerian storytelling.",
  },
  {
    id: "sahelian-film",
    title: "Sahel: The Perfect Storm",
    year: 2025,
    description:
      "An evocative cinematic portrait of the Sahel’s landscapes, cultures, and the powerful forces that shape its destiny.",
  },
];

const Films = () => {
  return (
    <section id="films" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold">
            Films on Display
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A curated selection of films showcasing the beauty, depth, and
            diversity of Sahelian storytelling.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {films.map((film) => (
            <div
              key={film.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={filmImages[film.title]}
                  alt={film.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {film.title}{" "}
                  <span className="text-sm text-gray-500">({film.year})</span>
                </h3>
                <p className="text-gray-600">{film.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Films;
