import { ArrowUpRight } from "lucide-react";
import React from "react";
import images from '../assets/images';

function Portfolio() {

    const projects = [
        {
            title: "Full Stack Web App",
            tags: ["API", "Development", "UI"],
            image: images.demo4,
        },
        {
            title: "E-commerce Platform",
            tags: ["React", "Node.js", "MongoDB"],
            image: images.demo2,
        },
        {
            title: "Portfolio Website",
            tags: ["HTML", "CSS", "JavaScript"],
            image: images.demo3,
        },
        {
            title: "Blog Application",
            tags: ["Express", "MongoDB", "React"],
            image: images.demo5,
        },
        {
            title: "Social Media App",
            tags: ["React", "Node.js", "Socket.io"],
            image: images.demo6,
        },
        {
            title: "Real-time Chat App",
            tags: ["WebSocket", "Node.js", "React"],
            image: images.demo7,
        },
    ]

  return (
    <section className="mt-20 mb-20">
      <div className="container mx-auto p-2 md:px-14 mb-14">
        <div className="mb-4">
          <span className="text-sm bg-cyan-800/40 rounded-md p-2  text-neutral-200">
            My Portfolio
          </span>
        </div>
        <h1 className="text-2xl">Recent Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
            {
                projects.map((project, index) => (
                    <div key={index} className="bg-neutral-800 border-1 border-neutral-500/35 rounded-2xl p-4">
                        <img
                            src={project.image}
                            alt={`Project ${index + 1}`}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <div className="flex justify-between items-center mb-2">
                            <div>
                                <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
                                <div className="flex space-x-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="bg-neutral-700/70 py-1 px-2 text-neutral-300 rounded text-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <ArrowUpRight size={34} className="bg-cyan-600 rounded-md p-1 cursor-pointer hover:bg-cyan-500" />
                            </div>
                        </div>
                    </div>
                ))
            }
          {/* <div className="bg-neutral-800 border-1 border-neutral-500/35 rounded-2xl p-4">
            <img
              src={projects[0].image}
              alt="Project 1"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="flex justify-between items-center mb-2">
                <div>
              <h2 className="text-lg font-semibold mb-2">FUll Stack Web App</h2>
              <div className="flex space-x-2">
                <span className="bg-neutral-700 py-1 px-2 text-neutral-300 rounded text-sm">API</span>
                <span className="bg-neutral-700 py-1 px-2 text-neutral-300 rounded text-sm">Development</span>
                <span className="bg-neutral-700 py-1 px-2 text-neutral-300 rounded text-sm">UI</span>
              </div>
            </div>
            <div>
                <span className=""><ArrowUpRight size={34} className="bg-cyan-600 rounded-md p-1 hover:bg-cyan-500" /></span>
            </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
