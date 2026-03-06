import React,{useState} from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const currentRoute = useLocation().pathname.toLowerCase();
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)
  return (
    <div className='w-full sticky top-0 z-40 backdrop-blur-sm' style={{ backgroundColor: 'var(--color-nav-bg)', borderBottom: '1px solid var(--color-border)' }}>
        <div className='flex items-center justify-between max-w-[1140px] mx-auto px-4 py-2'>
            <div className='flex flex-col items-center justify-center transition ease-out duration-200' style={{ color: 'var(--color-muted)' }}>
              <Link to="/" className='text-xl code-font ml-2 hover:text-primary-color transition duration-200' style={{ color: 'var(--color-muted)' }}>
                {'// haaris_iqubal'}
              </Link>
            </div>

            <div className='flex items-center gap-2 sm:hidden'>
              <ThemeToggle />
              <button onClick={toggleMenu} className='p-2' aria-label="Open menu">
                <GiHamburgerMenu size="1.8em" style={{ color: 'var(--color-heading)' }} />
              </button>
            </div>

            {/* Mobile overlay menu */}
            <div className={`fixed z-50 top-0 left-0 h-full w-full ${menuOpen ? '' : 'hidden'} sm:hidden`} style={{ backgroundColor: 'var(--color-bg)' }}>
                <div className='flex justify-end w-full p-4'>
                    <button onClick={toggleMenu} className='text-3xl font-bold' style={{ color: 'var(--color-heading)' }} aria-label="Close menu">✕</button>
                </div>
                <div className='flex flex-col items-center justify-center h-3/4 code-font text-4xl gap-6'>
                  <Link onClick={toggleMenu} to="/" className="nav-link" style={{ color: 'var(--color-text)' }}>_home</Link>
                  <Link onClick={toggleMenu} to="/about" className="nav-link" style={{ color: 'var(--color-text)' }}>_about</Link>
                  <Link onClick={toggleMenu} to="/portfolio" className="nav-link" style={{ color: 'var(--color-text)' }}>_portfolio</Link>
                  <Link onClick={toggleMenu} to="/resume" className="nav-link" style={{ color: 'var(--color-text)' }}>_resume</Link>
                </div>
            </div>

            {/* Desktop nav */}
            <div className='code-font hidden sm:flex items-center gap-1 mr-4'>
                <Link to="/" className={`${currentRoute === "/" ? 'text-primary-color' : ''} nav-link text-xl px-3 py-1`} style={{ color: currentRoute === '/' ? 'var(--color-primary)' : 'var(--color-text)' }}>_home</Link>
                <Link to="/about" className={`${currentRoute.includes('/about') ? 'text-primary-color' : ''} nav-link text-xl px-3 py-1`} style={{ color: currentRoute.includes('/about') ? 'var(--color-primary)' : 'var(--color-text)' }}>_about</Link>
                <Link to="/portfolio" className={`${currentRoute.includes('/portfolio') ? 'text-primary-color' : ''} nav-link text-xl px-3 py-1`} style={{ color: currentRoute.includes('/portfolio') ? 'var(--color-primary)' : 'var(--color-text)' }}>_portfolio</Link>
                <Link to="/resume" className={`${currentRoute.includes('/resume') ? 'text-primary-color' : ''} nav-link text-xl px-3 py-1`} style={{ color: currentRoute.includes('/resume') ? 'var(--color-primary)' : 'var(--color-text)' }}>_resume</Link>
                <ThemeToggle />
            </div>
        </div>
    </div>
  )
}

