import { FC } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

import ErrorMessage from "../../errorMessage/ErrorMessage";
import "./page404.sass";

const Page404:FC = () => {

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <HelmetProvider>
            <Helmet>
                <title>404</title>
            </Helmet>
            <div className="page404">
                <ErrorMessage/>
                <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Page doesn't exist</p>
                <button 
                        className="link link_small link_btn" 
                        onClick={goBack}
                        >
                        Back
                </button>
            </div>
        </HelmetProvider>
    );
};

export default Page404;