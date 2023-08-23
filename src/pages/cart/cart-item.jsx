import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const CartItem = (props) => {

    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

    const { id, productName, price, productImage } = props.data;

    return (
        <div className='cartItem'>
            <div className='image-wrapper'>
                <img src={productImage} />
            </div>
            <div className='description'>
                <div className='info'>
                    <p><b>{productName}</b></p>
                    <p>${price}</p>
                </div>
                <div className='countHandler'>
                    <button onClick={() => removeFromCart(id)}>-</button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                    <button onClick={() => addToCart(id)}>+</button>
                </div>

            </div>
        </div>
    );
};
