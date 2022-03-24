import {FC} from "react";
import Discounts from "../../discounts/Discounts";
import Header from "../../header/Header";
import Promo from "../../promo/Promo";

const ProductPage: FC = () => {
    return (
        <>
            <Header/>
            <Promo/>
            <Discounts/>
        </>
    )
}

export default ProductPage;