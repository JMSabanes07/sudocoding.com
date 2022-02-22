import Head from 'next/head'
import Link from 'next/link'

// components
import { PageContainer } from 'components/theme/pageContainer'
import {
  Container,
  AboutContainer,
  ContactContainer,
} from '../components/pagesStyles/about.styles'
import Layout from 'components/layout'
import Tag from 'components/tag'
import { Button, ButtonContainer } from 'components/buttons'
import { AsciiArt } from 'components/asciiArt'
import Article from 'components/article'
import { Title, H2, H1 } from 'components/title'

const About = () => (
  <PageContainer disableAlign>
    <Head>
      <title>$ Sudo - About</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Container>
      <Title>
        <Tag tag="h2">
          <H2 size="2rem">Building A Part Of Your Future</H2>
        </Tag>
        <Tag tag="h1">
          <H1 size="1.2rem" background="highlight">
            We are Sudo Coding
          </H1>
        </Tag>
      </Title>
      <AboutContainer>
        <Article>
          <AsciiArt image="frontend" lineHeight=".3rem" />
          <h2>Frontend Developmet</h2>
          <p>
            We design, build and program the interfaces of your web apps whith
            &#34;react js&#34;, created by facebook is one of the most used
            frameworks today, building very fast applications and without page
            reloads.
          </p>
        </Article>
        <Article>
          <AsciiArt image="backend" align="flex-end" lineHeight=".3rem" />
          <h2>Backend Development</h2>
          <p>
            So that you can have complete interactivity with your users or
            clients, we manage your servers with databases, communication
            between your apps and email services.
          </p>
        </Article>
      </AboutContainer>
      <ContactContainer>
        <Tag tag="h3">
          <h3>We create solutions to your IT problems</h3>
        </Tag>
        <ButtonContainer padding="1rem 0 0 0 ">
          <Link href="/contact">
            <a>
              <Button isActive>[0] Get in touch with us</Button>
            </a>
          </Link>
        </ButtonContainer>
      </ContactContainer>
    </Container>
  </PageContainer>
)

About.Layout = Layout

export default About
