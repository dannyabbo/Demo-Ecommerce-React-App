import "./navbar.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from "../context/shop-context";


export const Navbar = () => {

    const { totalCartItems } = useContext(ShopContext);
    
    const totalItemNumber = totalCartItems();

    return (
    <div className="navbar">
        <h1 className="title">Demo Shop</h1>
        <div className="links">
            <Link to="/">View Products</Link>
            <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} /> {totalItemNumber > 0 ? ("(" + totalItemNumber + ")") : ""} </Link>
        </div>
    </div>
    );
};