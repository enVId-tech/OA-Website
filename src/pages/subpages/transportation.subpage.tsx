import React from "react";
import ClassHelmet from "../../components/ts/pagetitle/title.global.module.tsx";
import Navbar from "../../components/ts/navbar/navbar.template.tsx";
import PageTitle from "../../components/ts/pagetitle/pagetitle.global.module.tsx";
import Footer from "../../components/ts/footer/footer.global.module.tsx";
import trackPageView from "../../components/ts/analytics/analytics.global.module.ts";

import '../../components/scss/pages/subpages/transportation.subpage.scss';

const Transportation: React.FC = (): React.JSX.Element => {
    React.useEffect((): void => {
        trackPageView();
    }, []);

    return (
        <div id="Transportation">
            <ClassHelmet title="Transportation" />
            <Navbar heightChange={790} />
            <PageTitle height={80} mainText="Transportation" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />

            <div id="TransportationMain">
                <h1 id="TitleText" className="pageSectionTitle">Transportation</h1>
                <img id="BusImage" src="images/BusStops.png" alt="BusImage" />
            </div>

            <Footer />
        </div>
    )
}

export default Transportation;