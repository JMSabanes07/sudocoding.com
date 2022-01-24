import styled from 'styled-components'

export const NavContainer = styled.nav`
  grid-area: nav;
  align-self: center;
  padding: 2rem;
`

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  justify-self: ${(props) => props.justifySelf || 'none'};
  li {
    cursor: pointer;
    user-select: none;
  }
`
