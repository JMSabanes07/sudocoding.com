import { AsciiContainer } from 'components/pagesStyles/404.styles'
import { Container500 } from 'components/pagesStyles/500.styles'
import Tag from 'components/tag'

/* eslint-disable */
const AsciiArt = `
 ______       __        __     
/\\  ___\\    /'__\`\\    /'__\`\\   
\\ \\ \\__/   /\\ \\/\\ \\  /\\ \\/\\ \\  
 \\ \\___\`\`\\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ 
  \\/\\ \\_\\ \\ \\ \\ \\_\\ \\ \\ \\ \\_\\ \\
   \\ \\____/  \\ \\____/  \\ \\____/
    \\/___/    \\/___/    \\/___/ 
                               `

/* eslint-enable */
const Custom500 = () => {
  return (
    <Container500>
      <h1>$ SUDO CODING</h1>
      <AsciiContainer>{AsciiArt}</AsciiContainer>
      <Tag tag="h2">
        <h2>Error on server</h2>
      </Tag>
    </Container500>
  )
}

export default Custom500
