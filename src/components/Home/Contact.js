import React from 'react'
import RevealOnScroll from '../RevealOnScroll'

export default function Contact() {
  return (
    <div id="contact" className='flex items-center justify-center pt-[100px]'>
        <RevealOnScroll className='section-width pt-4'>
        <h2 className='section-heading'>&lt;Contact_Me&gt;</h2>
        <p className='text-center body-color pt-4'>
        Let's connect and create something remarkable together. Reach out, and let's bring our ideas to life!
        </p>
        <div className='grid md:grid-cols-3 gap-4 grid-cols-1 w-full'>
        <div className='contact-card flex-1 p-4'>
          <h4 style={{ color: 'var(--color-heading)' }}>E-Mail</h4>
          <a className='link' style={{ color: 'var(--color-primary)' }} href='mailto:mdhaarisiqubal@gmail.com'>mdhaarisiqubal@gmail.com</a>
        </div>
        <div className='contact-card flex-1 p-4'>
          <h4 style={{ color: 'var(--color-heading)' }}>Linkedin</h4>
          <a className='link' style={{ color: 'var(--color-primary)' }} href='https://www.linkedin.com/in/haarisiqubal/'>Profile</a>
        </div>
        <div className='contact-card flex-1 p-4'>
          <h4 style={{ color: 'var(--color-heading)' }}>Github</h4>
          <a className='link' style={{ color: 'var(--color-primary)' }} href='https://github.com/HaarisIqubal'>Link</a>
        </div>
        </div>
        
        <div className='flex items-center justify-center pt-4'>
        </div>
        </RevealOnScroll>
    </div>
  )
}
