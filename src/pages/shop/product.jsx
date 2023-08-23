import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {
    const { id, productName, price, productImage } = props.data;

    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id];

    return (
        <div className='product'>
            <div className='image-wrapper'>
                <img src={productImage} />
            </div>
            <div className='description'>
                <p className='productName'><b>{productName}</b></p>
                <p>${price}</p>
                <button className='addToCartBtn' onClick={() => addToCart(id)}>Add To Cart</button>
            </div>
            
        </div>
    )
}
