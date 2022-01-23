import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1100px;
  grid-template-rows: auto 1fr;
  justify-content: center;
  gap: 2rem;

  overflow: hidden;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bg};
`
