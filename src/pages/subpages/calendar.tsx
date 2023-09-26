import React from "react";
import Navbar from "../../components/ts/navbar/navbar";
import PageTitle from "../../components/ts/pagetitle/pagetitle";
import Footer from "../../components/ts/footer/Footer";

const Calendar = () => {
    return (
        <div id="Calendar">
            <Navbar />
            <PageTitle height={80} mainText="Calendar" subText="See what's happening at Oxford!" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />
            <div id="CalendarContent">
                <div className="container">
                </div>
            </div>
            <Footer title="Calendar" />
        </div>
    )
}

export default Calendar;