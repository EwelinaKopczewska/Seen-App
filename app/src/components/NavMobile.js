import React , {useState} from "react";
import {Link} from 'react-router-dom';
import { slide as Menu } from "react-burger-menu";

const NavMobile = () => {
    const [isOpen, setOpen] = useState(false);


    const handleIsOpen = () => {
        setOpen(!isOpen);
      };
    
      const closeSideBar = () => {
        setOpen(false);
      };
    
    return (
        <Menu isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen} className= "containerNav">
            <h1 className = "logo">Seen</h1>
            <ul className="nav">
                <li className="navLink">
                    <Link to="/" onClick={closeSideBar}>Home</Link>
                </li>
                <li className="navLink">
                    <Link to="/login" onClick={closeSideBar}>Zaloguj się/Wyloguj</Link>
                </li>
                <li className="navLink">
                    <Link to="/login/account" onClick={closeSideBar}>Konto</Link>
                </li>
            </ul>
        </Menu>
    )
}

export default NavMobile