import Layout from 'components/layout'
import Head from 'next/head'

// components
import { PageContainer } from 'components/theme/pageContainer'
import { ContactContainer } from './contact.styles'
import ContactForm from 'components/forms/contactForm'
import { Title, H1 } from 'components/title'
import Tag from 'components/tag'

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
    </ContactContainer>
  </PageContainer>
)

Contact.Layout = Layout

export default Contact
