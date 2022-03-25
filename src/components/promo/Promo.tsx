import { FC, useMemo } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useGetSlidesQuery } from "../../api/apiSlice";

import 'swiper/scss';
import 'swiper/scss/navigation';
import "./promo.sass";
import "../../styles/link.sass"

import { Autoplay, Navigation } from "swiper";
import { IDataSlide } from "../../interfaces/interfaces";
import Spinner from "../spinner/Spinner";



const Promo: FC = () => {

    const {
        data: dataSlides = [],
        isLoading,
        isError,
    } = useGetSlidesQuery();

    const creatingSlide = (dataSlides: IDataSlide[]) => {
        return dataSlides.map(({id, url, alt, fruitUrl, fruitAlt}) => {
            return (
                <SwiperSlide key={id}>
                        <img src={url} alt={alt} />
                        <div className="promo__text">
                            <h1 className="promo__title">
                                tasty &<br />healthy <span>organic</span><br />food everyday    
                            </h1>
                            <div className="promo__wrapper-img">
                                <img src={fruitUrl} alt={fruitAlt} />    
                            </div>
                            <a className="link_big" href="/">
                                <div className="">
                                    shop now
                                </div>
                            </a>
                        </div>
                </SwiperSlide>
            )
        })
    }
    
    const slides = useMemo(() => creatingSlide(dataSlides), [dataSlides]);

    return (
        <div className="promo">
                <Swiper
                    navigation={
                        {
                            nextEl: ".swiper__next",
                            prevEl: ".swiper__prev"
                        }
                    }
                    modules={[Navigation, Autoplay]}
                    slidesPerView={1}
                    autoplay={
                        {
                            delay: 3000, 
                            pauseOnMouseEnter: true, 
                            disableOnInteraction: false
                        }
                    }
                >
                    {isLoading ? <Spinner/> : isError ? <h5 className="text-center mt-5">Ошибка загрузки</h5> : null}
                    {slides}
                    <div className="swiper__btns">
                        <div className="swiper__prev"></div>
                        <div className="swiper__next"></div>    
                    </div>
                </Swiper>      
        </div>
    )
}

export default Promo;