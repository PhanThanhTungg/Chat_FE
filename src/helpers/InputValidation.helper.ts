export const validateEmail = (email:string):boolean|null => {
  if(!email) return null;
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    .test(String(email).toLowerCase());
}

export const validatePhone = (phone:string):boolean|null => {
  if(!phone) return null;
  const intlPattern: RegExp = /^\+?\d{1,3}?[-.\s]?(\(?\d{3}\)?)[-.\s]?\d{3}[-.\s]?\d{4,6}$/;
  const vnPattern: RegExp = /^(0\d{9}|[1-9]\d{8})$/;
  return intlPattern.test(phone) || vnPattern.test(phone.replace(/[-.\s()]/g, ''));
}

export const validatePassword = (password:string):boolean|null => {
  if(password === "") return null;
  return /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[^A-Za-z0-9]/.test(password) &&
    password.length > 4;
}

export const validateRePassword = (password:string, rePassword:string):boolean|null => {
  if(rePassword === "") return null;
  return password === rePassword;
}