import useTitle from "@/hooks/useTitle";
import LoginForm from "./LoginForm";

const Login = () => {
  useTitle("Login");
  return (
    <>
      <div className="text-center">
        <h1 className="text-black-1 text-2xl font-[600] mt-10">Sign in</h1>
        <p className="mt-1 text-gray-500">Sign in to continue to <span className="scroll-m-20 text-md font-extrabold tracking-tight">KenChat</span></p>
      </div>
      <LoginForm/>
    </>
  )
}

export default Login;