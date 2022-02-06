import { animation } from './assets/animation'
import { useRef, useEffect } from 'react'
import { AnimationContainer } from './styles'

const AsciiAnimation = () => {
  const animarionRef = useRef()

  useEffect(() => {
    let frames = animation.length
    animarionRef.current.innerText = animation[0]
    const timer = setInterval(() => {
      frames = frames >= animation.length - 1 ? 0 : frames + 1
      if (animarionRef.current) {
        animarionRef.current.innerText = animation[frames]
      }
    }, 29)
    return () => {
      console.log('returning')
      console.log(clearTimeout(timer))
    }
  }, [])

  return (
    <AnimationContainer>
      <pre ref={animarionRef}></pre>
    </AnimationContainer>
  )
}

export default AsciiAnimation
