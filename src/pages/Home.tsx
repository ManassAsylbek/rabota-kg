import React from 'react';
import SwiperVacancy from "../components/Swiper/SwiperVacancy";
import VacanciesTypes from "../components/VacanciesTypes/VacanciesTypes";
import Regions from "../components/Regions/Regions";

const Home = () => {
    return (
        <div>
            <SwiperVacancy/>
            <VacanciesTypes/>
            <Regions/>
        </div>
    );
};

export default Home;