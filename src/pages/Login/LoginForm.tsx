import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaUserEdit } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { login } from "@/services/user.service";
import useAlert from "@/hooks/useAlert";
import { useContext, type JSX } from "react";
import type { AuthResponse, LoginInput} from "@/types/auth.type";
import { UserContext } from "@/contexts/auth.context";

const LoginForm = (): JSX.Element => {
  const { openAlert } = useAlert();
  const Navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const callApi = async () => {
      
      // get form data
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email") + "";
      const password = formData.get("password") + "";

      // call login API
      const loginInput: LoginInput = {
        email: email,
        password: password
      };
      const res:AuthResponse = await login(loginInput);

      // handle response
      if (!res.error) {
        openAlert({
          typeAlert: "success",
          message: "Login successfully",
          time: 3000
        })
        if(res.user && res.accessToken){
          const accessToken = res.accessToken;
          const user = res.user;
          setUser({
            accessToken: accessToken,
            user: user
          });
          Navigate("/");
        }
      }
      else{
        openAlert({
          typeAlert: "error",
          message: res.error.message,
          time: 3000
        })
      }
    }
    callApi();
  }

  return (
    <div className="mt-8 w-full max-w-md mx-auto">
      <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
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

          <div className="flex justify-between">
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
  )
}

export default LoginForm;