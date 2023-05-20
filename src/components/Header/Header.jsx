import React from 'react';
import HeaderLogo from '../../assets/icons/headerlogo.svg';
import SearchIcon from '../../assets/icons/searchicon.svg';
import './Header.scss';
import './Header-media.scss';

const Header=()=>{
    return(
        <header className="header">
            <div className="header__header">
                <div className="header__header__logo">
                    <img src={HeaderLogo} alt="logo" />
                    <h1>Работа в Кыргызстане</h1>
                </div>
                <div className="header__header__about">
                    <h2>О нас</h2>
                </div>
            </div>
            <div className="header__main">
                <div className="header__search">
                    <input type="search" />
                    <img src={SearchIcon} alt="search-icon" />
                </div>
                <button className='header__button'>
                    <span>Подать рекламу</span>
                </button>
            </div>
        </header>
    )
}

export default Header;