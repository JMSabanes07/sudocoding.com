import Layout from 'components/layout'
import Head from 'next/head'

//components
import { HomeContainer } from './index.styles'
import Tag from 'components/tag'

const Home = () => {
  return (
    <HomeContainer>
      <Head>
        <title>$ Sudo - Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section>
        <Tag tag="span">
          <span>I am</span>
        </Tag>
        <Tag tag="h1" position="left">
          <h1>
            JUAN MANUEL <br />
            SABANES
          </h1>
        </Tag>
        <Tag tag="h2" position="inline">
          <h2>Full Stack Web Developer</h2>
        </Tag>
      </section>
    </HomeContainer>
  )
}

Home.Layout = Layout

export default Home
