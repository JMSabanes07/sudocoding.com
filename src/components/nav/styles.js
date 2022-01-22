import styled from 'styled-components'

export const NavContainer = styled.nav`
  align-self: center;
  position: absolute;
  left: 6rem;
  z-index: 999;
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
