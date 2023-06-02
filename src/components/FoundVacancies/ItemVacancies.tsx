import React, {FC, useState} from 'react';


import "./FoundVacancies.scss"

import watchers from "../../assets/icons/blackWhatcher.png";
import like from "../../assets/icons/blackLike.png";
import companyImg from "../../assets/company.png"
import {useParams} from "react-router-dom";
import {useFetchAllVacancyQuery} from "../../sevices/vacanciesServices";
import {vacancyType} from "../../interfaces";

interface ItemVacancies{
    data:vacancyType
}

const ItemVacancies:FC<ItemVacancies> = ({data}) => {
    const [more, setMore] = useState(false)


    return (
        <div className="vacanciesBox">
            <div className="vacancyMainInfo">
                <div className="vacancyInfo">
                    <div className="vacancyDate">05.05.2020 / 11 минут назад / Бишкек</div>
                    <div className="vacancyTitle">{data.job_title}</div>
                    <div className="vacancySalary">30 000 - 35 000 сом</div>
                    <div className="vacancyTitle"><span>Компания: </span>ТЦ Караван</div>
                </div>
                <div className="vacancyImg">
                    <div className="companyImage">
                        <img src={companyImg} alt="фото компании"/>
                    </div>
                </div>
            </div>

            {!more &&
                <div className="vacancyBtnIcons">
                    <button className={"vacancyButtonMore"}
                            onClick={() => setMore(true)}>Подробнее
                    </button>
                    <div className="icons">
                        <button className="watch">
                            <div className="icon">
                                <img src={watchers} alt=""/>
                            </div>
                            <span>20</span>
                        </button>
                    </div>
                </div>
            }
            {more &&
                <div>
                    <div className={"vacancyText "}>"Жылдыз академиясы" ищет кандидата на должность
                        SMM-специалиста и контент-менеджера. Мы ищем заинтересованных кандидатов в
                        возрасте от 18 до
                        25 лет, имеющих опыт работы в EdTech или интересующихся этой областью.
                    </div>
                    <div className={"vacancyTextTitle"}>Требования:</div>
                    <ul className={"vacancyText"}>
                        <li>- Знание кыргызского и русского языков, знание английского является
                            преимуществом.
                        </li>
                        <li>- Опыт работы не менее 1 года.</li>
                        <li>- Знание стиля визуалa и маркетинговых трендов. Обязанности:</li>
                        <li>- Создание и управление контент
                            планом для наших социальных медиа;
                        </li>
                        <li>- Анализ и отчетность о нашей продукции в социальных медиа;</li>
                        <li>- Организация контента в социальных медиа и работа с таргетологами,
                            менеджерами продаж и графическими дизайнерами;
                        </li>
                        <li>- Написание и редактирование текстов на кыргызском.</li>
                    </ul>
                    <div className={"vacancyTextTitle "}>Обязанности:
                        <ul className={"vacancyText"}>
                            <li>- Создание и управление контент
                                планом для наших социальных медиа
                            </li>
                            <li>- Анализ и отчетность о нашей продукции в социальных медиа</li>
                            <li>- Организация контента в социальных медиа и работа с таргетологами,
                                менеджерами продаж и
                                графическими дизайнерами;
                            </li>
                            <li>- Написание и редактирование текстов на кыргызском</li>
                        </ul>
                    </div>
                </div>

            }
            {more &&
                <div className="vacancyBtnIcons">
                    <button className={"vacancyButtonMore"}
                            onClick={() => setMore(false)}>Свернуть
                    </button>
                    <div className="icons">
                        <button className="watch">
                            <div className="icon">
                                <img src={watchers} alt=""/>
                            </div>
                            <span>20</span>
                        </button>
                    </div>
                </div>
            }
        </div>


    );
};

export default ItemVacancies;