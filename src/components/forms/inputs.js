import styled from 'styled-components'

/**
 *
 * @param {string} col (opcional) Refiere a la columna a la cual pertenece este elemento, la propiedad es grid-column; no funciona si el elemento padre no posee un grid-template-columns
 */

export const Input = styled.input`
  grid-column: ${(props) => props.col};
  text-transform: ${(props) => props.textTransform};
`

/**
 *
 * @param {string} col (opcional) Refiere a la columna a la cual pertenece este elemento, la propiedad es grid-column; no funciona si el elemento padre no posee un grid-template-columns
 */

export const Textarea = styled.textarea`
  grid-column: ${(props) => props.col};
`

/**
 *
 * @param {string} col (opcional) Refiere a la columna a la cual pertenece este elemento, la propiedad es grid-column; no funciona si el elemento padre no posee un grid-template-columns
 * @param {string} row (opcional) Refiere a la fila a la cual pertenece este elemento, la propiedad es grid-row; no funciona si el elemento padre no posee un grid-template-columns
 */
export const Error = styled.p`
  grid-column: ${(props) => props.col};
  grid-row: ${(props) => props.row};
  color: red;
  font-size: 0.8rem;
`

/**
 *
 * @param {string} col (opcional) Refiere a la columna a la cual pertenece este elemento, la propiedad es grid-column; no funciona si el elemento padre no posee un grid-template-columns
 * @param {string} row (opcional) Refiere a la fila a la cual pertenece este elemento, la propiedad es grid-row; no funciona si el elemento padre no posee un grid-template-columns
 */
export const Success = styled(Error)`
  color: ${(props) => props.theme.highlight};
`

/**
 *
 * @param {string} col (opcional) Refiere a la columna a la cual pertenece este elemento, la propiedad es grid-column; no funciona si el elemento padre no posee un grid-template-columns
 * @param {string} row (opcional) Refiere a la fila a la cual pertenece este elemento, la propiedad es grid-row; no funciona si el elemento padre no posee un grid-template-columns
 */
export const InputContainer = styled.div`
  grid-column: ${(props) => props.col};
  grid-row: ${(props) => props.row};
  display: grid;
  align-content: flex-start;
  gap: 0.3rem;
`

export const InputPassword = (props) => {
  return <Input type="password" {...props} />
}
