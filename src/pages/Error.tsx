import React, { useState } from "react";
import Navbar from "../components/ts/navbar/navbar";
import Footer from "../components/ts/footer/Footer";
import '../components/scss/pages/error.scss';

const ErrorPage = () => {

    const [time, setTime] = useState(3);

    setTimeout(() => {
        setTime(time - 0.1);
    }, 100);

    setTimeout(() => {
        window.location.href = "/";
    }, 3 * 1000);

    return (
        <div id="ErrorPage">
            <Navbar />
            <div id="ErrorMain">
                <h1 id="ErrorMessage">Error 404, this page does not exist!</h1>
                <p id="ErrorDescription">You will be redirected to home in { time.toFixed(1) } seconds.</p>
            </div>
            <Footer title="Error" />
        </div>
    )
}

export default ErrorPage;