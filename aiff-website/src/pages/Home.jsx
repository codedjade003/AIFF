import React from 'react';
import Hero from './Hero';
import About from './About';
import Films from './Films'; // once ready
import Schedule from './Schedule';
import Venue from './Venue';
import Sponsors from './Sponsors';
import Contact from './Contact';
import Gallery from './Gallery';
import SubmitFilm from './Submit';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Films />
      <Schedule />
      <Venue />
      <Gallery />
      <SubmitFilm />
      <Sponsors />
      <Contact />

    </>
  );
};

export default Home;
