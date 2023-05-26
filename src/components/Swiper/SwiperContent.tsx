import React, {useState, useContext} from 'react';
import {SwiperContext} from "./SwiperVacancy";

import watchers from "../../assets/icons/whatchers.png"
import like from "../../assets/icons/like.png"


interface ISwipercontent {
    more: boolean,
    setMore: (arg: boolean) => void
}

const SwiperContent: React.FC<ISwipercontent> = ({more, setMore}) => {

    return (
        <div className={"mySwiper__box"}>
            <div className={"mySwiper__date"}>05.05.2020 / 11 минут назад / Бишкек</div>
            <div className={"mySwiper__title"}>Менеджер по продажам</div>
            <div className={"mySwiper__title"}>30 000 - 35 000 сом</div>
            <div className={"mySwiper__title"}>ТЦ Караван</div>

            {!more &&
                <div className="swiperBtnIcons">
                    <button className={"mySwiper__buttonMore"} onClick={() => setMore(true)}>Подробнее</button>
                    <div className="icons">
                        <div className="watch">
                            <div className="icon">
                                <img src={watchers} alt=""/>
                            </div>
                            <span>20</span>
                        </div>
                        <div className="likes">
                            <div className="icon">
                                <img src={like} alt=""/>
                            </div>
                            <span>20</span>
                        </div>
                    </div>
                </div>
            }
            {more &&
                <div>
                    <div className={"mySwiper__text margin"}>"Жылдыз академиясы" ищет кандидата на должность
                        SMM-специалиста и контент-менеджера. Мы ищем заинтересованных кандидатов в возрасте от 18 до
                        25 лет, имеющих опыт работы в EdTech или интересующихся этой областью.
                    </div>
                    <div className={"mySwiper__title margin"}>Требования:</div>
                    <ul className={"mySwiper__text"}>
                        <li>Знание кыргызского и русского языков, знание английского является преимуществом.</li>
                        <li>Опыт работы не менее 1 года.</li>
                        <li>Знание стиля визуала и маркетинговых трендов. Обязанности:</li>
                        <li>Создание и управление контент</li>
                        <li>планом для наших социальных медиа;</li>
                        <li>Анализ и отчетность о нашей продукции в социальных медиа;</li>
                        <li>Организация контента в социальных медиа и работа с таргетологами,
                            менеджерами продаж и графическими дизайнерами;
                        </li>
                        <li>Написание и редактирование текстов на кыргызском.</li>
                    </ul>
                    <div className={"mySwiper__title margin"}>Обязанности:
                        <ul className={"mySwiper__text"}>
                            <li>Создание и управление контент</li>
                            <li>планом для наших социальных медиа</li>
                            <li>Анализ и отчетность о нашей продукции в социальных медиа</li>
                            <li>Организация контента в социальных медиа и работа с таргетологами, менеджерами продаж и
                                графическими дизайнерами;
                            </li>
                            <li>Написание и редактирование текстов на кыргызском</li>
                        </ul>
                    </div>
                </div>

            }
            {more &&
                <div className="swiperBtnIcons">
                    <button className={"mySwiper__buttonMore"} onClick={() => setMore(false)}>Свернуть</button>
                    <div className="icons">
                        <div className="watch">
                            <div className="icon">
                                <img src={watchers} alt=""/>
                            </div>
                            <span>20</span>
                        </div>
                        <div className="likes">
                            <div className="icon">
                                <img src={like} alt=""/>
                            </div>
                            <span>20</span>
                        </div>
                    </div>
                </div>
            }
        </div>

    );
};

export default SwiperContent;