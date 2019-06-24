import React from 'react';
import '../styles/Header.scss';
import logo from '../assets/images/logo.png';

const Header: React.FC = () => {
    return(
        <header>
            <div className="header__logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="header__menu">
                <ul className="header__menu_list">
                    <li>Purchase</li>
                    <li>My orders</li>
                    <li>Sell</li>
                </ul>
            </div>
        </header>
    );
}

export default Header;