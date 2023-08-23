import React, { useState, createContext } from 'react';
import { PRODUCTS } from '../products';


export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < PRODUCTS.length; i++) {
        cart[PRODUCTS[i].id] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    const updateCartItemCount = (newAmount, itemId) => {

        if (newAmount < 0)
            newAmount = 0;

        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    }

    const totalCartItems = () => {
        let total = 0;
        for (const item in cartItems) {
            total += cartItems[item];
        }
        return total;
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
            totalAmount += cartItems[item] * itemInfo.price;
        }
        return totalAmount.toFixed(2);
    }

    const contextValue = { cartItems, addToCart, removeFromCart, totalCartItems, updateCartItemCount, getTotalCartAmount };

    return (
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    );
};
