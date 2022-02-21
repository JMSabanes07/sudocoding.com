// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mail } from 'mail'

const handleValidations = (props) => {
  const validations = {
    email:
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  }

  const errors = []

  for (const key in props) {
    const el = props[key]

    const conditional = el.match(validations[key])
    // console.log(conditional)
    if (!el || !conditional) {
      errors.push({
        key,
        message: `The ${key} is invalid`,
      })
    }
  }

  return errors[0] ? errors : false
}

const handler = async (req, res) => {
  if (req.method !== 'POST') return res.status(400).send('unauthorized')

  const { name, lastname, email, text } = req.body

  const errors = handleValidations(req.body)

  if (errors) {
    return res.status(400).json({
      errors,
    })
  }

  await mail.sendMail({
    from: `Sudo coding - "${name} ${lastname}" <${email}>`,
    to: 'jmsabanes07@gmail.com',
    subject: 'Work sudo coding',
    text,
  })

  res.status(200).json({})
}

export default handler
