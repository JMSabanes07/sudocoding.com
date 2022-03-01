import { useState, useEffect } from 'react'
import HeaderDesktop from './desktop'
import HeaderMovile from './movile'

const Header = ({ offset }) => {
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(innerWidth)
    const resize = () => {
      setWidth(innerWidth)
    }

    addEventListener('resize', resize)
    return () => removeEventListener('resize', resize)
  }, [])

  return width > 1023 ? <HeaderDesktop /> : <HeaderMovile offset={offset} />
}

export default Header
