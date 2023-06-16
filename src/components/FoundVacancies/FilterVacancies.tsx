import React, {FC, useState} from 'react';
import { useSearchParams} from "react-router-dom";
import {useFetchAllVacancyQuery} from "../../sevices/vacanciesServices";
import {useFetchVacancyCategoryQuery} from "../../sevices/vacancyCategoryServices";
import {useGetRegionQuery} from "../../sevices/regionServices";
import check from "../../assets/icons/check.svg"


interface IFilterVacancies {
    modalClose: boolean
}

const FilterVacancies: FC<IFilterVacancies> = ({modalClose}) => {

    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('search') || ""
    const region = searchParams.get('region') || ""
    const category = searchParams.get('category') || ""
    const age = searchParams.get('age') || ""


    const {data: vacancy} = useFetchAllVacancyQuery({search: search, vacancy_category: category, region: region})
    const {data: type = []} = useFetchVacancyCategoryQuery()
    const {data: regions} = useGetRegionQuery()


    const [regionShow, setRegionShow] = useState(modalClose)
    const [typeShow, setTypeShow] = useState(modalClose)
    const [beforeEighteen, setBeforeEighteen] = useState(!!age)
    const [afterEighteen, setAfterEighteen] = useState(false)

    const getAge = () => {
        setBeforeEighteen(!beforeEighteen)
        const newSearchParams = {
            search,
            region,
            category,
            ...("true" !== age && { age: "true" }),
        };
        setSearchParams(newSearchParams);

    }
    const getRegion = (params: string) => {
        const newSearchParams = {
            search,
            ...(params !== region && { region: params }),
            category,
            age
        };

        setSearchParams(newSearchParams);
    };

    const getCategory = (params: string) => {
        const newSearchParams = {
            search,
            region,
            age,
            ...(params !== category && { category: params })
        };

        setSearchParams(newSearchParams);
    };

    return (
        <div className="vacanciesSidebarFilter">
            {modalClose &&
                <div className="vacanciesSidebarFilterTitle">
                    Фильтрация
                </div>
            }
            <div className="filter">
                <div className="filterTitle">
                    Возраст
                </div>
                <label className="control control-checkbox"
                       onClick={getAge}>
                    <div className={beforeEighteen
                        ? "control-checkbox__check "
                        : "control-checkbox__check__before"}
                    >
                        {beforeEighteen
                            ? <img src={check} alt=""/>
                            : ""
                        }
                    </div>
                    18+
                </label>

            </div>
            <div className="filter">
                <div className="filterTitle" onClick={() => setRegionShow(!regionShow)}>
                    Регион
                </div>
                {!regionShow && region && <label className="control control-checkbox"
                                                 onClick={() => setSearchParams({
                                                     search: search,
                                                     category: category,
                                                     age:age

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
                {!typeShow && category &&
                    <label className="control control-checkbox"
                           onClick={() => setSearchParams({
                               search: search,
                               region: region,
                               age:age

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
    );
};

export default FilterVacancies;