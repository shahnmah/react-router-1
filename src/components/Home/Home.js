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
        const newCart = [...cart, item]
        setCart(newCart)
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;