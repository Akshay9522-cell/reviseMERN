import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Orders = () => {

     const[show,setShow]=useState([])

     async function allOrders(){
         
         let api='http://localhost:5050/user/allorder'

         await axios.get(api).then((res)=>{
            console.log(res.data)
            setShow(res.data)
         })
     }

     useEffect(()=>{
        allOrders()
     },[])
  return (
    <div>
      <h1 className='relative left-8'>All Orders</h1>

      {
        show.map((e)=>{
            return(
                <>
                <h1>{e.customer.name}</h1>
                <h1>{e.items.map((e1)=>{
                    return(
                        <>
                        <h1>{ e1.name}</h1>
                        </>
                    )
                     
                })}</h1>
                <h1>{e.orderId}</h1>
                <h1>{e.payment.status}</h1>
                
                </>
            )
        })
      }
    </div>
  )
}

export default Orders
