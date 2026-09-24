import React from "react";

import "./Navbar.css"
import { NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <>
        <nav>
            <div className="Nav">
                <NavLink to="/">
                    <h3>Contact Book</h3>
                </NavLink>
                <NavLink to="/contact">
                    <h3>Contacts</h3>
                </NavLink>
                <NavLink to="/about">
                    <h3>About</h3>
                </NavLink>
                <NavLink to="/home">
                    <h3>Home</h3>
                </NavLink>
            </div>
        </nav>
        </>
    )
}