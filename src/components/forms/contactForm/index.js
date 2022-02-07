// components
import { FormContainer } from '../form'
import { Input, Textarea } from '../inputs'
import { useForm } from 'react-hook-form'
import { Button, ButtonContainer } from 'components/buttons'

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="email"
        placeholder="Put your email here"
        {...register('email')}
      />
      <Textarea placeholder="How can we help you?" {...register('text')} />
      <ButtonContainer>
        <Button>
          <input type="submit" value="[0] Send" />
        </Button>
      </ButtonContainer>
    </FormContainer>
  )
}

export default ContactForm
