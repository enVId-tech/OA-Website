import React, { useState } from "react";
import Navbar from "../components/ts/navbar/navbar";
import Footer from "../components/ts/footer/Footer";
import '../components/scss/pages/error.scss';

const ErrorPage = () => {
    const [time, setTime] = useState(3);

    const interval: number = 0.1;

    setTimeout(() => {
        if (time <= 0.09) {
            setTime(0);
            window.location.href = "/";
        } else {
            setTime(time - interval);
        }
    }, 100);

    return (
        <div id="ErrorPage">
            <Navbar />
            <div id="ErrorMain">
                <h1 id="ErrorMessage">Error 404, this page does not exist!</h1>
                <p id="ErrorDescription">You will be redirected to home in {time.toFixed(1)} seconds.</p>
                <h1 id="ErrorDescription">Hint: Anything green in the top bar has a link!</h1>
            </div>
            <Footer title="Error" />
        </div>
    )
}

export default ErrorPage;