import {FC} from "react";

import Discounts from "../../discounts/Discounts";
import Header from "../../header/Header";
import Healthy from "../../healthy/Healthy";
import Promo from "../../promo/Promo";
import PriorityProducts from "../../priorityProducts/PriorityProducts";
import Facts from "../../facts/Facts";
import FeaturedProducts from "../../featuredProducts/FeaturedProducts";
import Offer from "../../offer/Offer";

const ProductPage: FC = () => {
    return (
        <>
            <Header/>
            <Promo/>
            <Discounts/>
            <Healthy/>
            <PriorityProducts/>
            <Facts/>
            <FeaturedProducts/>
            <Offer/>
        </>
    );
};

export default ProductPage;