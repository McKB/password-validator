const validatePassword = (password) => {
  // if not long enough, return false
  if (password.length < 8) return false

  // if no uppercase, return false
  if (!hasUppercase(password)) return false

  // if no lowercase, return false
  if (!hasLowercase(password)) return false

  // if no number, return false
  if (!hasNumber(password)) return false

  // if no special character, return false
  if (!hasSpecialChar(password)) return false

  // else, return true
  return true
}

module.exports = validatePassword
