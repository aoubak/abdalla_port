import { MessageCircleWarning, Plus } from "lucide-react";
import React from "react";

function About() {
  return (
    <section className=" ">
        
      <div className="container mx-auto p-2 md:px-14">
        <div className="mb-4">
            <span className="text-sm bg-cyan-800/40 rounded-md p-2  text-neutral-200">About Me</span>
        </div>
        <div className="bg-neutral-800 border-1 border-neutral-500/35 rounded-2xl p-8">
          <div className="flex  justify-between">
            <p className="text-justify text-sm w-3/4 flex">
            I am a passionate software engineer with a focus on creating
            innovative and efficient solutions. My expertise lies in developing
            web applications using modern technologies, ensuring high
            performance and user satisfaction. I thrive in collaborative
            environments and am always eager to learn new skills and improve
            existing ones. Let's build something great together!
            
          </p>
          <span className="bg-neutral-700/75  p-2 rounded-md flex items-center justify-center h-[48px] w-[48px]">
            <MessageCircleWarning size={54} className="text-cyan-500" />
          </span>
          </div>
          <div className="mt-4 flex justify-start space-x-3 items-center">
            <div className="bg-neutral-700/65 rounded-lg border-1 border-neutral-500/35 p-3" ><span className="flex leading-none  items-center text-3xl font-bold">45 <Plus size={18} color="#06b6d4"/></span>
            <span className="text-sm text-neutral-300">Project Done</span></div>
            <div className="bg-neutral-700/65 rounded-lg border-1 border-neutral-500/35 p-3" ><span className="flex leading-none  items-center text-3xl font-bold">10 <Plus size={18} color="#06b6d4"/></span>
            <span className="text-sm text-neutral-300">Years of Experience</span></div>
            <div className="bg-neutral-700/65 rounded-lg border-1 border-neutral-500/35 p-3" ><span className="flex leading-none  items-center text-3xl font-bold">32 <Plus size={18} color="#06b6d4"/></span>
            <span className="text-sm text-neutral-300">Award Wining </span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
