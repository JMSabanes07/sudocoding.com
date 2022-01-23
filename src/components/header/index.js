import Link from 'next/link'
import { List } from 'components/nav/styles'
// style
import { PageHeader } from './styles'

const Header = () => {
  return (
    <PageHeader>
      <List>
        <li>
          <Link href="/">{'[1] <Home />'}</Link>
        </li>
        <li>
          <Link href="/portfolio">{'[2] <Portfolio />'}</Link>
        </li>
      </List>
      <h1>$ Sudo</h1>
      <List>
        <li>
          <Link href="/about">{'[3] <About me />'}</Link>
        </li>
        <li>
          <Link href="/contact">{'[4] <Contact />'}</Link>
        </li>
      </List>
    </PageHeader>
  )
}

export default Header
