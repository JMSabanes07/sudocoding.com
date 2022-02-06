import styled from 'styled-components'

export const PortadaContainer = styled.section`
  display: grid;
  grid-template-columns: auto 400px;
  justify-content: space-between;
  align-items: center;

  margin-top: 2rem;
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
  gap: 2rem;
`
