import styled from 'styled-components'

export const AsciiContainer = styled.pre`
  font-size: 2rem;
  font-family: 'Courier New';
  line-height: 1.1;
  letter-spacing: 0.015rem;
`

export const Container404 = styled.section`
  display: grid;
  justify-content: center;
  align-content: center;
  justify-items: center;
  gap: 3rem;

  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.bg};

  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  @media (max-width: 499px) {
    ${AsciiContainer} {
      font-size: 0.8rem;
    }
    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1rem;
    }
  }
  @media (min-width: 500px) and (max-width: 767px) {
    ${AsciiContainer} {
      font-size: 1.25rem;
    }
  }
`
