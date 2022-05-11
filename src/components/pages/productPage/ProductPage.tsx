import {FC} from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Discounts from "../../discounts/Discounts";
import Healthy from "../../healthy/Healthy";
import Promo from "../../promo/Promo";
import PriorityProducts from "../../priorityProducts/PriorityProducts";
import Facts from "../../facts/Facts";
import FeaturedProducts from "../../featuredProducts/FeaturedProducts";
import Offer from "../../offer/Offer";

import main from "./main.png";

const ProductPage: FC = () => {
    return (
        <HelmetProvider>
            <Helmet>
                {/* "Primary Meta Tags" */}
                <title>Orgamic</title>
                <meta name="title" content="Orgamic"/>
                <meta name="description" content="Page with list of products"/>

                {/* "Open Graph" */}
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://orgamic-175b3.web.app/"/>
                <meta property="og:title" content="Orgamic"/>
                <meta property="og:description" content="Page with list of products"/>
                <meta property="og:image" content={main}/>

                {/* "Twitter" */}
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://orgamic-175b3.web.app/"/>
                <meta property="twitter:title" content="Orgamic"/>
                <meta property="twitter:description" content="Page with list of products"/>
                <meta property="twitter:image" content={main}/>
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