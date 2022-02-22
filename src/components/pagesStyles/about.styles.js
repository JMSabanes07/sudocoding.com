import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  align-content: space-around;
  grid-template-areas:
    'title'
    'about';
`
export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-content: flex-start;
  gap: 0.5em;

  h3 {
    font-size: 1rem;
    * {
      color: ${(props) => props.theme.textDark};
    }
  }
  p {
    font-size: 0.9rem;
  }
`

export const ContactContainer = styled.div`
  display: grid;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
`

export const Title = styled.div`
  grid-area: title;
  justify-self: center;
  display: grid;
  justify-items: center;
  gap: 1rem;

  padding: 2rem;
  h2 {
    font-size: 2rem;
  }
  h1 {
    display: inline;
    font-size: 1.2rem;
    padding: 0.2rem 0.5rem;
    background-color: ${(props) => props.theme.highlight};
    color: ${(props) => props.theme.bg};
  }
`

export const Avatar = styled.div`
  display: grid;
  align-items: center;
  justify-items: flex-end;
  padding: 1rem;
  position: relative;
  img {
    position: absolute;
    width: 17rem;
    object-fit: cover;
  }
`

export const BgNumbers = styled.div`
  position: absolute;
  width: 17rem;
  height: 20.4rem;
  word-break: break-all;
  font-size: 0.5555rem;
  overflow: hidden;
`
