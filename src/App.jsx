import React from "react";
import Header from "./components/Header";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Tools from "./components/Tools";
// import Portfolio from "./components/Portfolio";
// import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
// import Contact from "./components/Contact";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <section className="dark:bg-neutral-900 bg-white dark:text-white text-black">
      <Header />
     
      <Outlet />
    
      <Footer />
      
    </section>
  );
}

export default App;
