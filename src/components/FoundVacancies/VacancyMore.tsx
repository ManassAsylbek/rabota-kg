import React, {FC} from 'react';
import "./FoundVacancies.scss"
import {vacancyType} from "../../interfaces";

import {useFetchVacancyQuery} from "../../sevices/vacanciesServices";
import watchers from "../../assets/icons/blackWhatcher.png";

interface IVacancyMore {
    data: vacancyType
    setMore: (arg: boolean) => void
    refetch: () => void
}

const VacancyMore: FC<IVacancyMore> = ({data, setMore, refetch}) => {

    const {data: vacancy} = useFetchVacancyQuery(data.id)
    const collapse = () => {
        refetch()
        setMore(false)
    }
    return (
        <>
            <div className={"vacancyText "}>
                {data.description}
            </div>
            <div className={"vacancyTextTitle"}>Требования:</div>
            <ul className={"vacancyText"}>
                {data.requirements.split('\r\n').map((item, idx) => (
                    <li key={idx}>-{item}</li>
                ))}
            </ul>
            <div className={"vacancyTextTitle "}>Обязанности:
                <ul className={"vacancyText"}>
                    {data.responsibilities.split('\r\n').map((item, idx) => (
                        <li key={idx}>-{item}</li>
                    ))}
                </ul>
            </div>
            <div className={"vacancyTextTitle "}>Контакты:
                <a href={`tel: ${data.contact}`} style={{marginLeft: '10px'}}><b>{data.contact}</b></a>
            </div>
            <div className="vacancyBtnIcons">
                <button className={"vacancyButtonMore"}
                        onClick={collapse}>Свернуть
                </button>
                <div className="icons">
                    <button className="watch">
                        <div className="icon">
                            <img src={watchers} alt=""/>
                        </div>
                        <span>{vacancy && vacancy.views_count}</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default VacancyMore;