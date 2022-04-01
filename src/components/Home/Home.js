import React from 'react';
import {useState} from 'react'
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import Product from '../Product/Product'
import './Home.css'

const Home = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([])
    const addToCart = item =>{
        const exits = cart.find(products => products.id === item.id)
        if(!exits){
            const newCart = [...cart, item]
        setCart(newCart)
        }
        else{
            alert('item already added')
        }
    }
    const removeCartItem = item =>{
        const rest = cart.filter(products => products.id !==  item.id);
        setCart(rest)
    }
    return (
        <div className='home-container'>
            <div className="product-container">
               {
                   products.map(product => <Product key={product.id} product={product}
                    addToCart={addToCart}
                   ></Product>)
               }
            </div>
            <div className="cart-container">
                <Cart 
                cart={cart}
                removeCartItem={removeCartItem}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;