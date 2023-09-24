import React from "react";
import Navbar from "../components/ts/navbar/navbar";
import Footer from "../components/ts/footer/Footer";
import PageTitle from '../components/ts/pagetitle/pagetitle';
import '../components/scss/pages/error.scss';

const ErrorPage = () => {
    return (
        <div id="ErrorPage">
            <Navbar />
            <div id="ErrorMain">
                <h1 id="ErrorMessage">Error 404, this page does not exist!</h1>
                <p id="ErrorDescription">Instead, click to go to one of these existing pages.</p>
                <ul id="ErrorLinks">
                    <a href="/">- Home</a>
                    <a href="/clubs">- Clubs</a>
                </ul>
            </div>
            <Footer title="Error" />
        </div>
    )
}

export default ErrorPage;