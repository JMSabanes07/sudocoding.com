import Layout from 'components/layout'
import Head from 'next/head'

//components
import { HomeContainer } from './index.styles'

const Home = () => {
  return (
    <HomeContainer>
      <Head>
        <title>$ Sudo - Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </HomeContainer>
  )
}

Home.Layout = Layout

export default Home
