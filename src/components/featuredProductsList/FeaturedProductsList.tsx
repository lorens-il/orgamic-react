import { FC } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { useAppSelector } from "../../hooks/typedSelectors";
import { useGetProductsQuery } from "../../api/apiSlice";
import { IDataProduct } from "../../interfaces/interfaces";

import FeaturedProductsListItem from "../featuredProductsListItem/FeaturedProductsListItem";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "../../styles/link.sass";


const FeaturedProductsList: FC = () => {
    
    const {activeBtn} = useAppSelector(state => state.filters);
    const {searchValue} = useAppSelector(state => state.filters);

    const {
        data: products = [],
        isError,
        isLoading,
    } = useGetProductsQuery();

    const creatingListProducts = (products: IDataProduct[]) => {

        if (products.length === 0) return null;
        
        const filteredProducts = 
                products.filter(({name, category}) => 
                            (name.indexOf(searchValue) > -1) && 
                            (category === activeBtn || activeBtn === "All"));

        return filteredProducts.map((item) => (
            <CSSTransition
                key={item.id}
                timeout={500}
                classNames="item"
                >
                    <FeaturedProductsListItem
                    {...item}
                    />
            </CSSTransition>
        ));
    };

    const listProducts = creatingListProducts(products);

    return (
        <>
            {isLoading ? <Spinner/> : isError ? <ErrorMessage/> : null}
            <TransitionGroup className="featured-products__list-products">
                {listProducts}
            </TransitionGroup>

        </>
    );
};

export default FeaturedProductsList;