import styled from 'styled-components'

export const PageContainer = styled.section`
  display: grid;
  justify-self: center;
  align-content: ${(props) => (props.disableAlign ? 'none' : 'center')};
  width: 100%;
  height: 100%;
`
