import styled from 'styled-components'

export const HomeContainer = styled.div`
  justify-self: center;
  width: 100%;
  height: 100%;
`

export const SectionContainer = styled.section`
  display: grid;
  grid-template-columns: auto 400px;
  justify-content: center;
  align-items: center;
  padding: 5rem;
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
`

export const Wrapper = styled.div`
  display: grid;
  gap: 1rem;
`
