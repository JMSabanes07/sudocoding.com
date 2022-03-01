// components
import { useState } from 'react'
import { FormContainer } from '../form'
import { Input, Textarea, Error, Success, InputContainer } from '../inputs'
import { useForm } from 'react-hook-form'
import { Button, ButtonContainer } from 'components/buttons'
import { H4 } from 'components/title'
import Tag from 'components/tag'

const ContactForm = () => {
  const [success, setSuccess] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setError,
    formState: { errors },
  } = useForm()
  const name = watch('name', false)
  const lastname = watch('lastname', false)
  const email = watch('email', false)

  const onSubmit = async (data) => {
    const result = await fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const dataFetched = await result.json()
    if (result.status !== 200) {
      dataFetched.errors.forEach(({ key, message }) => {
        setError(key, {
          type: 'manual',
          message,
        })
      })
      setSuccess(false)
      return
    }

    setSuccess(true)
    reset()
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Tag tag="h4" col="1/3">
        <H4 size="1.1rem" background="highlight" padding="0.1rem 0.3rem">
          Send an email
        </H4>
      </Tag>
      <InputContainer>
        <Input
          textTransform={name ? 'capitalize' : ''}
          type="text"
          placeholder="Tell us your name"
          {...register('name')}
        />
        {errors.name && <Error>{errors.name.message}</Error>}
      </InputContainer>
      <InputContainer>
        <Input
          textTransform={lastname ? 'capitalize' : ''}
          type="text"
          placeholder="Your lastname"
          {...register('lastname')}
        />
        {errors.lastname && <Error>{errors.lastname.message}</Error>}
      </InputContainer>
      <InputContainer col="1/3">
        <Input
          textTransform={email ? 'capitalize' : ''}
          type="text"
          placeholder="And your email here"
          {...register('email')}
        />
        {errors.email && <Error>{errors.email.message}</Error>}
      </InputContainer>
      <InputContainer col="1/3">
        <Textarea placeholder="How can we help you?" {...register('text')} />
        {errors.text && <Error>{errors.text.message}</Error>}
        {success && (
          <Success>
            The email has been sent, we will reply as soon as possible
          </Success>
        )}
      </InputContainer>
      <ButtonContainer col="1/3">
        <Button>
          <input type="submit" value="[0] Send" />
        </Button>
      </ButtonContainer>
    </FormContainer>
  )
}

export default ContactForm
