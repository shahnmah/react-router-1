import React from 'react';
import Product from '../Product/Product';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart)
    return (
        <div>
            <h2>Selected Item {cart.length}</h2>
           {
               cart.map(product => <p>{product.name}</p>)
           }
        </div>
    );
};

export default Cart;