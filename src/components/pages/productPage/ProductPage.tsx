import {FC} from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Discounts from "../../discounts/Discounts";
import Healthy from "../../healthy/Healthy";
import Promo from "../../promo/Promo";
import PriorityProducts from "../../priorityProducts/PriorityProducts";
import Facts from "../../facts/Facts";
import FeaturedProducts from "../../featuredProducts/FeaturedProducts";
import Offer from "../../offer/Offer";

const ProductPage: FC = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta
                        name="description"
                        content="Page with list of products"
                        />
                <title>Orgamic</title>
            </Helmet>
            <Promo/>
            <Discounts/>
            <Healthy/>
            <PriorityProducts/>
            <Facts/>
            <FeaturedProducts/>
            <Offer/>
        </HelmetProvider>
    );
};

export default ProductPage;