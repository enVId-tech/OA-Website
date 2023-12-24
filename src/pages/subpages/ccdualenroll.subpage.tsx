import React from "react";
import Navbar from "../../components/ts/navbar/navbar.template.tsx";
import PageTitle from "../../components/ts/pagetitle/pagetitle.global.module.tsx";
import Footer from "../../components/ts/footer/footer.global.module.tsx";
import trackPageView from "../../components/ts/analytics/analytics.global.module.mts";

import '../../components/scss/pages/subpages/ccdualenroll.subpage.scss';

const CCDualEnrollment: React.FC = (): React.JSX.Element => {
    React.useEffect((): void => {
        trackPageView();
    }, []);
    
    return (
        <div id="CCDualEnrollment">
            <Navbar />
            <PageTitle height={80} mainText="Cypress College Dual Enrollment" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />
            <Footer title="Cypress College Dual Enrollment" />
        </div>
    )
}

export default CCDualEnrollment;