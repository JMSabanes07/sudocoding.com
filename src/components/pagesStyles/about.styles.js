import styled from 'styled-components'
import { Title, H2, H1 } from 'components/title'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  align-content: space-around;
  grid-template-areas:
    'title'
    'about';
  gap: 3rem;
`
export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-content: flex-start;
  gap: 0.5em;
  p {
    font-size: 0.9rem;
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`

export const ContactContainer = styled.div`
  display: grid;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
`

export const TitleContainer = styled(Title)`
  @media (max-width: 575px) {
    ${H2} {
      font-size: 1.5rem;
    }
    ${H1} {
      font-size: 1rem;
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    ${H2} {
      font-size: 1.7rem;
    }
  }
`
