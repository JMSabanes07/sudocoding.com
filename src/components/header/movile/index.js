import { useEffect, useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { List } from 'components/nav/styles'
import { motion } from 'framer-motion'

// style
import { MovileContainer, ListContainer, Button as MenuBtn } from './styles'
import { Button } from 'components/buttons'

// context
import { Context } from 'context/movileMenu'

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '100%' },
}

const HeaderMovile = ({ offset }) => {
  const { openMenu, setOpenMenu } = useContext(Context)
  const router = useRouter()

  const handleOpen = () => {
    setOpenMenu(!openMenu)
  }

  useEffect(() => {
    setOpenMenu(false)
  }, [router])

  return (
    <MovileContainer offset={offset}>
      <Link href="/">
        <h2>$ SUDO</h2>
      </Link>
      <MenuBtn onClick={handleOpen}>{!openMenu ? '☰' : 'X'}</MenuBtn>
      <ListContainer>
        <motion.div
          className="animationDiv"
          variants={variants}
          initial={'closed'}
          animate={openMenu ? 'open' : 'closed'}
          transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
        >
          <List>
            <li>
              <Link href="/">
                <Button isActive={router.asPath === '/'}>{'[0] Home'}</Button>
              </Link>
            </li>
            <li>
              <Link href="/works">
                <Button isActive={router.asPath === '/works'}>
                  {'[1] Works'}
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <Button isActive={router.asPath === '/about'}>
                  {'[2] About us'}
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <Button isActive={router.asPath === '/contact'}>
                  {'[3] Contact'}
                </Button>
              </Link>
            </li>
          </List>
        </motion.div>
      </ListContainer>
    </MovileContainer>
  )
}

export default HeaderMovile
