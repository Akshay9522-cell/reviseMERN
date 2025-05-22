import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
      const[email,setEmail]=useState('')
      const[password,setPassword]=useState('')
      const nav=useNavigate()


        async function handleLogin(e){
             e.preventDefault()
             let api='http://localhost:5050/user/login'

             await axios.post(api,{email:email,password:password}).then((res)=>{
                 console.log(res.data)
                 localStorage.setItem("name",res.data.user.name)
                 localStorage.setItem("email",res.data.user.email)
                 localStorage.setItem("id",res.data.user._id)
                 nav('/dash')
             })
        }
  return (
    <div>
       <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Login to Your Account</h2>
        <form  className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            onClick={handleLogin}
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-200"
          
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account? <a href="#" className="text-orange-500 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
    </div>
  )
}

export default Login
