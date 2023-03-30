import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import"./ShopStore.css";

const ShopStore = () => {
    const [products, setProduct] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product 
                    key ={product.id}
                    product={product}
                    ></Product>)
                }
            </div>
            <div>
                <h3>This is second component</h3>
                
            </div>
            
        </div>
    );
};

export default ShopStore;