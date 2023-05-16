import { useSwiper } from "swiper/react";
import {FC, ReactNode} from "react";
import SwiperButtonNext from "./SwiperButtonNext";
interface SwiperButtonPrev{
    children: ReactNode;
}

const SwiperButtonPrev:FC<SwiperButtonPrev> = ({ children }) => {
    const swiper = useSwiper();
    return <div onClick={() => swiper.slidePrev()}>{children}</div>;
};
export default SwiperButtonPrev;