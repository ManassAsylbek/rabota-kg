import React from 'react';


import "./VacanciesTypes.scss"
import "../../styles/index.scss"
import {useFetchVacancyCategoryQuery} from "../../sevices/vacancyCategoryServices";
import {NavLink} from "react-router-dom";
import {useAppDispatch} from "../../hooks/redux";
import {addCategory} from "../../store/searchSlice";

const VacanciesTypes = () => {
    const dispatch = useAppDispatch();
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
                                <NavLink to={`/vacancies/`} onClick={()=> dispatch(addCategory(item.title))}>
                                    <li className="vacancies-body-list-item">
                                    <span className="item-text">
                                        <a href="" className="item-link">
                                        {item.title}
                                        </a>
                                    </span>
                                    </li>
                                </NavLink>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default VacanciesTypes;