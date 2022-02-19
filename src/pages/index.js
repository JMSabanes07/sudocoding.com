import Layout from 'components/layout'
import Head from 'next/head'
import Link from 'next/link'
import TypeAnimation from 'react-type-animation'

// components
import { PortadaContainer, Wrapper } from './index.styles'
import { PageContainer } from 'components/theme/pageContainer'
import AsciiAnimation from 'components/animation'
import Tag from 'components/tag'
import { Button, ButtonContainer } from 'components/buttons'

const Home = () => {
  return (
    <PageContainer padding="none">
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
      <ButtonContainer align="center">
        <Link href="/contact">
          <Button isActive>[0] Get in touch</Button>
        </Link>
        <Link href="/portfolio">
          <Button>[1] See my work</Button>
        </Link>
      </ButtonContainer>
    </PageContainer>
  )
}

Home.Layout = Layout

export default Home
