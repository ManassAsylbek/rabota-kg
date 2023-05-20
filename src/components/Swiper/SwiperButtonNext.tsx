import {useContext} from "react";
import {useSwiper} from "swiper/react";
import {FC, ReactNode} from "react";
import {SwiperContext} from "./SwiperVacancy";

interface ISwiperButtonNext {
    children: ReactNode;
    more:boolean,
    setMore:(arg:boolean)=>void
}

const SwiperButtonNext: FC<ISwiperButtonNext> = ({children,setMore,more}) => {



    const swiper = useSwiper();
    return <div className={"swiperButtonWrapper__button"} onClick={() =>{
        swiper.slideNext()
        setMore(false)
    }
    }>{children}</div>;
};

export default SwiperButtonNext;