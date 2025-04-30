import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaUserEdit } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { PiPasswordFill } from "react-icons/pi";
import { useRef, useState } from "react";
import { validateEmail, validatePassword, validatePhone, validateRePassword } from "@/helpers/InputValidation.helper";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Alert from "../../components/ui/Alert";
import { register } from "@/services/user.service";

const RegisterForm = () => {
  const passwordRef = useRef(null);
  const rePasswordRef = useRef(null);
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();
  const [validate, setValidate] = useState({
    email: null,
    phone: null,
    fullName: null,
    password: null,
    repassword: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      const checkEmail = validateEmail(value);
      setValidate(prev => {
        return {
          ...prev,
          email: checkEmail
        }
      })
    }

    if (name === "phone") {
      const checkPhone = validatePhone(value);
      setValidate(prev => {
        return {
          ...prev,
          phone: checkPhone
        }
      })
    }

    if (name === "fullName") {
      setValidate(prev => {
        return {
          ...prev,
          fullName: value.length == 0 ? null : (value.length > 2 ? true : false)
        }
      })
    }


    if (name === "password") {
      const checkPassword = validatePassword(value);
      const checkRepassword = validateRePassword(passwordRef.current.value, rePasswordRef.current.value);
      setValidate(prev => {
        return {
          ...prev,
          password: checkPassword,
          repassword: checkRepassword
        }
      })
    }

    if (name === "repassword") {
      const checkRepassword = validateRePassword(passwordRef.current.value, rePasswordRef.current.value);
      setValidate(prev => {
        return {
          ...prev,
          repassword: checkRepassword
        }
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const listCheck = Object.values(validate);
    const checkAll = listCheck.every(item => item != null);
    if (!checkAll) setAlert({
      type: "error",
      mess: "Please check your input again",
      time: 3000
    });
    else {
      let { email, phone, fullName, password, repassword } = e.target;
    
      const callApi = async () => {
        const res = await register({ 
          email: email.value,
          phone: phone.value, 
          fullName: fullName.value,
          password: password.value,
          repassword: repassword.value
         });
        if(!res.error){
          setAlert({
            type: "success",
            mess: "Register successfully",
            time: 3000
          });
          navigate("/login");
        }
        else{
          setAlert({
            type: "error",
            mess: res.error.message,
            time: 3000
          });
        }
        
      }
      callApi();
    }

  }
  return (
    <div className="mt-8 w-full max-w-md mx-auto">
      <Alert type={alert?.type} mess={alert?.mess} time={alert?.time} state={alert} />
      <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="space-y-6">
          <div className="grid w-full items-center gap-2 text-black-1">
            <Label htmlFor="email" className="text-sm font-medium">Email</Label>
            <div className={`flex items-center relative`}>
              <div className="border-1 h-9 w-10 border-gray-200 rounded-md rounded-r-none flex items-center justify-center">
                <FaUserEdit />
              </div>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                onChange={handleChange}
                required
                className="border-gray-200 rounded-md border-l-0 rounded-l-none"
              />
              {validate.email == true && <IoMdCheckmarkCircleOutline className="absolute right-2 text-green-700" />}
              {validate.email == false && <IoIosCloseCircleOutline className="absolute right-2 text-red-700" />}
            </div>
          </div>

          <div className="grid w-full items-center gap-2 text-black-1">
            <Label htmlFor="phone" className="text-sm font-medium">Phone</Label>
            <div className="flex items-center relative">
              <div className="border-1 h-9 w-10 border-gray-200 rounded-md rounded-r-none flex items-center justify-center">
                <FaPhone />
              </div>
              <Input
                type="text"
                id="phone"
                name="phone"
                onChange={handleChange}
                required
                placeholder="Enter your phone"
                className="border-gray-200 rounded-md border-l-0 rounded-l-none"
              />
              {validate.phone == true && <IoMdCheckmarkCircleOutline className="absolute right-2 text-green-700" />}
              {validate.phone == false && <IoIosCloseCircleOutline className="absolute right-2 text-red-700" />}
            </div>
          </div>

          <div className="grid w-full items-center gap-2 text-black-1">
            <Label htmlFor="fullName" className="text-sm font-medium">Display name</Label>
            <div className="flex items-center relative">
              <div className="border-1 h-9 w-10 border-gray-200 rounded-md rounded-r-none flex items-center justify-center">
                <MdDriveFileRenameOutline />
              </div>
              <Input
                type="text"
                id="fullName"
                name="fullName"
                onChange={handleChange}
                required
                placeholder="Enter your display name"
                className="border-gray-200 rounded-md border-l-0 rounded-l-none"
              />
              {validate.fullName == true && <IoMdCheckmarkCircleOutline className="absolute right-2 text-green-700" />}
              {validate.fullName == false && <IoIosCloseCircleOutline className="absolute right-2 text-red-700" />}
            </div>
          </div>

          <div className="grid w-full items-center gap-2 text-black-1">
            <Label htmlFor="password" className="text-sm font-medium">Password</Label>
            <div className="flex items-center relative">
              <div className="border-1 h-9 w-10 border-gray-200 rounded-md rounded-r-none flex items-center justify-center">
                <RiLockPasswordFill />
              </div>
              <Input
                type="password"
                ref={passwordRef}
                id="password"
                name="password"
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className="border-gray-200 rounded-md border-l-0 rounded-l-none"
              />
              {validate.password == true && <IoMdCheckmarkCircleOutline className="absolute right-2 text-green-700" />}
              {validate.password == false && <IoIosCloseCircleOutline className="absolute right-2 text-red-700" />}
            </div>
          </div>

          <div className="grid w-full items-center gap-2 text-black-1">
            <Label htmlFor="repassword" className="text-sm font-medium">Re-password</Label>
            <div className="flex items-center relative">
              <div className="border-1 h-9 w-10 border-gray-200 rounded-md rounded-r-none flex items-center justify-center">
                <PiPasswordFill />
              </div>
              <Input
                type="password"
                id="repassword"
                name="repassword"
                ref={rePasswordRef}
                onChange={handleChange}
                required
                placeholder="Enter your re-password"
                className="border-gray-200 rounded-md border-l-0 rounded-l-none"
              />
              {validate.repassword == true && <IoMdCheckmarkCircleOutline className="absolute right-2 text-green-700" />}
              {validate.repassword == false && <IoIosCloseCircleOutline className="absolute right-2 text-red-700" />}
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="submit"
              className="button-black-white"
            >
              Sign Up
            </button>
          </div>
        </div>

      </form>
      <p className="text-black-1 text-center mt-10">Already have an account ?
        <NavLink to="/login" className="text-blue-500 hover:text-blue-700 font-semibold"> Sign In</NavLink>
      </p>
    </div>
  )
}

export default RegisterForm;