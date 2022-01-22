import styled from 'styled-components'

export const HomeContainer = styled.div`
  grid-area: body;
  padding: calc(70.4px + 2rem) 2rem 2rem 2rem;
  justify-self: center;
  /* max-width: 1000px; */
  height: 100%;
  section {
    display: grid;
    gap: 3rem;
    h1 {
      font-weight: 800;
      font-size: 3rem;
      letter-spacing: 0.3rem;
    }
    h2 {
      font-weight: 400;
      font-size: 1rem;
    }
  }
`
