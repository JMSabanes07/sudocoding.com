import styled from 'styled-components'
import { Button } from 'components/buttons'

export const ArticleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 18rem);
  justify-content: flex-start;
  gap: 3rem;
  @media (max-width: 1080px) {
    gap: 2rem;
    justify-content: center;
  }
`

export const Article = styled.article`
  display: grid;
  align-content: space-between;
  padding: 1.8rem;
  border: 1px solid ${(props) => props.theme.textDark};
  cursor: pointer;
  :hover {
    border-color: ${(props) => props.theme.highlight};
  }
  header {
    width: 100%;
  }
  footer {
    width: 100%;
  }
  h1 {
    width: 100%;
    font-size: 1rem;
    margin-bottom: 0.9rem;
    text-transform: capitalize;
  }
  p {
    font-size: 0.8rem;
    color: ${(props) => props.theme.textDark};
    margin-bottom: 0.5rem;
    max-height: 4.833rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
  ${Button} {
    font-size: 0.8rem;
  }
`

export const P = styled.p`
  color: ${(props) => props.theme.textDarkPlus} !important;
  font-size: 0.7rem !important;
  -webkit-line-clamp: 2 !important;
  margin-bottom: 0.9rem !important;
`
