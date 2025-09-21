import React from 'react'
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <div className='flex items-center justify-center pt-[100px]'>
        <div className='section-width'>
        <h2 className='section-heading'>
        &lt;About_Me&gt;
        </h2>
        <p className='text-center body-color pt-4'>
        Hello! I'm a passionate full-stack developer with a unique blend of technical expertise and purpose-driven innovation. With a foundation in Mechatronics Engineering and currently pursuing E-Mobility studies, I specialize in Artificial Intelligence, Sustainability & Production. My core competencies span Application Development, Web Development, and AI technologies including Machine Learning and Deep Learning. I'm committed to creating meaningful solutions that make a positive impact on the world through cutting-edge technology and sustainable innovation.
        <br />
            <br />Discover what drives my passion for technology, explore my creative process, and uncover the story behind my journey in tech...
        </p>
        <div className='flex items-center justify-center pt-4'>
        <Link to="/about" className='button-style'>
            Read More &#125;
        </Link>
        </div>
        </div>
    </div>
  )
}
