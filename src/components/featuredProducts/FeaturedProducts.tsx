import { FC } from "react";
import "./featured-products.sass"


const FeaturedProducts: FC = () => {
    return (
        <div className="featured-products">
            <div className="container">
                <h2 className="featured-products__title">Featured Products</h2>
                <input type="text" className="featured-products__search" placeholder="enter the product name"/>
                <div className="featured-products__group-btns">
                       
                </div>    
            </div>    
        </div>
    )
}

export default FeaturedProducts;