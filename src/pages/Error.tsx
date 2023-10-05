import React, { useState } from "react";
import Navbar from "../components/ts/navbar/navbar";
import Footer from "../components/ts/footer/Footer";
import '../components/scss/pages/error.scss';

const ErrorPage = (): React.JSX.Element => {
    const [time, setTime] = useState<number>(3);

    const interval: number = 0.1;

    setTimeout((): void => {
        if (time <= 0.1) {
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
                <p id="ErrorDescription">Hint: Anything green in the top bar has a link!</p>
            </div>
            <Footer title="Error" />
        </div>
    )
}

export default ErrorPage;