import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 61rem;
  grid-template-rows: auto 1fr;
  justify-content: center;

  overflow: hidden;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bg};

  @media (max-width: 1080px) {
    grid-template-columns: 50rem;
  }
  @media (max-width: 860px) {
    grid-template-columns: 40rem;
  }
`
