import { TagContainer, OpenTag, CloseTag, Children } from './styles'

const Tag = ({ children, tag, position = 'inline' }) => {
  return (
    <TagContainer position={position}>
      <OpenTag position={position}>{`<${tag}>`}</OpenTag>
      <Children position={position}>{children}</Children>
      <CloseTag position={position}>{`</${tag}>`}</CloseTag>
    </TagContainer>
  )
}

export default Tag
