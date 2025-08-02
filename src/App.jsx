import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Tools from "./components/Tools";
import Portfolio from "./components/Portfolio";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <section className="dark:bg-neutral-900 bg-white dark:text-white text-black">
      <Header />
      <Hero />
      <About />
      <Tools/>
      <Portfolio/>
      <Reviews />
      <Contact />
      <Footer />
      
    </section>
  );
}

export default App;
