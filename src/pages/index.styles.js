import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: grid;
  justify-self: center;
  align-content: center;
  width: 100%;
  height: 100%;
`

export const PortadaContainer = styled.section`
  display: grid;
  grid-template-columns: auto 400px;
  justify-content: space-between;
  align-items: center;
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

export const ButtonContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 5rem;
  padding-top: 10rem;
  padding-bottom: 2rem;
`

export const Wrapper = styled.div`
  display: grid;
  gap: 2rem;
`
