import styled from 'styled-components'

export const Button = styled.div`
  position: relative;
  overflow: hidden;
  padding: 0.2rem 0.5rem;
  color: ${(props) => (props.isActive ? props.theme.bg : '')};
  z-index: 0;
  transition: 0.3s;
  cursor: pointer;
  white-space: nowrap;

  ::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: ${(props) => (props.isActive ? '0' : '100%')};
    background-color: ${(props) => props.theme.highlight};
    z-index: -1;
    transition: 0.3s;
  }
  :hover {
    color: ${(props) => props.theme.bg};
    * {
      color: ${(props) => props.theme.bg};
    }
    :after {
      left: 0;
    }
  }
  @media (max-width: 767px) {
    padding: ${(props) => props.movile && '.5rem 1rem'};
  }
`

/**
 * @param {string} col (opcional) Refiere a la columna a la cual pertenece este elemento, la propiedad es grid-columns; no funciona si el elemento padre no posee un grid-template-columns
 * @param {string} direction (opcional) Refiere al tipo de ordenamieno de los elementos ya sea columnas o filas, por defecto es column; column | row
 * @param {string} gap (opcional) Espaciado entre elementos, por defecto es 5rem
 * @param {string} align (opcional) Tipo de alineacion vertical, por defecto es flex-start
 * @param {string} justify (opcional) Tipo de alineacion horizontal, por defecto es center
 */

export const ButtonContainer = styled.section`
  grid-column: ${(props) => props.col};
  grid-row: ${(props) => props.row};
  display: grid;
  grid-auto-flow: ${(props) => props.direction || 'column'};
  justify-content: ${(props) => props.justify || 'center'};
  align-items: ${(props) => props.align || 'flex-start'};
  gap: ${(props) => props.gap || '5rem'};
  padding: ${(props) => props.padding};
  @media (max-width: 767px) {
    ${(props) => () =>
      props.home &&
      `
        gap: 3rem;
        padding: 5rem 0;
        grid-auto-flow: row;
        ${Button}{
          padding: .5rem 1rem;
        }
      `}
  }
`
