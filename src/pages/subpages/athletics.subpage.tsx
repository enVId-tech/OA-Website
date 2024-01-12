import React from "react";
import Navbar from "../../components/ts/navbar/navbar.template.tsx";
import PageTitle from "../../components/ts/pagetitle/pagetitle.global.module.tsx";
import Footer from "../../components/ts/footer/footer.global.module.tsx";
import trackPageView from "../../components/ts/analytics/analytics.global.module.ts";

import '../../components/scss/pages/subpages/athletics.subpage.scss';

const Athletics: React.FC = (): React.JSX.Element => {
    React.useEffect((): void => {
        trackPageView();
    }, []);
    
    return (
        <div id="Athletics">
            <Navbar />
            <PageTitle height={80} mainText="Athletics" subText="Compete with the best!" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />
            <div id="AthleticsMain">
                <h1 id="AthleticsTitle">Athletics</h1>
                <p id="AthleticsText">
                    Oxford Academy is a member of the 605 League and competes under CIF Southern Section rules.  Eligibility rules apply to all games including practice, inter-school scrimmage, league, tournament, and play-off games.
                    <br />
                    <br />
                    In order to compete in interscholastic athletics a student must:
                    <br />
                    <br />
                    - Be under nineteen years of age by August 31 of the current school year
                    <br />
                    <br />
                    - Be academically eligible per the Anaheim Union High School District
                    <br />
                    <br />
                    - Be residentially eligible per CIF
                    <br />
                    <br />
                    - Have not participated in any tryout or competition for a professional or collegiate team
                    <br />
                    <br />
                    - Have not participated with outside teams of the same sport during that season of sport
                    <br />
                    <br />
                    - Thoroughly read the Oxford Athletic Standards and both student and parent must sign the forms included in the tab marked HS Eligibility Documents
                </p>
            </div>
            <Footer title="Athletics" />
        </div>
    );
}

export default Athletics;