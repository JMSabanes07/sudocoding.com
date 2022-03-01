import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  gap: 2rem;
`

export const PortadaContainer = styled.section`
  display: grid;
  grid-template-columns: auto 22.222rem;
  justify-content: space-between;
  align-items: center;

  margin-top: 2rem;
  h1 {
    font-weight: 800;
    font-size: 2rem;
    letter-spacing: 0.3rem;
    white-space: nowrap;
  }
  h2 {
    font-weight: 400;
    font-size: 1rem;
    white-space: nowrap;
  }

  @media (max-width: 500px) {
    ${Wrapper} {
      transform: scale(0.9);
    }
    h1 {
      font-size: 2rem;
    }
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    gap: 5rem;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: auto 19rem;
    h1 {
      font-size: 2.5rem;
    }
  }
`
