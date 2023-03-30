import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {

    const { img, name, seller, ratings, quantity, price } = props.product;
    const handleAddToCart = props.handleAddToCart;


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h5 className='product-name'>{name}</h5>
                <p>Price : ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} starts</p>
            </div>
            <button className='btn-cart' onClick={() => handleAddToCart(props.product)}>
                Add to Cart
                <FontAwesomeIcon icon={faCoffee} />
            </button>

        </div>
    );
};

export default Product;