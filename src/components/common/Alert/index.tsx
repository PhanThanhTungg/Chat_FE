import type { RootState } from "@/main";
import { hideAlert } from "../../../actions/alert.action";
import { memo, useEffect } from "react";
import { CiWarning } from "react-icons/ci";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import type { ShowAlertActionInput } from "@/types/Alert.type";
const Alert = () => {

  const alertInfo = useSelector((state: RootState) => state.alertReducer) as ShowAlertActionInput;

  let mainColor = "";
  if (alertInfo) {
    if (alertInfo.typeAlert == "error") {
      mainColor = "red";
    }
    else if (alertInfo.typeAlert == "success") {
      mainColor = "green";
    }
  }

  const dispatch = useDispatch();
  useEffect(() => {
    if (!alertInfo) return;
    const timer = setTimeout(() => {
      dispatch(hideAlert());
    }, alertInfo.time || 3000);
    return () => clearTimeout(timer);
  }, [alertInfo])

  console.log("mainColor", mainColor);
  return (
    <>
      {alertInfo &&
        <div className={`fixed top-10 right-10 flex items-center justify-center border-1 py-2 px-4 text-white rounded-md animate-right-to-left`}
          style={{
            backgroundColor: mainColor,
            borderColor: mainColor
          }}
        >
          {
            alertInfo.typeAlert == "error" ? <CiWarning className="font-extrabold text-2xl" /> :
              alertInfo.typeAlert == "success" ? <IoMdCheckmarkCircleOutline className="font-extrabold text-2xl" /> : ""
          }
          <span className="ml-2 font-light">{alertInfo.message}</span>
        </div>
      }
    </>
  )
}

export default memo(Alert);
