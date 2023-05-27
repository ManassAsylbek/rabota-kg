import React, {useState} from 'react';


import "./FoundVacancies.scss"

import {NavLink, useParams} from "react-router-dom";
import {useFetchAllVacancyQuery} from "../../sevices/vacanciesServices";
import ItemVacancies from "./ItemVacancies";
import {useGetRegionQuery} from "../../sevices/regionServices";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {addCategory, addRegion} from "../../store/searchSlice";
import {useFetchVacancyCategoryQuery} from "../../sevices/vacancyCategoryServices";

const FoundVacancies = () => {
    const {search} = useParams()
    const dispatch = useAppDispatch();
    const {region, category} = useAppSelector(state => state.searchSlice);
    const {data: vacancy} = useFetchAllVacancyQuery({search: search, vacancy_category: category, region: region})
    const {data: type = [], error, isLoading} = useFetchVacancyCategoryQuery()
    const {data: regions} = useGetRegionQuery()

    const [regionShow, setRegionShow] = useState(false)
    const [typeShow, setTypeShow] = useState(false)


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
                            <div className="filterTitle" onClick={() => setRegionShow(!regionShow)}>
                                Регион
                            </div>
                            {!regionShow && region && <label className="control control-checkbox"
                            >
                                {region}
                                <input type="checkbox"
                                       onClick={() => dispatch(addRegion(region))}
                                       checked={region !== ""}
                                       defaultValue={region}/>
                                <div className="control_indicator"></div>
                            </label>}

                            {
                                regionShow && regions && regions.map(item =>
                                    <label className="control control-checkbox"
                                    >
                                        {item.title.region}
                                        <input type="checkbox"
                                               onClick={() => dispatch(addRegion(item.title.region))}
                                               checked={item.title.region === region}
                                               defaultValue={item.title.region}/>
                                        <div className="control_indicator"></div>
                                    </label>
                                )
                            }

                        </div>
                        <div className="filter">
                            <div className="filterTitle" onClick={() => setTypeShow(!typeShow)}>
                                Отрасли
                            </div>
                            {!typeShow && category && <label className="control control-checkbox"
                            >
                                {category}
                                <input type="checkbox"
                                       onClick={() => dispatch(addRegion(category))}
                                       checked={category !== ""}
                                       defaultValue={category}/>
                                <div className="control_indicator"></div>
                            </label>}

                            {
                                typeShow && type && type.map(item =>
                                    <label className="control control-checkbox"
                                    >
                                        {item.title}
                                        <input type="checkbox"
                                               onClick={() => dispatch(addCategory(item.title))}
                                               checked={item.title === category}
                                               defaultValue={item.title}/>
                                        <div className="control_indicator"></div>
                                    </label>
                                )
                            }

                        </div>
                    </div>

                    <div className="vacanciesSidebarContent">
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