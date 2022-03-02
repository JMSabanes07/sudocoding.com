import Layout from 'components/layout'
import Head from 'next/head'
import styled from 'styled-components'

// components
import { PageContainer } from 'components/theme/pageContainer'
import {
  WorksContainer,
  FeraturedContainer,
  OtherContainer,
  Title,
} from '../../components/pagesStyles/works.styles'
import Tag from 'components/tag'
import WorksList from 'components/works'

const AsciiStyle = styled.pre`
  font-family: 'Courier New', Courier, monospace;
  line-height: 1.2;
  letter-spacing: 0.03rem;
  font-size: 0.4rem;
  @media (max-width: 560px) {
    font-size: 0.25rem;
  }
  @media (max-width: 400px) {
    font-size: 0.2rem;
  }
`

const NoData = () => {
  // prettier-ignore
  const str = `
   _   _                                                                          _                 _         
  | \\ | |   ___      _ __ ___     ___    _ __    ___     _ __    _ __    ___     (_)   ___    ___  | |_   ___ 
  |  \\| |  / _ \\    |  _   _ \\   / _ \\  | '__|  / _ \\   |  _ \\  |  __|  / _ \\    | |  / _ \\  / __| | __| / __|
  | |\\  | | (_) |   | | | | | | | (_) | | |    |  __/   | |_) | | |    | (_) |   | | |  __/ | (__  | |_  \\__ \\
  |_| \\_|  \\___/    |_| |_| |_|  \\___/  |_|     \\___|   | .__/  |_|     \\___/   _/ |  \\___|  \\___|  \\__| |___/
                                                        |_|                    |__/                           
  
   ___                               _              
  /  _|   ___    _   _   _ __     __| |    _    ___ 
  | |_   / _ \\  | | | | |  _ \\   / _  |   (_)  / __|
  |  _| | (_) | | |_| | | | | | | (_| |    _  | (__ 
  |_|    \\___/   \\__,_| |_| |_|  \\__,_|   (_)  \\___|
  `
  return <AsciiStyle>{str}</AsciiStyle>
}

const Works = ({ data }) => {
  return (
    <PageContainer padding="3rem 0 4rem 0">
      <Head>
        <title>$ Sudo - Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <WorksContainer>
        <FeraturedContainer>
          <Title>
            <Tag tag="h2">
              <h2>Featured Projects</h2>
            </Tag>
          </Title>
          <WorksList data={data} from="0" to="3" />
        </FeraturedContainer>
        <OtherContainer>
          <Title>
            <Tag tag="h2">
              <h2>Other Noteworthy Projects</h2>
            </Tag>
          </Title>
          {!data.slice(3)[0] && <NoData />}
          <WorksList data={data} from="3" />
        </OtherContainer>
      </WorksContainer>
    </PageContainer>
  )
}

Works.Layout = Layout

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/posts')
  const data = await res.json()
  console.log(data)
  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default Works
