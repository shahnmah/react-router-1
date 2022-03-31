import React from 'react';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import Product from '../Product/Product'
import './Home.css'

const Home = () => {
    const [products, setProducts] = useProducts();
    return (
        <div className='home-container'>
            <div className="product-container">
               {
                   products.map(product => <Product key={product.id} product={product}></Product>)
               }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;