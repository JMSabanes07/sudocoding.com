import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'nav body';
  justify-content: center;
  gap: 2rem;

  overflow: hidden;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bg};
`
