import React from 'react'
import { Link } from 'react-router-dom'
import portolio from '../../data/porfolio.json'
import PortfolioCard from '../Portfolio/PortfolioCard'
import RevealOnScroll from '../RevealOnScroll'

export default function Portfolio() {
  const porfolio = portolio.portfolio
  return (
    <div className='flex items-center justify-center pt-[100px]'>
        <div className='section-width'>
        <h2 className='section-heading'>&lt;Portfolio&gt;</h2>
        <p className='text-center body-color pt-4'>
        Welcome to my portfolio—a visual narrative of my journey, passions, and creations. 
        <br/>Each piece reflects my dedication, creativity, and commitment to excellence. Explore and immerse yourself in the stories behind the work
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-6 items-stretch">
          {porfolio && porfolio.slice(0,3).map((item, i) => (
            <RevealOnScroll key={item.id} delay={`${i * 100}ms`} className="h-full">
              <PortfolioCard item={item} />
            </RevealOnScroll>
          ))}
        </div>
        <div className='flex items-center justify-center pt-4'>
        <Link to="/portfolio" className='button-style'>
            Read More &#125;
        </Link>
        </div>
        </div>
    </div>
  )
}
