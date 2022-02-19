import styled from 'styled-components'

export const Image = styled.pre`
  align-self: ${(props) => props.align || 'normal'};
  width: min-content;
  height: min-content;
  font-size: ${(props) => props.fontSize || '0.2rem'};
  line-height: ${(props) => props.lineHeight};
  transform: ${(props) => (props.size ? `scale(${props.size})` : `scale(1)`)};
  font-family: 'Lucida Console';
`
