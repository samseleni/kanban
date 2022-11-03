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
                <div 
                    className={`header__user-select ${isActive ? 'header__user-select-on' : 'header__user-select-off'}`} 
                    onClick={handleClick} 
                    tabIndex='0' 
                    onBlur={() => setIsActive(false)}></div>
                <div style={{display: isActive ? 'flex' : 'none'}}>
                    <div className="square"></div>
                    <nav className='header__user-select-nav'>
                        <a href='##'>Profile</a>
                        <a href='##'>Log out</a>
                    </nav>
                </div>
                
            </div>
        </header> 
    )
}

export default Header