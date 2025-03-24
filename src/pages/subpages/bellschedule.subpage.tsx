import React from "react";
import ClassHelmet from '../../components/ts/pagetitle/title.global.module.tsx';
import Navbar from "../../components/ts/navbar/navbar.template.tsx";
import PageTitle from "../../components/ts/pagetitle/pagetitle.global.module.tsx";
import Footer from "../../components/ts/footer/footer.global.module.tsx";
import trackPageView from "../../components/ts/analytics/analytics.global.module.ts";

import checkInClass from "../../components/ts/pages/bell/bellschedule.module.ts";

import '../../components/scss/pages/subpages/bellschedule.module.scss'


const BellSchedule: React.FC = (): React.JSX.Element => {
    const [sessionText, setSessionText]: [string, React.Dispatch<React.SetStateAction<string>>] = React.useState<string>("");

    React.useEffect((): void => {
        trackPageView();

        setSessionText(checkInClass());
    }, []);

    return (
        <div id="BellSchedule">
            <ClassHelmet title="Bell Schedule" />
            <Navbar heightChange={790} />
            <PageTitle height={80} mainText="Bell Schedule" subText={sessionText} oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />

            <div id="BellScheduleMain">
                <h1 id="BellScheduleTitle" className="pageSectionTitle">Bell Schedule</h1>
                <span id="BellScheduleText">
                    <div className="BellScheduleSection">
                        <h1 className="BellScheduleSectionTitle">Late Start: Mondays</h1>
                        <p id="Periods">
                            Period 1: 9:15 - 9:55
                            <br />
                            Period 2: 9:59 - 10:34
                            <br />
                            Period 3: 10:39 - 11:14
                            <br />
                            Period 4: 11:18 - 11:53
                            <br />
                            Connections: 11:53 - 12:14
                            <br />
                            Lunch: 12:14 - 12:44
                            <br />
                            Period 5: 12:48 - 1:23
                            <br />
                            Period 6: 1:27 - 2:02
                            <br />
                            Period 7: 2:06 - 2:41
                            <br />
                            Period 8: 2:45 - 3:20
                        </p>
                    </div>
                    
                    <div className="BellScheduleSection">
                        <h1 className="BellScheduleSectionTitle">Block Schedule<br /><br /> Even: Tuesday & Thursday <br /><br /> Odd: Wednesday & Friday</h1>
                        <p id="Periods">
                            Period 1/2: 8:30 - 9:55
                            <br />
                            Period 3/4: 10:00 - 11:25
                            <br />
                            Connections: 11:25 - 11:50
                            <br />
                            Lunch: 11:50 - 12:20
                            <br />
                            Period 5/6: 12:25 - 1:50
                            <br />
                            Period 7/8: 1:55 - 3:20
                        </p>
                    </div>
                </span>
            </div>

            <Footer />
        </div>
    );
}

export default BellSchedule;