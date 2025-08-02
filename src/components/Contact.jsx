import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, } from "react-icons/fa";

function Contact() {
  return (
    <section>
      <div className="container mx-auto p-2 md:px-14 mt-20 mb-20">
        <div className="mb-4">
          <span className="text-sm bg-cyan-800/40 rounded-md p-2  text-neutral-200">
            Concat Me
          </span>
        </div>
        <div className="md:flex justify-between items-center">
          <div className="md:w-1/2">
            <h1 className="text-3xl ">Contact me for Collaboration</h1>
            <p className="text-sm text-neutral-400 mt-2 ">
                If you have a project in mind or want to discuss potential
                collaboration, feel free to reach out. I'm always open to new
                opportunities and ideas.
            </p>
            <div>
              <button className="bg-cyan-600 mt-4 text-neutral-900 px-4 py-2  rounded-md">
                Start Now
              </button>
            </div>
            <div className="flex space-x-2 mt-4 ">
            <span className="bg-neutral-700 p-2 duration-300  hover:bg-neutral-600 cursor-pointer rounded-md border border-neutral-500/35">
              <FaFacebookF />
            </span>
            <span className="bg-neutral-700 p-2 duration-300  hover:bg-neutral-600 cursor-pointer rounded-md border border-neutral-500/35">
              <FaTwitter />
            </span>
            <span className="bg-neutral-700 p-2 duration-300  hover:bg-neutral-600 cursor-pointer rounded-md border border-neutral-500/35">
              <FaLinkedinIn />
            </span>
          </div>
          </div>
          {/* form */}
            <div className="mt-4 md:mt-0 md:w-1/2">
                <form className="bg-neutral-800 border-1 border-neutral-500/35 rounded-2xl p-4">
                <div className="flex md:flex-row gap-4">
                    <div className="mb-4">
                    <label className="block text-sm text-neutral-200 mb-2">Name</label>
                    <input
                    type="text"
                    className="w-full bg-neutral-700/75 text-neutral-200 px-3 py-2 rounded-md"
                    placeholder="Your Name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm text-neutral-200 mb-2">Email</label>
                    <input
                    type="email"
                    className="w-full bg-neutral-700/75 text-neutral-200 px-3 py-2 rounded-md"
                    placeholder="Your Email"
                    />
                </div>
                </div>
                <div className="mb-4">
                    <label className="block text-sm text-neutral-200 mb-2">Message</label>
                    <textarea
                    rows="4"
                    className="w-full bg-neutral-700/75 text-neutral-200 px-3 py-2 rounded-md"
                    placeholder="Your Message"
                    ></textarea>
                </div>
                <button type="submit" className="bg-cyan-600 text-neutral-900 px-4 py-2 rounded-md">
                    Send Message
                </button>
                </form>
                </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
