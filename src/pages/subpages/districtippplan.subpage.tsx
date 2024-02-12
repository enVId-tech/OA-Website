import React from "react";
import ClassHelmet from "../../components/ts/pagetitle/title.global.module.tsx";
import Navbar from "../../components/ts/navbar/navbar.template.tsx";
import PageTitle from "../../components/ts/pagetitle/pagetitle.global.module.tsx";
import Footer from "../../components/ts/footer/footer.global.module.tsx";
import trackPageView from "../../components/ts/analytics/analytics.global.module.ts";

import '../../components/scss/pages/subpages/districtippplan.subpage.scss';

const DistrictIPPPlan: React.FC = (): React.JSX.Element => {
    React.useEffect((): void => {
        trackPageView();
    }, []);

    return (
        <div id="DistrictIPPPlan">
            <ClassHelmet title="District IPP Plan" />
            <Navbar heightChange={790} />
            <PageTitle height={80} mainText="District IPP Plan" subText="" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />

            <iframe title="districtippplan" src="https://www.auhsd.us/files/user/1/file/Districts%20IIPP%20Plan%20RESTATED%20-%2007_31_20.pdf" />

            <Footer />
        </div>
    )
}

export default DistrictIPPPlan;