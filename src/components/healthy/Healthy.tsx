import { FC } from "react";
import organic from "./img/100Organic.svg";
import hand from "./img/hand.svg";

import "./healthy.sass";

const Healthy: FC = () => {
    return (
        <div className="healthy">
            <div className="container">
                <div className="healthy__contents">
                    <h1 className="healthy__title">We Are Healthy <br /> Food Organic</h1>
                    <div className="healthy__desc">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.    
                    </div>  
                    <div className="healthy__items">
                        <div className="healthy__item">
                            <div className="healthy__wrapper-img">
                                <img src={organic} alt="100% organic" />
                            </div>
                            <div className="healthy__wrapper-text">
                                <h2 className="healthy__subtitle">
                                    Biological Benefits
                                </h2>
                                <div className="healthy__text">
                                    We're making room for self
                                    care today with plan.
                                </div>    
                            </div>   
                        </div>
                        <div className="healthy__item">
                            <div className="healthy__wrapper-img">
                                <img src={hand} alt="Speciality Product" />
                            </div>   
                            <div className="healthy__wrapper-text">
                                <h2 className="healthy__subtitle">
                                    Speciality Product
                                </h2>
                                <div className="healthy__text">
                                    We're making room for self
                                    care today with plan.
                                </div>     
                            </div>   
                        </div>     
                    </div>
                </div>      
            </div>  
        </div>
    )
}

export default Healthy;