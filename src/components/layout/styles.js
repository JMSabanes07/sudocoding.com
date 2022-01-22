import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1300px;
  grid-template-rows: auto 1fr;
  justify-content: center;

  overflow: hidden;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bg};
`
