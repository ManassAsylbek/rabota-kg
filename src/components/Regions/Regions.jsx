import React from 'react';


import "./Regions.scss"

const Regions = () => {
    return (
        <section className="regions">
            <div className="container">
                <div className="regions-title">
                    Регионы
                </div>
                <ul className="regions-items">
                    <li className="region-item">
                        <span className="item-text">
                            Таласская область
                        </span>
                    </li>
                    <li className="region-item">
                        <span className="item-text">
                            Иссык-Кульская область
                        </span>
                    </li>
                    <li className="region-item">
                        <span className="item-text">
                            Бишкек
                        </span>
                    </li>
                    <li className="region-item">
                        <span className="item-text">
                            Ошская область
                        </span>
                    </li>
                    <li className="region-item">
                        <span className="item-text">
                            Нарынская область
                        </span>
                    </li>
                    <li className="region-item">
                        <span className="item-text">
                            Баткенская область
                        </span>
                    </li>
                    <li className="region-item">
                        <span className="item-text">
                            Джалал-Абадская область
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Regions;