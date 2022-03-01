import styled from 'styled-components'
import { Title, H1 } from 'components/title'
import { FormContainer } from 'components/forms/form'
import { Button } from 'components/buttons'

export const ContactContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr auto;
  grid-template-areas: 'title title' 'contact socials';
  align-content: space-around;
  gap: 3rem;

  width: 100%;
  ${FormContainer} {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 499px) {
    ${FormContainer} {
      grid-template-columns: 1fr;
      * {
        grid-column: 1/2;
      }
    }
  }

  @media (max-width: 767px) {
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr;
    grid-template-areas:
      'title'
      'contact'
      'socials';
    ${Title} {
      padding: 1rem;
    }
    ${H1} {
      font-size: 1.7rem;
    }
    ${FormContainer} {
      ${Button} {
        padding: 1rem 1.5rem;
      }
    }
  }
`

export const Socials = styled.div`
  display: grid;
  align-content: flex-start;
  justify-items: flex-start;
  gap: 2rem;
  padding-bottom: 2rem;
`

export const LinksContainer = styled.div`
  display: grid;
  width: 100%;
  justify-items: flex-start;
  @media (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  @media (min-width: 768px) {
    gap: 2rem;
  }
`
