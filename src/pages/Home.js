import React from 'react'
import Hero from '../components/Home/Hero';
import About from '../components/Home/About';
import Portfolio from '../components/Home/Portfolio';
import Contact from '../components/Home/Contact';
import ScrollToTop from '../utils/ScrollToTop';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>_haaris_iqubal</title>
      </Helmet>
      <ScrollToTop />
        <Hero />
        <About />
        <Portfolio />
        <Contact />
    </div>
  )
}
