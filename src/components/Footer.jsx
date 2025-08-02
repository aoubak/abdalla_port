import React from "react";

function Footer() {
return (
    <section>
        <div className="bg-neutral-800/75 text-neutral-200 p-4 rounded-lg mt-20 pb-15">
            <div className="container mx-auto p-2 md:px-14">
                <div className="md:flex justify-between  items-center">
                    <div className="md:w-2/4 mb-4 ">
                        <h1 className="text-3xl mb-4 ">
                            Let's work together to create something amazing!
                        </h1>
                        <div>
                            <button className="bg-cyan-600 text-neutral-900 px-4 py-2  rounded-md">
                                Start Now
                            </button>
                        </div>
                    </div>
                    
                    <ul>
                        <h1 className="">Site Map</h1>
                        <li className="text-sm text-neutral-400 mb-2">Home</li>
                        <li className="text-sm text-neutral-400 mb-2">About</li>
                        <li className="text-sm text-neutral-400 mb-2">Work</li>
                        <li className="text-sm text-neutral-400 mb-2">Reviews</li>
                        <li className="text-sm text-neutral-400 mb-2">Contact</li>
                    </ul>
                    <ul>
                        <h1 className="mt-4">Socials</h1>
                        <li className="text-sm text-neutral-400 mb-2">GitHub</li>
                        <li className="text-sm text-neutral-400 mb-2">LinkedIn</li>
                        <li className="text-sm text-neutral-400 mb-2">Facebook</li>
                        <li className="text-sm text-neutral-400 mb-2">Twitter</li>
                        <li className="text-sm text-neutral-400 mb-2">YouTube</li>
                    </ul>
                   
                </div>
                                    <div className="mt-6 bg-amber-50/15 h-0.5"></div>

                 <div className="flex flex-col md:flex-row md:justify-between items-center mt-4">
                        <p className="text-sm  text-neutral-400 mt-4">
                            © 2025 <span className="font-bold">Abdalla</span>. All rights reserved.
                        </p>
                        <p className="text-sm text-neutral-400 mt-2">
                            Built with <span className="font-bold">React</span> and <span className="font-bold">Tailwind CSS</span>.
                        </p>
                    </div>
            </div>
        </div>
    </section>
);
}


export default Footer;
