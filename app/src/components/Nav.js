import React from "react";
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <div className= "containerNav">
            <h1 className = "logo">Seen</h1>
            <ul className="nav">
                <li className="navLink">
                    <Link to="/">Home</Link>
                </li>
                <li className="navLink">
                    <Link to="/login">Register</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav