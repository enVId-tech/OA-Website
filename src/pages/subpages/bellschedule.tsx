import React, { useState, useEffect } from "react";
import Navbar from "../../components/ts/navbar/navbar";
import Footer from "../../components/ts/footer/Footer";
import PageTitle from "../../components/ts/pagetitle/pagetitle";
import '../../components/scss/pages/subpages/bellschedule.scss'

const BellSchedule = () => {
    const [inSession, setInSession] = useState<string>();

    useEffect(() => {
        // const date = new Date();
        // const day = date.getDay();
        // const hour = date.getHours();
        // const minute = date.getMinutes();

        const day: number = 1;
        const hour: number = 15;
        const minute: number = 39;

        console.log(day, hour, minute);

        const startStrings: string[] = [
            "School's in session!",
            "School's out of session!",
            "Have a great weekend!",
        ];

        const checkWeekday = (day: number) => {
            if (day >= 1 && day <= 5) {
                if (day === 1) {
                    if (hour >= 9 && hour <= 15) {
                        if (hour === 9) {
                            if (minute >= 15) {
                                setInSession(startStrings[0]);
                            } else {
                                setInSession(startStrings[1]);
                            }
                        } else if (hour === 15) {
                            if (minute <= 20) {
                                setInSession(startStrings[0]);
                            } else {
                                setInSession(startStrings[1]);
                            }
                        } else {
                            setInSession(startStrings[0]);
                        }
                    }
                } else {
                    if (hour >= 8 && hour <= 15) {
                        if (hour === 8) {
                            if (minute >= 30) {
                                setInSession(startStrings[0]);
                            } else {
                                setInSession(startStrings[1]);
                            }
                        } else if (hour === 15) {
                            if (minute <= 20) {
                                setInSession(startStrings[0]);
                            } else {
                                setInSession(startStrings[1]);
                            }
                        } else {
                            setInSession(startStrings[0]);
                        }
                    } else {
                        setInSession(startStrings[1]);
                    }
                }
            } else {
                setInSession(startStrings[2]);
            }
        }

        checkWeekday(day);
    }, []);

    return (
        <div id="BellSchedule">
            <Navbar />
            <PageTitle height={80} mainText="Bell Schedule" subText={inSession} oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />
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
            <Footer title="Bell Schedule" />
        </div>
    );
}

export default BellSchedule;