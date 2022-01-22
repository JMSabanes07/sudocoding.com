import Layout from 'components/layout'
import Head from 'next/head'

//components
import { AboutContainer } from './about.styles'

const About = () => (
  <AboutContainer>
    <Head>
      <title>$ Sudo - About</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  </AboutContainer>
)

About.Layout = Layout

export default About
