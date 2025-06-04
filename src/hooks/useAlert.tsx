import { useDispatch } from "react-redux";
import { showAlert } from "../actions/alert.action";
import type { ShowAlertActionInput, ShowAlertActionOutput } from "@/types/Alert.type";

const useAlert = ()=>{
  const dispatch = useDispatch();

  const openAlert = (data: ShowAlertActionInput) => {
    const { typeAlert, message, time } = data;
    const showAlertAction: ShowAlertActionOutput = showAlert(typeAlert, message, time);
    dispatch(showAlertAction);
  }
  
  return {
    openAlert
  };
}

export default useAlert;