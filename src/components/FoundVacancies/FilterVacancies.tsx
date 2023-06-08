import React, {FC, useState} from 'react';
import {addCategory, addRegion} from "../../store/searchSlice";
import {useParams, useSearchParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {useFetchAllVacancyQuery} from "../../sevices/vacanciesServices";
import {useFetchVacancyCategoryQuery} from "../../sevices/vacancyCategoryServices";
import {useGetRegionQuery} from "../../sevices/regionServices";


interface IFilterVacancies{
    modalClose: boolean
}

const FilterVacancies: FC<IFilterVacancies> = ({modalClose}) => {

    const [windowOpenFilter, setWindowOpenFilter] = useState(false)

    // const {search} = useParams()
    // const dispatch = useAppDispatch();
    // const {region, category} = useAppSelector(state => state.searchSlice);
    // const {data: vacancy} = useFetchAllVacancyQuery({search: search, vacancy_category: category, region: region})
    // const {data: type = [], error, isLoading} = useFetchVacancyCategoryQuery()
    // const {data: regions} = useGetRegionQuery()


    const [searchParams, serSearchParams] = useSearchParams();
    const search = searchParams.get('search') || ""
    const region = searchParams.get('region') || ""
    const category = searchParams.get('category') || ""


    const dispatch = useAppDispatch();
    const {data: vacancy} = useFetchAllVacancyQuery({search: search, vacancy_category: category, region: region})
    const {data: type = []} = useFetchVacancyCategoryQuery()
    const {data: regions} = useGetRegionQuery()


    const [regionShow, setRegionShow] = useState(modalClose)
    const [typeShow, setTypeShow] = useState(modalClose)

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
                    <input  type="radio" name="radio"
                            onClick={() => serSearchParams({
                                search: search,
                                category: category,

                            })}
                           defaultChecked={region !== "" || false}
                    />
                    <div className="control_indicator"></div>
                </label>}

                {
                    regionShow  && regions && regions.map((item, index) =>
                        <label className="control control-checkbox" key={index}
                        >
                            {item.title.region}
                                <input type="radio" name="radio"
                                       defaultChecked={item.title.region === region || false}
                                       onClick={() => getRegion(item.title.region)}
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
                {!typeShow  && category && <label className="control control-checkbox"
                >
                    {category}
                    <input  type="radio" name="radio"
                            onClick={() => serSearchParams({
                                search: search,
                                region: region,

                            })}
                           defaultChecked={category !== ""}
                    />
                    <div className="control_indicator"></div>
                </label>}

                {
                    typeShow && type && type.map((item, index) =>
                        <label className="control control-checkbox" key={index}
                        >
                            {item.title}
                            <input  type="radio" name="radio"
                                   onClick={() => getCategory(item.title)}
                                   defaultChecked={item.title === category}
                            />
                            <div className="control_indicator"></div>
                        </label>
                    )
                }
            </div>
        </div>
    );
};

export default FilterVacancies;