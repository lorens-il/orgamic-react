import { FC } from "react"; 
import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import "./aboutPage.sass";

const AboutPage:FC = () => {
    
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return(
        <HelmetProvider>
            <Helmet>
                <meta
                    name="description"
                    content="About our company"
                    />
                <title>About Us</title>
            </Helmet>
            <div className="about-us">
            <h1 className="about-us__title">
                    About Us
            </h1> 
            <div className="container">
                <div className="about-us__wrapper">
                    <div className="about-us__desc">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe incidunt nihil, quas nesciunt aperiam velit ratione suscipit dolorem, laudantium explicabo sed, non
                            eius molestias expedita tenetur sint mollitia necessitatibus quod.
                    </div>
                    <button className="link link_big link_btn" onClick={goBack}>Назад</button>      
                    </div>    
                </div> 
            </div>
        </HelmetProvider>
    );
};

export default AboutPage;