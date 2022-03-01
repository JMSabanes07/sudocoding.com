import styled from 'styled-components'

export const WorksContainer = styled.div`
  display: grid;
  align-content: space-around;
  gap: 3rem;

  width: 100%;
`

export const Title = styled.div`
  h2 {
    font-size: 1.2rem;
    @media (max-width: 549px) {
      text-align: center;
      font-size: 1rem;
    }
  }
`

export const FeraturedContainer = styled.div`
  display: grid;
  gap: 1.5rem;
`
export const OtherContainer = styled.div`
  display: grid;
  gap: 1.5rem;
`
