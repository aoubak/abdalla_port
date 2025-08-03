import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Tools from "../components/Tools";
import Portfolio from "../components/Portfolio";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";


function HomePage() {
  return (
    <section>
    
      <Hero />
      <About />
      <Tools />
      <Portfolio />
      <Reviews />
      <Contact />
    </section>
  );
}

export default HomePage;
