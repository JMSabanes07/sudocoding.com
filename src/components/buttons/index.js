import styled from 'styled-components'

export const Button = styled.div`
  position: relative;
  overflow: hidden;
  padding: 0.2rem 0.5rem;
  color: ${(props) => (props.isActive ? props.theme.bg : '')};
  z-index: 0;
  transition: 0.3s;
  cursor: pointer;

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
`

/**
 * @param {string} col (opcional) Refiere a la columna a la cual pertenece este elemento, la propiedad es grid-columns; no funciona si el elemento padre no posee un grid-template-columns
 */

export const ButtonContainer = styled.section`
  grid-column: ${(props) => props.col};
  display: flex;
  justify-content: center;
  align-items: ${(props) => props.align || 'flex-start'};
  gap: 5rem;
  padding: ${(props) => props.padding};
`
