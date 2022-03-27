import { FC } from "react"; 
import { useGetProductsQuery } from "../../api/apiSlice";
import arrow from "./arrow.svg"

import "./priorityProducts.sass";

const PriorityProducts: FC = () => {

    const {
        data = [],
        isLoading,
        isError
    } = useGetProductsQuery();

    const creatingContent = () => {
        return data.map(({id, url, name, desc, categories}) => {
            if (categories === false) return null;
            return (
                <div key={id} className="priority-products__item">
                    <div className="priority-products__wrapper-img">
                        <img src={url} alt={name} />    
                    </div>
                    <h2 className="priority-products__title">{name}</h2>
                    <div className="priority-products__text">
                        {desc}
                    </div>
                    <div className="priority-products__btns">
                        <div className="priority-products__wrapper">
                            <a href="/" className="link link_small">
                                <div>shop now</div>
                            </a>    
                        </div>
                        <div className="priority-products__wrapper">
                            <div className="priority-products__arrow">
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
                <div className="priority-products__content">
                    {list} 
                </div>    
            </div>    
        </div>
    )
}

export default PriorityProducts;