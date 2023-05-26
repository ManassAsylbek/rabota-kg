import React from 'react';
import SwiperVacancy from "../components/Swiper/SwiperVacancy";
import VacanciesTypes from "../components/VacanciesTypes/VacanciesTypes";
import Regions from "../components/Regions/Regions";

const Home = () => {
    return (
        <>
            <SwiperVacancy/>
            <VacanciesTypes/>
            <Regions/>
        </>
    );
};

export default Home;