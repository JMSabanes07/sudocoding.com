import Layout from 'components/layout'
import Head from 'next/head'
import Link from 'next/link'

// components
import { PageContainer } from 'components/theme/pageContainer'
import { ContactContainer, Socials } from './contact.styles'
import ContactForm from 'components/forms/contactForm'
import { Title, H1, H4 } from 'components/title'
import Tag from 'components/tag'
import { AsciiArt } from 'components/asciiArt'
import { Button, ButtonContainer } from 'components/buttons'

// TODO reemplazar los links de las redes sociales

const Contact = () => (
  <PageContainer disableAlign>
    <Head>
      <title>$ Sudo - Contact</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <ContactContainer>
      <Title>
        <Tag tag="h1">
          <H1 size="2rem">Contact us</H1>
        </Tag>
      </Title>

      <ContactForm />

      <Socials>
        <Tag tag="h4">
          <H4 size="1.1rem" background="highlight" padding="0.1rem 0.3rem">
            Social media
          </H4>
        </Tag>
        <a href="http://instagram.com" target="_blank" rel="noreferrer">
          <Button>[0] Instagram</Button>
        </a>
        <a href="http://linkedin.com" target="_blank" rel="noreferrer">
          <Button>[1] Linkedin</Button>
        </a>
        <a href="http://telegram.com" target="_blank" rel="noreferrer">
          <Button>[2] Telegram</Button>
        </a>
      </Socials>
    </ContactContainer>
  </PageContainer>
)

Contact.Layout = Layout

export default Contact
