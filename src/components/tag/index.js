import { TagContainer, Wrapper } from './styles'

const Tag = ({ children, tag, position }) => {
  return (
    <Wrapper>
      <TagContainer tag={tag} position={position || 'inline'}>
        {children}
      </TagContainer>
    </Wrapper>
  )
}

export default Tag
