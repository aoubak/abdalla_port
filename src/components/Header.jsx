import { Menu } from 'lucide-react'
import React, { useState } from 'react'

function Header() {

    // const [darkMode, setDarkMode] = useState(false);
    // const toggleDarkMode = () => {
    //     setDarkMode(!darkMode);
    // }

  return (

    <section className='fixed top-0 left-0 right-0 z-50 '>
        <header className=" bg-gradient-to-b from-neutral-900 from-45% p-4">
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-2xl text-neutral-100 font-bold'>ABDALA.</h1>
                </div>
                <nav className=' p-3 '>
                    
                    <ul className='hidden md:flex gap-2 bg-neutral-300 border-1 border-neutral-500/35 dark:bg-neutral-800/75 rounded-2xl backdrop-blur-sm px-2 py-3 '>
                        <li><a href="/" className='bg-neutral-100 text-neutral-800 duration-400 text-[14px] rounded-lg px-2 py-2 ' >Home</a></li>
                        <li><a href="/" className='hover:text-neutral-400 duration-400 text-[14px] rounded-md px-2 py-2 ' >About</a></li>
                        <li><a href="/" className='hover:text-neutral-400 duration-400 text-[14px] rounded-md px-2 py-2 ' >Work</a></li>
                        <li><a href="/" className='hover:text-neutral-400 duration-400 text-[14px] rounded-md px-2 py-2 ' >Reviews</a></li>
                    </ul>
                </nav>

{/* menu bergur */}
                <div className='md:hidden'>
                    <button className='bg-neutral-700 border-1 text-white border-neutral-500/35 px-2 py-2  rounded-2xl'><Menu size={32}  /></button>
                </div>

                <div className='hidden md:flex '>
                    <button className='bg-neutral-200 text-neutral-900 px-4 py-2  rounded-2xl'>Contact Me</button>
                </div>
            </div>
        </header>
    </section>
    
  )
}

export default Header