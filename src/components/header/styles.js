import styled from 'styled-components'

export const PageHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-self: flex-start;
  justify-items: center;
  align-items: center;
  gap: 3em;

  padding: 1rem;
  h1 {
    font-weight: 400;
  }
`
