import React from 'react'

function Register() {
  return (
    <div className='flex flex-col bg-white w-full items-center justify-center h-screen'>
        <div className='flex flex-col border-2 p-10 rounded-lg'>
        <h1 className='text-5xl font-semibold '>Register</h1>
        <p className='my-5'>Enter your details below</p>
        <input className='border-b-2 outline-none border-gray-300 focus:border-blue-600 text-xl p-2' type="text" placeholder="Name"/>
        <input className='border-b-2 outline-none border-gray-300 focus:border-blue-600 text-xl p-2' type="email" placeholder="Email"/>
        <input className='border-b-2 outline-none border-gray-300 focus:border-blue-600 text-xl p-2' type="password" placeholder="Password"/>
        <button className='bg-red-600 focus:bg-green-600 mt-4  text-white rounded-lg py-3'>Create Account</button>
<p>Already have an Account? Login</p>
        
        </div>

    </div>
  )
}

export default Register