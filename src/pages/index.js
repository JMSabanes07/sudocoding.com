import Head from 'next/head'

//components
import Header from '../components/header'
import { BackgroundApp } from 'components/background'

const Home = () => (
  <BackgroundApp>
    <Head>
      <title>$ Sudo - Home</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
  </BackgroundApp>
)

export default Home
