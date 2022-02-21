import Link from 'next/link'
import { NavContainer, List } from './styles'

const Nav = () => {
  return (
    <NavContainer>
      <List>
        <li>
          <Link href="/">{'[1] <Home />'}</Link>
        </li>
        <li>
          <Link href="/works">{'[2] <Portfolio />'}</Link>
        </li>
        <li>
          <Link href="/about">{'[3] <About me />'}</Link>
        </li>
        <li>
          <Link href="/contact">{'[4] <Contact />'}</Link>
        </li>
      </List>
    </NavContainer>
  )
}

export default Nav
