import { FC } from "react";

import "./facts.sass";

const Facts: FC = () => {
    return (
        <div className="facts">
            <div className="facts__wrapper">
                <div className="facts__text">
                    <div className="facts__number">1570+</div>
                    <div className="facts__desc">Total Products</div>
                </div>
                <div className="facts__text">
                    <div className="facts__number">3560+</div>
                    <div className="facts__desc">Satisfied Clients</div>
                </div>
                <div className="facts__text">
                    <div className="facts__number">4550+</div>
                    <div className="facts__desc">Project Completed</div>   
                </div>
                <div className="facts__text">
                    <div className="facts__number">130+</div>
                    <div className="facts__desc">Awards Winning</div>  
                </div>
            </div>      
        </div>
    )
}

export default Facts;