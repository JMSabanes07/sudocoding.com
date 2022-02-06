import styled from 'styled-components'

export const ArticleContainer = styled.article`
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 0.5rem;

  text-align: center;
  padding: 2rem;

  h2 {
    color: ${(props) => props.theme.highlight};
  }

  p {
    color: ${(props) => props.theme.textDark};
  }
`
