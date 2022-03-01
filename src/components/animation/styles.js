import styled from 'styled-components'

export const AnimationContainer = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 12.5rem;
  font-size: 0.3rem;
  line-height: 0.5rem;
  overflow: hidden;
  @media (max-width: 500px) {
    height: 10rem;
  }
`
