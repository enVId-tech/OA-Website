import React from "react";
import Navbar from "../../components/ts/navbar/navbar.template.tsx";
import PageTitle from "../../components/ts/pagetitle/pagetitle.global.module.tsx";
import Footer from "../../components/ts/footer/footer.global.module.tsx";
import trackPageView from "../../components/ts/analytics/analytics.global.module.mts";

import '../../components/scss/pages/subpages/staff.subpage.scss';

const Staff: React.FC = (): React.JSX.Element => {
    React.useEffect((): void => {
        trackPageView();
    }, []);

    return (
        <div id="Staff">
            <Navbar />
            <PageTitle height={80} mainText="Staff" subText="Meet the staff!" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />
            <div id="StaffMain">
                <h1 id="TitleText">Staff</h1>
                <h1 id="StaffSecondary">
                    <a href="https://oxford.auhsd.us/Oxford/Staff/" target="_blank" rel="noopener noreferrer">
                        Can't add content on this page due to outdated staff information on the official Oxford Site. Sorry!
                        <br />
                        <br />
                        - Erick Tran
                    </a>
                </h1>
            </div>
            <Footer title="Staff" />
        </div>
    )
}

export default Staff;