import React from "react";
import Navbar from "../../components/ts/navbar/navbar.template.tsx";
import PageTitle from "../../components/ts/pagetitle/pagetitle.global.module.tsx";
import Footer from "../../components/ts/footer/footer.global.module.tsx";
import trackPageView from "../../components/ts/analytics/analytics.global.module.ts";

import '../../components/scss/pages/subpages/policy.subpage.scss';

const Policies: React.FC = (): React.JSX.Element => {
    React.useEffect((): void => {
        trackPageView();
    }, []);

    const handleClick = (type: string): void => {
        switch (type) {
            case "Vision": {
                window.open("https://oxford.auhsd.us/files/page/77583/MAIN_PAGES_Policy_Pages_2019_2020_power_school_page.pdf", "_blank");
                break;
            }
            case "BYOD": {
                window.open("https://oxford.auhsd.us/files/page/77583/Oxford_Academy_BYOD_Policy__1_.pdf", "_blank");
                break;
            }
            case "Traffic": {
                window.open("https://oxford.auhsd.us/files/page/77583/Student_Traffic_and_Parking_Agreement.pdf", "_blank");
                break;
            }
            case "UseOfTechnology": {
                window.open("https://oxford.auhsd.us/files/page/77583/7901_03_Use_of_Technology2014_0519___Regulation.pdf", "_blank");
                break;
            }
            default: {
                break;
            }
        }
    }
    return (
        <div id="Policies">
            <Navbar />
            <PageTitle height={80} mainText="Policies" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />
            <div id="PoliciesMain">
                <h1 id="TitleText">Policies</h1>
                <h1 id="PoliciesSecondary">
                    For your reference, a copy of the MAIN PAGES Policy Pages can be found on the Student Planner. You can also download the pages below.
                </h1>

                <ul id="PoliciesList">
                    <li className="PoliciesListItem" onClick={() => handleClick("Vision")}>Vision Statement</li>
                    <li className="PoliciesListItem" onClick={() => handleClick("BYOD")}>Bring Your Own Device</li>
                    <li className="PoliciesListItem" onClick={() => handleClick("Traffic")}>Student Traffic and Parking Agreement</li>
                    <li className="PoliciesListItem" onClick={() => handleClick("UseOfTechnology")}>Use of Technology</li>
                </ul>
            </div>
            <Footer title="Policies" />
        </div>
    )
}

export default Policies;