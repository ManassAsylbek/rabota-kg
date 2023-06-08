import React, {useEffect, useState} from 'react';

import "./FoundVacancies.scss"

import {useSearchParams} from "react-router-dom";
import {useFetchAllVacancyQuery} from "../../sevices/vacanciesServices";
import ItemVacancies from "./ItemVacancies";
import {useGetRegionQuery} from "../../sevices/regionServices";
import {useFetchVacancyCategoryQuery} from "../../sevices/vacancyCategoryServices";
import {useDebounce} from "../../hooks/debounce";
import check from "../../assets/icons/check.svg"

const FoundVacancies = () => {
    const [searchParams, serSearchParams] = useSearchParams();
    const search = searchParams.get('search') || ""
    const region = searchParams.get('region') || ""
    const category = searchParams.get('category') || ""
    const debouncedSearch = useDebounce(search)

    const [windowOpenFilter, setWindowOpenFilter] = useState(false)

    const {data: vacancy, isFetching} = useFetchAllVacancyQuery({
        search: debouncedSearch,
        vacancy_category: category,
        region: region
    })
    const {data: type = []} = useFetchVacancyCategoryQuery()
    const {data: regions} = useGetRegionQuery()

    const [regionShow, setRegionShow] = useState(false)
    const [typeShow, setTypeShow] = useState(false)
    const [beforeEighteen, setBeforeEighteen] = useState(false)
    const [afterEighteen, setAfterEighteen] = useState(false)

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
                            <label className="control control-checkbox"
                                   onClick={() => setBeforeEighteen(!beforeEighteen)}>
                                <div className={beforeEighteen
                                    ? "control-checkbox__check "
                                    : "control-checkbox__check__before"}
                                >
                                    {beforeEighteen
                                        ? <img src={check} alt=""/>
                                        : ""
                                    }

                                </div>
                                До 18-ти

                            </label>
                            <label className="control control-checkbox"
                                   onClick={() => setAfterEighteen(!afterEighteen)}>
                                <div className={afterEighteen
                                    ? "control-checkbox__check "
                                    : "control-checkbox__check__before"}
                                >
                                    {afterEighteen
                                        ? <img src={check} alt=""/>
                                        : ""
                                    }

                                </div>
                                После 18ти
                            </label>
                           {/* <label className="control control-checkbox">
                                До 18-ти
                                <input type="checkbox"/>
                                <div className="control_indicator"></div>
                            </label>*/}
                        </div>
                        <div className="filter">
                            <div className="filterTitle" onClick={() => setRegionShow(!regionShow)}>
                                Регион
                            </div>
                            {!regionShow && region && <label className="control control-checkbox"
                                                             onClick={() => serSearchParams({
                                                                 search: search,
                                                                 category: category,

                                                             })}
                            >
                                <div className={"control-checkbox__check"}
                                >
                                    {
                                        <img src={check} alt=""/>
                                    }

                                </div>
                                {region}
                            </label>}

                            {
                                regionShow && regions && regions.map(item =>
                                    <label className="control control-checkbox" key={item.title.region}
                                           onClick={() => getRegion(item.title.region)}
                                    >
                                        <div className={item.title.region === region
                                            ? "control-checkbox__check "
                                            : "control-checkbox__check__before"}
                                        >
                                            {
                                                item.title.region === region
                                                    ? <img src={check} alt=""/>
                                                    : ""
                                            }

                                        </div>
                                        {item.title.region}
                                    </label>
                                )
                            }

                        </div>
                        <div className="filter">
                            <div className="filterTitle" onClick={() => setTypeShow(!typeShow)}>
                                Отрасли
                            </div>
                            {!typeShow && category && <label className="control control-checkbox"
                                                             onClick={() => serSearchParams({
                                                                 search: search,
                                                                 region: region,

                                                             })}>
                                <div className={"control-checkbox__check"}
                                >
                                    {
                                        <img src={check} alt=""/>
                                    }
                                </div>
                                {category}
                            </label>}

                            {
                                typeShow && type && type.map(item =>
                                    <label className="control control-checkbox" key={item.title}
                                           onClick={() => getCategory(item.title)}
                                    >
                                        <div className={item.title === category
                                            ? "control-checkbox__check "
                                            : "control-checkbox__check__before"}
                                        >
                                            {
                                                item.title === category
                                                    ? <img src={check} alt=""/>
                                                    : ""
                                            }

                                        </div>
                                        {item.title}
                                    </label>
                                )
                            }
                        </div>
                    </div>

                    <div className="vacanciesSidebarContent">
                        {
                            isFetching && <div>Загрузка</div>
                        }
                        {
                            vacancy && vacancy.map(item => <ItemVacancies key={item.id} data={item}/>)
                        }

                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoundVacancies;