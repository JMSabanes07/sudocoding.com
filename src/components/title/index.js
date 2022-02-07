import styled from 'styled-components'

/**
 *
 * @param {string} background Refiere al texto dentro del tag al mostrar
 * @param {string} size Hay 3 posiciones para los tags: inline | left | leftRight
 */
export const H1 = styled.h1`
  display: inline;
  font-size: ${(props) => props.size || 'inherit'};
  padding: 0.2rem 0.5rem;
  background-color: ${(props) => props.theme[props.background]};
  color: ${(props) => (props.background ? props.theme.bg : 'none')};
`
export const H2 = styled.h2`
  background-color: ${(props) => props.theme[props.background]};
  color: ${(props) => (props.background ? props.theme.bg : 'none')};
  font-size: ${(props) => props.size || 'inherit'}; ;
`

export const Title = styled.div`
  grid-area: title;
  justify-self: center;
  display: grid;
  justify-items: center;
  gap: 1rem;

  padding: 2rem;
`
