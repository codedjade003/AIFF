import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Films from "./pages/Films";
import Schedule from "./pages/Schedule";
import Venue from "./pages/Venue";
import Tickets from "./pages/Tickets";
import Contact from "./pages/Contact";
import Submit from "./pages/Submit";
import Workshop from "./pages/Workshop";
import Gallery from "./pages/Gallery";
import Layout from "./layout/Layout";
import TermsOfService from "./pages/legal/TermsOfService";
import CookiePolicy from "./pages/legal/CookiePolicy";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import ScrollToHash from "./ScrollToHash"


function App() {
  return (
    <Layout>
    <ScrollToHash />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/films" element={<Films />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/venue" element={<Venue />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/submit" element={<Submit />} />
      <Route path="/workshop" element={<Workshop />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/legal/terms" element={<TermsOfService />} />
      <Route path="/legal/privacy" element={<PrivacyPolicy />} />
      <Route path="/legal/cookies" element={<CookiePolicy />} />

    </Routes>
    </Layout>
  );
}

export default App;
