import styled from 'styled-components'
import { TagContainer } from 'components/tag/styles'

/**
 *
 * @param {string} columns (opcional) Refiere a las columnas usadas en un grid-template-columns
 */

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: ${(props) => props.columns || '1fr'};
  gap: 1.2rem;
  input,
  textarea {
    background: ${(props) => props.theme.bg};
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.text};
    outline: none;
    font-size: 0.9rem;
    padding: 1rem;
    padding-left: 0.2rem;
    :focus,
    :hover {
      border-bottom: 1px solid ${(props) => props.theme.highlight};
    }
  }
  input[type='submit'] {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    font-size: 1rem;
    transition: 0.3s;
    :hover {
      color: ${(props) => props.theme.bg};
    }
  }
  textarea {
    width: 100%;
    resize: vertical;
    min-height: 10rem;
    max-height: 17rem;
    height: 20rem;
  }
  ${TagContainer} {
    padding-bottom: 1rem;
  }
  @media (max-height: 767px) {
    textarea {
      max-height: 12rem;
      height: 12rem;
    }
  }
  @media (max-height: 684px) {
    textarea {
      max-height: 10rem;
      height: 10rem;
    }
  }
`
