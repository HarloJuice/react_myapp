import React from 'react';
import "../styles/MenuComponent.css";
import { NavLink } from 'react-router-dom';
const MenuComponent = () => {
    return (
        <div className="menu">
            <div className="menu">
                <ul>
                    <li><NavLink exact = "true" to="/">Головна</NavLink></li>
                    <li><NavLink to="/test">Про нас</NavLink></li>
                    <li><NavLink to="/gallery">Галерея</NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default MenuComponent;