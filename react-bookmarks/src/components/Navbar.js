import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return(
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="navbar-brand">
            Note App
        </div>

        <ul class="navbar-nav">
            <li class="nav-item">
                <NavLink 
                    className="nav-link" 
                    aria-current="page" 
                    to="/"
                    exact="true"
                    >Главная
                </NavLink>
            </li>

            <li class="nav-item">
                <NavLink 
                    className="nav-link" 
                    aria-current="page" 
                    to="/about">Информация
                </NavLink>
            </li>
        </ul>
    </nav>)
}