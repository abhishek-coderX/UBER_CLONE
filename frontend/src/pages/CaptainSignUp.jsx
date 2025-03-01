import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from 'axios'


const CaptainSignUp = () => {
  
  const navigate=useNavigate()


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  
  const [ vehicleColor, setVehicleColor ] = useState('')
  const [ vehiclePlate, setVehiclePlate ] = useState('')
  const [ vehicleCapacity, setVehicleCapacity ] = useState('')
  const [ vehicleType, setVehicleType ] = useState('')

  const {captain,setCaptain}=React.useContext(CaptainDataContext)


  const submitHandler = async(e) => {
    e.preventDefault();
    const CaptainData = {
      name: name,
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, CaptainData)

    if(response.status===201)
    {
      const data=response.data
      setCaptain(data.captain)
      localStorage.setItem('token',data.token)
      navigate('/captain-home')
    }


    setEmail("");
    setName("");
    setPassword("");
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')
  };

  return (
    <div>
      <div className="px-7 py-6 h-screen flex flex-col justify-between">
        <div>
          <img
            className="w-16 mb-5 "
            src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
            alt=""
          />
          <form onSubmit={submitHandler}>
            <h3 className="text-lg font-medium mb-2">
              What's our captain's name
            </h3>
            <input
              className="bg-[#eeeeee] mb-5 rounded-lg px-4 py-2 border-none outline-none w-full text-lg placeholder:text-base"
              required
              type="text"
              placeholder="john"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <h3 className="text-lg font-medium mb-2">
              What's our captain's email
            </h3>
            <input
              className="bg-[#eeeeee] mb-5 rounded-lg px-4 py-2 border-none outline-none w-full text-lg placeholder:text-base"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="email@example.com"
            />

            <h3 className="text-lg font-medium mb-2 ">Create Password</h3>
            <input
              className="bg-[#eeeeee] border-none outline-none mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your Password"
            />

<h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-5'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border-none outline-none text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border-none outline-none text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-5'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border-none outline-none text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border-none outline-none text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Bike</option>
            </select>
          </div>


            <button className="bg-[#0a9600] text-white font-semibold mb-2 rounded-lg px-4 py-2 w-full text-lg ">
              Create Account
            </button>
          </form>
          <p className="text-center mb-1.5 ">
            Already have the account?{" "}
            <Link to="/captain-login" className="text-blue-600">
              login
            </Link>
          </p>
        </div>
        <div>
          <p className="text-[10px] leading-tight">
            This site is protected by reCAPTCHA and the{" "}
            <span className="underline">Google Privacy Policy</span> and{" "}
            <span className="underline">Terms of Service apply</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignUp;
