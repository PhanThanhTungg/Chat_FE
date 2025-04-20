import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaUserEdit } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox"

const Login = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-black-1 text-2xl font-[600] mt-10">Sign in</h1>
        <p className="mt-1 text-gray-500">Sign in to continue to KenChat</p>
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
                  name="email"
                  placeholder="Enter your email"
                  className=" border-gray-200 rounded-md border-l-0 rounded-l-none"
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
                  name="password"
                  placeholder="Enter your password"
                  className="border-gray-200 rounded-md border-l-0 rounded-l-none"
                />
              </div>
            </div>

            <div class="flex justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm text-black-1 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
              <NavLink to="#" className="text-sm text-gray-400 hover:text-black-1">Forgot password ?</NavLink>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="submit"
                className="button-black-white"
              >
                Sign In
              </button>
            </div>
          </div>

        </form>
        <p className="text-black-1 text-center mt-10">Don't have an account ?
          <NavLink to="/register" className="text-blue-500 hover:text-blue-700 font-semibold"> Sign Up</NavLink>
        </p>
      </div>

    </>
  )
}

export default Login;