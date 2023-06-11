import React, { useEffect, useState } from 'react';

import "./FoundVacancies.scss"

import { useSearchParams } from "react-router-dom";
import { useFetchAllVacancyQuery } from "../../sevices/vacanciesServices";
import ItemVacancies from "./ItemVacancies";
import { useGetRegionQuery } from "../../sevices/regionServices";
import { useFetchVacancyCategoryQuery } from "../../sevices/vacancyCategoryServices";

import FilterVacancies from "./FilterVacancies";
import { createPortal } from "react-dom";
import Modal from "../Layout/Modal/Modal";
import { useDebounce } from "../../hooks/debounce";

const FoundVacancies = () => {
    const [searchParams, serSearchParams] = useSearchParams();
    const search = searchParams.get('search') || ""
    const region = searchParams.get('region') || ""
    const category = searchParams.get('category') || ""
    const debouncedSearch = useDebounce(search)

 

    const {data: vacancy, isFetching,refetch} = useFetchAllVacancyQuery({
        search: debouncedSearch,
        vacancy_category: category,
        region: region
    })
    const { data: type = [] } = useFetchVacancyCategoryQuery()
    const { data: regions } = useGetRegionQuery()

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

                <hr className="titleLine" />

                <div className="vacanciesSidebar">
                    <FilterVacancies modalClose={false} />

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
                                        <FilterVacancies modalClose={close} />
                                        <button className="closeButton" onClick={() => {
                                            document.body.style.overflow = 'auto';
                                            setClose(false)
                                        }
                                        }>✖
                                        </button>
                                    </div>
                                </Modal>
                            }
                        </div>, document.body
                    )}
                    

                    <div className="vacanciesSidebarContent">
                        {
                            isFetching && <div>Загрузка</div>
                        }
                        {
                            vacancy && vacancy.map(item => <ItemVacancies refetch={refetch} key={item.id} data={item}/>)
                        }

                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoundVacancies;