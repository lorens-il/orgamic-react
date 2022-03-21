import { FC, useMemo } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useGetSlidesQuery } from "../api/apiSlice";

import 'swiper/scss';
import 'swiper/scss/navigation';
import "./promo.sass";

import { Navigation } from "swiper";
import { IDataSlide } from "../../interfaces/interfaces";



const Promo: FC = () => {

    const {
        data: dataSlides = [],
        isLoading,
        isError,
    } = useGetSlidesQuery();

    const createdSlide = (dataSlides: IDataSlide[]) => {
        return dataSlides.map(({id, url, alt}) => {
            return (
                <SwiperSlide key={id}>
                        <img src={url} alt={alt} />
                </SwiperSlide>
            )
        })
    }

    const slides = useMemo(() => createdSlide(dataSlides), [dataSlides]);
    return (
        <div className="promo">
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    slidesPerView={1}
                >
                    {slides}
                </Swiper>      
        </div>
    )
}

export default Promo;