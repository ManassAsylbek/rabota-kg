import React from 'react';


import "./VacanciesTypes.scss"
import "../../styles/index.scss"
import {useFetchVacancyCategoryQuery} from "../../sevices/vacancyCategoryServices";
import { useNavigate} from "react-router-dom";

export interface IGetParams {
    category?: string,
    city?: string
}

export const serialize = (params: IGetParams) => {
    return Object.entries(params).reduce((acc, rec, idx) => acc += `${idx > 0 ? '&' : ""}${rec[0]}=${rec[1]}`, "?")
}

const VacanciesTypes = () => {
    const {data: category = [], error, isLoading} = useFetchVacancyCategoryQuery()
    const navigate = useNavigate()


    const handleSubmit = (title: string) => {

        navigate({
            pathname: '/vacancies',
            search: `?category=${title}`
        })
    }


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
                                // <NavLink to={`/vacancies`}>
                                <li className="vacancies-body-list-item" onClick={() => handleSubmit(item.title)} key={item.id}>
                                    <span className="item-text">
                                        <a href="" className="item-link">
                                        {item.title}
                                        </a>
                                    </span>
                                </li>
                                // </NavLink>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default VacanciesTypes;