import React from 'react'
import { Typewriter ,Cursor} from 'react-simple-typewriter'
import { Helmet } from 'react-helmet';
import ScrollToTop from '../utils/ScrollToTop';
export default function About() {
  return (
    <>
    <ScrollToTop />
    <Helmet>
        <title>_about</title>
    </Helmet>
    
    <div className='flex items-center justify-center'>
    <div className='section-width'>
    <div>
        <div className='section-heading pt-4'>
            &#123;
            <Typewriter  words={["_About"]} typeSpeed={200} />
            <Cursor />
            &#125;
        </div>
        <p className='body-color text-center'>
            learn about me what motivates me and what i love do.
        </p>
        <div className='flex items-center justify-center pt-4'>
        </div>
    </div>
    <div>
        <div className='section-heading pt-[50px]'>
        &lt;
        What drives my work 🧘
        &gt;
        </div>
        <div className='grid sm:grid-cols-2'>
          <div className='p-4'>
            <h4 className='text-white text-2xl code-font'>_teamwork</h4>
            <p className='body-color'>Teamwork is crucial in the development for a project. By working together, a team can overcome challenges, share knowledge, and ensure that the final product meets the desired standards. Communication and collaboration are key to success.</p>
          </div>
          <div className='p-4'>
            <h4 className='text-white text-2xl code-font'>_innovation</h4>
            <p className='body-color'>Innovation is the heartbeat of progress—the spark that ignites change and transforms the ordinary into the extraordinary. It's about daring to dream, pushing boundaries, and embracing the unknown. Join me in exploring the endless possibilities of innovation, where ideas become reality and curiosity fuels our journey towards a brighter tomorrow.</p>

          </div>
          <div className='p-4'>
            <h4 className='text-white text-2xl code-font'>_creativity</h4>
            <p className='body-color'>Where ideas bloom, perspectives shift. Let's explore this colorful world together, crafting new horizons with every stroke of imagination</p>

          </div>
          <div className='p-4'>            
            <h4 className='text-white text-2xl code-font'>_excellence</h4>
            <p className='body-color'>Excellence is not just a goal—it's a way of life. It's the relentless pursuit of perfection, the dedication to surpass expectations. Join me in embracing excellence, where every endeavor is a step towards greatness.</p>
          </div>
        </div>
        
    </div>
    <div className=''>
        <div className='section-heading pt-[50px]'>
        &lt;
        Hobbies ❤️
        &gt;
        </div>
        <p className='body-color text-center'>something bit personal yet important</p>
        <div className='grid sm:grid-cols-2 place-items-center'>
          <div className='p-4'>
            <h4 className='text-white text-4xl code-font'>🚴 _cycling</h4>
          </div>
          <div className='p-4'>
            <h4 className='text-white text-4xl code-font'>🥾 _hiking</h4>
          </div>
          <div className='p-4'>
            <h4 className='text-white text-4xl code-font'>⚽️ _football</h4>
          </div>
          <div className='p-4'>            
            <h4 className='text-white text-4xl code-font'>☕️ _cafe_hoping</h4>
          </div>
          <div className='p-4'>            
            <h4 className='text-white text-4xl code-font'>🥷 _hackathoning</h4>
          </div>
          <div className='p-4'>            
            <h4 className='text-white text-4xl code-font'>👨‍🍳 _cooking</h4>
          </div>
        </div>
        
    </div>

    <div>
        <div className='section-heading pt-[50px]'>
        &lt;
        Secrets 👀
        &gt;
        </div>
        <p className='body-color text-center'>something bit you 🤫 about</p>
        <div className='grid sm:grid-cols-2 place-items-center'>
          <div className='p-4'>
            <h4 className='text-white text-4xl code-font text-center'>_birthday</h4>
            <p className='body-color'>celebrating everyday 🥳</p>
          </div>
          <div className='p-4'>
            <h4 className='text-white text-4xl code-font text-center'>_location</h4>
            <p className='body-color'>127.0.0.1:3000</p>
          </div>
        </div>
    </div>
    </div>
    </div>
    </>
  )
}
