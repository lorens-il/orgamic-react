import { ChangeEvent, FC, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks/typedSelectors";
import { useGetFiltersQuery } from "../../api/apiSlice";
import FeaturedProductsList from "../featuredProductsList/FeaturedProductsList";
import { IInitialState } from "../../interfaces/interfaces";

import { changingActiveBtn, changingSearchValue } from "./featuredProductsSlice";
import "./sass/featured-products.sass";
import "./sass/featured-products-media.sass";

export const selectorActiveBtn = (state : {filters: IInitialState}): IInitialState => state.filters;

const FeaturedProducts: FC = () => {

    const {activeBtn} = useAppSelector(selectorActiveBtn);
    const {searchValue} = useAppSelector(state => state.filters);
    const [searchParam, setSearchParam] = useSearchParams();
    const dispatch = useAppDispatch();

    const {
        data: filters = [],
        isError
    } = useGetFiltersQuery();

    useEffect(() => {
        const typeFilter = searchParam.get("filter");
        if(typeFilter&& searchParam.toString()) {
            onClickBtn(typeFilter);
        }
    }, []);


    useEffect(() => {
        setSearchParam({filter: activeBtn});
    }, [activeBtn]);

    const onClickBtn = (item: string) => {
        dispatch(changingActiveBtn(item));
    };

    const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changingSearchValue(e.target.value));
    };

    const creatingBtns = (filters: string[]) => {
        return filters.map(item => (
            <button
                key={item}
                type="submit" 
                className={`featured-products__btn ${activeBtn === item ? "active" : ''}`}
                onClick={() => onClickBtn(item)}
                >
                    {item}
            </button>
        ));
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const btns = useMemo(() => creatingBtns(filters), [filters, activeBtn]); // memo нужно чтобы список не пересоздавался при вводе в инпут

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