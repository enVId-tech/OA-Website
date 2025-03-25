"use client";

import React from "react";
import SubpageLayout from "@/app/_components/layouts/SubpageLayout";
import { notFound } from "next/navigation";
import Photosphere from "@/app/_components/photosphere/photosphere.global.module.tsx";
import pageCreateInformationCCDE from "@/app/_components/pages/ccde/names.ts";
import ClubsList, {Club} from "@/app/_components/pages/clubs.module.ts";

// Define page configurations
const pageConfigs = {
    administration: {
        title: "Administration",
        mainText: "Administration",
        subText: "Meet the Oxford Administration!",
        content: () => (
            <div id="AdministrationContent">
                <div id="MainDiv">
                    <h1 id="AdminTitle" className="pageSectionTitle">High Level School Administration</h1>
                </div>
                <span id="AdminDiv">
                    <div className="AdminDiv">
                        <img className="AdminImage" id="AP1" alt="Oxford Academy" src="images/Admin-Cho.png" />
                        <h2 className="AdminTitle">Assistant Principal</h2>
                        <p className="AdminName">Dr. Ester Cho</p>
                        <p className="AdminEmail">cho_es@auhsd.us</p>
                    </div>

                    <div className="AdminDiv">
                        <img className="AdminImage" id="P1" alt="Oxford Academy" src="images/Admin-Houston.png" />
                        <h2 className="AdminTitle">Principal</h2>
                        <p className="AdminName">Mrs. Amber Houston</p>
                        <p className="AdminEmail">houston_a@auhsd.us</p>
                    </div>

                    <div className="AdminDiv">
                        <img className="AdminImage" id="AP2" alt="Oxford Academy" src="images/Admin-Hurley.png" />
                        <h2 className="AdminTitle">Assistant Principal</h2>
                        <p className="AdminName">Mr. Ryan Hurley</p>
                        <p className="AdminEmail">hurley_r@auhsd.us</p>
                    </div>
                </span>
            </div>
        ),
    },
    admissions: {
        title: "Admissions",
        mainText: "Admissions",
        subText: "Apply to Oxford!",
        content: () => (
            <div id="AdmissionsMain">
                <h1 id="AdmissionsTitle" className="pageSectionTitle">Admissions</h1>
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
        )
    },
    athletics: {
        title: "Athletics",
        mainText: "Athletics",
        subText: "Compete with the best!",
        content: () => (
            <div id="AthleticsMain">
                <h1 id="AthleticsTitle" className="pageSectionTitle">Athletics</h1>
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
        ),
    },
    bellschedule: {
        title: "Bell Schedule",
        mainText: "Bell Schedule",
        subText: "Bell Schedule",
        content: () => (
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
        )
    },
    cafeteria: {
        title: "Cafeteria",
        mainText: "Cafeteria",
        subText: "",
        content: () => (
            <iframe title="cafeteria" src="https://oxford.auhsd.us/files/user/4305/file/September%20Menu.pdf" />
        )
    },
    calendar: {
        title: "Calendar",
        mainText: "Calendar",
        subText: "See what's happening at Oxford!",
        content: () => (
            <div id="CalendarMain">
                <h1 id="CalendarTitle" className="pageSectionTitle">School / District Calendars</h1>
                <div id="CalendarContent">
                    <img id="ImportantDates" src="images/ImportantDatesCalendar.png" alt="ImportantDatesCalendar" />
                    <img id="DistrictCalendar" src="images/DistrictCalendar.png" alt="ImportantDatesCalendar" />
                </div>
            </div>
        )
    },
    ccdualenrollment: {
        title: "Cypress College Dual Enrollment",
        mainText: "Cypress College Dual Enrollment",
        subText: "",
        content: () => (
            <div id="CypressCollegeDualEnrollment">
                <h1 id="CCDETitle" className="pageSectionTitle">Dual Enrollment Information</h1>

                <div id="CCDualEnrollmentMain">
                    <div id="CCDEMainInfo">
                        <h1 id="CCDE1" className="CCDEText">
                            Cypress College partners with nearby school districts to offer high school students the opportunity to earn college credit while attending high school. Students enrolled in FREE dual enrollment courses earn credit for college classes that may be eligible to transfer to a CSU or UC institution.
                        </h1>

                        <h1 id="CCDE2" className="CCDEText">
                            All pathway classes have limitations on seat capacity. The courses are offered on a first-come-first-serve basis until all seats are filled. To avoid any delays in your application process, please make sure to review the Dual enrollment Student Handbook.
                        </h1>

                        <h1 id="CCDE3" className="CCDEText">
                            As a reminder, Dual Enrollment is year-round, and students have multiple opportunities to take classes during the fall, spring, and summer terms. Please contact us directly for further questions and guidance.
                        </h1>
                    </div>
                </div>

                <div id="CCDualEnrollmentSecondary">
                    <div id="CCDESecondaryInfo">
                        <h1 id="CCDE4" className="CCDEText">
                            <strong>
                                Notice for 1st Semester Freshmen (Incoming 9th Graders):
                            </strong>

                            Per AUHSD policy, incoming fresh man are not eligible for Dual Enrollment classes during the fall semester. Freshmen will become eligible to take classes during their spring semester after their transition into high school during the fall. Rising 9th graders, may however enroll during the summer, before their first high school semester.
                        </h1>

                        <h1 id="CCDE5" className="CCDEText">
                            <strong>
                                Non-Dual Enrollment Special Admit College Courses:
                            </strong>

                            Students interested in taking a non-dual enrollment college course as a regular (non-dual enrollment) special admit student should contact specialadmit@cypresscollege.edu for additional information.
                        </h1>
                    </div>
                </div>

                <div id="AdditionalResources">
                    <div id="der" className="resources">
                        <h1 className="ResourceTitle">Dual Enrollment Registration/Virtual Front Desk</h1>

                        <a href="https://oxford.auhsd.us/files/user/1/file/Virtual%20Front%20Desk.pdf">
                            <img src="https://oxford.auhsd.us/files/user/1/image/Virtual%20Front%20Desk.jpg" alt="Virtual Front Desk" style={{ width: "85%" }} />
                        </a>
                    </div>

                    <div id="cf" className="resources">
                        <h1 className="ResourceTitle">Course Flyer</h1>

                        <a href="https://oxford.auhsd.us/files/user/1/file/CourseFlyer_AUHSD.pdf">
                            <img src="https://oxford.auhsd.us/files/user/1/image/CourseFlyer_AUHSD.jpg" alt="Course Flyer" style={{ width: "85%" }} />
                        </a>
                    </div>

                    <div id="cd" className="resources">
                        <h1 className="ResourceTitle">Course Description</h1>

                        <a href="https://oxford.auhsd.us/files/user/1/file/CourseDescriptions_AUHSD.pdf">
                            <img src="https://oxford.auhsd.us/files/user/1/image/CourseDescriptions_AUHSD.jpg" alt="Course Description" style={{ width: "85%" }} />
                        </a>
                    </div>
                </div>

                <div id="DualEnrollmentPathways">
                    <h1 id="DEPTitle">Dual Enrollment Pathways</h1>

                    <section id="DEPSelection">
                        {
                            pageCreateInformationCCDE("pathwayImages").flat().map((pathwayName: string, index: number): React.JSX.Element => {
                                return (
                                    <button id={`DEP${index + 1}`} key={`${pathwayName}${index}`} className="DEPButton" style={{ backgroundImage: `url(${pageCreateInformationCCDE("pathwayImages").flat()[index]})` }}>
                                        <h1>
                                            {pathwayName}
                                        </h1>
                                    </button>
                                )
                            })
                        }
                    </section>
                </div>

                <div id="Application">
                    <h1 id="ApplicationTitle">Getting started - How to apply</h1>

                    <section id="ApplicationSteps">
                        {
                            pageCreateInformationCCDE("applicationSteps").flat().map((step: string, index: number): React.JSX.Element => {
                                return (
                                    <div id={`AS${index + 1}`} key={`${step}${index}`} className="ApplicationStep">
                                        <h1 id={`AS${index + 1}Number`} className="ApplicationStepNumber">
                                            Step {index + 1}
                                        </h1>
                                        <h1 id={`AS${index + 1}Text`} className="ApplicationStepTitle">
                                            {step}
                                        </h1>
                                    </div>
                                )
                            })
                        }
                    </section>
                </div>

                <div id="VideoResources">
                    <h1 id="VideoResourcesTitle">Cypress College Video Resources</h1>

                    <section id="Videos">
                        {
                            pageCreateInformationCCDE("videoEmbedLinks").flat().map((embeds: string, index: number): React.JSX.Element => {
                                return (
                                    <div id={`VI${index + 1}`} className="EmbededVideo" key={`${embeds}${index}`}>
                                        <iframe title={`${embeds[index]} ${index}`} src={`${embeds}`} />
                                    </div>
                                )
                            })
                        }
                    </section>
                </div>
            </div>
        )
    },
    clubs: {
        title: "Clubs",
        mainText: "Clubs",
        subText: "Get involved!",
        content: () => (
            <div id="MainClubs">
                <div className="Club" id="Robotics">
                    <div className="ClubTitleDiv">
                        <h1 className="ClubTitle">Oxford Academy Robotics</h1>

                        <div className="ClubDescriptionDiv">
                            <p className="ClubDescription">
                                Our teams design, build, run, and manage competitive robots, while learning and teaching the scientific and technical concept behind it. Students aim to continue the culture of constantly improving and challenging ourselves and the team as a whole.
                            </p>
                        </div>
                    </div>

                    <div className="ClubImageDiv">
                        <img className="ClubImage" src="images/FRC.svg" alt="Robotics" id="Club1Img" />
                    </div>
                </div>
                <div className="Club2" id="Code">
                    <div className="ClubTitleDiv">
                        <h1 className="ClubTitle">OA CyberPatriot</h1>

                        <div className="ClubDescriptionDiv">
                            <p className="ClubDescription">
                                CyberPatriot is the National Youth Cyber Education Program. At the center of CyberPatriot is the National Youth Cyber Defense Competition. The competition puts teams of high school and middle school students in the position of newly hired IT professionals tasked with managing the network of a small company. In the rounds of competition, teams are given a set of virtual images that represent operating systems and are tasked with finding cybersecurity vulnerabilities within the images and hardening the system while maintaining critical services in a six hour period.</p>
                        </div>
                    </div>

                    <div className="ClubImageDiv">
                        {/* Placeholder Image */}
                        <img className="ClubImage" src="images/Cyberpatriot.png" alt="Code" id="Club2Img" />
                    </div>
                </div>

                <div id="GeneralClubs">
                    <h1 id="Key">Club Key</h1>

                    <span className="ClubKey">
                        <div id="Academic" className="ClubKeyTitleDiv">
                            <h1 className="ClubKeyTitle">Academic</h1>

                            <div className="ClubsList">
                                {ClubsList("Academic").map((club: Club, index: number) => (
                                    <h1 className="ClubTitle" key={`${club.club}${index}`}>{club.club}</h1>
                                ))}
                            </div>
                        </div>

                        <div id="SpecialInterest" className="ClubKeyTitleDiv">
                            <h1 className="ClubKeyTitle">Special Interest</h1>

                            <div className="ClubsList">
                                {ClubsList("Interest").map((club: Club, index: number) => (
                                    <h1 className="ClubTitle" key={`${club.club}${index}`}>{club.club}</h1>
                                ))}
                            </div>
                        </div>

                        <div id="DiversityCulture" className="ClubKeyTitleDiv">
                            <h1 className="ClubKeyTitle">Diversity & Culture</h1>

                            <div className="ClubsList">
                                {ClubsList("Culture").map((club: Club, index: number) => (
                                    <h1 className="ClubTitle" key={`${club.club}${index}`}>{club.club}</h1>
                                ))}
                            </div>
                        </div>

                        <div id="ServiceLeadership" className="ClubKeyTitleDiv">
                            <h1 className="ClubKeyTitle">Service & Leadership</h1>

                            <div className="ClubsList">
                                {ClubsList("Leadership").map((club: Club, index: number) => (
                                    <h1 className="ClubTitle" key={`${club.club}${index}`}>{club.club}</h1>
                                ))}
                            </div>
                        </div>

                        <div id="ArtsPerformingArts" className="ClubKeyTitleDiv">
                            <h1 className="ClubKeyTitle">Arts & Performing Arts</h1>

                            <div className="ClubsList">
                                {ClubsList("Performing").map((club: Club, index: number) => (
                                    <h1 className="ClubTitle" key={`${club.club}${index}`}>{club.club}</h1>
                                ))}
                            </div>
                        </div>

                        <div id="SpiritualReligious" className="ClubKeyTitleDiv">
                            <h1 className="ClubKeyTitle">Spiritual & Religious</h1>

                            <div className="ClubsList">
                                {ClubsList("Spiritual").map((club: Club, index: number) => (
                                    <h1 className="ClubTitle" key={`${club.club}${index}`}>{club.club}</h1>
                                ))}
                            </div>
                        </div>

                        <div id="PublicSpeaking" className="ClubKeyTitleDiv">
                            <h1 className="ClubKeyTitle">Public Speaking</h1>

                            <div className="ClubsList">
                                {ClubsList("Speaking").map((club) => (
                                    <h1 className="ClubTitle" key={club.club}>{club.club}</h1>
                                ))}
                            </div>
                        </div>
                    </span>
                </div>
            </div>
        )
    },
    plan504: {
        title: "504 Plan",
        mainText: "504 Plan",
        subText: "Staff 504 Plan",
        content: () => (
            <div id="Plan504Content">
                <h1 id="Plan504Title" className="pageSectionTitle">504 Plan - Access Restricted</h1>

                <div id="PlanMain">
                    <span id="UsernameElements">
                        <label id="UsernameLabel" htmlFor="Username">Username: </label>
                        <input id="Username" type="text" placeholder='Username' />
                    </span>

                    <span id="PasswordElements">
                        <label id="PasswordLabel" htmlFor="Password">Password: </label>
                        <input id="Password" type="password" placeholder='Password' />
                    </span>

                    <button id="LoginButton">Login</button>
                </div>
            </div>
        )
    },
    counseling: {
        title: "Counseling",
        mainText: "Counseling",
        subText: "Counseling",
        content: () => (
            <div></div>
        )
    },
    districtippplan: {
        title: "District IPP Plan",
        mainText: "District IPP Plan",
        subText: "",
        content: () => (
            <iframe title="districtippplan" src="https://www.auhsd.us/files/user/1/file/Districts%20IIPP%20Plan%20RESTATED%20-%2007_31_20.pdf" />
        )
    },
    familyengagement: {
        title: "Family Engagement",
        mainText: "Family Engagement",
        subText: "",
        content: () => (
            <div></div>
        )
    },
    getdirections: {
        title: "Get Directions",
        mainText: "Get Directions",
        subText: "",
        content: () => (
            <div id="GetDirectionsMain">
                <h1 id="GetDirectionsTitle" className="pageSectionTitle">Directions to Oxford Academy</h1>

                <h1 id="Address">
                    5172 Orange Ave
                    <br />
                    Cypress, CA 90630
                </h1>

                <iframe title="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.5543081348337!2d-118.044468384791!3d33.823812980668826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd2e989ef215cf%3A0x6bf77d12dee0340!2s5172%20Orange%20Ave%2C%20Cypress%2C%20CA%2090630!5e0!3m2!1sen!2sus!4v1640026582184!5m2!1sen!2sus" width="100%" height="450" allowFullScreen={true} />
            </div>
        )
    },
    generalinformation: {
        title: "General Information",
        mainText: "General Information",
        subText: "Learn more about our school!",
        content: () => (
            <div id="GeneralInformationMain">
                <h1 id="GenInfoHMain" className="pageSectionTitle">General Information</h1>

                <span id="TopInfo">
                    <img id="GeneralInformationImage" src="images/OxfordAcademyFullLogo.webp" alt="GeneralInformation" />
                    <h1 id="MainText">is a seventh through twelfth grade college preparatory public school that opened in September of 1998.  Recognized as a California Distinguished School, OA draws students from the entire attendance area of the Anaheim Union High School District and its surrounding areas.</h1>
                </span>

                <hr />

                <div id="HS">
                    <h1 id="BestHSLabel">Oxford Academy leads with Excellence, Honor, Creativity, Caring & Fun</h1>
                    <img id="BestHSImage" src="images/HS2023.jpeg" alt="BestHS" />
                </div>

                <div id="ExtraInfo">
                    <button id="Prof" className="buttonMain" onClick={() => window.open("https://oxford.auhsd.us/files/public_files/OA-Profile_web_2020-2021.pdf", "_blank")}>OA Profile</button>
                    <button id="Info" className="buttonMain" onClick={() => window.open("https://oxford.auhsd.us/files/user/3598/file/OA_InfoCard.pdf", "_blank")}>OA Info Card</button>
                    <button id="Pathways" className="buttonMain" onClick={() => window.open("https://oxford.auhsd.us/files/user/3598/file/CareerPathways_OxfordAcademy.pdf", "_blank")}>OA Pathways</button>
                </div>

                <span id="Awards">
                    <div id="BHS" className="AwardTypes">
                        <img id="BHSImage" className="AwardImage" src="images/USN-Gold.png" alt="BestHS" />
                        <p className="MainText">#1 in CA, #9 in the US</p>
                        <p className="SubText">(2023)</p>
                    </div>

                    <div id="CalDistS" className="AwardTypes">
                        <img id="CDSImage" className="AwardImage" src="images/DistingSchool-logo.png" alt="BestHS" />
                        <p className="MainText">CA Distinguished School</p>
                        <p className="SubText">(2011, 2019, 2021)</p>
                    </div>

                    <div id="BRS" className="AwardTypes">
                        <img id="BRSImage" className="AwardImage" src="images/NatlBlueRibbon_USDE.png" alt="BestHS" />
                        <p className="MainText">National Blue Ribbon</p>
                        <p className="SubText">(2013, 2019)</p>
                    </div>

                    <div id="CalDemS" className="AwardTypes">
                        <img id="CDSImage" className="AwardImage" src="images/CalDemSchool.png" alt="BestHS" />
                        <p className="MainText">CA Democracy School</p>
                        <p className="SubText">(2020)</p>
                    </div>
                </span>
            </div>
        )
    },
    healthoffice: {
        title: "Health Office",
        mainText: "Health Office",
        subText: "Learn more about our school!",
        content: () => (
            <div id="HealthOfficeMain">
                <h1 id="TitleText" className="pageSectionTitle">Health Office</h1>

                <div id="Top">
                    <h1 id="TopTitleText">Healthy Students Learn Better at <strong>Oxford Academy</strong></h1>
                </div>

                <div id="AboutUs" className="InfoDiv">
                    <h1 id="AboutTitle" className="InfoTitle">About Us</h1>
                    <h1 id="AboutContent" className="InfoContent">Oxford Academy is staffed with a Health Technician, trained in first aid and CPR, who on campus from 7:30 am – 4:00 pm daily. The primary role of the Health Technician is to provide basic first aid for unexpected injuries, to assist with medications when it is determined they must be given at school; and to maintain health records on all students enrolled.  The School Nurse oversees health services at several school sites in the AUHSD and is able to be reached by cell phone during school hours.</h1>
                </div>

                <div id="Visits" className="InfoDiv">
                    <h1 id="VisitsTitle" className="InfoTitle">Health Office Visits</h1>
                    <h1 id="VisitsContent" className="InfoContent">Except in the case of an emergency, all students must have a pass from their teacher to visit the Health Office.  Walk-in&#39;s during passing period will be returned to class for a pass. Communication with the Attendance and Health Office is important.  No student will be allowed to leave with another person (even a relative) unless that person is listed as an emergency contact if the parent/guardian cannot be reached first.  It is the responsibility of the parent/guardian to keep their emergency contact information current.</h1>
                </div>

                <div id="Medications" className="InfoDiv">
                    <h1 id="MedicationsTitle" className="InfoTitle">Medications</h1>
                    <h1 id="MedicationsContent" className="InfoContent">All medications and/or forms should be taken directly to the Health Office located in the Counseling Center.  If you have any questions or concerns, you can reach Rebecca Gibb the Health Technician.  By law, the school cannot administer any medication, including over the counter medication, or treatment without parent permission and a physician&#39;s order. We can assist you with this process, please ask.</h1>

                    <div className="SubInfoDiv">
                        <h1 className="SubInfoTitle">
                            In compliance with Ed. Code Section 49423, no medication will be accepted or administered at school without all of the following conditions being met
                        </h1>

                        <ul className="SubInfoList">
                            <li className="SubInfoListItem">A written statement signed by the licensed authorized health care provider/dentist specifying the reason for the medication, the name, dosage, time, route, side effect; and specific instructions for emergency treatment must be on file at school.  </li>
                            <li className="SubInfoListItem">A signed request from the parent/guardian must be on file at school.</li>
                            <li className="SubInfoListItem">Medication must be delivered to the school by the parent/guardian or other responsible adult.</li>
                            <li className="SubInfoListItem">Medication must be in your child&#39;s original, labeled pharmacy container written in English.</li>
                            <li className="SubInfoListItem">All liquid medication must be accompanied by an appropriate measuring device.</li>
                            <li className="SubInfoListItem">If pill splitting is required to obtain the correct dose of medication to be administered, only pills that are scored may be split, scored pills may be split in half only, and a commercial pill splitting device should be used for correct splitting.</li>
                            <li className="SubInfoListItem">Over the counter medication that has been prescribed by an authorized health care provider must be in its original container.</li>
                            <li className="SubInfoListItem">A separate form is required for each medication.</li>
                        </ul>
                    </div>
                </div>

                <div id="Forms" className="InfoDiv">
                    <h1 id="FormsTitle" className="InfoTitle">Forms</h1>
                    <h1 id="FormsContent" className="InfoContent">Please let the Health Office know if your child has a life threatening illness such as diabetes, seizure disorders, or severe allergies (bees/food/medication). We want to be prepared to provide safe care for your child. To enable us to provide safe care for your child at school, please submit the required, completed form(s)</h1>

                    <div className="SubInfoDiv">
                        <ul className="SubInfoList">
                            <li className="SubInfoListItem health" onClick={() => window.open("https://oxford.auhsd.us/files/public_files/FoodAllergy_ActionPlan.pdf", "_blank")}>Food Allergy</li>
                            <li className="SubInfoListItem health" onClick={() => window.open("https://oxford.auhsd.us/files/public_files/MedRequestForm_English10-3-2018.pdf", "_blank")}>Medication Request Form</li>
                            <li className="SubInfoListItem health" onClick={() => window.open("https://oxford.auhsd.us/files/public_files/PhysicianMedicalReport.pdf", "_blank")}>Physician Medical Report</li>
                            <li className="SubInfoListItem health" onClick={() => window.open("https://oxford.auhsd.us/files/public_files/SeizureHistory.pdf", "_blank")}>Seizure History</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    },
    library: {
        title: "Library",
        mainText: "Library",
        subText: "",
        content: () => (
            <div id="LibraryMain"></div>
        )
    },
    oxfordsitemap: {
        title: "Oxford Sitemap",
        mainText: "Oxford Academy Site Map",
        subText: "",
        content: () => (
            <div id="OxfSiteMapMain">
                <h1 id="TitleText" className="pageSectionTitle">Oxford Academy Site Map</h1>
                <img id="OxfSite" src="images/Map.png" alt="Oxford Academy Site Map" onClick={() => {
                    window.open("https://oxford.auhsd.us/files/user/1/file/OXFORD%20SITE%20MAP%202023%20Back%20cover%20inside.pdf", "_blank");
                }} />
            </div>
        )
    },
    pforp: {
        title: "Programs 4 Patriots",
        mainText: "Programs 4 Patriots",
        subText: "",
        content: () => (
            <div id="ProgramsForPatriotsMain">
                <h1 id="TitleText" className="pageSectionTitle">Programs 4 Patriots</h1>
                <h1 id="ProgramsForPatriotsSecondary">
                    Can&#39;t add content on this page due to limited access to the official Oxford Site. Sorry!
                    <br />
                    <br />
                    - Erick Tran
                </h1>
            </div>
        )
    },
    policies: {
        title: "Policies",
        mainText: "Policies",
        subText: "",
        content: () => (
            <div id="PoliciesMain">
                <h1 id="TitleText" className="pageSectionTitle">Policies</h1>
                <h1 id="PoliciesSecondary">
                    For your reference, a copy of the MAIN PAGES Policy Pages can be found on the Student Planner. You can also download the pages below.
                </h1>

                <ul id="PoliciesList">
                    <li className="PoliciesListItem" onClick={() => window.open("https://oxford.auhsd.us/files/page/77583/MAIN_PAGES_Policy_Pages_2019_2020_power_school_page.pdf", "_blank")}>Vision Statement</li>
                    <li className="PoliciesListItem" onClick={() => window.open("https://oxford.auhsd.us/files/page/77583/Oxford_Academy_BYOD_Policy__1_.pdf", "_blank")}>Bring Your Own Device</li>
                    <li className="PoliciesListItem" onClick={() => window.open("https://oxford.auhsd.us/files/page/77583/Student_Traffic_and_Parking_Agreement.pdf", "_blank")}>Student Traffic and Parking Agreement</li>
                    <li className="PoliciesListItem" onClick={() => window.open("https://oxford.auhsd.us/files/page/77583/7901_03_Use_of_Technology2014_0519___Regulation.pdf", "_blank")}>Use of Technology</li>
                </ul>
            </div>
        )
    },
    principalsmessage: {
        title: "Principal's message",
        mainText: "Principal's message",
        subText: "A message from Principal Houston",
        content: () => (
            <>
                <h1 id="PrincipalsMessageTitle" className="pageSectionTitle">
                    Principal&#39;s Message
                </h1>

                <div id="PrincipalsMessageMain">
                    <img id="PrincipalsMessageImage" src="images/Principal.jpg" alt="Principal Houston" />

                    <p id="Principal">Oxford Academy Families,
                        <br />
                        <br />
                        My name is Amber Houston, and I am your principal at Oxford Academy.
                        <br />
                        <br />
                        I am so happy to be part of the Patriot Family and continue the excellence at OA.  I have a long history with AUHSD and saw the creation of OA years ago and of course have seen the amazing things that have happened here.  I grew up in the city of Cypress, and my parents still live here.  I attended Walker Junior High School and Kennedy High School receiving a solid education and wonderful experiences that have shaped me into the person I am today.  I had amazing teachers and principals, and possibly that is why I am so passionate about serving this community that gave me so much.  And most recently, the last three years, I have traveled across Asia as an ambassador of AUHSD in learning and recruiting international students to study in AUHSD.
                        <br />
                        <br />
                        I recently went through a “revisioning” with Lexington, and I am aware that collectively the Oxford staff, students, parents and community wrote a compelling vision statement for this amazing school– “Oxford Academy is a community of innovators dedicated to nurturing the holistic growth of life-long learners who will lead and serve an evolving local and global society”. I intend to truly embody this, flourish it and ensure all decisions made support what we as an educational community want our school to be!  Along with our vision, we have our AUHSD 5 C’s: critical thinking, creativity, collaboration, communication, and character that foster not only the academic side of learning, but also the soft skills that are necessary for our students to succeed in the real world.  At Oxford Academy, we will continue the tradition of excellence in all we do.
                        <br />
                        <br />
                        My greatest charge is to create well rounded, experienced, and healthy students equipped with the diverse skills of an ever changing world.  I know academic excellence is a top priority at Oxford Academy, but I believe we are capable of that and more!  That is my promise to you.  I find it imperative that the school and home are connected to best support each child.  Especially our incoming 7th graders who are embarking on a totally new educational setting going from one teacher to eight, moving around in classes and parents not on campus like they used to be.  I will do my best to keep this connection alive and grow it.  I have two sons myself---one an 8th grader and the other a new freshman in a high performing school.  I truly know as a parent what you are going through and I try to reflect on my own personal experiences to make yours better!  I go to work every day and challenge myself to be the principal I want for my own kids and challenge the teachers to do the same.
                        <br />
                        <br />
                        I am humbled to serve this diverse and upstanding community.  I am proud to be a patriot.  It is with great appreciation that I will be on this 6-year  journey with you and your students.  </p>
                </div>
            </>
        )
    },
    ptsa: {
        title: "PTSA",
        mainText: "PTSA",
        subText: "Parent Teacher Student Association",
        content: () => (
            <iframe title="ptsa" src="https://oxford.auhsd.us/files/user/5529/file/Website%20OA%20PTSA%202023-2024%20Board%20-%20Google%20Docs.pdf" />
        )
    },
    schoolsitecouncil: {
        title: "School Site Council",
        mainText: "School Site Council",
        subText: "",
        content: () => (
            <div></div>
        )
    },
    staff: {
        title: "Staff",
        mainText: "Staff",
        subText: "Meet the staff!",
        content: () => (
            <div id="StaffMain">
                <h1 id="TitleText" className="pageSectionTitle">Staff</h1>
                <h1 id="StaffSecondary">
                    <a href="https://oxford.auhsd.us/Oxford/Staff/" target="_blank" rel="noopener noreferrer">
                        To be updated soon! Check out the official Oxford Academy website for now.
                        <br />
                        <br />
                        - Erick Tran - February 21, 2024
                    </a>
                </h1>
            </div>
        )
    },
    titleix: {
        title: "Title IX",
        mainText: "Title IX",
        subText: "",
        content: () => (
            <iframe title="titleix" src="https://oxford.auhsd.us/files/user/1/file/AUHSD%20-%20Website%20Info%20-%20Title%20IX%20-%20Students.pdf" />
        )
    },
    tour: {
        title: "Tour",
        mainText: "Tour",
        subText: "",
        content: () => (
            <div id="TourMain">
                <h1 id="TitleText" className="pageSectionTitle">Tour</h1>

                <Photosphere src=""/>

                {/* <iframe src="https://www.google.com/maps/embed?pb=!4v1709016137056!6m8!1m7!1sCAoSLEFGMVFpcE5Fcm9GTjhCc0tubnJGaDgwX3R2VXRla3dDNFV2ZGVUVFRvTF9E!2m2!1d33.8238182!2d-118.0429382!3f356.36724021617965!4f-29.230983180823642!5f0.4000000000000002" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
        )
    },
    transcript: {
        title: "Transcript",
        mainText: "Transcript",
        subText: "",
        content: () => (
            <div id="TranscriptMain">
                <h1 id="TitleText" className="pageSectionTitle">Transcript</h1>

                <div id="Parchment">
                    <h1 id="ParchmentMain">What is Parchment?
                        <br />
                        <br />
                        Parchment is the exclusive site where current students, alumni, and third party companies can obtain digital copies of official transcripts, immunization record, and other documents. This process is done electronically and it is sent (digitally or physically, as requested) directly to the destination the student/alumnus/company chooses. Please note that you must create an account in order to request the documents (including transcripts).
                    </h1>

                    <br />
                    <br />

                    <div id="Alumni">
                        <h1 id="AlumniTitle">Alumni Transcript Request</h1>
                        <h1 id="AlumniSubTitle">
                            Please visit the Parchment link below to request a digital copy of your official transcript.
                        </h1>

                        <a id="AlumniLink" href="https://www.parchment.com/u/registration/5583/account" target="_blank">Parchment</a>
                    </div>

                    <br />
                    <br />

                    <div id="Student">
                        <h1 id="StudentTitle">Current Student Transcript Request Only</h1>
                        <h1 id="StudentSubTitle">
                            If you are a current student and would like to obtain a paper copy, click on the link below
                        </h1>

                        <a id="StudentLink" href="https://docs.google.com/forms/d/1FflDpc3lq6b4KcJmymckDULAaSiygiBFy4zE6ZySF8o/viewform?edit_requested=true#response=ACYDBNjyMQ9R6VbU3JVJMURPpaiI-3TlMTxNn8k5GRteSwsLWkmwW42RjIRwNvpW-MHl6C4" target="_blank">Transcript Request Form</a>
                    </div>
                </div>
            </div>
        )
    },
    transportation: {
        title: "Transportation",
        mainText: "Transportation",
        subText: "",
        content: () => (
            <div id="TransportationMain">
                <h1 id="TitleText" className="pageSectionTitle">Transportation</h1>
                <img id="BusImage" src="images/BusStops.png" alt="BusImage" />
            </div>
        )
    },
    visionslcs: {
        title: "Vision & SLCS",
        mainText: "Vision & SLCS",
        subText: "",
        content: () => (
            <div id="VisionSLCSMain">
                <h1 id="TitleText" className="pageSectionTitle">Vision & SLCS</h1>
                <h1 id="VisionMain">Oxford Academy is a community of innovators dedicated to nurturing the holistic growth of life-long learners who will lead and serve an evolving local and global society.</h1>

                <hr />

                <div id="SchoolLearnerOutcomes">
                    <h1 id="SchoolMainOutcomes">Schoolwide Learner Outcomes</h1>
                    <h1 id="CriticalThinking" className="C5S">
                        Critical Thinking
                        <br />
                        OA students are critical thinkers whose curiosity inspires them to be innovative and find new ways to problem solve.
                    </h1>

                    <h1 id="Communication" className="C5S">
                        Communication
                        <br />
                        OA students are confident and eloquent individuals who advocate for their needs and express themselves effectively.
                    </h1>

                    <h1 id="Collaboration" className="C5S">
                        Collaboration
                        <br />
                        OA students help one another in diverse teams that demonstrate respect, flexibility, and recognize that they can accomplish more together than on their own.
                    </h1>

                    <h1 id="Creativity" className="C5S">
                        Creativity
                        <br />
                        OA students are imaginative and produce authentic products, projects and programs.
                    </h1>

                    <h1 id="Character" className="C5S">
                        Character
                        <br />
                        OA students are engaged, ethical, empathetic and respectful individuals who embrace diversity and provide a sense of belonging for everyone in the OA family.
                    </h1>

                    <h1 id="Community" className="C5S">
                        Community Engagement
                        <br />
                        OA students are active, connected, give back, and think beyond themselves to serve their school, home, local and global community.
                    </h1>
                </div>
            </div>
        )
    },
    workpermit: {
        title: "Work Permit",
        mainText: "Work Permit",
        subText: "",
        content: () => (
            <div id="WorkPermitMain"></div>
        )
    }
};

export default function SubpageDynamic({ params }: { params: { subpage: string } }) {
    const { subpage } = params;
    const config = pageConfigs[subpage as keyof typeof pageConfigs];

    if (!config) {
        return notFound();
    }

    const { title, mainText, subText, content: Content } = config;

    return (
        <SubpageLayout
            title={title}
            mainText={mainText}
            subText={subText}
        >
            <Content />
        </SubpageLayout>
    );
}

// Generate static paths
export function generateStaticParams() {
    return Object.keys(pageConfigs).map((subpage) => ({
        subpage,
    }));
}