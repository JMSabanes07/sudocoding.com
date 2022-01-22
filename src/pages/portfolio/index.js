import Layout from 'components/layout'
import Head from 'next/head'

//components
import { PortfolioContainer } from './portfolio.styles'

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <Head>
        <title>$ Sudo - Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </PortfolioContainer>
  )
}

Portfolio.Layout = Layout

export default Portfolio
