
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Insert from './pages/insert'
import AddToCart from './pages/AddToCart'
import Checkout from './pages/Checkout'
import OrderConfirmation from './pages/OrderConfirmation'

function App() {
 

  return (
    <>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>

        <Route path='home' element={<Home/>}/>
        <Route path='insert' element={<Insert/>}/>
        <Route path='add' element={<AddToCart/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path="/order-confirmation" element={<OrderConfirmation/>}/>

        </Route>
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
