import {useTypewriter ,Cursor} from 'react-simple-typewriter'

export default function Hero() {
    const [text] = useTypewriter({
        words: ['A full-stack developer!', 'Web and Application development', "Machine Learning and Deep Learning solution developer"],
        loop: 0,
        typeSpeed: 250
    }) 
  return (
    <div className='flex flex-col items-center justify-center h-[100vh]'>
        <div className='text-white uppercase'>
            {'// Hi I\'m Haaris 👋🏼, A...'}
        </div>
        <div className="code-font flex text-4xl text-white">
            &#123;
        <div className='text-[#E6DB74]'>{text}<Cursor /></div>
            &#125;
      </div>
    </div>
    
  )
}
