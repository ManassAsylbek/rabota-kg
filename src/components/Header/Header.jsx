import React, {useContext, useEffect, useState} from 'react';
import HeaderLogo from '../../assets/icons/headerlogo.svg';
import './Header.scss';
import './Header-media.scss';
import {useNavigate} from "react-router-dom";
import {useDebounce} from "../../hooks/debounce";

const Header = () => {
    const [value, setValue] = useState("")

    const debounced = useDebounce(value)
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        navigate(`/vacancies/${debounced}`)
    }

    const scrollToAbout = () => {
        const targetElement = document.getElementById('AboutUs');
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            });
        }
    }


    return (
        <header className="header">
            <div className="header__header">
                <div className="header__header__logo">
                    <a href="/"><img src={HeaderLogo} alt="logo"/></a>
                    <h1>Работа в Кыргызстане</h1>
                </div>
                <div className="header__header__about" onClick={scrollToAbout}>
                    <h2>О нас</h2>
                </div>
            </div>
            <div className="header__main">
                <div className="header__search">
                    <input type="search" placeholder={'Введите город, вакансию или отрасль'} onChange={(e) => setValue(e.target.value)}/>
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