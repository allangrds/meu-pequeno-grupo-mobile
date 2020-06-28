import validator from 'validator'

const rules = {
  email: [
    {
      validation: validator.isEmail,
      message: 'Email inválido',
    },
    {
      validation: (str) => validator.isLength(str, { min: 5 }),
      message: 'Email pequeno',
    },
    {
      validation: (str) => validator.isLength(str, { max: 50 }),
      message: 'Email grande',
    },
  ],
  password: [
    {
      validation: (str) => validator.isLength(str, { min: 6 }),
      message: 'Senha pequena',
    },
    {
      validation: (str) => validator.isLength(str, { max: 100 }),
      message: 'Senha grande',
    },
  ],
}

export default rules
