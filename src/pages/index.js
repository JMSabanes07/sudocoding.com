import Layout from 'components/layout'
import Head from 'next/head'
import Link from 'next/link'
import TypeAnimation from 'react-type-animation'

// components
import {
  HomeContainer,
  PortadaContainer,
  Wrapper,
  ButtonContainer,
} from './index.styles'
import AsciiAnimation from 'components/animation'
import Tag from 'components/tag'
import { Button } from 'components/buttons'

const Home = () => {
  return (
    <HomeContainer>
      <Head>
        <title>$ Sudo - Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PortadaContainer>
        <Wrapper>
          <Tag tag="span" position="inline">
            <span>Hi! This is</span>
          </Tag>
          <Tag tag="h1" position="left">
            <h1>$ SUDO CODING</h1>
          </Tag>
          <Tag tag="h2" highlight>
            <h2>
              <TypeAnimation
                className="typing-cursor"
                cursor={false}
                sequence={[
                  'Frontend development',
                  2000,
                  'Backend development',
                  2000,
                  'Full Stack development',
                  2000,
                ]}
                wrapper={'span'}
                repeat={Infinity}
              />
            </h2>
          </Tag>
        </Wrapper>
        <AsciiAnimation />
      </PortadaContainer>
      <ButtonContainer>
        <Link href="/contact">
          <Button isActive>[1] Get in touch</Button>
        </Link>
        <Link href="/portfolio">
          <Button>[2] See my work</Button>
        </Link>
      </ButtonContainer>
    </HomeContainer>
  )
}

Home.Layout = Layout

export default Home
