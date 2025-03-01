import React from 'react'
import {Link} from 'react-router-dom'
const Start = () => {
  return (
    <div >
     <div className='pt-8  h-screen w-full flex justify-between flex-col bg-cover bg-center bg-[url(https://r2.erweima.ai/imgcompressed/img/compressed_8235b3b34bc436a823ba83d00f90b359.webp)]'>
      <img className='w-16 ml-10' src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt="" />
      <div className='bg-white px-5 py-5 pb-8 text-center'>
        <h2 className='font-bold text-3xl mb-4'>Get Started With Uber</h2>
        <Link to='/login' className='font-bold bg-black cursor-pointer text-white w-full rounded inline-block py-2'>Continue</Link>
      
      </div>
     </div>
    </div>
  )
}

export default Start