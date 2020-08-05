const capitalizeString = (value = '') => {
  if (!value) {
    return ''
  }

  const str = String(value)
  const firstLetter = str.slice(0, 1).toUpperCase()
  const restOfText = str.slice(1, str.length)

  return `${firstLetter}${restOfText}`
}

export default capitalizeString
