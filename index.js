const validatePassword = (password) => {
  // if not long enough, return false
  if (password.length < 8) return false

  // if no lowercase, return false
  if (!hasLowercase(password)) return false

  // if no uppercase, return false
  if (!hasUppercase(password)) return false

  // if no number, return false
  if (!hasNumber(password)) return false

  // if no special character, return false
  if (!hasSpecialChar(password)) return false

  // else, return true
  return true
}

const hasLowercase = (password) => {
  for (let i = 0; i < password.length; i++) {
    let letter = password[i]

    if (!hasNumber(letter) && !hasSpecialChar(letter) && letter.toLowerCase() === letter) {
      return true
    }
  }

  return false
}

const hasUppercase = (password) => {
  for (let i = 0; i < password.length; i++) {
    let letter = password[i]

    if (!hasNumber(letter) && !hasSpecialChar(letter) && letter.toUpperCase() === letter) {
      return true
    }
  }

  return false
}

const hasNumber = (password) => {
  const numerics = '0123456789'

  for (let i = 0; i < password.length; i++) {
    let letter = password[i]

    if (numerics.indexOf(letter) >= 0) return true
  }

  return false
}

const hasSpecialChar = (password) => {
  const characters = '!@#$%^&*()'

  for (let index1 = 0; index1 < password.length; index1++) {
    for (let index2 = 0; index2 < characters.length; index2++) {
      if (password[index1] === characters[index2]) return true
    }
  }

  return false
}

module.exports = validatePassword
