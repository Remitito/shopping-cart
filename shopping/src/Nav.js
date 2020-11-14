import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import { render } from '@testing-library/react';

export default function Nav(props) {
return (
    <nav>
        <ul id="navLinks">
            <Link className="links" to="/">
            <li>Home</li>
            </Link>
            <Link className="links" to="/shop">
            <li>Shop</li>
            </Link>
            <Link className="links" to="/cart">
            <li>Cart ({props.total})</li>
            </Link>
        </ul>
    </nav>
)
}