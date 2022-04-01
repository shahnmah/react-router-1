import React from 'react';
import './Product.css'
                    
const Product = ({product, addToCart}) => {
    const {name, price, img, id} = product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>{price} BDT</p>
            <button onClick={()=> addToCart(product)}>Add to cart</button>
        </div>
    );
};

export default Product;