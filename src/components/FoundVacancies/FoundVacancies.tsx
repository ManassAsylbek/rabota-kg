import React, {useEffect, useState} from 'react';


import "./FoundVacancies.scss"

import {NavLink, useParams, useSearchParams} from "react-router-dom";
import {useFetchAllVacancyQuery} from "../../sevices/vacanciesServices";
import ItemVacancies from "./ItemVacancies";
import {useGetRegionQuery} from "../../sevices/regionServices";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {useFetchVacancyCategoryQuery} from "../../sevices/vacancyCategoryServices";
import {IVacancyParams} from "../../interfaces";

const FoundVacancies = () => {
    const [searchParams, serSearchParams] = useSearchParams();
    const search = searchParams.get('search') || ""
    const region = searchParams.get('region') || ""
    const category = searchParams.get('category') || ""


    const [windowOpenFilter, setWindowOpenFilter] = useState(false)

    const dispatch = useAppDispatch();
    const {data: vacancy} = useFetchAllVacancyQuery({search: search, vacancy_category: category, region: region})
    const {data: type = []} = useFetchVacancyCategoryQuery()
    const {data: regions} = useGetRegionQuery()

    const [regionShow, setRegionShow] = useState(false)
    const [typeShow, setTypeShow] = useState(false)

    const getRegion = (params: string) => {
        if (params !== region)
            serSearchParams({
                search: search,
                region: params,
                category: category,

            })
        else serSearchParams({
            search: search,
            category: category
        })
    }
    const getCategory = (params: string) => {
        if (params !== category)
            serSearchParams({
                search: search,
                region: region,
                category: params,

            })
        else serSearchParams({
            search: search,
            region: region,

        })
    }


    useEffect(() => {
        const targetElement = document.getElementById('vacanciesScroll');
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            });
        }
    }, []);

    return (
        <section className="foundVacancies" id="vacanciesScroll">
            <div className="container">
                <div className="foundVacanciesTitle">
                    Найдено {vacancy ? vacancy.length : "0"} вакансии
                </div>

                <hr className="titleLine"/>

                <div className="vacanciesSidebar">
                    <div className="vacanciesSidebarFilter">
                        {windowOpenFilter ? "Фильтр" : ""}
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
                                       onClick={() => serSearchParams({
                                           search: search,
                                           category: category,

                                       })}
                                       checked={region !== ""}/>
                                <div className="control_indicator"></div>
                            </label>}

                            {
                                regionShow && regions && regions.map(item =>
                                    <label className="control control-checkbox"
                                    >
                                        {item.title.region}
                                        <input type="checkbox"
                                               onClick={() => getRegion(item.title.region)}
                                               checked={item.title.region === region}
                                        />
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
                                       onClick={() => serSearchParams({
                                           search: search,
                                           region: region,

                                       })}
                                       checked={category !== ""}/>
                                <div className="control_indicator"></div>
                            </label>}

                            {
                                typeShow && type && type.map(item =>
                                    <label className="control control-checkbox"
                                    >
                                        {item.title}
                                        <input type="checkbox"
                                               onClick={() => getCategory(item.title)}
                                               checked={item.title === category}
                                        />
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