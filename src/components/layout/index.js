import { useEffect, useState, useRef, useContext } from 'react'
import { useRouter } from 'next/router'
import Header from 'components/header'
import { useSwipeable } from 'react-swipeable'

// components
import { LayoutContainer } from './styles'

// context
import { Context } from 'context/movileMenu'

const Layout = ({ children }) => {
  const [offset, setOffset] = useState(0)
  const { setOpenMenu } = useContext(Context)
  const layoutRef = useRef()
  const router = useRouter()
  const { ref } = useSwipeable({
    onSwipedLeft: () => setOpenMenu(true),
    onSwipedRight: () => setOpenMenu(false),
  })

  const onScroll = (e) => setOffset(e.target.scrollTop)

  useEffect(() => {
    ref(document)
  }, [])

  useEffect(() => {
    layoutRef.current.scrollTo(0, 0)
  }, [router])

  return (
    <LayoutContainer
      ref={layoutRef}
      onScroll={onScroll}
      // onTouchStart={handleStartSwipe}
      // onTouchMove={handleMoveSwipe}
      // onTouchEnd={handleEndSwipe}
    >
      <Header offset={offset} />
      {/* <Nav /> */}
      {children}
    </LayoutContainer>
  )
}

export default Layout
