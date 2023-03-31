import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import"./ShopStore.css";

const ShopStore = () => {
    const [products, setProduct] = useState([])
    const [cart,setCart] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    useEffect(()=>{
        const storedCart = getShoppingCart();
        // step 1 : Get id 

        for(const id in storedCart){
            const savedProduct = products.find(product => product.id === id);
            console.log(savedProduct);
        }
    },[products])

   

    const handleAddToCart = (product) =>{
        const newCart = [...cart,product]
        setCart(newCart);
        addToDb(product.id)
        
        

    }


    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product 
                    key ={product.id}
                    product={product}
                    handleAddToCart ={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div>
                <Cart cart={cart}></Cart>
                
            </div>
            
        </div>
    );
};

export default ShopStore;