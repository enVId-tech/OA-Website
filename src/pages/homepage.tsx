import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import '../components/images/OxfordLogo.png';

const HomePage = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Oxford Academy - Home</title>
            </Helmet>
            <div>
                <img title="main" src='../components/images/OxfordLogo.png' alt="Main" />
                <h1>Welcome to Oxford Academy</h1>
                <h5>Conceiving the next wave of innovation.</h5>
            </div>
        </HelmetProvider>
    )
}

export default HomePage;