import {FC} from "react";
import Discounts from "../../discounts/Discounts";
import Header from "../../header/Header";
import Healthy from "../../healthy/Healthy";
import Promo from "../../promo/Promo";

const ProductPage: FC = () => {
    return (
        <>
            <Header/>
            <Promo/>
            <Discounts/>
            <Healthy/>
        </>
    )
}

export default ProductPage;