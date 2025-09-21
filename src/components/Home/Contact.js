import React from 'react'

export default function Contact() {
  return (
    <div id="contact" className='flex items-center justify-center pt-[100px]'>
        <div className='section-width pt-4'>
        <h2 className='section-heading'>&lt;Contact_Me&gt;</h2>
        <p className='text-center body-color pt-4'>
        Let's connect and create something remarkable together. Reach out, and let's bring our ideas to life!
        </p>
        <div className='grid md:grid-cols-3 gap-4 grid-cols-1 text-white w-full'>
        <div className='contact-card flex-1'>
          <h4>E-Mail</h4>
          <a className='link text-blue-400' href='mailto:mdhaarisiqubal@gmail.com'>mdhaarisiqubal@gmail.com</a>
        </div>
        <div className='contact-card flex-1'>
          <h4>Linkedin</h4>
          <a className='link text-blue-400' href='https://www.linkedin.com/in/haarisiqubal/'>Profile</a>
        </div>
        <div className='contact-card flex-1'>
          <h4 >Github</h4>
          <a className='link text-blue-400' href='https://github.com/HaarisIqubal'>Link</a>
        </div>
        </div>
        
        <div className='flex items-center justify-center pt-4'>
        </div>
        </div>
    </div>
  )
}
