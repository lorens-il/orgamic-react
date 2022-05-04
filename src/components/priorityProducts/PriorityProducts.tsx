import { FC, MouseEvent, useRef } from "react"; 

import { useGetProductsQuery } from "../../api/apiSlice";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

import arrow from "./arrow.svg";
import "./priorityProducts.sass";

const PriorityProducts: FC = () => {
    
    const {
        data = [],
        isLoading,
        isError
    } = useGetProductsQuery();

    const refProducts = useRef<any[]>([]);

    const onChangingStyles = (i: number, e: MouseEvent) => {

        e.preventDefault();

        refProducts.current[i].classList.toggle("priority-products__item_active");
    };

    const creatingContent = () => {

        const filteredData = data.filter(({priorityPr}) => priorityPr === true);

        return filteredData.map(({id, url, name, desc}, i) => {
            return (
                <div key={id}
                    ref={item => refProducts.current.push(item)}
                    className="priority-products__item"
                    >
                        <div className="priority-products__wrapper-img">
                            <img src={url} alt={name} />    
                        </div>
                        <h2 className="priority-products__title">{name}</h2>
                        <div className="priority-products__text">
                            {desc}
                        </div>
                        <div  className="priority-products__btns">
                            <div className="priority-products__wrapper">
                                <a
                                    className="link link_small"
                                    href="/"
                                    onClick={(e) => onChangingStyles(i, e)}
                                    >
                                    <div>shop now</div>
                                </a>    
                            </div>
                            <div className="priority-products__wrapper">
                                <div
                                    className="priority-products__arrow"  
                                    onClick={(e) => onChangingStyles(i, e)}
                                    >
                                    <img src={arrow} alt="arrow" />
                                </div>      
                            </div>
                        </div>
                </div>
            );
        });
    };

    const list = creatingContent();

    return (
        <div className="priority-products">
            <div className="container">
                {isLoading && !isError ? <Spinner/> : isError ? <ErrorMessage/> : null}
                <div className="priority-products__content">
                    {list} 
                </div>    
            </div>    
        </div>
    );
};

export default PriorityProducts;