import React, {FC, useEffect, useState} from 'react';
import {format, formatDistance, formatRelative, subDays} from 'date-fns'
import {ru} from 'date-fns/locale'

import "./FoundVacancies.scss"

import watchers from "../../assets/icons/blackWhatcher.png";
import companyImg from "../../assets/company.png"
import {vacancyType} from "../../interfaces";
import VacancyMore from "./VacancyMore";

interface ItemVacancies {
    data: vacancyType,
    refetch: () => void;

}

const ItemVacancies: FC<ItemVacancies> = ({data,refetch}) => {
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
                            <span>{data.views_count}</span>
                        </button>
                    </div>
                </div>
            }
            {more && <VacancyMore refetch={refetch} data={data} setMore={setMore} />}
        </div>
    );
};

export default ItemVacancies;