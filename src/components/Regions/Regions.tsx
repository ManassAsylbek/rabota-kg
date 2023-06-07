import React from 'react';


import "./Regions.scss"
import {NavLink, useNavigate} from "react-router-dom";
import {useGetRegionQuery} from "../../sevices/regionServices";
import {useAppDispatch} from "../../hooks/redux";
import {addCategory, addRegion} from "../../store/searchSlice";
import {serialize} from "../VacanciesTypes/VacanciesTypes";

const Regions = () => {
    const dispatch = useAppDispatch();
    const {data:regions} = useGetRegionQuery()
    const navigate = useNavigate()



    const setRegion = (region:string) => {
        let params = {
            city: region
        }
        let s = serialize(params)
        dispatch(addRegion(region));
        navigate(`/vacancies`+ s)

    };

    return (
        <section className="regions">
            <div className="container">
                <div className="regions-title">
                    Регионы
                </div>

                <ul className="regions-items">

                    {
                        regions && regions.map(item =>
                            <li className="region-item" onClick={()=>setRegion(item.title.region)}>
                                 <span className="item-text">
                                  {item.title.region}
                                 </span>
                            </li>
                        )
                    }
                </ul>
            </div>
        </section>
    );
};

export default Regions;