import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaUserEdit } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { PiPasswordFill } from "react-icons/pi";


const Register = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-black-1 text-2xl font-[600] mt-10">Sign up</h1>
        <p className="mt-1 text-gray-500">Get your KenChat account now</p>
      </div>
      <div className="mt-8 w-full max-w-md mx-auto">
        <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="space-y-6">
            <div className="grid w-full items-center gap-2 text-black-1">
              <Label htmlFor="email" className="text-sm font-medium">Email</Label>
              <div className="flex items-center">
                <div className="border-1 h-9 w-10 border-gray-200 rounded-md rounded-r-none flex items-center justify-center">
                  <FaUserEdit />
                </div>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className=" border-gray-200 rounded-md border-l-0 rounded-l-none"
                />
              </div>
            </div>

            <div className="grid w-full items-center gap-2 text-black-1">
              <Label htmlFor="phone" className="text-sm font-medium">Phone</Label>
              <div className="flex items-center">
                <div className="border-1 h-9 w-10 border-gray-200 rounded-md rounded-r-none flex items-center justify-center">
                  <FaPhone />
                </div>
                <Input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone"
                  className="border-gray-200 rounded-md border-l-0 rounded-l-none"
                />
              </div>
            </div>

            <div className="grid w-full items-center gap-2 text-black-1">
              <Label htmlFor="fullName" className="text-sm font-medium">Display name</Label>
              <div className="flex items-center">
                <div className="border-1 h-9 w-10 border-gray-200 rounded-md rounded-r-none flex items-center justify-center">
                  <MdDriveFileRenameOutline />
                </div>
                <Input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your display name"
                  className="border-gray-200 rounded-md border-l-0 rounded-l-none"
                />
              </div>
            </div>

            <div className="grid w-full items-center gap-2 text-black-1">
              <Label htmlFor="password" className="text-sm font-medium">Password</Label>
              <div className="flex items-center">
                <div className="border-1 h-9 w-10 border-gray-200 rounded-md rounded-r-none flex items-center justify-center">
                  <RiLockPasswordFill />
                </div>
                <Input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="border-gray-200 rounded-md border-l-0 rounded-l-none"
                />
              </div>
            </div>

            <div className="grid w-full items-center gap-2 text-black-1">
              <Label htmlFor="repassword" className="text-sm font-medium">Re-password</Label>
              <div className="flex items-center">
                <div className="border-1 h-9 w-10 border-gray-200 rounded-md rounded-r-none flex items-center justify-center">
                  <PiPasswordFill />
                </div>
                <Input
                  type="password"
                  id="repassword"
                  name="repassword"
                  placeholder="Enter your re-password"
                  className="border-gray-200 rounded-md border-l-0 rounded-l-none"
                />
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

    </>
  )
}
export default Register;