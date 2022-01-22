import Layout from 'components/layout'
import Head from 'next/head'

//components
import { ContactContainer } from './contact.styles'

const Contact = () => (
  <ContactContainer>
    <Head>
      <title>$ Sudo - Contact</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  </ContactContainer>
)

Contact.Layout = Layout

export default Contact
