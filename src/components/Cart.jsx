import React, { useState,useContext } from 'react'
import { Context } from './context'

const Cart = () => {
    const{cart}=useContext(Context);
  return (
    <div className=" text-bold flex space-x-30">
        <h2>Cart</h2>
        {cart.length>0?(cart.map((item)=><p key={item.id}>{item.name}
            <img class=" h-60 w-60" src={item.img}  alt="" /> <p className='text-center'>$45.0</p>
          </p> )):( <p>Cart is empty</p>)}
          
    </div>
  )
}

export default Cart