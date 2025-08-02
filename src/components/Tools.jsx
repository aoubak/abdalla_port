import React from "react";

function Tools() {
const tools = [
    {
        name: "VS Code",
        type: "Code Editor",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
        name: "Figma",
        type: "Design Tool",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
        name: "CSS3",
        type: "Styling",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
        name: "JavaScript",
        type: "Programming Language",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
        name: "MongoDB",
        type: "Database",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
        name: "Node.js",
        type: "Backend",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
        name: "React",
        type: "Frontend Framework",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
        name: "Express",
        type: "Backend Framework",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
        name: "Tailwind CSS",
        type: "CSS Framework",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
];

return (
    <section className="mt-20 mb-20">
        <div className="container mx-auto p-2 md:px-14">
            <div className="mb-4">
            <span className="text-sm bg-cyan-800/40 rounded-md p-2  text-neutral-200">My Tools</span>
        </div>
            <div className="md:w-2/4 mb-4">
                <h1 className="text-2xl">Essential Tools I Use</h1>
                <p className="text-sm text-neutral-400 mt-2">
                    Discover the key tools I use daily, including VS Code, Git, React,
                    Node.js, and Figma.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 ">
                {tools.map((tool, idx) => (
                    <div
                        key={idx}
                        className="border-1 border-neutral-500/35 hover:bg-neutral-600/25 duration-300 cursor-pointer px-2 p-2 rounded-2xl"
                    >
                        <div className="flex items-center justify-start">
                            <div>
                                <img
                                    src={tool.img}
                                    alt={tool.name}
                                    className="bg-neutral-700/75 p-1 w-10 h-10 rounded-md"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm text-neutral-200 ml-2">
                                    {tool.name}
                                </span>
                                <span className="text-sm text-neutral-400 ml-2">
                                    {tool.type}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
}

export default Tools;
