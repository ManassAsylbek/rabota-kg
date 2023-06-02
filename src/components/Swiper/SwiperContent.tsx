import React from 'react';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import {ru} from 'date-fns/locale'


import watchers from "../../assets/icons/whatchers.png"

import like from "../../assets/icons/like.png"
import {vacancyType} from "../../interfaces";


interface ISwiperContent {
    more: boolean,
    setMore: (arg: boolean) => void,
    vacancy:vacancyType
}



const SwiperContent: React.FC<ISwiperContent> = ({vacancy,more, setMore}) => {
    const formattedDate = format(new Date(vacancy.published_at), 'dd.MM.yyyy');
    const distanceDate = formatDistance(new Date(vacancy.published_at), new Date(), { addSuffix: true, locale: ru} )

    return (
        <div className={"mySwiper__box"}>
            <div className={"mySwiper__date"}>{formattedDate}/ {distanceDate} / {vacancy.region.title}</div>
            <div className={"mySwiper__title"}>{vacancy.job_title}</div>
            <div className={"mySwiper__title"}>{vacancy.salary}</div>
            <div className={"mySwiper__title"}>{vacancy.address}</div>

            {!more &&
                <div className="swiperBtnIcons">
                    <button className={"mySwiper__buttonMore"} onClick={() => setMore(true)}>Подробнее</button>
                    <div className="icons">
                        <div className="watch">
                            <div className="icon">
                                <img src={watchers} alt=""/>
                            </div>
                            <span>{vacancy.views_count}</span>
                        </div>

                    </div>
                </div>
            }
            {more &&
                <div>
                    <div className={"mySwiper__text margin"}>{vacancy.description}
                    </div>
                    <div className={"mySwiper__title margin"}>Требования:</div>
                    <ul className={"mySwiper__text"}>
                        {vacancy.requirements}
                    </ul>
                    <div className={"mySwiper__title margin"}>Обязанности:
                        <ul className={"mySwiper__text"}>
                            {vacancy.responsibilities}
                        </ul>
                    </div>
                </div>

            }
            {more &&
                <div className="swiperBtnIcons">
                    <button className={"mySwiper__buttonMore"} onClick={() => setMore(false)}>Свернуть</button>
                    <div className="icons">
                        <div className="watch">
                            <div className="icon">
                                <img src={watchers} alt=""/>
                            </div>
                            <span>{vacancy.views_count}</span>
                        </div>
                        <div className="likes">
                            <div className="icon">
                                <img src={like} alt=""/>
                            </div>
                            <span>20</span>
                        </div>
                    </div>
                </div>
            }
        </div>

    );
};

export default SwiperContent;