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
        const saveCart = []
        // step 1 : Get id 

        for(const id in storedCart){
            //step 2 : get the product by using id 
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                // set quantity 
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
                  
            }
            // console.log('addedProduct',addedProduct);
        }
        setCart(saveCart);
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