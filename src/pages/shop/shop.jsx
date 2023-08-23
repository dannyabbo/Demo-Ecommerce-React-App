import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
    return (
        <div className="shop">
            <div className="shopTitle">
                <h2>Browse Products</h2>
            </div>
            <div className="products">
                {PRODUCTS.map((product, index) => <Product data={product} key={index} />)}
            </div>
        </div>
    );
};