import React from "react";
import ClassHelmet from "../components/ts/pagetitle/title.global.module.tsx";
import Navbar from "../components/ts/navbar/navbar.template.tsx";
import Footer from "../components/ts/footer/footer.global.module.tsx";
import trackPageView from "../components/ts/analytics/analytics.global.module.ts";

import '../components/scss/pages/error.page.site.scss';

const ErrorPage: React.FC = (): React.JSX.Element => {
    const [time, setTime]: [number, React.Dispatch<React.SetStateAction<number>>] = React.useState<number>(3);

    React.useEffect((): void => {
        trackPageView();
    }, []);

    const interval: number = 0.1;

    setTimeout((): void => {
        if (time <= 0.1) {
            setTime(0);
            window.location.href = "/";
            return;
        }
        setTime(time - interval);
    }, 100);

    return (
        <div id="ErrorPage">
            <ClassHelmet title="Error 404" />
            <Navbar />
            <div id="ErrorMain">
                <h1 id="ErrorMessage">Error 404, this page does not exist!</h1>
                <p id="ErrorDescription">You will be redirected to home in {time.toFixed(1)} seconds.</p>
                <p id="ErrorDescription">Hint: Anything green in the top bar has a link!</p>
            </div>
            <Footer />
        </div>
    )
}

export default ErrorPage;