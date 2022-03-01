import styled from 'styled-components'
import { List } from 'components/nav/styles'

export const DesktopContainer = styled.header`
  padding: 2rem 0;
  h2 {
    font-size: 2rem;
    font-weight: 800;
  }
  ${List} {
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
`
