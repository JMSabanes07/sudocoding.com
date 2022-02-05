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
            <Button isActive={router.asPath === '/'}>{'[1] <Home />'}</Button>
          </Link>
        </li>
        <li>
          <Link href="/portfolio">
            <Button isActive={router.asPath === '/portfolio'}>
              {'[2] <Portfolio />'}
            </Button>
          </Link>
        </li>
      </List>
      <h2>$ SUDO</h2>
      <List justifySelf="flex-end">
        <li>
          <Link href="/about">
            <Button isActive={router.asPath === '/about'}>
              {'[3] <About us />'}
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <Button isActive={router.asPath === '/contact'}>
              {'[4] <Contact />'}
            </Button>
          </Link>
        </li>
      </List>
    </PageHeader>
  )
}

export default Header
