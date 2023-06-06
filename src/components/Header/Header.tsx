import React, {useContext, useEffect, useState} from 'react';
import HeaderLogo from '../../assets/icons/headerlogo.svg';
import './Header.scss';
import './Header-media.scss';
import {useNavigate, useSearchParams} from "react-router-dom";
import {useDebounce} from "../../hooks/debounce";

const Header = () => {
    const [value, setValue] = useState("")
    const [searchParams] = useSearchParams();

    const debounced = useDebounce(value) || searchParams.get('search') || ''
    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate({
            pathname: '/vacancies',
            search: `?search=${debounced}`
    })
    }

    return (
        <header className="header">
            <div className="header__header">
                <div className="header__header__logo">
                    <a href="/"><img src={HeaderLogo} alt="logo"/></a>
                    <h1>Работа в Кыргызстане</h1>
                </div>
                <div className="header__header__about">
                    <h2>О нас</h2>
                </div>
            </div>
            <div className="header__main">
                <div className="header__search">
                    <input type="search" placeholder={'🔍︎'} onChange={(e) => setValue(e.target.value)}/>
                    <button className="header__search__btn" onClick={handleSubmit}>🔍︎</button>
                </div>
                <button className='header__button'>
                    <span>Подать рекламу</span>
                </button>
            </div>
        </header>
    )
}
export default Header;