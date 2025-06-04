import type { ShowAlertActionOutput, TypeAlert } from "@/types/Alert.type";

export const showAlert = (typeAlert: TypeAlert, message: string, time: number): ShowAlertActionOutput => {
  return {
    type: "show",
    typeAlert,
    message,
    time
  };
}
export const hideAlert = () => {
  return {
    type: "hide"
  };
}