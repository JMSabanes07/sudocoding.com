import Header from 'components/header'
import Nav from 'components/nav'

//components
import { LayoutContainer } from './styles'

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <Nav />
      {children}
    </LayoutContainer>
  )
}

export default Layout
