import React from 'react';


import "./Regions.scss"
import {createSearchParams, NavLink, useNavigate} from "react-router-dom";
import {useGetRegionQuery} from "../../sevices/regionServices";
import {useAppDispatch} from "../../hooks/redux";
import {addRegion} from "../../store/searchSlice";


const Regions = () => {
    const dispatch = useAppDispatch();
    const {data: regions} = useGetRegionQuery()
    const navigate = useNavigate()


    const setRegion = (region: string) => {
        let params = {
            city: region
        }
        dispatch(addRegion(region));
        navigate({
            pathname: '/vacancies',
            search: `?${createSearchParams(params)}`
        })

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
                            <li className="region-item" onClick={() => setRegion(item.title.region)}>
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