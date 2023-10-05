import React from "react";
import Navbar from "../../components/ts/navbar/navbar";
import PageTitle from "../../components/ts/pagetitle/pagetitle";
import Footer from "../../components/ts/footer/Footer";
import "../../components/scss/pages/subpages/calendar.scss";

const Calendar = (): React.JSX.Element => {
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