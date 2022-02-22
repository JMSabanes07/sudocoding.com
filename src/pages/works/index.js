import Layout from 'components/layout'
import Head from 'next/head'

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

const Works = ({ data }) => {
  console.log(data)
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
