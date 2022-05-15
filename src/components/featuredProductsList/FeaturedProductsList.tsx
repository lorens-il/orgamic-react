import { FC } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { useAppSelector } from "../../hooks/typedSelectors";
import { useGetProductsQuery } from "../../api/apiSlice";
import { IDataProduct } from "../../interfaces/interfaces";

import FeaturedProductsListItem from "../featuredProductsListItem/FeaturedProductsListItem";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";


const FeaturedProductsList: FC = () => {
    
    const {activeBtn} = useAppSelector(state => state.filters);
    const {searchValue} = useAppSelector(state => state.filters);

    const {
        data: products = [],
        isError,
        isLoading,
    } = useGetProductsQuery();

    const creatingListProducts = (products: IDataProduct[]) => {
        
        const filteredProducts = 
                products.filter(({name, category}) => 
                            (name.includes(searchValue)) && 
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
            {
                isLoading ? <Spinner/> : isError ? <ErrorMessage/> : products.length === 0 ? 
                <div style={{textAlign: "center"}}>Empty</div> : null
            }
            <TransitionGroup className="featured-products__list-products">
                {listProducts}
            </TransitionGroup>

        </>
    );
};

export default FeaturedProductsList;