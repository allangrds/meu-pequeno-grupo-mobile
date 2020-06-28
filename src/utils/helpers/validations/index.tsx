import validator from './validator'

import login from './scenes/login'

const scenes = {
  login,
}

const validations = (name, values, setErrors) => {
  const rules = scenes[name]

  return validator(
    values,
    rules,
    setErrors,
  )
}

export default validations
