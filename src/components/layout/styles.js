import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 55rem);
  grid-template-rows: auto 1fr;
  justify-content: center;

  padding: 0 3rem;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.bg};

  @media (max-width: 767px) {
    padding: 0 2rem;
  }
  @media (max-width: 1023px) {
    padding-top: 5rem;
    grid-template-rows: 1fr;
  }
`
