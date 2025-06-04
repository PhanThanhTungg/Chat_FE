export type TypeAlert = "error" | "success";
export interface ShowAlertActionInput {
  typeAlert: TypeAlert;
  message: string;
  time: number;
}
export interface ShowAlertActionOutput extends ShowAlertActionInput {
  type: "show" | "hide";
  [extraProps: string]: unknown;
}