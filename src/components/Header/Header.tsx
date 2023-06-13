import React, {useState} from 'react';
import HeaderLogo from '../../assets/icons/headerlogo.svg';
import './Header.scss';
import './Header-media.scss';
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";

const Header = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [value, setValue] = useState(searchParams.get('search') || "")
    const region = searchParams.get('region') || ""
    const category = searchParams.get('category') || ""
    let location = useLocation()

    const navigate = useNavigate()

    const handleSubmit = () => {
        if (location.pathname === "/vacancies") {
            setSearchParams({
                region,
                category,
                search: value,
            });
        }

        if (location.pathname !== "/vacancies") {
            navigate({
                pathname: '/vacancies',
                search: `?search=${value}`,
            });
        }
    };


    const handleSubmitEnter = (event: any) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    }

    function aboutScroll() {
        const targetElement = document.getElementById('AboutUs');
        if (targetElement) {
            targetElement.scrollIntoView({behavior: 'smooth'});
        }
    }


    const whatsAppMessage = "fgsdvdb"

    const whatsAppLink = `https://wa.me/996709180945?text=${whatsAppMessage}`

    return (
        <header className="header">
            <div className="header__header">
                <div className="header__header__logo">
                    <a href="/"><img src={HeaderLogo} alt="logo"/></a>
                    <h1>Работа в Кыргызстане</h1>
                </div>
                <div className="header__header__about">
                    <h2 onClick={aboutScroll}>О нас</h2>
                </div>
            </div>
            <div className="header__main">
                <div className="header__search">
                    <input type="search" placeholder={'Введите вакансию, город или отрасль'} value={value}
                           onChange={(e) => setValue(e.target.value)} onKeyDown={(e) => handleSubmitEnter(e)}/>
                    <button className="header__search__btn" onClick={handleSubmit}>🔍︎</button>
                </div>
                <a className='header__button' href={whatsAppLink}>
                    Подать рекламу
                </a>
            </div>
        </header>
    )
}
export default Header;