import React, {useState, useContext} from 'react';
import {SwiperContext} from "./SwiperVacancy";

interface ISwipercontent{
    more:boolean,
    setMore:(arg:boolean)=>void
}

const SwiperContent:React.FC<ISwipercontent> = ({more,setMore}) => {

    /*const [ more, setMore ] = useContext(SwiperContext)*/


    return (
        <div className={"mySwiper__box"}>
            <div className={"mySwiper__date"}>05.05.2020 / 11 минут назад / Бишкек</div>
            <div className={"mySwiper__title"}>Менеджер по продажам</div>
            <div className={"mySwiper__title"}>30 000 - 35 000 сом</div>
            <div className={"mySwiper__title"}>ТЦ Караван</div>
            {!more && <button className={"mySwiper__buttonMore"} onClick={()=>setMore(true)}>Подробнее</button>}
            {more && <div>
                <div className={"mySwiper__text margin"}>"Жылдыз академиясы" ищет кандидата на должность
                    SMM-специалиста и контент-менеджера. Мы ищем заинтересованных кандидатов в возрасте от 18 до
                    25 лет, имеющих опыт работы в EdTech или интересующихся этой областью.
                </div>
                <div className={"mySwiper__title margin"}>Требования:</div>
                <div className={"mySwiper__text"}>
                    -Знание кыргызского и русского языков, знание английского является преимуществом.<br/>
                    -Опыт работы не менее 1 года.<br/>
                    -Знание стиля визуала и маркетинговых трендов. Обязанности:<br/>
                    -Создание и управление контент<br/>
                    -планом для наших социальных медиа;<br/>
                    -Анализ и отчетность о нашей продукции в социальных медиа;<br/>
                    -Организация контента в социальных медиа и работа с таргетологами,<br/>
                    менеджерами продаж и графическими дизайнерами;<br/>
                    -Написание и редактирование текстов на кыргызском.<br/>
                </div>
                <div className={"mySwiper__title margin"}>Обязанности:</div>
                <div className={"mySwiper__text"}>
                    -Создание и управление контент <br/>
                    -планом для наших социальных медиа;<br/>
                    -Анализ и отчетность о нашей продукции в социальных медиа;<br/>
                    -Организация контента в социальных медиа и работа с таргетологами, менеджерами продаж и графическими дизайнерами;<br/>
                    -Написание и редактирование текстов на кыргызском.<br/>
                </div>
            </div>}
            {more && <button className={"mySwiper__buttonMore"} onClick={()=>setMore(false)}>Свернуть</button>}


        </div>
    );
};

export default SwiperContent;