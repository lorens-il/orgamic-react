import { FC } from "react";

import { useGetCartQuery } from "../../../api/apiSlice";
import { IDataProduct } from "../../../interfaces/interfaces";
import Spinner from "../../spinner/Spinner";
import ErrorMessage from "../../errorMessage/ErrorMessage";

import "./cart.sass";
const Cart:FC = () => {

    const {
        data: products = [],
        isError,
        isLoading
    } = useGetCartQuery();

    const creatingListProducts = (products: IDataProduct[]) => {
        

        return products.length === 0 ? 
            <div className="cart__empty">Empty</div> 
            : 
            products.map(({id, name, category, cost}) => {
                return (
                    <div 
                        key={id} 
                        className="cart__product"
                        >
                        <div className="cart__product-name">
                            {name}
                        </div>
                        <div className="cart__product-category">
                            {category}
                        </div>
                        <div className="cart__product-cost">
                            {cost}
                        </div>
                        <button 
                            className="link link_small link_btn">
                                delete   
                            </button>
                    </div>  
                );
            });
    };

    const listProducts = creatingListProducts(products);
    return(
        <div className="cart">
            <div className="cart__title">
                Products    
            </div>
            <div className="container">
                <div className="cart__wrapper-products">
                    {isLoading ? <Spinner/> : isError ? <ErrorMessage/> : null}
                    {listProducts}
                </div>
            </div>    
        </div>
    );
};

export default Cart;