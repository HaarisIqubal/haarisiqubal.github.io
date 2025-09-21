import React,{useState} from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';

import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const currentRoute = useLocation().pathname.toLowerCase();
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)
  return (
    <div className='w-full'>
        <div className='flex items-center justify-between'>
            <div className='flex flex-col items-center justify-center text-gray-400 hover:text-white transition ease-out duration-200'>
            <Link to="/" className='text-xl code-font ml-2'>{'// haaris_iqubal'}</Link>
            </div>
            <div onClick={toggleMenu} className='p-4 sm:hidden'>
                <GiHamburgerMenu size="2em" color="white" />
            </div>
            <div className={`fixed z-50 top-0 h-full w-full ${menuOpen ? '' : 'hidden'} sm:hidden bg-slate-900`}>
                <div className='flex justify-end w-full'>
                    <button onClick={toggleMenu} className='text-4xl relative right-5 top-3 text-white'>X</button>
                </div>
                <div className='flex flex-col items-center justify-center h-full code-font body-color text-4xl'>
                <Link onClick={toggleMenu} to="/" className="nav-link">_home</Link>
                <Link onClick={toggleMenu} to="/about" className="nav-link">_about</Link>
                <Link onClick={toggleMenu} to="/portfolio" className="nav-link">_portfolio</Link>
                <Link onClick={toggleMenu} to="/resume" className="nav-link">_resume</Link>
                {/* <a href={'/#contact'} className="nav-link">_contact</a> */}
                </div>
            </div>
            <div className='code-font sm:block hidden body-color mr-4 p-4'>
                <Link to="/" exact className={`${currentRoute === "/" ? 'text-primary-color' : ''} nav-link text-xl`}>_home</Link>
                <Link to="/about" className={`${currentRoute.includes('/about') ? 'text-primary-color' : ''} nav-link text-xl ml-4`}>_about</Link>
                <Link to="/portfolio" className={`${currentRoute.includes('/portfolio') ? 'text-primary-color' : ''} nav-link text-xl ml-4`}>_portfolio</Link>
                <Link to="/resume" className={`${currentRoute.includes('/resume') ? 'text-primary-color' : ''} nav-link text-xl ml-4`}>_resume</Link>
                {/* <a href={'/#contact'} className={`${currentRoute.includes('/#contact') ? 'text-primary-color' : ''} nav-link text-xl ml-4`}>_contact</a> */}
            </div>
            
        </div>
    </div>
  )
}
