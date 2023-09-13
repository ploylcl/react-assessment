import React from "react";
import'../src/App.css'
import { Link } from "react-router-dom";
export default function Navbar() {
    return(
        <nav className="nav-bar">
            <ul className="nav-element">
                <li><Link to="/homeNormalPage">home</Link></li>
                <li><Link to="/OwnerPage">owner</Link></li>
                
            </ul>
        </nav>
    )
}
