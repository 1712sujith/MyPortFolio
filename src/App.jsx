import React, { useState } from 'react'
import { Context } from './components/context';
import './App.css'
import Shop from './components/Shop';
import Cart from './components/Cart';
import Start from './components/Start';
import Tasks from './components/Tasks';
import PortFolio from './components/PortFolio';

function App() {
  const[cart,setCart]=useState([]);
  const toggleCart=(product)=>{
    setCart((prevCart)=>{
      const isIncart=prevCart.find((item)=>
      item.id===product.id)
      if(isIncart){
        return prevCart.filter((item)=>item.id!==product.id);
      }else{
        return[...prevCart,product]
      }
    })
  }

  return (
    <>
    <PortFolio/>
    <Context.Provider value={{cart,toggleCart}}>
    <Shop/>
    <Cart/>
    </Context.Provider> <br /><br />
    <Start/>
    <Tasks/>

   
    </>
  )
}

export default App
