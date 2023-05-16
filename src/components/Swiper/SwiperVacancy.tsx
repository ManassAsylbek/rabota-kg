import React, {useRef, useState} from "react";

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

const SwiperVacancy = () => {
    return (
        <div>
            <Swiper pagination={true} className="mySwiper"
                    modules={[Pagination, Navigation, Mousewheel, Keyboard]}>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
                <div className={"swiperButton" +
                    ""}>
                    <SwiperButtonPrev><img src={prev} alt=""/></SwiperButtonPrev>
                    <SwiperButtonNext><img src={next} alt=""/></SwiperButtonNext>
                </div>
            </Swiper>
        </div>
    );
};

export default SwiperVacancy;