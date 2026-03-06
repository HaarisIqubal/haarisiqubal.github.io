import {useTypewriter ,Cursor} from 'react-simple-typewriter'

export default function Hero() {
    const [text] = useTypewriter({
        words: ['A full-stack developer!', 'Web and Application development', "Machine Learning and Deep Learning solution developer"],
        loop: 0,
        typeSpeed: 250
    }) 
  return (
    <div className='flex flex-col items-center justify-center h-[100vh]'>
        <div className='text-sm uppercase tracking-widest mb-4' style={{ color: 'var(--color-muted)' }}>
            {"// Hi I'm Haaris, A..."}
        </div>
        <div className="code-font flex text-4xl md:text-5xl">
            <span style={{ color: 'var(--color-heading)' }}>&#123;</span>
            <span style={{ color: 'var(--color-text)' }}>{text}<Cursor /></span>
            <span style={{ color: 'var(--color-heading)' }}>&#125;</span>
        </div>
    </div>
  )
}
