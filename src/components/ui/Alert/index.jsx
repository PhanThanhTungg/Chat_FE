import { memo, useEffect, useRef, useState } from "react";
import { CiWarning } from "react-icons/ci";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const Alert = (props) => {
  let cnt = useRef(0);
  let state = props.state;
  const [show, setshow] = useState(false);
  useEffect(() => {
    if(cnt.current == 0){
      cnt.current = 1;
      return;
    }
    setshow(true);  
    const timer = setTimeout(() => {
      setshow(false);
    }, +props.time);
    return () => clearTimeout(timer);
  },[state])

  let mainColor;
  if(props.type == "error"){
    mainColor = "red-700";
  }
  else if (props.type == "success"){
    mainColor = "green-700";
  }
  return (
    <>
      {show &&
        <div className={`fixed top-10 right-10 bg-${mainColor} flex items-center justify-center border-1 py-2 px-4 border-${mainColor} text-white rounded-md animate-right-to-left`}>
          {
            props.type == "error" ?<CiWarning className="font-extrabold text-2xl" />:
            props.type == "success" ? <IoMdCheckmarkCircleOutline className="font-extrabold text-2xl"/>: ""
          }
          <span className="ml-2 font-light">{props.mess}</span>
        </div>
      }
    </>
  )
}
export default memo(Alert);
