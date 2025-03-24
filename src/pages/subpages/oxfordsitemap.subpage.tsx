import React from "react";
import ClassHelmet from "../../components/ts/pagetitle/title.global.module.tsx";
import Navbar from "../../components/ts/navbar/navbar.template.tsx";
import PageTitle from "../../components/ts/pagetitle/pagetitle.global.module.tsx";
import Footer from "../../components/ts/footer/footer.global.module.tsx";
import trackPageView from "../../components/ts/analytics/analytics.global.module.ts";

import '../../components/scss/pages/subpages/oxfordsitemap.module.scss';

const OxfSitemap: React.FC = (): React.JSX.Element => {
    React.useEffect((): void => {
        trackPageView();
    }, []);

    const handleClick = (): void => {
        window.open("https://oxford.auhsd.us/files/user/1/file/OXFORD%20SITE%20MAP%202023%20Back%20cover%20inside.pdf", "_blank");
    }

    return (
        <div id="OxfSiteMap">
            <ClassHelmet title="OA Sitemap" />
            <Navbar heightChange={790} />
            <PageTitle height={80} mainText="Oxford Academy Site Map" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />

            <div id="OxfSiteMapMain">
                <h1 id="TitleText" className="pageSectionTitle">Oxford Academy Site Map</h1>
                <img id="OxfSite" src="images/Map.png" alt="Oxford Academy Site Map" onClick={handleClick} />
            </div>

            <Footer />
        </div>
    )
}

export default OxfSitemap;