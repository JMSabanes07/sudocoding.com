import Layout from 'components/layout'
import Head from 'next/head'

// components
import { PageContainer } from 'components/theme/pageContainer'
import {} from './portfolio.styles'

const Portfolio = () => {
  return (
    <PageContainer>
      <Head>
        <title>$ Sudo - Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </PageContainer>
  )
}

Portfolio.Layout = Layout

export default Portfolio
