import { useSwiper } from "swiper/react";
import {FC, ReactNode} from "react";
interface SwiperButtonPrev{
    children: ReactNode;
}

const SwiperButtonPrev:FC<SwiperButtonPrev> = ({ children }) => {
    const swiper = useSwiper();
    return <div className={"swiperButtonWrapper__prev"} onClick={() => swiper.slidePrev()}>{children}</div>;
};
export default SwiperButtonPrev;