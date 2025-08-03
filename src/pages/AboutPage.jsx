import React from 'react'
import About from '../components/About'
import Tools from '../components/Tools'

function AboutPage() {
  return (
    <div>
      <div className="text-center bg-gradient-to-b from-cyan-900/60 pb-4 pt-30">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="mt-4 text-gray-300">Learn more about my background and skills.</p>
      </div>
      <About />
      <Tools />
     
      

    </div>
  )
}

export default AboutPage