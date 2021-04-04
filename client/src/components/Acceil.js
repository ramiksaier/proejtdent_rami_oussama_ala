import { useState, useEffect } from "react";
import Navigation from "./Nav";
import Header from "./Head";
import Features from "./Features";
import About from "./About";
import Services from "./Services";
import Gallery from "./Gallery";
import Doctors from "./Doctors";
import Team from "./Developer";
import Contact from "./Contact";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Acceil = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header />
      <Doctors />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery />
      <Features />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default Acceil;
