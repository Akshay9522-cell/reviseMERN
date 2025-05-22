
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Insert from './pages/insert'
import AddToCart from './pages/AddToCart'
import Checkout from './pages/Checkout'
import OrderConfirmation from './pages/OrderConfirmation'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import DashHome from './pages/DashHome'
import Orders from './pages/Orders'

function App() {
 

  return (
    <>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>

        <Route path='home' element={<Home/>}/>
        <Route path='insert' element={<Insert/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='add' element={<AddToCart/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path="/order-confirmation" element={<OrderConfirmation/>}/>
        {/* <Route path="dash" element={<Dashboard/>}/> */}

        </Route>

       
       </Routes>

       <Routes >
        <Route  path="dash" element={<Dashboard/>}>
        <Route  index element={<DashHome/>}/>

        <Route path='dashhome' element={<DashHome/>}/>
        <Route path='order' element={<Orders/>}/>

        </Route>
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
