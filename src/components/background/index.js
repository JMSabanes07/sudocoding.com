import styled from 'styled-components'

export const BackgroundApp = styled.div`
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bg};
`
