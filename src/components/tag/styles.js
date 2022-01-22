import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
`

export const TagContainer = styled.div`
  display: flex;
  flex-basis: auto;
  position: relative;
  ::after,
  ::before {
    position: absolute;
    color: white;
    font-size: 0.85rem;
    color: ${(props) => props.theme.textDark};
  }
  ::after {
    padding-right: 0.5rem;
    ${(props) => {
      if (!props.tag) return `content: '<p>'`
      return `content: '<${props.tag}>'`
    }};
    ${(props) => {
      if (props.position === 'inline')
        return `
          align-self: center;
          right: 100%;
        `
      if (props.position === 'left' || props.position === 'leftRight')
        return `
          bottom: 100%;
          right: 100%;
        `
    }}
  }
  ::before {
    padding-left: 0.5rem;
    ${(props) => {
      if (!props.tag) return `content: '</p>'`
      return `content: '</${props.tag}>'`
    }};
    ${(props) => {
      if (props.position === 'inline')
        return `
          align-self: center;
          left: 100%;
        `
      if (props.position === 'left')
        return `
          top: 100%;
          right: 100%;
        `
      if (props.position === 'leftRight')
        return `
          top: 100%;
          left: 100%;
        `
    }};
  }
`
