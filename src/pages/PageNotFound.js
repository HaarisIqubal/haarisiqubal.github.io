import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Typewriter ,Cursor} from 'react-simple-typewriter'

export default function PageNotFound() {
  return (
    <>
      <Helmet>
        <title>_page_not_found</title>
      </Helmet>
      <div className='flex items-center justify-center w-full h-[100vh] '>
            <div className='section-heading'>
            &#123;
            <Typewriter words={["_unable_to_find_your_page_🤪"]} typeSpeed={200} />
            <Cursor />
            &#125;
            </div>
            <Link className='button-style' to='/'>_go_home</Link>
      </div>
    </>
  )
}
