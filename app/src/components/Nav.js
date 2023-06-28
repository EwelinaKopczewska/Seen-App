import React from "react";
import {Link} from 'react-router-dom';

const Nav = () => {

    const onRemoveLocalStorage = () => {
        if(localStorage){
            localStorage.clear()
        }
    }
    return (
        <div className= "containerNav">
            <h1 className = "logo">Seen</h1>
            <ul className="nav">
                <li className="navLink">
                    <Link to="/">Home</Link>
                </li>
                <li className="navLink">
                    <Link to="/login" onClick = { onRemoveLocalStorage }>Zaloguj się/Wyloguj</Link>
                </li>
                <li className="navLink">
                    <Link to="/login/account">Konto</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav