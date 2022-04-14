import { FC, useRef } from "react"; 
import { useGetProductsQuery } from "../../api/apiSlice";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";
import arrow from "./arrow.svg"

import "./priorityProducts.sass";

const PriorityProducts: FC = () => {
    
    const refBorder = useRef<any[]>([]);
    const refTitle = useRef<any[]>([]);
    const refBtns = useRef<any[]>([]);

    const onShift = (e: any) => {
        e.preventDefault();
        const grayBorder = "1px solid rgb(221, 221, 221)",
              greenBorder = "1px solid rgb(118, 167, 19)";
        
        refBorder.current.forEach((item, i) => {
            if (+e.currentTarget.dataset.index ===  +item.dataset.index  && item.style.border !== grayBorder) {
                item.style.border = grayBorder; 
                item.style.background = "rgb(255, 255, 255)";
                refTitle.current[i].style.color = "rgb(118, 167, 19)";
                refBtns.current[i].style.left = "54.4%"
            } else if (+e.currentTarget.dataset.index === +item.dataset.index && item.style.border !== greenBorder) {
                item.style.cssText = ''
                refTitle.current[i].style.cssText = ''
                refBtns.current[i].style.cssText = ''
            }
            
        });
    }

    const {
        data = [],
        isLoading,
        isError
    } = useGetProductsQuery();

    const creatingContent = () => {
        return data.map(({id, url, name, desc, categories}, i) => {
            if (categories === false) return null;
            return (
                <div key={id} ref={item => refBorder.current.push(item)} className="priority-products__item" data-index={i}>
                    <div className="priority-products__wrapper-img">
                        <img src={url} alt={name} />    
                    </div>
                    <h2 ref={item => refTitle.current.push(item)} className="priority-products__title">{name}</h2>
                    <div className="priority-products__text">
                        {desc}
                    </div>
                    <div ref={item => refBtns.current.push(item)} className="priority-products__btns">
                        <div className="priority-products__wrapper">
                            <a className="link link_small" href="/" data-index={i} onClick={onShift}>
                                <div>shop now</div>
                            </a>    
                        </div>
                        <div className="priority-products__wrapper">
                            <div className="priority-products__arrow" data-index={i} onClick={onShift}>
                                <img src={arrow} alt="arrow" />
                            </div>      
                        </div>
                    </div>
                </div>
            )
        })
    }

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
    )
}

export default PriorityProducts;