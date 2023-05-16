import { useSwiper } from "swiper/react";
import {FC, ReactNode} from "react";
interface ISwiperButtonNext{
    children: ReactNode;
}

const SwiperButtonNext:FC<ISwiperButtonNext> = ({ children }) => {
    const swiper = useSwiper();
    return <div className={"swiperButtonWrapper__next"} onClick={() => swiper.slideNext()}>{children}</div>;
};

export default SwiperButtonNext;