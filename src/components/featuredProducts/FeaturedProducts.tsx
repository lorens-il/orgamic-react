import { ChangeEvent, FC } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/typedSelectors";
import { useGetFiltersQuery } from "../../api/apiSlice";
import { IDataFilters } from "../../interfaces/interfaces";
import FeaturedProductsList from "../featuredProductsList/FeaturedProductsList";

import { changingActiveBtn, changingSearchValue } from "./featuredProductsSlice";
import "./featured-products.sass";


const FeaturedProducts: FC = () => {

    const {activeBtn} = useAppSelector(state => state.filters);
    const {searchValue} = useAppSelector(state => state.filters);
    const dispatch = useAppDispatch();
    
    const {
        data: filters = [],
        isError
    } = useGetFiltersQuery();

    const onClickBtn = (item: IDataFilters) => {
        dispatch(changingActiveBtn(item));
    };

    const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changingSearchValue(e.target.value));
    };

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
        ));
    };

    const btns = creatingBtns(filters);

    return (
        <div id="featured-products" className="featured-products">
            <div className="container">
                <h2 className="featured-products__title">Featured Products</h2>
                <input 
                    value={searchValue}
                    type="text" 
                    className="featured-products__search" 
                    placeholder="enter the product name"
                    onChange={onChangeInputValue}/>
                <div className="featured-products__group-btns">
                    {isError ? <div>ERROR</div> : null}
                    {btns}
                </div>
                <FeaturedProductsList/>   
            </div>    
        </div>
    );
};

export default FeaturedProducts;