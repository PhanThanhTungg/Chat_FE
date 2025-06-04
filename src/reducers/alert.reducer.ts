import type { ShowAlertActionOutput } from "@/types/Alert.type";

export default (state = {}, action: ShowAlertActionOutput) => {
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
