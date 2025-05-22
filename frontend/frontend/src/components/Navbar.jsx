import React from 'react'
import {Link,Outlet, useNavigate} from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { FaUser } from "react-icons/fa";



const Navbar = () => {

      
    const product=useSelector(state=>state.myca.cart)
    let len=product.length
    const nav=useNavigate()
  return (
    <>
     <div>
       
      <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-800">Logo</h1>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/home" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/insert" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Insert
            </Link>
          </li>
          <li className='flex justify-center items-center'> 
            <FaShoppingCart onClick={()=>nav('/add')} />{len}

          </li>
           <li className='flex justify-center items-center'> 
           <FaUser  onClick={()=>nav('/login')} />


          </li>
        </ul>
      </div>
    </nav>

     </div> 
     <Outlet/>
    </>
  )
}

export default Navbar
