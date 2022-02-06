import styled from 'styled-components'

export const PageContainer = styled.section`
  display: grid;
  grid-template-rows: ${(props) => props.customRows || 'auto'};
  justify-self: center;
  align-content: ${(props) => (props.disableAlign ? 'none' : 'space-around')};
  width: 100%;
  height: 100%;
  padding: ${(props) => props.padding || '0 0 4rem 0'};
`
