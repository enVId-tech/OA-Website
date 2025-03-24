import React from "react";
import ClassHelmet from "../../components/ts/pagetitle/title.global.module.tsx";
import Navbar from "../../components/ts/navbar/navbar.template.tsx";
import PageTitle from "../../components/ts/pagetitle/pagetitle.global.module.tsx";
import Footer from "../../components/ts/footer/footer.global.module.tsx";
import trackPageView from "../../components/ts/analytics/analytics.global.module.ts";

import '../../components/scss/pages/subpages/titleix.module.scss';

const TitleIX: React.FC = (): React.JSX.Element => {
    React.useEffect((): void => {
        trackPageView();
    }, []);

    return (
        <div id="TitleIX">
            <ClassHelmet title="Title IX" />
            <Navbar heightChange={790} />
            <PageTitle height={80} mainText="Title IX" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />

            <iframe title="titleix" src="https://oxford.auhsd.us/files/user/1/file/AUHSD%20-%20Website%20Info%20-%20Title%20IX%20-%20Students.pdf" />

            <Footer />
        </div>
    )
}

export default TitleIX;