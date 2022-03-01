import Link from 'next/link'
import { useRouter } from 'next/router'
import { List } from 'components/nav/styles'

// style
import { DesktopContainer } from './styles'
import { Button } from 'components/buttons'

const HeaderDesktop = () => {
  const router = useRouter()

  return (
    <DesktopContainer>
      <List>
        <li>
          <Link href="/">
            <Button isActive={router.asPath === '/'}>{'[0] Home'}</Button>
          </Link>
        </li>
        <li>
          <Link href="/works">
            <Button isActive={router.asPath === '/works'}>{'[1] Works'}</Button>
          </Link>
        </li>
        <li>
          <Link href={'/'}>
            <h2>$ SUDO</h2>
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
    </DesktopContainer>
  )
}

export default HeaderDesktop
