import React, {useState} from 'react';


import "./FoundVacancies.scss"

import {NavLink, useParams} from "react-router-dom";
import {useFetchAllVacancyQuery} from "../../sevices/vacanciesServices";
import ItemVacancies from "./ItemVacancies";
import {useGetRegionQuery} from "../../sevices/regionServices";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {addCategory, addRegion} from "../../store/searchSlice";

const FoundVacancies = () => {
    const {search} = useParams()
    const dispatch = useAppDispatch();
    const {region, category} = useAppSelector(state => state.searchSlice);
    const {data: vacancy} = useFetchAllVacancyQuery({search: search, vacancy_category: category, region: region})
    const {data: regions} = useGetRegionQuery()


    return (
        <section className="foundVacancies">
            <div className="container">
                <div className="foundVacanciesTitle">
                    Найдено {vacancy ? vacancy.length : "0"} вакансии
                </div>

                <hr className="titleLine"/>

                <div className="vacanciesSidebar">
                    <div className="vacanciesSidebarFilter">
                        <div className="filter">
                            <div className="filterTitle">
                                Возраст
                            </div>
                            <label className="control control-checkbox">
                                До 18-ти
                                <input type="checkbox"/>
                                <div className="control_indicator"></div>
                            </label>
                            <label className="control control-checkbox">
                                После 18ти
                                <input type="checkbox"/>
                                <div className="control_indicator"></div>
                            </label>
                        </div>
                        <div className="filter">
                            <div className="filterTitle">
                                Регион
                            </div>


                            {
                                regions && regions.map(item =>
                                    <label className="control control-checkbox"
                                           onClick={() => dispatch(addRegion(item.title.region))}>
                                        {item.title.region}
                                        <input type="checkbox"
                                               checked={item.title.region === region}
                                               defaultValue={item.title.region}/>
                                        <div className="control_indicator"></div>
                                    </label>
                                )
                            }

                        </div>
                    </div>

                    <div className="vacanciesSidebarContent">
                        {category && <div><span>{category}</span>
                            <button className="header__button" onClick={() => dispatch(addCategory(""))}>delete</button>
                        </div>}
                        {
                            vacancy && vacancy.map(item => <ItemVacancies data={item}/>)
                        }

                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoundVacancies;