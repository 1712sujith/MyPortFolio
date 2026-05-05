import React, { useContext, useState } from 'react';
import { Context } from './Context';
import watch1 from '/watch1.jpg';
import watch2 from '/watch2.jpg';
import watch3 from '/watch3.jpg';

const Shop = () => {
    const { cart, toggleCart } = useContext(Context);
    const products = [
        { id: 1, name: "titan", img: watch1 },
        { id: 2, name: "firebolt", img: watch2 },
        { id: 3, name: "noise", img: watch3 },
        { id: 4, name: "fastrack", img: watch1 }
    ]
    return (
        <div className="flex space-x-65"><h2>Shop</h2>
            {products.map((product) => {
                const isIncart = cart.some((item) => item.id === product.id);

return(
                <div key={product.id}>
                    <span>{product.name}</span>
                    <img src={product.img} alt="" />
                    <button className='bg-yellow-500 text-black' onClick={() => toggleCart(product)}>
                        {isIncart ? "Remove" : "Add"}
                    </button>

                </div>
           ) })}
        </div>
    )
}

export default Shop