export default (state = {}, action) => {
  switch (action.type) {
    case "show":
      return {
        typeAlert: action.typeAlert,
        message: action.message,
        time: action.time
      };
    case "hide":
      return null;
    default:
      return state;
  }
};
