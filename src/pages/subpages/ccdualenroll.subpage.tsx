import React from "react";
import ClassHelmet from "../../components/ts/pagetitle/title.global.module.tsx";
import Navbar from "../../components/ts/navbar/navbar.template.tsx";
import PageTitle from "../../components/ts/pagetitle/pagetitle.global.module.tsx";
import Footer from "../../components/ts/footer/footer.global.module.tsx";
import trackPageView from "../../components/ts/analytics/analytics.global.module.ts";

import '../../components/scss/pages/subpages/ccdualenroll.subpage.scss';

const CCDualEnrollment: React.FC = (): React.JSX.Element => {
    React.useEffect((): void => {
        trackPageView();
    }, []);

    return (
        <div id="CCDualEnrollment">
            <ClassHelmet title="Cypress College Dual Enrollment" />
            <Navbar />
            <PageTitle height={80} mainText="Cypress College Dual Enrollment" oxfLogo={false} backgroundLink="CypressCollegeBanner.png" backgroundVhPreDown={-100} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={5} titleVhPreDown={0} />

            <h1 id="CCDETitle">Cypress Dual Enrollment Information</h1>
            <div id="CCDualEnrollmentMain">
                <div id="CCDEMainInfo">
                    <h1 id="CCD1">
                        Cypress College partners with nearby school districts to offer high school students the opportunity to earn college credit while attending high school. Students enrolled in FREE dual enrollment courses earn credit for college classes that may be eligible to transfer to a CSU or UC institution.
                    </h1>
                    <h1 id="CCD2">
                        All pathway classes have limitations on seat capacity. The courses are offered on a first-come-first-serve basis until all seats are filled. To avoid any delays in your application process, please make sure to review the Dual enrollment Student Handbook.
                    </h1>
                    <h1 id="CCD3">
                        As a reminder, Dual Enrollment is year-round, and students have multiple opportunities to take classes during the fall, spring, and summer terms. Please contact us directly for further questions and guidance.
                    </h1>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default CCDualEnrollment;