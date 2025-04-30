import { memo, useEffect, useRef, useState } from "react";
import { CiWarning } from "react-icons/ci";
const Alert = (props) => {
  let icon;
  let cnt = useRef(0);
  let state = props.state;
  if (props.type == "error") {
    icon = <CiWarning className="font-extrabold text-2xl" />
  }
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
  
  return (
    <>
      {show &&
        <div className="fixed top-10 right-10 bg-red-700 flex items-center justify-center border-1 py-2 px-4 border-red-700 text-white rounded-md animate-right-to-left">
          {icon}
          <span className="ml-2 font-light">{props.mess}</span>
        </div>
      }
    </>
  )
}
export default memo(Alert);
