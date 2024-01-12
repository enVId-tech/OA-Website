import React from "react";
import Navbar from "../../components/ts/navbar/navbar.template.tsx";
import PageTitle from "../../components/ts/pagetitle/pagetitle.global.module.tsx";
import Footer from "../../components/ts/footer/footer.global.module.tsx";
import trackPageView from "../../components/ts/analytics/analytics.global.module.ts";

import "../../components/scss/pages/subpages/calendar.subpage.scss";

const Calendar: React.FC = (): React.JSX.Element => {
    React.useEffect((): void => {
        trackPageView();
    }, []);

    return (
        <div id="Calendar">
            <Navbar />
            <PageTitle height={80} mainText="Calendar" subText="See what's happening at Oxford!" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />
            <h1 id="CalendarMain">School / District Calendars</h1>
            <div id="CalendarContent">
                    <img id="ImportantDates" src="images/ImportantDatesCalendar.png" alt="ImportantDatesCalendar" />
                    <img id="DistrictCalendar" src="images/DistrictCalendar.png" alt="ImportantDatesCalendar"/>
            </div>
            <Footer title="Calendar" />
        </div>
    )
}

export default Calendar;