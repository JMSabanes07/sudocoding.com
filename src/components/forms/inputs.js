import styled from 'styled-components'

export const Input = styled.input``

export const Textarea = styled.textarea``

export const InputPassword = (props) => {
  return <Input type="password" {...props} />
}
