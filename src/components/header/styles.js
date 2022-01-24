import styled from 'styled-components'

export const PageHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-self: flex-start;
  align-items: center;
  gap: 3em;

  padding: 2rem 0;
  h2 {
    font-size: 2rem;
    font-weight: 800;
  }
`
