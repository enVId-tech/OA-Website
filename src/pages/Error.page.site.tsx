import React from "react";
import Navbar from "../components/ts/navbar/navbar.template.tsx";
import Footer from "../components/ts/footer/footer.global.module.tsx";
import trackPageView from "../components/ts/analytics/analytics.global.module.mts";

import '../components/scss/pages/error.page.site.scss';

const ErrorPage: React.FC = (): React.JSX.Element => {
    const [time, setTime] = React.useState<number>(3);

    React.useEffect((): void => {
        trackPageView();
    }, []);

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