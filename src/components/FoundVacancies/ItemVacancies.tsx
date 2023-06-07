import React, {FC, useState} from 'react';
import {format, formatDistance, formatRelative, subDays} from 'date-fns'
import {ru} from 'date-fns/locale'

import "./FoundVacancies.scss"

import watchers from "../../assets/icons/blackWhatcher.png";
import companyImg from "../../assets/company.png"
import {useParams} from "react-router-dom";
import {vacancyType} from "../../interfaces";

interface ItemVacancies {
    data: vacancyType
}

const ItemVacancies: FC<ItemVacancies> = ({data}) => {
    const [more, setMore] = useState(false)
    const formattedDate = format(new Date(data.published_at), 'dd.MM.yyyy');
    const distanceDate = formatDistance(new Date(data.published_at), new Date(), {addSuffix: true, locale: ru})


    return (
        <div className="vacanciesBox" key={data.id}>
            <div className="vacancyMainInfo">
                <div className="vacancyInfo">
                    <div className="vacancyDate">{formattedDate} / {distanceDate} / {data.region.title}</div>
                    <div className="vacancyTitle">{data.job_title}</div>
                    <div className="vacancySalary">{data.salary}</div>
                    <div className="vacancyTitle"><span>Компания: </span>{data.company_name.name}</div>
                </div>
                <div className="vacancyImg">
                    <div className="companyImage">
                        <img src={companyImg} alt="фото компании"/>
                    </div>
                </div>
            </div>

            {!more &&
                <div className="vacancyBtnIcons">
                    <button className={"vacancyButtonMore"}
                            onClick={() => setMore(true)}>Подробнее
                    </button>
                    <div className="icons">
                        <button className="watch">
                            <div className="icon">
                                <img src={watchers} alt=""/>
                            </div>
                            <span>20</span>
                        </button>
                    </div>
                </div>
            }
            {more &&
                <>
                    <div className={"vacancyText "}>
                        {data.description}
                    </div>
                    <div className={"vacancyTextTitle"}>Требования:</div>
                    <ul className={"vacancyText"}>
                        <li>
                            {data.requirements}
                        </li>
                    </ul>
                    <div className={"vacancyTextTitle "}>Обязанности:
                        <ul className={"vacancyText"}>
                            <li>
                                {data.responsibilities}
                            </li>
                        </ul>
                    </div>
                </>
            }
            {more &&
                <div className="vacancyBtnIcons">
                    <button className={"vacancyButtonMore"}
                            onClick={() => setMore(false)}>Свернуть
                    </button>
                    <div className="icons">
                        <button className="watch">
                            <div className="icon">
                                <img src={watchers} alt=""/>
                            </div>
                            <span>{data.views_count}</span>
                        </button>
                    </div>
                </div>
            }
        </div>


    );
};

export default ItemVacancies;