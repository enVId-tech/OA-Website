import React, { useState, useEffect } from "react";
import Navbar from "../../components/ts/navbar/navbar";
import Footer from "../../components/ts/footer/Footer";
import PageTitle from "../../components/ts/pagetitle/pagetitle";
import '../../components/scss/pages/subpages/bellschedule.scss'

const BellSchedule = () => {
    const [inSession, setInSession] = useState(true);

    useEffect(() => {
        const date = new Date();
        const day = date.getDay();
        const hour = date.getHours();
        const minute = date.getMinutes();

        if (day === 1) {
            if ((hour === 9 && minute >= 15) || (hour === 15 && minute <= 20)) {
                setInSession(true);
            } else {
                setInSession(false);
            }
        } else if (day === 2 || day === 4) {
            if ((hour === 8 && minute >= 30) || (hour === 15 && minute <= 20)) {
                setInSession(true);
            } else {
                setInSession(false);
            }
        } else if (day === 3 || day === 5) {
            if ((hour === 8 && minute >= 30) || (hour === 15 && minute <= 20)) {
                setInSession(true);
            } else {
                setInSession(false);
            }
        } else {
            setInSession(false);
        }
    }, []);

    return (
        <div id="BellSchedule">
            <Navbar />
            <PageTitle height={80} mainText="Bell Schedule" subText={inSession ? "School is in session!" : "Enjoy your weekend!"} oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />
            <div id="BellScheduleMain">
                <h1 id="BellScheduleTitle">Bell Schedule</h1>
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
                        <h1 className="BellScheduleSectionTitle">Block Schedule<br /><br/> Even: Tuesday & Thursday <br /><br/> Odd: Wednesday & Friday</h1>
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
            <Footer title="Bell Schedule" />
        </div>
    );
}

export default BellSchedule;