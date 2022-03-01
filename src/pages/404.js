import { Container404, AsciiContainer } from 'components/pagesStyles/404.styles'
import Tag from 'components/tag'

/* eslint-disable */
const AsciiArt = `
 __ __         __      __ __      
/\\ \\\\ \\      /'__ \\   /\\ \\\\ \\     
\\ \\\ \\\\ \\    /\\ \\/\\ \\  \\ \\ \\\\ \\    
 \\ \\\ \\\\ \\_  \\ \\ \\ \\ \\  \\ \\ \\\\ \\_  
  \\ \\__  __\\ \\ \\ \\_\\ \\  \\ \\__  __\\
   \\/_/\\_\\_/  \\ \\____/   \\/_/\\_\\_/
      \\/_/     \\/___/       \\/_/  
                                  `

/* eslint-enable */
const Custom404 = () => {
  return (
    <Container404>
      <h1>$ SUDO CODING</h1>
      <AsciiContainer>{AsciiArt}</AsciiContainer>
      <Tag tag="h2">
        <h2>Page not found</h2>
      </Tag>
    </Container404>
  )
}

export default Custom404
