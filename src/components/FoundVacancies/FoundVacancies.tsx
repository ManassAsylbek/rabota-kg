import React, {useEffect, useState} from 'react';


import "./FoundVacancies.scss"

import {createPortal} from "react-dom";
import {useParams} from "react-router-dom";
import {useFetchAllVacancyQuery} from "../../sevices/vacanciesServices";
import ItemVacancies from "./ItemVacancies";
import {useGetRegionQuery} from "../../sevices/regionServices";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {useFetchVacancyCategoryQuery} from "../../sevices/vacancyCategoryServices";
import FilterVacancies from "./FilterVacancies";
import Modal from "../Layout/Modal/Modal";

const FoundVacancies = () => {
    const {search} = useParams()
    const {region, category} = useAppSelector(state => state.searchSlice);
    const {data: vacancy} = useFetchAllVacancyQuery({search: search, vacancy_category: category, region: region})
    const {data: type = [], error, isLoading} = useFetchVacancyCategoryQuery()
    const {data: regions} = useGetRegionQuery()

    const [close, setClose] = useState(false)

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
                    <FilterVacancies modalClose={false}/>
                    {createPortal(
                        <div className="filterModal">
                                <button className="filterButton" onClick={() => {
                                    setClose(true)
                                    document.body.style.overflow = 'hidden';
                                }}>
                                    Фильтр
                                </button>
                                {close &&
                                    <Modal>
                                        <div className="modalContent">
                                            <FilterVacancies modalClose={close}/>
                                            <button className="closeButton" onClick={() => {
                                                document.body.style.overflow = 'auto';
                                                setClose(false)
                                            }
                                            }>✖</button>
                                        </div>
                                    </Modal>
                                }
                        </div>, document.body
                    )}

                    <div className="vacanciesSidebarContent">
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