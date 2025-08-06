import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../assets/images/img_1.jpg";
import img2 from "../assets/images/img_2.jpg";
import img3 from "../assets/images/img_3.jpg";
import img4 from "../assets/images/img_4.jpg";
import img5 from "../assets/images/img_5.jpg";
import img6 from "../assets/images/img_6.jpg";
import img7 from "../assets/images/img_7.jpg";
import img8 from "../assets/images/img_8.jpg";
import img1 from "../assets/images/img_9.jpg";
import img2 from "../assets/images/img_10.jpg";
import img3 from "../assets/images/img_11.jpg";
import img4 from "../assets/images/img_12.jpg";
import img5 from "../assets/images/img_13.jpg";
import img6 from "../assets/images/img_14.jpg";
import img7 from "../assets/images/img_15.jpg";
import img8 from "../assets/images/img_16.jpg";
import img5 from "../assets/images/img_17.jpg";
import img6 from "../assets/images/img_18.jpg";




import artImg from "../assets/coreDrivers/art_1.jpg";
import cultureImg from "../assets/coreDrivers/culture_1.jpg";
import fashionImg from "../assets/coreDrivers/fashion_1.jpg";
import filmImg from "../assets/coreDrivers/film.jpg";
import foodImg from "../assets/coreDrivers/food_1.jpg";
import peopleImg from "../assets/coreDrivers/people_1.jpg";
import placesImg from "../assets/coreDrivers/places_1.jpg";

import './Gallery.css';

const gallery = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16];

const coreDrivers = [
  {
    label: "FILM",
    image: filmImg,
    description: "Celebrating the power of storytelling through cinema.",
  },
  {
    label: "FASHION",
    image: fashionImg,
    description: "The vibrant expressions of Arewa’s traditional and modern fashion.",
  },
  {
    label: "CULTURE",
    image: cultureImg,
    description: "Rooted in heritage, thriving through creativity and identity.",
  },
  {
    label: "PEOPLE",
    image: peopleImg,
    description: "The lifeblood of the North — resilient, passionate, united.",
  },
  {
    label: "PLACES",
    image: placesImg,
    description: "From ancient cities to modern landscapes, Arewa shines.",
  },
  {
    label: "ART",
    image: artImg,
    description: "Expressions that bridge tradition and contemporary inspiration.",
  },
  {
    label: "FOOD",
    image: foodImg,
    description: "Delight in the flavors that define Arewa’s rich culinary heritage.",
  },
];

const Gallery = () => (
  <section id="gallery" className="bg-white text-black py-20">
    <div className="max-w-7xl mx-auto px-4">
      {/* Official Gallery */}
      <h2 className="section-title text-2xl mb-6 text-center">
        Official AIFF Gallery
      </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          className="aiff-swiper"
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >

        {gallery.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg group relative hover:scale-105 transition-transform duration-300">
              <img
                src={img}
                alt={`gallery-${i}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-green-400 group-hover:shadow-lg transition-all duration-300 rounded-lg pointer-events-none" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Festival Core Drivers */}
      <h3 className="section-title text-2xl mb-6 text-center">
        Festival Core Drivers
      </h3>

        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          className="aiff-swiper"
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >

        {coreDrivers.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg group relative hover:scale-105 transition-transform duration-300">
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-yellow-400 group-hover:shadow-lg transition-all duration-300 rounded-lg pointer-events-none" />
            </div>
            <div className="mt-4 text-center">
              <h4 className="text-lg font-semibold">{item.label}</h4>
              <p className="text-gray-600 text-sm mt-1">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default Gallery;
