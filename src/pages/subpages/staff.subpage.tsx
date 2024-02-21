import React from "react";
import ClassHelmet from "../../components/ts/pagetitle/title.global.module.tsx";
import Navbar from "../../components/ts/navbar/navbar.template.tsx";
import PageTitle from "../../components/ts/pagetitle/pagetitle.global.module.tsx";
import Footer from "../../components/ts/footer/footer.global.module.tsx";
import trackPageView from "../../components/ts/analytics/analytics.global.module.ts";

import '../../components/scss/pages/subpages/staff.subpage.scss';

const Staff: React.FC = (): React.JSX.Element => {
    React.useEffect((): void => {
        trackPageView();
    }, []);

    return (
        <div id="Staff">
            <ClassHelmet title="Staff" />
            <Navbar heightChange={790} />
            <PageTitle height={80} mainText="Staff" subText="Meet the staff!" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />

            <div id="StaffMain">
                <h1 id="TitleText" className="pageSectionTitle">Staff</h1>
                <h1 id="StaffSecondary">
                    <a href="https://oxford.auhsd.us/Oxford/Staff/" target="_blank" rel="noopener noreferrer">
                        To be updated soon! Check out the official Oxford Academy website for now.
                        <br />
                        <br />
                        - Erick Tran - February 21, 2024
                    </a>
                </h1>
            </div>

            <Footer />
        </div>
    )
}

export default Staff;