import styled from 'styled-components'

export const Image = styled.pre`
  align-self: ${(props) => props.align || 'normal'};
  width: min-content;
  height: min-content;
  font-size: 0.2rem;
  line-height: 0.3rem;
  transform: scale(1);
  font-family: 'Lucida Console';
`
