import useTitle from "@/hooks/useTitle";
import RegisterForm from "./RegisterForm";


const Register = () => {
  useTitle("Register")

  return (
    <>
      <div className="text-center">
        <h1 className="text-black-1 text-2xl font-[600] mt-10">Sign up</h1>
        <p className="mt-1 text-gray-500">Get your <span className="scroll-m-20 text-md font-extrabold tracking-tight">KenChat</span> account now</p>
      </div>
      <RegisterForm/>
    </>
  )
}
export default Register;