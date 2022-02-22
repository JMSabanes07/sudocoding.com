import styled from 'styled-components'

export const ContactContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr auto;
  grid-template-areas: 'title title' 'contact socials';
  align-content: space-around;
  gap: 3rem;

  width: 100%;
`

export const Socials = styled.div`
  display: grid;
  align-content: flex-start;
  justify-items: flex-start;
  gap: 2rem;
`
