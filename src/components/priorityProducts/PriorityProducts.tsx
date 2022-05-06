import { FC, useRef } from "react"; 

import { useAppDispatch, useAppSelector } from "../../hooks/typedSelectors";
import { useGetProductsQuery } from "../../api/apiSlice";
import { changingActiveBtn } from "../featuredProducts/featuredProductsSlice";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

import arrow from "./arrow.svg";
import "./priorityProducts.sass";

const PriorityProducts: FC = () => {
    
    const {
        data: products = [],
        isLoading,
        isError
    } = useGetProductsQuery();

    const {activeBtn} = useAppSelector(state => state.filters);
    const dispatch = useAppDispatch();
    const refProducts = useRef<any[]>([]);

    const onChangingStyles = (i: number, category: string = activeBtn) => {

        refProducts.current[i].classList.toggle("priority-products__item_active");
        dispatch(changingActiveBtn(category));
    };

    const creatingContent = () => {

        if (products.length === 0) return <div style={{textAlign: "center"}}>Empty</div>;

        const filteredData = products.filter(({priorityPr}) => priorityPr === true);

        return filteredData.map(({id, url, name, desc, category}, i) => {
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
                                    href="#featured-products"
                                    onClick={() => onChangingStyles(i, category)}
                                    >
                                    <div>shop now</div>
                                </a>    
                            </div>
                            <div className="priority-products__wrapper">
                                <div
                                    className="priority-products__arrow"  
                                    onClick={() => onChangingStyles(i)}
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