import { useSwiper } from "swiper/react";
import {FC, ReactNode} from "react";

interface SwiperButtonPrev{
    children: ReactNode;
    more:boolean,
    setMore:(arg:boolean)=>void
}

const SwiperButtonPrev:FC<SwiperButtonPrev> = ({ children,setMore,more }) => {

    const swiper = useSwiper();
    return <div className={"swiperButtonWrapper__button"} onClick={() => {
        swiper.slidePrev()
        setMore(false)

    }}>{children}</div>;
};
export default SwiperButtonPrev;