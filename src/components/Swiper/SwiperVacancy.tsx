import React, {useRef, useState} from "react";
import {createContext} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Mousewheel, Keyboard} from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SwiperVacancy.scss"
import SwiperButtonPrev from "./SwiperButtonPrev";
import SwiperButtonNext from "./SwiperButtonNext";

import prev from "../../assets/icons/prev.svg"
import next from "../../assets/icons/next.svg"
import SwiperContent from "./SwiperContent";
import {useFetchAllVacancyQuery} from "../../sevices/vacanciesServices";

const SwiperContext = createContext(false)
export {SwiperContext}

const SwiperVacancy = () => {
    const [more, setMore] = useState(false)

    const {data: vacancies = [], error, isLoading} =useFetchAllVacancyQuery({})

    const pagination = {
        clickable: true,
        renderBullet: function (index = 1, className = "pagination") {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    return (
        <section className="topVacancy">
            <div className="container">
                <div className="topVacancyTitle">
                    ТОП ВАКАНСИИ
                </div>
                <Swiper pagination={pagination} className="mySwiper"
                        modules={[Pagination, Navigation, Mousewheel, Keyboard]}>

                    {vacancies && vacancies.map((vacancy) =>
                        <SwiperSlide key={vacancy.id} className={"mySwiper__slide"}>
                            <SwiperContent vacancy={vacancy} more={more} setMore={setMore}/>
                        </SwiperSlide>
                    )}

                    <div className={"swiperButtonWrapper"}>
                        <SwiperButtonPrev more={more} setMore={setMore}><img src={prev} alt=""/></SwiperButtonPrev>
                        <SwiperButtonNext more={more} setMore={setMore}><img src={next} alt=""/></SwiperButtonNext>
                    </div>
                </Swiper>
            </div>
        </section>
    );
};

export default SwiperVacancy;