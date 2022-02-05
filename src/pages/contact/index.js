import Layout from 'components/layout'
import Head from 'next/head'

// components
import { PageContainer } from 'components/theme/pageContainer'
import {} from './contact.styles'

const Contact = () => (
  <PageContainer>
    <Head>
      <title>$ Sudo - Contact</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  </PageContainer>
)

Contact.Layout = Layout

export default Contact
