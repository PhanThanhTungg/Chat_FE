import { useDispatch } from "react-redux";
import { showAlert } from "../actions/alert.action";

const useAlert = ()=>{
  const dispatch = useDispatch();
  
  const openAlert = (data) => {
    const { typeAlert, message, time } = data;
    dispatch(showAlert(typeAlert, message, time));
  }
  
  return {
    openAlert
  };
}

export default useAlert;