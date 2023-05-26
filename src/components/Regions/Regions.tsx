import React from 'react';


import "./Regions.scss"
import {NavLink} from "react-router-dom";
import {useGetRegionQuery} from "../../sevices/regionServices";
import {useAppDispatch} from "../../hooks/redux";
import {addRegion} from "../../store/searchSlice";

const Regions = () => {
    const dispatch = useAppDispatch();
    const {data:regions} = useGetRegionQuery()

    const setRegion = (region:string) => {
        dispatch(addRegion(region));
    };

    return (
        <section className="regions">
            <div className="container">
                <div className="regions-title">
                    Регионы
                </div>

                <ul className="regions-items">

                    {
                        regions && regions.map(item => <NavLink to={`/vacancies`}>
                            <li className="region-item" onClick={()=>setRegion(item.title.region)}>
                                 <span className="item-text">
                                  {item.title.region}
                                 </span>
                            </li>
                        </NavLink>)
                    }
                </ul>
            </div>
        </section>
    );
};

export default Regions;