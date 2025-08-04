import React, { useEffect, useState } from "react";
import HeroImg from "../assets/images/Hero.jpg";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("2025-10-10T10:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0");
      const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0");
      const minutes = String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0");
      const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, "0");

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateCountdown, 1000);

    updateCountdown(); // initialize immediately
    return () => clearInterval(interval); // cleanup
  }, []);

  return (
<section
  id="home"
  className="relative min-h-screen flex items-center justify-center text-white bg-cover bg-center"
  style={{ backgroundImage: `url(${HeroImg})` }}
>
  <div className="absolute inset-0 bg-black/50 z-0" />
  <div className="relative z-10 max-w-7xl w-full px-4 text-center">
        <div className="mb-8">
          <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            October 10–15, 2025
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg">
          Arewa International Film Festival
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-shadow">
          Celebrating the rich cinematic heritage and emerging talents from
          Northern Nigeria and beyond.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#tickets"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300"
          >
            Get Tickets
          </a>
          <a
            href="#films"
            className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-full font-semibold transition duration-300"
          >
            View Films
          </a>
        </div>

        {/* Countdown Timer */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl mb-4 text-shadow">
            Festival Starts In:
          </h3>
          <div className="grid grid-cols-4 gap-4">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="rounded-lg p-4 text-center bg-black/30">
                <div className="text-3xl font-bold">{value}</div>
                <div className="text-sm capitalize">{unit}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
