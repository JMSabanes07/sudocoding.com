// components
import { FormContainer } from '../form'
import { Input, Textarea } from '../inputs'
import { useForm } from 'react-hook-form'

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Input type="email" {...register('email')} />
      <Textarea {...register('text')} />
      <input type="submit" value="Enviar" />
    </FormContainer>
  )
}

export default ContactForm
