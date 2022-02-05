import { animation } from './assets/animation'
import { useRef, useEffect } from 'react'
import { AnimationContainer } from './styles'

const AsciiAnimation = () => {
  const animarionRef = useRef()
  const play = async () => {
    const frames = animation.length
    for (let i = 0; i < frames; i++) {
      if (animarionRef.current) {
        animarionRef.current.innerHTML = `<font><pre>${animation[i]}</pre></font>`
      }
      await new Promise((r) => setTimeout(r, 29))
    }
  }

  useEffect(() => {
    play()
    const loop = setInterval(() => {
      play()
    }, 700)
    return () => clearInterval(loop)
  }, [])

  return (
    <AnimationContainer>
      <div ref={animarionRef}></div>
    </AnimationContainer>
  )
}

export default AsciiAnimation
