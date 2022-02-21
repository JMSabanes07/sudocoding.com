// components
import { ArticleContainer, Article, P } from './styles'
import { ButtonContainer, Button } from 'components/buttons'

/**
 *
 * @param {array} data Es la unica propiedad a que pertenece a este componente, el resto de propiedades son las que la data debe poseer para funcionar
 * @param {string} title El titulo del articulo
 * @param {string} text El parrafo del articulo
 * @param {array} tags Array de los tags del articulo
 * @param {array} buttons Array de los botones del articulo
 */

const Tags = ({ data }) => {
  const text = data?.map((tag) => `${tag.name} `)
  return <P title={text}>{text}</P>
}

const WorksList = ({ data, from, to }) => {
  return (
    <ArticleContainer>
      {data?.slice(from, to).map(({ title, text, tags, link, github }, i) => {
        return (
          <Article key={i}>
            <a href={link} target="_blank" rel="noreferrer">
              <header>
                <h1>{title}</h1>
              </header>
              <p title={text}>{text}</p>
              <footer>
                <Tags data={tags} />
                <ButtonContainer align="center">
                  {github && (
                    <a key={i} href={github} target="_blank" rel="noreferrer">
                      <Button isActive>[0] See on github</Button>
                    </a>
                  )}
                </ButtonContainer>
              </footer>
            </a>
          </Article>
        )
      })}
    </ArticleContainer>
  )
}

export default WorksList
