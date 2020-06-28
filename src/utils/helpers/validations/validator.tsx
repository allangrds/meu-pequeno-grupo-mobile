const validator = (values, rules, setErrors) => {
  let errors = {}

  const validateField = (field) => {
    const ruleToExecute = rules[field]
    const fieldValue = values[field]
      ? values[field]
      : ''
    let errorMessage = null

    for (let i = 0; i < ruleToExecute.length; i++) {
      const isPassOnValidation = ruleToExecute[i].validation(fieldValue)

      if (!isPassOnValidation) {
        errorMessage = ruleToExecute[i].message

        break
      } else {
        errorMessage = null
      }
    }

    errors[field] = errorMessage

    return errorMessage
  }

  const validate = (field) => () => {
    const errorMessage = validateField(field)

    setErrors({
      [field]: errorMessage,
    })
  }

  const hasErrors = () => {
    Object.keys(rules).map((keyName) => {
      validateField(keyName)
    })

    setErrors(errors)

    const errorsList = Object.keys(errors).filter((keyName) => (
      errors[keyName] !== null
    ))

    return errorsList.length > 0
  }

  return {
    validate,
    hasErrors,
  }
}

export default validator
