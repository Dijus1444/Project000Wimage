import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/palm.png";
 

export const Layout = () => {
    return <>
    <header>
        <img src={logo} />
        <nav>
            <ul>
                <li><NavLink to="/" style={{}}>HOME</NavLink></li>
                <li><NavLink to="/news">NEWS</NavLink></li>
                <li><NavLink to="/about">ABOUT</NavLink></li>
                <li><NavLink to="/login">LOGIN</NavLink></li>
            </ul>
        </nav>
    </header>
    <main>
        <Outlet/>
    </main>

    <footer>
        <h5>&copy; 2026 All right reserved</h5>
    </footer>
    </>
}