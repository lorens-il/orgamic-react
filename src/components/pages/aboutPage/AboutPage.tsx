import { FC } from "react"; 
import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import "./aboutPage.sass";
import about from "./about.jpg";

const AboutPage:FC = () => {
    
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return(
        <HelmetProvider>
            <Helmet>
                <title>Orgamic / About Us</title>
                <meta name="title" content="Orgamic / About Us"/>
                <meta name="description" content="About our company"/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://orgamic-175b3.web.app/about"/>
                <meta property="og:title" content="Orgamic / About Us"/>
                <meta property="og:description" content="About our company"/>
                <meta property="og:image" content={about}/>

                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://orgamic-175b3.web.app/about"/>
                <meta property="twitter:title" content="Orgamic / About Us"/>
                <meta property="twitter:description" content="About our company"/>
                <meta property="twitter:image" content={about}/>
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