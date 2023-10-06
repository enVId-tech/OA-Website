import React, { useEffect } from "react";
import Navbar from "../../components/ts/navbar/navbar";
import Footer from "../../components/ts/footer/Footer";
import PageTitle from "../../components/ts/pagetitle/pagetitle";
import '../../components/scss/pages/subpages/admissions.scss';
import trackPageView from "../../components/ts/analytics/analytics";

const Admissions = (): React.JSX.Element => {
    useEffect((): void => {
        trackPageView();
    }, []);
    
    return (
        <div id="Admissions">
            <Navbar />
            <PageTitle height={80} mainText="Admissions" subText="Apply to Oxford!" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />
            <div id="AdmissionsMain">
                <h1 id="AdmissionsTitle">Admissions</h1>
                <div className="AdmissionsSection">
                    <h1 id="AdmissionsSectionTitle">Contact</h1>
                    <p id="AdmissionsSectionText">
                        Please read everything below related to admissions.
                        If after reading you still have questions or need support, you may contact our admissions office at 714-220-3055, to speak with Ms. Martinez or Ms. Karen Ortega.
                        You may also reach Ms. Martinez by email at martinez_lo@auhsd.us.
                    </p>
                </div>
                <div className="AdmissionsSection">
                    <h1 id="AdmissionsSectionTitle">Application Information</h1>
                    <p id="AdmissionsSectionText">
                        Oxford Academy admissions will open by September 25th at 4:00 p.m. and will close on November 3rd at 4:00 p.m.
                        More details and information will be posted on this admissions webpage once admissions opens.
                        Please see the checklist below of application requirements for incoming students.
                        <br />
                        <br />
                        The application is open to students who reside both within and outside of the Anaheim Union High School District.
                        Approximately 200 spaces are designated to students within the district, and 35 spaces are available to students who reside outside of the AUHSD district boundaries.
                        <br />
                        <br />
                        Our application will be all online this year, and we plan to hold our in-person entrance exams for incoming 7th grade students in mid- to late-January.
                        <br />
                        <br />
                        If you would like to get a jump start on your application, please see the admissions checklist documents on our below and begin gathering your materials.
                    </p>
                </div>
                <div className="AdmissionsSection">
                    <h1 id="AdmissionsSectionTitle">Grade Level Admissions</h1>
                    <p id="AdmissionsSectionText">
                        This year we will only be accepting applications for the incoming 7th grade class for the 2024-2025 school year.
                        Due to limited space we will not be holding an application process for 8th and 9th grade this year.
                    </p>
                </div>
                <div className="AdmissionsSection">
                    <h1 id="AdmissionsSectionTitle">Prospective Parent Information Night</h1>
                    <p id="AdmissionsSectionText">
                        We are hosting an in-person prospective parent and student applicant information night to cover some basic information about Oxford Academy and the application process this year on October 12th at 6:30 p.m.
                        The presentation should last approximately one hour.
                        This event will be held in the Oxford Academy Gymnasium.
                        No registration is required, but we request attendance is limited to the applicant and the applicant’s immediate family (i.e. parents or guardians; siblings only if necessary).
                    </p>
                </div>
                <div className="AdmissionsSection">
                    <h1 id="AdmissionsSectionTitle">General Timeline of Admission Events</h1>
                    <p id="AdmissionsSectionText">
                        General Timeline of Admissions Events:
                        <br />
                        <br />
                        Sept. 25, 2023  Application Window Opens by 4:00 p.m.
                        <br />
                        <br />
                        Oct. 12, 2023  Prospective Parent Information Meeting @ 6:30 p.m. in the Oxford Academy Gym (*Immediate family of applicant only; see above for details)
                        <br />
                        <br />
                        Nov. 3, 2023  Application Window Closes @ 4:00 p.m. (Firm Deadline; late applications not accepted)
                        <br />
                        <br />
                        Jan. 12, 2024  Invitation to Test (or participate in modified admissions process) will be sent out via email provided on application by this date.
                        <br />
                        <br />
                        *All applicants will be notified of the results of initial application screening.
                        <br />
                        <br />
                        Jan. 27, 2024 (Saturday) Entrance Exam TENTATIVE DATE (Exact Date TBD, we are planning on a physical, in-person exam)
                        <br />
                        <br />
                        Feb. 14, 2024  Notification of Admittance via email address provided on application.
                        <br />
                        <br />
                        *All applicants will be notified of the results of the selection process.
                        <br />
                        <br />
                        Feb. 23, 2024 @ 4:00 p.m. Deadline for Course Registration to Attend
                        <br />
                        <br />
                        *Dates may be adjusted throughout the school year
                    </p>
                </div>
                <div className="AdmissionsSection">
                    <h1 id="AdmissionsSectionTitle">Extra Information</h1>
                    <p id="AdmissionsSectionText">
                        *Paper applications are no longer accepted.
                        <br />
                        <br />
                        **All communication will be via email.
                        Please ensure your application includes an email you will use to check for communication about application status, registration, and other school processes.
                        <br />
                        <br />
                        ***Please use a private Gmail address as email addresses to schools, student accounts, and business often get blocked by firewalls and spam filters.
                        <br />
                        <br />

                        ****Documentation to verify residence will be required to register (for both AUHSD district residents and those who reside outside of the AUHSD boundaries).
                        Students will not be permitted to register and attend Oxford Academy without this proof.
                        <br />
                        <br />
                        <a href="http://findmyschool.auhsd.us/">
                            You can check whether or not your attendance is within our boundaries here
                        </a>
                    </p>
                </div>
                <div className="AdmissionsSection">
                    <h1 id="AdmissionsSectionTitle">Admissions Checklist</h1>
                    <p id="AdmissionsSectionText">
                        <a href="https://oxford.auhsd.us/files/page/9315/23_24_Admissions_Checklist_English__for_24_25_.docx.pdf">Admissions Checklist - English</a>
                        <a href="https://oxford.auhsd.us/files/page/9315/23_24_Admissions_Checklist_Spanish__for_24_25_____SPAN_Revised_.docx.pdf">Admissions Checklist - Spanish</a>
                        <br />
                        <br />
                        *Please note, transcripts are also accepted in place of report cards as long as they include the required information from the checklists above.
                    </p>
                </div>
                <div id="End">
                    <p id="AdmissionsSectionText">
                        Please check our website frequently for up-to-date information.
                        <br />
                        <br />
                        We are looking forward to receiving your application!
                        <br />
                        <br />
                        Sincerely,
                        <br />
                        <br />
                        The Oxford Academy Admissions Committee
                    </p>
                </div>
            </div>
            <Footer title="Admissions" />
        </div>
    )
}

export default Admissions;