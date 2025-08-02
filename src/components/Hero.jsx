import React from "react";
import images from '../assets/images';
import { ArrowDown, ArrowDownToLine } from "lucide-react";



function Hero() {
  return (
    <section className="container mx-auto md:pt-20">
      <div className="md:px-14 h-screen">
        <div className="flex flex-col md:flex-row pt-30 md:pt-0 md:justify-between  h-full items-center space-x-2  ">
          <div className="px-4 md:w-1/2 md:p-0  ">
          <div className="flex items-center space-x-2 mb-4 bg-neutral-800 border-1 border-neutral-500/35 w-33 rounded-full px-2">
            <div className="bg-green-500 w-1 h-1 p-1 text-sm rounded-full "></div>
            <span className="text-neutral-300 text-sm">Available Now.</span>
          </div>
            <h1 className="text-4xl font-bold mb-4">
              Turning Ideas into Digital Products
            </h1>
            <p className="text-lg mb-8">
              Helping brands grow through thoughtful web experiences and creative design.
            </p>
            <div className="flex space-x-4 mb-8">
                <button className="flex justify-center items-center cursor-pointer text-sm bg-cyan-500 text-neutral-900 px-4 py-2 rounded-lg hover:bg-cyan-400 transition duration-300">
              Download CV <ArrowDownToLine size={18} />
            </button>
            <button className="bg-neutral-700 flex justify-center cursor-pointer items-center hover:bg-neutral-600 text-sm border-1 border-neutral-500/35 text-neutral-200 px-4 py-2 rounded-lg  transition duration-300">
              View More! <ArrowDown size={18} />
            </button>
            </div>
          </div>
          <div className="md:w-1/2 bg-gradient-to-t from-blue-500/30   to-purple-500/0 rounded-4xl">
            <img
              src={images.heroIMage}
              alt="Profile"
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
