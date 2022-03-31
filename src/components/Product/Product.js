import React from 'react';
import './Product.css'
const Product = ({product}) => {
    const {name, price, img, id} = product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>{price} BDT</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default Product;