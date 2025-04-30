export const showAlert = (typeAlert, message, time) => {
  return {
    type:"show", typeAlert, message, time
  }
}
export const hideAlert = () => {
  return {
    type:"hide"
  }
}