import Layout from 'components/layout'
import Head from 'next/head'

// components
import { PageContainer } from 'components/theme/pageContainer'
import {
  WorksContainer,
  FeraturedContainer,
  OtherContainer,
  Title,
} from './works.styles'
import Tag from 'components/tag'
import WorksList from 'components/works'

// const data = [
//   {
//     title: 'This web page',
//     link: 'http://google.com',
//     text: 'This website is a clear example of a full stack web development, where the use of frontend and backend is combined. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim reprehenderit vitae, adipisci ipsa iusto neque, aliquam quisquam ex nulla saepe eaque omnis, sint quia consequuntur recusandae molestias cupiditate voluptates nisi.',
//     tags: ['Nextjs', 'React', 'MySQL', 'Prisma', 'Styled Components'],
//     buttons: [
//       {
//         text: 'Go to github',
//         link: 'http://www.github.com',
//       },
//     ],
//   },
//   {
//     title: 'This web page',
//     link: 'http://google.com',
//     text: 'This website is a clear example of a full stack web development, where the use of frontend and backend is combined.',
//     tags: ['Nextjs', 'React', 'MySQL', 'Prisma', 'Styled Components'],
//     buttons: [
//       {
//         text: 'Go to github',
//         link: 'http://www.github.com',
//       },
//     ],
//   },
//   {
//     title: 'This web page',
//     link: 'http://google.com',
//     text: 'This website is a clear example of a full stack web development, where the use of frontend and backend is combined.',
//     tags: ['Nextjs', 'React', 'MySQL', 'Prisma', 'Styled Components'],
//     buttons: [
//       {
//         text: 'Go to github',
//         link: 'http://www.github.com',
//       },
//     ],
//   },
// ]
// const data2 = [
//   {
//     title: 'This web page',
//     link: 'http://google.com',
//     text: 'This website is a clear example of a full stack web development, where the use of frontend and backend is combined. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim reprehenderit vitae, adipisci ipsa iusto neque, aliquam quisquam ex nulla saepe eaque omnis, sint quia consequuntur recusandae molestias cupiditate voluptates nisi.',
//     tags: ['Nextjs', 'React', 'MySQL', 'Prisma', 'Styled Components'],
//     buttons: [
//       {
//         text: 'Go to github',
//         link: 'http://www.github.com',
//       },
//     ],
//   },
//   {
//     title: 'This web page',
//     link: 'http://google.com',
//     text: 'This website is a clear example of a full stack web development, where the use of frontend and backend is combined.',
//     tags: ['Nextjs', 'React', 'MySQL', 'Prisma', 'Styled Components'],
//     buttons: [
//       {
//         text: 'Go to github',
//         link: 'http://www.github.com',
//       },
//     ],
//   },
//   {
//     title: 'This web page',
//     link: 'http://google.com',
//     text: 'This website is a clear example of a full stack web development, where the use of frontend and backend is combined.',
//     tags: ['Nextjs', 'React', 'MySQL', 'Prisma', 'Styled Components'],
//     buttons: [
//       {
//         text: 'Go to github',
//         link: 'http://www.github.com',
//       },
//     ],
//   },
//   {
//     title: 'This web page',
//     link: 'http://google.com',
//     text: 'This website is a clear example of a full stack web development, where the use of frontend and backend is combined.',
//     tags: ['Nextjs', 'React', 'MySQL', 'Prisma', 'Styled Components'],
//     buttons: [
//       {
//         text: 'Go to github',
//         link: 'http://www.github.com',
//       },
//     ],
//   },
//   {
//     title: 'This web page',
//     link: 'http://google.com',
//     text: 'This website is a clear example of a full stack web development, where the use of frontend and backend is combined.',
//     tags: ['Nextjs', 'React', 'MySQL', 'Prisma', 'Styled Components'],
//     buttons: [
//       {
//         text: 'Go to github',
//         link: 'http://www.github.com',
//       },
//     ],
//   },
// ]

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

export async function getServerSideProps(ctx) {
  const res = await fetch('http://localhost:3000/api/posts')
  const data = await res.json()
  console.log(data)
  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default Works
