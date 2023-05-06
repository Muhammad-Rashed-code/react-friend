import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/friends">Friends</NavLink>
            <NavLink to="/product">Products</NavLink>
        </nav>
    );
};

export default Header;