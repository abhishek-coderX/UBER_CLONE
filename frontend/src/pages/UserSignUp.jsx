import React, { useContext, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios'
import { UserDataContext } from "../context/UserContext";

const UserSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

 const navigate=useNavigate()
 const {user,setUser} =useContext(UserDataContext)

  const submitHandler =async (e) => {
    e.preventDefault();
    const newUser={
      name:name,
      email:email,
      password:password
    }
   
    const response= await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)
    
    if(response.status === 201)
    {
      const data = response.data
      console.log(response);
      setUser(data.user)
      localStorage.setItem('token',data.token)
      navigate('/home')

        
    }
    setEmail("");
    setName("");
    setPassword("");
  };

  return (
    <div>
      <div className="p-7 h-screen flex flex-col justify-between">
        <div>
          <img
            className="w-16 mb-10"
            src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
            alt=""
          />
          <form onSubmit={submitHandler}>
            <h3 className="text-lg font-medium mb-2">What's your name</h3>
            <input
              className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border-none outline-none w-full text-lg placeholder:text-base"
              required
              type="text"
              placeholder="john"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <h3 className="text-lg font-medium mb-2">What's your email</h3>
            <input
              className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border-none outline-none w-full text-lg placeholder:text-base"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="email@example.com"
            />

            <h3 className="text-lg font-medium mb-2 ">Create Password</h3>
            <input
              className="bg-[#eeeeee] border-none outline-none mb-7 rounded-lg px-4 py-2  w-full text-lg placeholder:text-base"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your Password"
            />

            <button className="bg-[#0a9600] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg ">
              Create Account
            </button>
          </form>
          <p className="text-center">
            Already have the account?{" "}
            <Link to="/login" className="text-blue-600">
              login
            </Link>
          </p>
        </div>
        <div>
          <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
        </div>
      </div>
    </div>
  );
};

export default UserSignUp;
