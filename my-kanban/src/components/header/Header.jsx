import React from "react";
import { useState } from "react";
import './Header.css'

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(!isActive);
    }

    return (
        <header className="header">
            <h1 className="header-title">Awesome Kanban Board</h1>
            <div className="header__user">
                <select className={`header__user-select ${isActive ? 'header__user-select-on' : 'header__user-select-off'}`} onClick={handleClick}>
                    <option value="profile">Profile</option>
                    <option value="log-out">Log out</option>
                </select>
            </div>
        </header> 
    )
}

export default Header