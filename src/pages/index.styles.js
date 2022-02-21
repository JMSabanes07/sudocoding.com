import styled from 'styled-components'

export const PortadaContainer = styled.section`
  display: grid;
  grid-template-columns: auto 400px;
  justify-content: space-between;
  align-items: center;

  margin-top: 2rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 6rem;
  }
  h1 {
    font-weight: 800;
    font-size: 3rem;
    letter-spacing: 0.3rem;
    @media (max-width: 1080px) {
      font-size: 2.5rem;
    }
  }
  h2 {
    font-weight: 400;
    font-size: 1rem;
  }
`

export const Wrapper = styled.div`
  display: grid;
  gap: 2rem;
  @media (max-width: 860px) {
    transform: scale(1.2);
  }
`
