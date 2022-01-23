import Layout from 'components/layout'
import Head from 'next/head'

// components
import { HomeContainer, SectionContainer, Wrapper } from './index.styles'
import AsciiAnimation from 'components/animation'
import Tag from 'components/tag'

const Home = () => {
  return (
    <HomeContainer>
      <Head>
        <title>$ Sudo - Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SectionContainer>
        <Wrapper>
          <Tag tag="span" position="inline">
            <span>Hi! This is</span>
          </Tag>
          <Tag tag="h1" position="left">
            <h1>SUDO CODING</h1>
          </Tag>
          <Tag tag="h2">
            <h2>Frontend developer</h2>
          </Tag>
        </Wrapper>
        <AsciiAnimation />
      </SectionContainer>
    </HomeContainer>
  )
}

Home.Layout = Layout

export default Home
