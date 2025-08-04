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

import insta1 from "../assets/instagram/img_1.png";
import insta2 from "../assets/instagram/img_2.png";
import insta3 from "../assets/instagram/img_3.png";
import insta4 from "../assets/instagram/img_4.png";
import insta5 from "../assets/instagram/img_5.png";
import insta6 from "../assets/instagram/img_6.png";

const gallery = [img1, img2, img3, img4, img5, img6, img7, img8];
const insta = [
  { image: insta1, link: 'https://www.instagram.com/p/DKkD3GQonBV' },
  { image: insta2, link: 'https://www.instagram.com/p/DJ7dZCKoJ9K' },
  { image: insta3, link: 'https://www.instagram.com/p/DI6f6dooyyv' },
  { image: insta4, link: 'https://www.instagram.com/p/DH8M1mwokzv/?img_index=1' },
  { image: insta5, link: 'https://www.instagram.com/p/DH26zR6IvXs' },
  { image: insta6, link: 'https://www.instagram.com/p/DH255yzoMiJ/?img_index=1' },
];

const Gallery = () => (
  <section id="gallery" className="bg-white text-black py-20">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="section-title text-2xl mb-6 text-center">
        Official AIFF Gallery
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        className="mb-20"
      >
        {gallery.slice(0, 8).map((img, i) => (
          <SwiperSlide key={i}>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg group relative hover:scale-105 transition-transform duration-300">
              <img src={img} alt={`gallery-${i}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-green-400 group-hover:shadow-lg transition-all duration-300 rounded-lg pointer-events-none" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <h3 className="section-title text-2xl mb-6 text-center">
        From Instagram
      </h3>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
      >
        {insta.map((item, i) => (
          <SwiperSlide key={i}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg group relative hover:scale-105 transition-transform duration-300">
                <img src={item.image} alt={`insta-${i}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-yellow-400 group-hover:shadow-lg transition-all duration-300 rounded-lg pointer-events-none" />
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default Gallery;
