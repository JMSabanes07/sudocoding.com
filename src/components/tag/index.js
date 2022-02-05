import { TagContainer, OpenTag, CloseTag, Children } from './styles'

/**
 *
 * @param {string} tag Refiere al texto dentro del tag al mostrar
 * @param {string} position Hay 3 posiciones para los tags: inline | left | leftRight
 * @param {boolean} highlight Cambia el color de texto en los elementos dentro de los tags
 * @returns Retorna un React Component
 */

const Tag = ({
  children,
  tag = 'div',
  position = 'inline',
  highlight = false,
}) => {
  return (
    <TagContainer position={position}>
      <OpenTag position={position}>{`<${tag}>`}</OpenTag>
      <Children position={position} highlight={highlight}>
        {children}
      </Children>
      <CloseTag position={position}>{`</${tag}>`}</CloseTag>
    </TagContainer>
  )
}

export default Tag
