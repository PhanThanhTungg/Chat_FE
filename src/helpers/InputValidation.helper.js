export const validateEmail = (email) => {
  if(!email) return null;
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    .test(String(email).toLowerCase());
}

export const validatePhone = (phone) => {
  if(!phone) return null;
  const intlPattern = /^\+?\d{1,3}?[-.\s]?(\(?\d{3}\)?)[-.\s]?\d{3}[-.\s]?\d{4,6}$/;
  const vnPattern = /^(0\d{9}|[1-9]\d{8})$/;
  return intlPattern.test(phone) || vnPattern.test(phone.replace(/[-.\s()]/g, ''));
}

export const validatePassword = (password) => {
  if(password === "") return null;
  return /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[^A-Za-z0-9]/.test(password) &&
    password.length > 4;
}

export const validateRePassword = (password, rePassword) => {
  if(rePassword === "") return null;
  return password === rePassword;
}