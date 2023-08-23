import "./cart.css";
import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

export const Cart = () => {

    const { cartItems, getTotalCartAmount } = useContext(ShopContext);

    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return (
        <div className="cart">
                <h2>
                    Your Cart:
                </h2>
                <div className="cartItems">
                    {PRODUCTS.map((product, index) => {
                        if (cartItems[product.id] !== 0) {
                            return <CartItem data={product} key={index} />
                        }
                    })}
                </div>
                
                    <div className="checkout">
                    {totalAmount > 0 ?
                        <p>Subtotal: ${totalAmount}</p> : 
                        <h3>Your Cart is Empty.</h3>}
                        <button onClick={() => navigate("/")}>Continue Shopping</button>
                        <button disabled={totalAmount <= 0}>Checkout</button>
                    </div> 

        </div>
    );
};