import styled from 'styled-components'

export const NavContainer = styled.nav`
  grid-area: nav;
  align-self: center;
  padding: 2rem;
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  li {
    cursor: pointer;
    user-select: none;
    font-size: 1.1rem;
  }
`
