import Link from 'next/link'
import { List } from 'components/nav/styles'
import { useRouter } from 'next/router'
// style
import { PageHeader } from './styles'
import { Button } from 'components/buttons'

const Header = () => {
  const router = useRouter()
  console.log(router.asPath)

  return (
    <PageHeader>
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
      </List>
      <h2>$ SUDO</h2>
      <List justifySelf="flex-end">
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
    </PageHeader>
  )
}

export default Header
