import React from "react";
import ClassHelmet from "../../components/ts/pagetitle/title.global.module.tsx";
import Navbar from "../../components/ts/navbar/navbar.template.tsx";
import PageTitle from "../../components/ts/pagetitle/pagetitle.global.module.tsx";
import Footer from "../../components/ts/footer/footer.global.module.tsx";
import trackPageView from "../../components/ts/analytics/analytics.global.module.ts";

import '../../components/scss/pages/subpages/PforP.module.scss';

const ProgramsForPatriots: React.FC = (): React.JSX.Element => {
    React.useEffect((): void => {
        trackPageView();
    }, []);

    return (
        <div id="ProgramsForPatriots">
            <ClassHelmet title="Programs 4 Patriots" />
            <Navbar heightChange={790} />
            <PageTitle height={80} mainText="Programs 4 Patriots" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />

            <div id="ProgramsForPatriotsMain">
                <h1 id="TitleText" className="pageSectionTitle">Programs 4 Patriots</h1>
                <h1 id="ProgramsForPatriotsSecondary">
                    Can't add content on this page due to limited access to the official Oxford Site. Sorry!
                    <br />
                    <br />
                    - Erick Tran
                </h1>
            </div>

            <Footer />
        </div>
    )
}

export default ProgramsForPatriots;