import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Sidebar = () => {
  return (
    <>
    <div className='flex'>
      <div class="flex h-screen bg-white-900 text-white">
 
  <aside class="w-64 bg-gray-800 flex flex-col">
    <div class="h-16 flex items-center justify-center border-b border-gray-700">
      <span class="text-xl font-semibold">Welcome</span>
    </div>
    <nav class="flex-1 overflow-y-auto">
      <ul class="p-4 space-y-2">
        <li>
          <Link to='dashhome' class="flex items-center p-2 rounded hover:bg-gray-700">
            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M3 7h18M3 12h18M3 17h18" />
            </svg>
            HOme
          </Link>
        </li>
        <li>
          <Link to='order' class="flex items-center p-2 rounded hover:bg-gray-700">
            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M5 13l4 4L19 7" />
            </svg>
            Orders
          </Link>
        </li>
       
      </ul>
    </nav>
    <div class="p-4 border-t border-gray-700">
      <button class="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded">
        Log Out
      </button>
    </div>
  </aside>


</div>
<Outlet/>
    </div>
    
    </>
  )
}

export default Sidebar
