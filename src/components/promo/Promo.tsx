import { FC, useMemo } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useGetSlidesQuery } from "../api/apiSlice";

import 'swiper/scss';
import 'swiper/scss/navigation';
import "./promo.sass";
import "../../styles/link.sass"

import { Navigation } from "swiper";
import { IDataSlide } from "../../interfaces/interfaces";
import Spinner from "../spinner/Spinner";



const Promo: FC = () => {

    const {
        data: dataSlides = [],
        isLoading,
        isError,
    } = useGetSlidesQuery();

    const creatingSlide = (dataSlides: IDataSlide[]) => {
        return dataSlides.map(({id, url, alt}) => {
            return (
                <SwiperSlide key={id}>
                        <img src={url} alt={alt} />
                        <a className="link_big" href="/">
                            <div className="">
                                shop now
                            </div>
                        </a>
                </SwiperSlide>
            )
        })
    }
    
    const slides = useMemo(() => creatingSlide(dataSlides), [dataSlides]);

    return (
        <div className="promo">
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    slidesPerView={1}
                >
                    {isLoading ? <Spinner/> : isError ? <h5 className="text-center mt-5">Ошибка загрузки</h5> : null}
                    {slides}
                </Swiper>      
        </div>
    )
}

export default Promo;