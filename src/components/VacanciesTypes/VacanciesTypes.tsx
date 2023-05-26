import React from 'react';


import "./VacanciesTypes.scss"
import "../../styles/index.scss"
import {useFetchVacancyCategoryQuery} from "../../sevices/vacancyCategoryServices";

const VacanciesTypes = () => {
    const {data: category = [], error, isLoading} = useFetchVacancyCategoryQuery()

    return (
        <section className="vacancies">
            <div className="container">
                <div className="vacancies-body">
                    <div className="vacancies-body-title">
                        Виды вакансии Бишкек
                    </div>
                    <ul className="vacancies-body-list">
                        {
                            category && category.map(item => (
                                <li className="vacancies-body-list-item">
                                    <span className="item-text">
                                        <a href="" className="item-link">
                                        {item.title}
                                        </a>
                                    </span>
                                </li>
                            ))
                        }
                        {/*<li className="vacancies-body-list-item">
                            <span className="item-text">
                                <a href="" className="item-link">
                                    Продажи, обслуживание клиентов
                                </a>
                            </span>
                        </li>
                        <li className="vacancies-body-list-item">
                            <span className="item-text">
                                <a href="" className="item-link">
                                    Маркетинг, реклама, PR
                                </a>
                            </span>
                        </li>
                        <li className="vacancies-body-list-item">
                            <span className="item-text">
                                <a href="" className="item-link">
                                    Медицина, фармацевтика

                                </a>
                            </span>
                        </li>
                        <li className="vacancies-body-list-item">
                            <span className="item-text">
                                <a href="" className="item-link">
                                    Наука, образование
                                </a>
                            </span>
                        </li>
                        <li className="vacancies-body-list-item">
                            <span className="item-text">
                                <a href="" className="item-link">
                                    Производство, сервисное обслуживание

                                </a>
                            </span>
                        </li>
                        <li className="vacancies-body-list-item">
                            <span className="item-text">
                                <a href="" className="item-link">
                                    Розничная торговля

                                </a>
                            </span>
                        </li>
                        <li className="vacancies-body-list-item">
                            <span className="item-text">
                                <a href="" className="item-link">
                                    Строительство, недвижимость
                                </a>
                            </span>
                        </li>
                        <li className="vacancies-body-list-item">
                            <span className="item-text">
                                <a href="" className="item-link">
                                    Сельское хозяйство
                                </a>
                            </span>
                        </li>
                        <li className="vacancies-body-list-item">
                            <span className="item-text">
                                <a href="" className="item-link">
                                    Спортивные клубы, фитнес, салоны красоты
                                </a>
                            </span>
                        </li>
                        <li className="vacancies-body-list-item">
                            <span className="item-text">
                                <a href="" className="item-link">
                                    Стратегия, инвестиции, консалтинг
                                </a>
                            </span>
                        </li>
                        <li className="vacancies-body-list-item">
                            <span className="item-text">
                                <a href="" className="item-link">
                                    Страхование
                                </a>
                            </span>
                        </li>*/}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default VacanciesTypes;