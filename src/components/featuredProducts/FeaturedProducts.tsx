import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/typedSelectors";
import { useGetFiltersQuery } from "../../api/apiSlice";
import { IDataFilters } from "../../interfaces/interfaces";
import { changingActiveBtn } from "./featuredProductsSlice";
import FeaturedProductsList from "../featuredProductsList/FeaturedProductsList";

import "./featured-products.sass"


const FeaturedProducts: FC = () => {

    const {activeBtn} = useAppSelector(state => state.activeBtn);
    const dispatch = useAppDispatch();
    
    const {
        data: filters = [],
        isError
    } = useGetFiltersQuery();

    const onClickBtn = (item: IDataFilters) => {
        dispatch(changingActiveBtn(item))
    }

    const creatingBtns = (filters: IDataFilters[]) => {
        return filters.map(item => (
            <button
                key={Date.now() + Math.random()}
                type="submit" 
                className={`featured-products__btn ${activeBtn === item ? "active" : ''}`}
                onClick={() => onClickBtn(item)}
                >
                    {item}
            </button>
        ))
    }

    const btns = creatingBtns(filters);

    return (
        <div className="featured-products">
            <div className="container">
                <h2 className="featured-products__title">Featured Products</h2>
                <input type="text" className="featured-products__search" placeholder="enter the product name"/>
                <div className="featured-products__group-btns">
                    {isError ? <div>ERROR</div> : null}
                    {btns}
                </div>
                <FeaturedProductsList/>   
            </div>    
        </div>
    )
}

export default FeaturedProducts;