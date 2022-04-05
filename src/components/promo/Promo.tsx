import { FC, useMemo } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useGetSlidesQuery } from "../../api/apiSlice";

import 'swiper/scss';
import 'swiper/scss/navigation';
import "./promo.sass";
import "../../styles/link.sass"

import { Autoplay, Navigation } from "swiper";
import { IDataSlide } from "../../interfaces/interfaces";
import ErrorMessage from "../errorMessage/ErrorMessage";
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
                        <div className="container">
                            <div className="promo__text">
                                <h1 className="promo__title">
                                    tasty &<br />healthy <span>organic</span><br />food everyday    
                                </h1>
                                <div className="promo__wrapper-img">
                                    <img src={fruitUrl} alt={fruitAlt} />    
                                </div>
                                <a className="link link_big" href="/">
                                    <div className="">
                                        shop now
                                    </div>
                                </a>
                            </div>    
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
                    {isLoading && !isError ? <Spinner/> : isError ? <ErrorMessage/> : null}
                    {slides}
                        <div className="container">
                            <div className="swiper__btns">
                                <div className="swiper__prev">
                                    <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 14L1 7.5L7.5 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>    
                                </div>
                                <div className="swiper__next">
                                    <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.5 1L8 7.5L1.5 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>    
                            </div>      
                        </div>      
                </Swiper>      
        </div>
    )
}

export default Promo;