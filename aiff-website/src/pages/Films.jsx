import React from "react";
import filmImages from "../assets/films"; // Key-value map like { 'Film Title': imagePath }

const films = [
  {
    id: 'mati-a-zazzau',
    title: 'Mati a Zazzau',
    year: 2020,
    platform: 'Netflix',
    description: 'A Kannywood thriller about a man chasing his father’s buried treasure.',
    link: 'https://www.netflix.com/ng/title/81689062',
    premiere: true,
  },
  {
    id: 'a-lot-like-love',
    title: 'A Lot Like Love',
    year: 2023,
    platform: 'Netflix',
    description: 'A touching story of love and African soul—courtesy of Dee Dee Films.',
    link: 'https://www.netflix.com/ng/title/81689061',
    premiere: false,
  },
  {
    id: 'the-plan',
    title: 'The Plan',
    year: 2022,
    platform: 'Netflix',
    description: 'A compelling Dee Dee Films production—streaming worldwide.',
    link: 'https://www.netflix.com/ng/title/81646286',
    premiere: false,
  }
];

const Films = () => {
  return (
    <section id="films" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold">Films on Screen</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Celebrating powerful stories streaming on global platforms. Discover our top picks from the acclaimed Dee Dee Films catalogue.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {films.map((film) => (
            <a
              key={film.id}
              href={film.link}
              target="_blank"
              rel="noopener noreferrer"
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
                  {film.title} <span className="text-sm text-gray-500">({film.year})</span>
                </h3>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{film.platform}</span>
                </div>
                <p className="text-gray-600 mb-4">{film.description}</p>
                <span className="text-green-600 hover:text-green-700 font-semibold text-sm">
                  Watch now →
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-full font-semibold transition duration-300"
          >
            View Full Film Lineup
          </a>
        </div>
      </div>
    </section>
  );
};

export default Films;
