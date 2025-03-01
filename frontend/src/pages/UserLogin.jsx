import React, { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import { useContext } from "react";
import axios from "axios";

const UserLogin = () => {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const navigate=useNavigate()
 const {user,setUser} =useContext(UserDataContext)


  const submitHandler= async (e)=>{
    e.preventDefault()
    
    const UserData = {
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,UserData)

    if(response.status === 200)
    {
      const data=response.data
      setUser(data.user)
      localStorage.setItem('token',data.token)
      navigate('/home')
    }

    setEmail('')
    setPassword('')

  }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
      <img className='w-16 mb-10' src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt="" />
        <form onSubmit={submitHandler}>

          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border-none outline-none w-full text-lg placeholder:text-base"
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium mb-2 ">Enter Password</h3>
          <input
            className="bg-[#eeeeee] border-none outline-none mb-7 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base"
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            type="password"
            placeholder="Enter your Password"
          />

          <button className="bg-[#0a9600] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg ">
            Login
          </button>
        </form>
        <p className="text-center">
          New here?{" "}
          <Link to="/signup" className="text-blue-600">
            create new account
          </Link>
        </p>
      </div>
      <div>
        <Link to="/captain-login">
          <button className="rounded-lg px-4 py-2 w-full text-lg mb-3 flex justify-center bg-amber-500 text-white">
            Sign in as a Captain
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
