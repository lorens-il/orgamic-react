import { FC } from "react";
import grapefruit from "./grapefruit.png"

import "./offer.sass"

const Offer: FC = () => {
    return (
        <div className="offer">
            <div className="container">
                <div className="offer__content">
                    <div className="offer__desc">
                        <div className="offer__title">Dhamaka offer</div>
                        <div className="offer__discount">35% <span>off</span></div>
                        <a className="link link_small" href="/" ><div>buy</div></a>     
                    </div>
                    <div className="offer__product">
                        <div className="offer__wrapper-img">
                            <img src={grapefruit} alt="grapefruit" />    
                        </div>
                    </div>  
                </div> 
            </div>    
        </div>
    )
}

export default Offer;