import styled from 'styled-components'

export const MovileContainer = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  padding: 1.5rem 3rem;
  z-index: 2;
  background: ${(props) => props.theme.bg};
  border-bottom: ${(props) =>
    props.offset > 10 && `1px solid ${props.theme.textDark}`};
  h2 {
    position: relative;
    z-index: 2;
    font-size: 2rem;
    cursor: pointer;
  }

  @media (max-width: 767px) {
    padding: 1.5rem 2rem;
  }
`

export const ListContainer = styled.nav`
  ul {
    display: grid;
    justify-content: center;
    align-content: center;

    width: 100%;
    height: 100%;
    padding: 4rem;
  }
  .animationDiv {
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    height: 100vh;
    background: ${(props) => props.theme.bg};
    border-left: 1px solid ${(props) => props.theme.textDark};
    @media (max-width: 767px) {
      border: none;
      width: 100%;
    }
  }
`

export const Button = styled.button`
  width: 40px;
  height: 40px;
  position: relative;
  z-index: 2;
  border: none;
  background: none;
  font-size: 1.5rem;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    transform: scale(1.1);
  }
`
