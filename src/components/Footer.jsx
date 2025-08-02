import React from "react";

function Footer() {
return (
    <section>
        <div className="bg-neutral-800/75 text-neutral-200 p-4 rounded-lg mt-20 pb-20">
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
                    <div></div>
                </div>
            </div>
        </div>
    </section>
);
}


export default Footer;
