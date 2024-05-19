import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [eye,setEye] = useState("password")
  const [userEmail , setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")

  const navigate = useNavigate()
  const handleshow = () => {
    if(eye === "password"){
      setEye("text")
    }else{
      setEye("password")
    }
  }

  const handleSubmitSign = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3002/api/auth/login',{email:userEmail,password:userPassword}).then(res => {
      console.log(res)
      toast.success("Login Successfull")
      navigate('/home')
    
    
    }).catch(err => {
      toast.error(err.response.data.error)
      console.log(err.response.data.error);
    })

    
  }
  return (
    <div className="flex h-full w-full text-black">
      <div className="login_pict h-full bg-green-500 w-[50%] hidden sm:block"></div>
      <div className="login_message bg-red-400 w-full sm:w-[50%] flex items-center justify-center">
        <div className="login_container bg-red-50 h-[500px] w-[350px] rounded-md">
          <h2 className="font-bold font-lobs text-5xl p-3">Welcome back !</h2>
          <p className="text-sm p-3 font-Robo text-gray-500">
            Don't have an account?{" "}
            <a href="#" className="underline text-black">
              Create a new account now
            </a>{" "}
            It's free and take less 30 sec{" "}
          </p>

          <form
            action=""
            className="p-3 h-[70%] w-full flex flex-col justify-around "
            onSubmit={handleSubmitSign}
          >
            <input
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="Email"
              className="bg-inherit border-b-2 border-gray-400 focus:border-black outline-none text-black font-Robo p-2"
            />
            <div className="pass relative">
              <input
                type={eye}
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                placeholder="Password"
                className="bg-inherit w-full border-b-2 border-gray-400 focus:border-black outline-none p-2 text-black font-Robo"
              />
              <i className="absolute right-4 top-2 cursor-pointer" onClick={handleshow}>eye</i>
            </div>
            <button className="btn" type="submit">
              Login
            </button>
            <button className="btn border-black text-black hover:bg-gray-100 bg-inherit" onClick={()=>{toast.error("not integrated")}}>
              Login with Google{" "}
            </button>
            <p className="text-center text-gray-400">
              Forgot Password{" "}
              <Link to="/signin" className="text-black underline">
                Click here
              </Link>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Login;