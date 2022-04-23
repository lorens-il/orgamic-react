import { FC } from "react";

import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";
import { useGetDiscountsQuery } from "../../api/apiSlice";
import { IDataDiscount } from "../../interfaces/interfaces";

import "./discounts.sass";

const Discounts: FC = () => {

    const {
        data: discounts = [],
        isLoading,
        isError
    } = useGetDiscountsQuery();

    const creatingDiscounts = (discounts: IDataDiscount[]) => {
        return discounts.map(({id, title, desc, url, alt, discountStyles, pictureVariant}) => {
            return (
                <div key={id} className="discounts__item" style={discountStyles}>
                    <div className="discounts__wrapper">
                        <h2 className="discounts__title">
                            {title}
                        </h2>
                        <div className="discounts__desc">
                            {desc}
                        </div>    
                    </div>
                    <div className={`discounts__picture ${pictureVariant}`}>
                        <img src={url} alt={alt} />
                    </div>
                </div>
            );
        });
    };

    const discountsList = creatingDiscounts(discounts);

    return (
        <div className="discounts">
            <div className="container">
                {isLoading && !isError ? <Spinner/> : isError ? <ErrorMessage/> : null}
                <div className="discounts__items">
                    {discountsList}
                </div>  
            </div>    
        </div>

    );
};

export default Discounts;