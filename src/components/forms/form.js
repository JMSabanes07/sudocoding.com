import styled from 'styled-components'

export const FormContainer = styled.form`
  display: grid;
  gap: 1rem;
  input,
  textarea {
    background: ${(props) => props.theme.bg};
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.text};
    outline: none;
    font-size: 1rem;
    padding: 1rem;
    text-transform: capitalize;
    :focus,
    :hover {
      border-bottom: 1px solid ${(props) => props.theme.highlight};
    }
  }
  input[type='submit'] {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.3rem 0.5rem;
    font-size: 1rem;
    transition: 0.3s;
    :hover {
      color: ${(props) => props.theme.bg};
    }
  }
  textarea {
    width: 100%;
    resize: vertical;
  }
`
