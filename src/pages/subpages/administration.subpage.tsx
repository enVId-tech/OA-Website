import React from "react";
import ClassHelmet from '../../components/ts/pagetitle/title.global.module.tsx';
import Navbar from "../../components/ts/navbar/navbar.template.tsx";
import PageTitle from "../../components/ts/pagetitle/pagetitle.global.module.tsx";
import Footer from "../../components/ts/footer/footer.global.module.tsx";
import trackPageView from "../../components/ts/analytics/analytics.global.module.ts";

import '../../components/scss/pages/subpages/administration.subpage.scss';

const Administration: React.FC = (): React.JSX.Element => {
    React.useEffect((): void => {
        trackPageView();
    }, []);
    
    return (
        <div id="Administration">
            <ClassHelmet title="Administration" />
            <Navbar />
            <PageTitle height={80} mainText="Administration" subText="Meet the Oxford Administration!" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />
            <div id="AdministrationContent">
                <div id="MainDiv">
                    <h1 id="AdminTitle">High Level School Administration</h1>
                </div>
                <span id="AdminDiv">
                    <div className="AdminDiv">
                        <img className="AdminImage" id="AP1" alt="Oxford Academy" src="images/Admin-Cho.png"/>
                        <h2 className="AdminTitle">Assistant Principal</h2>
                        <p className="AdminName">Dr. Ester Cho</p>
                        <p className="AdminEmail">cho_es@auhsd.us</p>
                    </div>
                    <div className="AdminDiv">
                        <img className="AdminImage" id="P1" alt="Oxford Academy" src="images/Admin-Houston.png"/>
                        <h2 className="AdminTitle">Principal</h2>
                        <p className="AdminName">Mrs. Amber Houston</p>
                        <p className="AdminEmail">houston_a@auhsd.us</p>
                    </div>
                    <div className="AdminDiv">
                        <img className="AdminImage" id="AP2" alt="Oxford Academy" src="images/Admin-Hurley.png"/>
                        <h2 className="AdminTitle">Assistant Principal</h2>
                        <p className="AdminName">Mr. Ryan Hurley</p>
                        <p className="AdminEmail">hurley_r@auhsd.us</p>
                    </div>
                </span>
            </div>
            <Footer />
        </div>
    );
}

export default Administration;