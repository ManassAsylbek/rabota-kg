import React, {useContext, useEffect, useState} from 'react';
import HeaderLogo from '../../assets/icons/headerlogo.svg';
import './Header.scss';
import './Header-media.scss';
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";

const Header = () => {
    const [searchParams,setSearchParams] = useSearchParams();
    const [value, setValue] = useState(searchParams.get('search') || "")
    let location = useLocation()

    const region = searchParams.get('region') || ""
    const category = searchParams.get('category') || ""
  /*  const debounced = useDebounce(value)*/
    const navigate = useNavigate()

    const onChangeInputValue = (value:string) =>{
        if (location.pathname === "/vacancies") {
            setSearchParams({
                search:value,
                region:region,
                category:category,
            })
        }
        setValue(value)
    }
    const handleSubmit = () => {
        let params = searchParams.toString()
        if (location.pathname === "/vacancies") {
            setSearchParams({
                search:value,
                region:region,
                category:category,
            })
        }

        if (location.pathname !== "/vacancies") {
            navigate({
                pathname: '/vacancies',
                search: `?search=${value}`
            })
        }
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
                    <input type="search" placeholder={'🔍︎'} value={value} onChange={(e) => onChangeInputValue(e.target.value)}/>
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