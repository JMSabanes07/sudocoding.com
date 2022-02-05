import Head from 'next/head'
import Link from 'next/link'
import TypeAnimation from 'react-type-animation'

// components
import { PageContainer } from 'components/theme/pageContainer'
import {
  Title,
  Container,
  Avatar,
  AboutContainer,
  BgNumbers,
} from './about.styles'
import Layout from 'components/layout'
import Tag from 'components/tag'
import { Button, ButtonContainer } from 'components/buttons'
import { Idea } from 'image'

function randomString(length, chars) {
  let result = ''
  for (let i = length; i > 0; --i) {
    result += chars[Math.floor(Math.random() * chars.length)]
  }
  return result
}

const About = () => (
  <PageContainer disableAlign>
    <Head>
      <title>$ Sudo - About</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Container>
      <Title>
        <Tag tag="h1">
          <h1>Building A Part Of Your Future</h1>
        </Tag>
        <Tag tag="h2">
          <h2>We are Sudo Coding</h2>
        </Tag>
      </Title>
      <AboutContainer>
        <Tag tag="h3">
          <h3>
            <TypeAnimation
              className="typing-cursor"
              cursor={false}
              sequence={[
                'Frontend development',
                2000,
                'Backend development',
                2000,
                'Full Stack Web development',
                2000,
              ]}
              wrapper={'span'}
              repeat={Infinity}
            />
          </h3>
        </Tag>
        <Tag tag="p" position="left">
          <p></p>
          <br />
          <p>
            Creamos soluciones a tus problemas informaticos, ya sea ayudandote
            en la construccion de tu marca a travez de un sitio web moderno,
            consistente y de calidad; o a travez de la implementacion de APIs
            para el funcionamiento interno de tus aplicaciones.
          </p>
          <br />
        </Tag>
        <Tag position="left">
          <p>Ahora, dime tus problemas y desarrollare soluciones</p>
          <ButtonContainer padding="1rem 0 0 0 ">
            <Link href="/contact">
              <Button isActive>[0] Get in touch</Button>
            </Link>
          </ButtonContainer>
        </Tag>
        <Idea></Idea>
      </AboutContainer>
      <Avatar>
        {/* <BgNumbers>
          111001000111111100010011101111010001100000100111011110100101010000100010101000101101111111000110001110011001110111100011010101101111011100110011000010101000100110101000000101110110100010100101000001010000110011000111111000010111001011101011011011110100111101101011100101101011010101011010010101010111111101010110101000110100001111100011010011001101001000010100011111101111100001011011110111101011011000100001110011010111101101001111101111111010111010011110000111101001010010100001111110010001000111110111110100110111110011011010111111000011110010111111010011011001000000100000001111001010111000101101001000101011001101001100111111011110011111110101011011000110101101011010110100100111001110011000011101011110111001111011101100110111101111011010010100010000010000010001010000010011101111111000001100010100001111111010100111000100011010001000010011001010100011100110111010001010110010001101000100010111011011001000000001000111011111000010111111011101010100110110111000110101011010111011010011010001001011101100110101010111000010100100110100101001100111011110000000011110001011000001111100101010000101010000100010001010000010001101100111111011010111101110111100101001100000001110010111100111101011101001101000110011000110101011111011000001001101001011000111111011010010011000111001110101100010101110001110001101111001101000011001011100110101110011011100111011101010101110100101010111001110101000011011100111111111101111001101011000110101001011000010100110011110000101000011010001001110101101100111000010101001101110100111111010101011101100001100000010100110110100100110111010011110011000010010101010011101010011001001100010001100001010
        </BgNumbers> */}
        <img src="/avatar.png" alt="" />
      </Avatar>
    </Container>
  </PageContainer>
)

About.Layout = Layout

export default About
