import styled from 'styled-components'

export const ContactContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'title title' 'contact socials';
  align-content: space-around;
  width: 100%;
`
