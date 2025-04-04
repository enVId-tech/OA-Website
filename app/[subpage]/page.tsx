"use server";
// Regular imports
import React from "react";
import SubpageLayout from "@/app/_components/layouts/SubpageLayout";
import { notFound } from "next/navigation";
import Photosphere from "@/app/_components/photosphere/photosphere.global.module.tsx";
import pageCreateInformationCCDE from "@/app/_components/pages/ccde/names.ts";
import ClubsList, {Club} from "@/app/_components/pages/clubs.module.ts";

// SCSS/Styling imports
import plan504 from "@/styles/pages/subpages/504plan.module.scss";
import administration from "@/styles/pages/subpages/administration.module.scss";
import admissions from "@/styles/pages/subpages/admissions.module.scss";
import athletics from "@/styles/pages/subpages/athletics.module.scss";
import bellschedule from "@/styles/pages/subpages/bellschedule.module.scss";
import calendar from "@/styles/pages/subpages/calendar.module.scss";
import cafeteria from "@/styles/pages/subpages/cafeteria.module.scss";
import ccdualenroll from "@/styles/pages/subpages/ccdualenroll.module.scss";
import familyengagement from "@/styles/pages/subpages/familyengagement.module.scss";
import clubs from "@/styles/pages/subpages/clubs.module.scss";
import counseling from "@/styles/pages/subpages/counseling.module.scss";
import districtippplan from "@/styles/pages/subpages/districtippplan.module.scss";
import getdirections from "@/styles/pages/subpages/getdirections.module.scss";
import pforp from "@/styles/pages/subpages/pforp.module.scss";
import principalsmessage from "@/styles/pages/subpages/principalsmessage.module.scss";
import ptsa from "@/styles/pages/subpages/ptsa.module.scss";
import schoolsitecouncil from "@/styles/pages/subpages/schoolsitecouncil.module.scss";
import staff from "@/styles/pages/subpages/staff.module.scss";
import titleix from "@/styles/pages/subpages/titleix.module.scss";
import transcript from "@/styles/pages/subpages/transcript.module.scss";
import tour from "@/styles/pages/subpages/tour.module.scss";
import transportation from "@/styles/pages/subpages/transportation.module.scss";
import visionslcs from "@/styles/pages/subpages/visionslcs.module.scss";
import workpermit from "@/styles/pages/subpages/workpermit.module.scss";
import PoliciesPage from "@/app/_components/pages/PoliciesPage.tsx";
import OxfordSitemapPage from "@/app/_components/pages/OxfordSitemapPage.tsx";
import Image from "next/image";
import HealthOfficePage from "@/app/_components/pages/HealthOfficePage.tsx";
import GeneralInformationPage from "@/app/_components/pages/GeneralInformationPage.tsx";

// Define page configurations
const pageConfigs = {
    administration: {
        title: "Administration",
        mainText: "Administration",
        subText: "Meet the Oxford Administration!",
        content: () => (
            <div className={administration.administrationContent}>
                <div className={administration.mainDiv}>
                    <h1 className={`${administration.adminTitle} pageSectionTitle`}>High Level School Administration</h1>
                </div>
                <span className={administration.adminDiv}>
                <div className={administration.adminDivItem}>
                    <Image className={administration.adminImage} id="AP1" alt="Oxford Academy" src="images/Admin-Cho.png" />
                    <h2 className={administration.adminTitleText}>Assistant Principal</h2>
                    <p className={administration.adminName}>Dr. Ester Cho</p>
                    <p className={administration.adminEmail}>cho_es@auhsd.us</p>
                </div>

                <div className={administration.adminDivItem}>
                    <Image className={administration.adminImage} id="P1" alt="Oxford Academy" src="images/Admin-Houston.png" />
                    <h2 className={administration.adminTitleText}>Principal</h2>
                    <p className={administration.adminName}>Mrs. Amber Houston</p>
                    <p className={administration.adminEmail}>houston_a@auhsd.us</p>
                </div>

                <div className={administration.adminDivItem}>
                    <Image className={administration.adminImage} id="AP2" alt="Oxford Academy" src="images/Admin-Hurley.png" />
                    <h2 className={administration.adminTitleText}>Assistant Principal</h2>
                    <p className={administration.adminName}>Mr. Ryan Hurley</p>
                    <p className={administration.adminEmail}>hurley_r@auhsd.us</p>
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
            <div className={admissions.admissionsMain}>
                <h1 className={`${admissions.admissionsTitle} pageSectionTitle`}>Admissions</h1>
                <div className={admissions.admissionsSection}>
                    <h1 className={admissions.admissionsSectionTitle}>Contact</h1>
                    <p className={admissions.admissionsSectionText}>
                        Please read everything below related to admissions.
                        If after reading you still have questions or need support, you may contact our admissions office at 714-220-3055, to speak with Ms. Martinez or Ms. Karen Ortega.
                        You may also reach Ms. Martinez by email at martinez_lo@auhsd.us.
                    </p>
                </div>

                <div className={admissions.admissionsSection}>
                    <h1 className={admissions.admissionsSectionTitle}>Application Information</h1>
                    <p className={admissions.admissionsSectionText}>
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

                {/* Additional sections omitted for brevity */}

                <div className={admissions.end}>
                    <p className={admissions.admissionsSectionText}>
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
            <div className={athletics.athleticsMain}>
                <h1 className={`${athletics.athleticsTitle} pageSectionTitle`}>Athletics</h1>
                <p className={athletics.athleticsText}>
                    Oxford Academy is a member of the 605 League and competes under CIF Southern Section rules. Eligibility rules apply to all games including practice, inter-school scrimmage, league, tournament, and play-off games.
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
            <div className={bellschedule.bellScheduleMain}>
                <h1 className={`${bellschedule.bellScheduleTitle} pageSectionTitle`}>Bell Schedule</h1>
                <span className={bellschedule.bellScheduleText}>
                <div className={bellschedule.bellScheduleSection}>
                    <h1 className={bellschedule.bellScheduleSectionTitle}>Late Start: Mondays</h1>
                    <p className={bellschedule.periods}>
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

                <div className={bellschedule.bellScheduleSection}>
                    <h1 className={bellschedule.bellScheduleSectionTitle}>Block Schedule<br /><br /> Even: Tuesday & Thursday <br /><br /> Odd: Wednesday & Friday</h1>
                    <p className={bellschedule.periods}>
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
            <div className={cafeteria.cafeteria}>
                <iframe title="cafeteria" src="https://oxford.auhsd.us/files/user/4305/file/September%20Menu.pdf" />
            </div>
        )
    },
    calendar: {
        title: "Calendar",
        mainText: "Calendar",
        subText: "See what's happening at Oxford!",
        content: () => (
            <div className={calendar.calendarMain}>
                <h1 className={`${calendar.calendarTitle} pageSectionTitle`}>School / District Calendars</h1>
                <div className={calendar.calendarContent}>
                    <Image className={calendar.importantDates} src="images/ImportantDatesCalendar.png" alt="ImportantDatesCalendar" />
                    <Image className={calendar.districtCalendar} src="images/DistrictCalendar.png" alt="ImportantDatesCalendar" />
                </div>
            </div>
        )
    },
    cypresscollege: {
        title: "Cypress College Dual Enrollment",
        mainText: "Cypress College Dual Enrollment",
        subText: "",
        content: () => (
            <div className={ccdualenroll.ccDualEnrollment}>
                <h1 className={`${ccdualenroll.ccdeTitle} pageSectionTitle`}>Dual Enrollment Information</h1>

                <div className={ccdualenroll.ccDualEnrollmentMain}>
                    <div className={ccdualenroll.ccdeMainInfo}>
                        <h1 className={ccdualenroll.ccdeText}>
                            Cypress College partners with nearby school districts to offer high school students the opportunity to earn college credit while attending high school. Students enrolled in FREE dual enrollment courses earn credit for college classes that may be eligible to transfer to a CSU or UC institution.
                        </h1>

                        <h1 className={ccdualenroll.ccdeText}>
                            All pathway classes have limitations on seat capacity. The courses are offered on a first-come-first-serve basis until all seats are filled. To avoid any delays in your application process, please make sure to review the Dual enrollment Student Handbook.
                        </h1>

                        <h1 className={ccdualenroll.ccdeText}>
                            As a reminder, Dual Enrollment is year-round, and students have multiple opportunities to take classes during the fall, spring, and summer terms. Please contact us directly for further questions and guidance.
                        </h1>
                    </div>
                </div>

                <div className={ccdualenroll.ccDualEnrollmentSecondary}>
                    <div className={ccdualenroll.ccdeSecondaryInfo}>
                        <h1 className={`${ccdualenroll.ccdeText} ${ccdualenroll.ccde4}`}>
                            <strong>
                                Notice for 1st Semester Freshmen (Incoming 9th Graders):
                            </strong>

                            Per AUHSD policy, incoming fresh man are not eligible for Dual Enrollment classes during the fall semester. Freshmen will become eligible to take classes during their spring semester after their transition into high school during the fall. Rising 9th graders, may however enroll during the summer, before their first high school semester.
                        </h1>

                        <h1 className={ccdualenroll.ccdeText}>
                            <strong>
                                Non-Dual Enrollment Special Admit College Courses:
                            </strong>

                            Students interested in taking a non-dual enrollment college course as a regular (non-dual enrollment) special admit student should contact specialadmit@cypresscollege.edu for additional information.
                        </h1>
                    </div>
                </div>

                <div className={ccdualenroll.additionalResources}>
                    <div className={ccdualenroll.resources}>
                        <h1 className="ResourceTitle">Dual Enrollment Registration/Virtual Front Desk</h1>

                        <a href="https://oxford.auhsd.us/files/user/1/file/Virtual%20Front%20Desk.pdf">
                            <Image src="https://oxford.auhsd.us/files/user/1/image/Virtual%20Front%20Desk.jpg" alt="Virtual Front Desk" style={{ width: "85%" }} />
                        </a>
                    </div>

                    <div className={ccdualenroll.resources}>
                        <h1 className="ResourceTitle">Course Flyer</h1>

                        <a href="https://oxford.auhsd.us/files/user/1/file/CourseFlyer_AUHSD.pdf">
                            <Image src="https://oxford.auhsd.us/files/user/1/image/CourseFlyer_AUHSD.jpg" alt="Course Flyer" style={{ width: "85%" }} />
                        </a>
                    </div>

                    <div className={ccdualenroll.resources}>
                        <h1 className="ResourceTitle">Course Description</h1>

                        <a href="https://oxford.auhsd.us/files/user/1/file/CourseDescriptions_AUHSD.pdf">
                            <Image src="https://oxford.auhsd.us/files/user/1/image/CourseDescriptions_AUHSD.jpg" alt="Course Description" style={{ width: "85%" }} />
                        </a>
                    </div>
                </div>

                <div className={ccdualenroll.dualEnrollmentPathways}>
                    <h1 id="DEPTitle">Dual Enrollment Pathways</h1>

                    <section className={ccdualenroll.depSelection}>
                        {
                            pageCreateInformationCCDE("pathwayNames").flat().map((pathwayName: string, index: number): React.JSX.Element => {
                                return (
                                    <button key={`${pathwayName}${index}`} className={ccdualenroll.depButton} style={{ backgroundImage: `url(${pageCreateInformationCCDE("pathwayImages").flat()[index]})` }}>
                                        <h1>
                                            {pathwayName}
                                        </h1>
                                    </button>
                                )
                            })
                        }
                    </section>
                </div>

                <div className={ccdualenroll.application}>
                    <h1 className={ccdualenroll.applicationTitle}>Getting started - How to apply</h1>

                    <section className={ccdualenroll.applicationSteps}>
                        {
                            pageCreateInformationCCDE("applicationSteps").flat().map((step: string, index: number): React.JSX.Element => {
                                return (
                                    <div key={`${step}${index}`} className={ccdualenroll.applicationStep}>
                                        <h1 className={ccdualenroll.applicationStepNumber}>
                                            Step {index + 1}
                                        </h1>
                                        <h1 className={ccdualenroll.applicationStepTitle}>
                                            {step}
                                        </h1>
                                    </div>
                                )
                            })
                        }
                    </section>
                </div>

                <div className={ccdualenroll.videoResources}>
                    <h1 className={ccdualenroll.videoResourcesTitle}>Cypress College Video Resources</h1>

                    <section className={ccdualenroll.videos}>
                        {
                            pageCreateInformationCCDE("videoEmbedLinks").flat().map((embeds: string, index: number): React.JSX.Element => {
                                return (
                                    <div className="EmbededVideo" key={`${embeds}${index}`}>
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
            <div className={clubs.mainClubs}>
                <div className={clubs.club} id="Robotics">
                    <div className={clubs.clubTitleDiv}>
                        <h1 className={clubs.clubTitle}>Oxford Academy Robotics</h1>

                        <div className={clubs.clubDescriptionDiv}>
                            <p className={clubs.clubDescription}>
                                Oxford Academy Robotics is a club that participates in the FIRST Robotics Competition (FRC). FRC is a high school robotics competition where students, with the help of mentors, design, build, and program a robot to compete in a game that changes annually. The club meets year-round, with the competition season running from January to April. During this time, the team works to design, build, and program a robot to compete in the game. The club also participates in outreach events to promote STEM education in the community.
                            </p>
                        </div>
                    </div>

                    <div className={clubs.clubImageDiv}>
                        <Image className={clubs.clubImage} src="images/FRC.svg" alt="Robotics" />
                    </div>
                </div>

                <div className={`${clubs.club} ${clubs.club2}`} id="Code">
                    <div className={clubs.clubTitleDiv}>
                        <h1 className={clubs.clubTitle}>OA CyberPatriot</h1>

                        <div className={clubs.clubDescriptionDiv}>
                            <p className={clubs.clubDescription}>
                                CyberPatriot is the National Youth Cyber Education Program. At the center of CyberPatriot is the National Youth Cyber Defense Competition. The competition puts teams of high school and middle school students in the position of newly hired IT professionals tasked with managing the network of a small company. In the rounds of competition, teams are given a set of virtual images that represent operating systems and are tasked with finding cybersecurity vulnerabilities within the images and hardening the system while maintaining critical services.
                            </p>
                        </div>
                    </div>

                    <div className={clubs.clubImageDiv}>
                        <Image className={clubs.clubImage} src="images/Cyberpatriot.png" alt="Code" />
                    </div>
                </div>

                <div className={clubs.generalClubs}>
                    <h1 className={clubs.key}>Club Key</h1>

                    <span className={clubs.clubKey}>
                    <div className={clubs.clubKeyTitleDiv} id="Academic">
                        <h1 className={clubs.clubKeyTitle}>Academic</h1>

                        <div className={clubs.clubsList}>
                            {ClubsList("Academic").map((club: Club, index: number) => (
                                <h1 className={clubs.clubTitle} key={`${club.club}${index}`}>{club.club}</h1>
                            ))}
                        </div>
                    </div>

                    <div className={clubs.clubKeyTitleDiv} id="SpecialInterest">
                        <h1 className={clubs.clubKeyTitle}>Special Interest</h1>

                        <div className={clubs.clubsList}>
                            {ClubsList("Interest").map((club: Club, index: number) => (
                                <h1 className={clubs.clubTitle} key={`${club.club}${index}`}>{club.club}</h1>
                            ))}
                        </div>
                    </div>

                    <div className={clubs.clubKeyTitleDiv} id="DiversityCulture">
                        <h1 className={clubs.clubKeyTitle}>Diversity & Culture</h1>

                        <div className={clubs.clubsList}>
                            {ClubsList("Culture").map((club: Club, index: number) => (
                                <h1 className={clubs.clubTitle} key={`${club.club}${index}`}>{club.club}</h1>
                            ))}
                        </div>
                    </div>

                    <div className={clubs.clubKeyTitleDiv} id="ServiceLeadership">
                        <h1 className={clubs.clubKeyTitle}>Service & Leadership</h1>

                        <div className={clubs.clubsList}>
                            {ClubsList("Leadership").map((club: Club, index: number) => (
                                <h1 className={clubs.clubTitle} key={`${club.club}${index}`}>{club.club}</h1>
                            ))}
                        </div>
                    </div>

                    <div className={clubs.clubKeyTitleDiv} id="ArtsPerformingArts">
                        <h1 className={clubs.clubKeyTitle}>Arts & Performing Arts</h1>

                        <div className={clubs.clubsList}>
                            {ClubsList("Performing").map((club: Club, index: number) => (
                                <h1 className={clubs.clubTitle} key={`${club.club}${index}`}>{club.club}</h1>
                            ))}
                        </div>
                    </div>

                    <div className={clubs.clubKeyTitleDiv} id="SpiritualReligious">
                        <h1 className={clubs.clubKeyTitle}>Spiritual & Religious</h1>

                        <div className={clubs.clubsList}>
                            {ClubsList("Spiritual").map((club: Club, index: number) => (
                                <h1 className={clubs.clubTitle} key={`${club.club}${index}`}>{club.club}</h1>
                            ))}
                        </div>
                    </div>

                    <div className={clubs.clubKeyTitleDiv} id="PublicSpeaking">
                        <h1 className={clubs.clubKeyTitle}>Public Speaking</h1>

                        <div className={clubs.clubsList}>
                            {ClubsList("Speaking").map((club) => (
                                <h1 className={clubs.clubTitle} key={club.club}>{club.club}</h1>
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
            <div className={plan504.plan504}>
                <div className={plan504.plan504Content}>
                    <h1 className={`${plan504.plan504Title} pageSectionTitle`}>504 Plan - Access Restricted</h1>

                    <div className={plan504.planMain}>
                    <span className={plan504.usernameElements}>
                        <label className={plan504.usernameLabel} htmlFor="username">Username: </label>
                        <input className={plan504.username} id="username" type="text" placeholder='Username' />
                    </span>

                        <span className={plan504.passwordElements}>
                        <label className={plan504.passwordLabel} htmlFor="password">Password: </label>
                        <input className={plan504.password} id="password" type="password" placeholder='Password' />
                    </span>

                        <button className={plan504.loginButton}>Login</button>
                    </div>
                </div>
            </div>
        )
    },
    counseling: {
        title: "Counseling",
        mainText: "Counseling",
        subText: "Guidance and Support",
        content: () => (
            <div className={counseling.counselingMain}>
                <h1 className={`${counseling.counselingTitle} pageSectionTitle`}>Counseling Department</h1>

                <div className={counseling.counselingContent}>
                    <div className={counseling.counselingSection}>
                        <h2 className={counseling.sectionTitle}>Academic Counseling</h2>
                        <p className={counseling.sectionText}>
                            Our counselors are committed to helping students plan their academic journey at Oxford Academy.
                            We provide guidance on course selection, graduation requirements, and college preparation.
                            Counselors work closely with students to develop personalized academic plans that align with
                            their educational and career goals, ensuring they are well-prepared for post-secondary opportunities.
                        </p>
                    </div>

                    <div className={counseling.counselingSection}>
                        <h2 className={counseling.sectionTitle}>College & Career Planning</h2>
                        <p className={counseling.sectionText}>
                            The Counseling Department provides comprehensive college and career planning services to help
                            students navigate the college application process, explore career options, and develop post-secondary
                            plans. We offer workshops on college applications, financial aid, scholarship opportunities, and
                            career exploration to support students in making informed decisions about their future.
                        </p>
                    </div>

                    <div className={counseling.counselingSection}>
                        <h2 className={counseling.sectionTitle}>Social & Emotional Support</h2>
                        <p className={counseling.sectionText}>
                            We recognize the importance of social and emotional well-being in academic success. Our counselors
                            provide support services to address personal and social challenges that may impact student learning.
                            We offer individual and group counseling, conflict resolution, and referrals to community resources to
                            help students develop coping skills and resilience.
                        </p>
                    </div>

                    <div className={counseling.counselingSection}>
                        <h2 className={counseling.sectionTitle}>Counselor Assignments</h2>
                        <p className={counseling.sectionText}>
                            Students are assigned to counselors by grade level. Please contact the Counseling Office to schedule
                            an appointment with your counselor. We are here to support your academic, career, and personal/social
                            development throughout your time at Oxford Academy.
                        </p>
                    </div>
                </div>
            </div>
        )
    },
    districtippplan: {
        title: "District IPP Plan",
        mainText: "District IPP Plan",
        subText: "",
        content: () => (
            <div className={districtippplan.districtIPPPlan}>
                <iframe title="districtippplan" src="https://www.auhsd.us/files/user/1/file/Districts%20IIPP%20Plan%20RESTATED%20-%2007_31_20.pdf" />
            </div>
        )
    },
    familyengagement: {
        title: "Family Engagement",
        mainText: "Family Engagement",
        subText: "Partnering with Families",
        content: () => (
            <div className={familyengagement.familyEngagementMain}>
                <h1 className={`${familyengagement.familyEngagementTitle} pageSectionTitle`}>Family Engagement</h1>

                <div className={familyengagement.familyEngagementContent}>
                    <div className={familyengagement.engagementSection}>
                        <h2 className={familyengagement.sectionTitle}>Parent Partnership</h2>
                        <p className={familyengagement.sectionText}>
                            At Oxford Academy, we believe that family engagement is crucial to student success.
                            We are committed to building strong partnerships with our families to support our students&#39;
                            academic achievement and well-being. We encourage parents and guardians to actively
                            participate in their child&#39;s education through various opportunities throughout the school year.
                        </p>
                    </div>

                    <div className={familyengagement.engagementSection}>
                        <h2 className={familyengagement.sectionTitle}>Get Involved</h2>
                        <p className={familyengagement.sectionText}>
                            There are many ways for families to get involved at Oxford Academy. Join our PTSA,
                            volunteer for school events, attend parent-teacher conferences, or participate in
                            school decision-making committees. Your involvement makes a difference in our school community.
                        </p>
                        <div className={familyengagement.resourceLinks}>
                            <a href="#" className={familyengagement.resourceLink}>PTSA Information</a>
                            <a href="#" className={familyengagement.resourceLink}>Volunteer Opportunities</a>
                            <a href="#" className={familyengagement.resourceLink}>School Site Council</a>
                        </div>
                    </div>

                    <div className={familyengagement.engagementSection}>
                        <h2 className={familyengagement.sectionTitle}>Communication</h2>
                        <p className={familyengagement.sectionText}>
                            We strive to maintain open lines of communication with all families. Regular updates
                            are provided through our newsletter, website, and social media channels. Parents can
                            also access Aeries to monitor their student&#39;s academic progress. If you have any questions
                            or concerns, please don&#39;t hesitate to reach out to your child&#39;s teachers or school administrators.
                        </p>
                    </div>

                    <div className={familyengagement.engagementSection}>
                        <h2 className={familyengagement.sectionTitle}>Parent Resources</h2>
                        <p className={familyengagement.sectionText}>
                            We offer various resources to help parents support their children&#39;s education at home.
                            These include workshops, informational sessions, and access to educational materials.
                            Check our calendar for upcoming parent events and workshops.
                        </p>
                    </div>
                </div>
            </div>
        )
    },
    getdirections: {
        title: "Get Directions",
        mainText: "Get Directions",
        subText: "",
        content: () => (
            <div className={getdirections.getDirections}>
                <div className={getdirections.getDirectionsMain}>
                    <h1 className={`${getdirections.getDirectionsTitle} pageSectionTitle`}>Directions to Oxford Academy</h1>

                    <h1 className={getdirections.address}>
                        5172 Orange Ave
                        <br />
                        Cypress, CA 90630
                    </h1>

                    <iframe
                        title="maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.5543081348337!2d-118.044468384791!3d33.823812980668826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd2e989ef215cf%3A0x6bf77d12dee0340!2s5172%20Orange%20Ave%2C%20Cypress%2C%20CA%2090630!5e0!3m2!1sen!2sus!4v1640026582184!5m2!1sen!2sus"
                        width="100%"
                        height="450"
                        allowFullScreen={true}
                    />
                </div>
            </div>
        )
    },
    generalinformation: {
        title: "General Information",
        mainText: "General Information",
        subText: "Learn more about our school!",
        content: () => <GeneralInformationPage/>
    },
    healthoffice: {
        title: "Health Office",
        mainText: "Health Office",
        subText: "Learn more about our school!",
        content: () => <HealthOfficePage/>
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
        content: () => <OxfordSitemapPage/>
    },
    pforp: {
        title: "Programs 4 Patriots",
        mainText: "Programs 4 Patriots",
        subText: "",
        content: () => (
            <div className={pforp.programsForPatriots}>
                <div className={pforp.programsForPatriotsMain}>
                    <h1 className={`${pforp.titleText} pageSectionTitle`}>Programs 4 Patriots</h1>
                    <h1 className={pforp.programsForPatriotsSecondary}>
                        Can&#39;t add content on this page due to limited access to the official Oxford Site. Sorry!
                        <br />
                        <br />
                        - Erick Tran
                    </h1>
                </div>
            </div>
        )
    },
    policies: {
        title: "Policies",
        mainText: "Policies",
        subText: "",
        content: () => <PoliciesPage/>
    },
    principalsmessage: {
        title: "Principal's message",
        mainText: "Principal's message",
        subText: "A message from Principal Houston",
        content: () => (
            <div className={principalsmessage.principalsMessage}>
                <h1 className={`${principalsmessage.principalsMessageTitle} pageSectionTitle`}>
                    Welcome to Oxford Academy
                </h1>

                <div className={principalsmessage.principalsMessageMain}>
                    <p>
                        Oxford Academy, where we are committed to providing our students with an exceptional education that prepares them for future success. As a nationally recognized school of excellence, we take pride in our comprehensive academic program, diverse extracurricular activities, and supportive community environment.
                    </p>
                    <p>
                        At Oxford Academy, we believe in developing well-rounded individuals who excel academically while also cultivating critical thinking, leadership, and character. Our dedicated faculty and staff work tirelessly to create engaging learning experiences that challenge and inspire our students to reach their full potential.
                    </p>
                    <p>
                        We are proud of our diverse student body and the inclusive atmosphere they help create. Our Patriots demonstrate a commitment to excellence not only in the classroom but also in athletics, arts, service, and various clubs and organizations. This holistic approach to education ensures that our students graduate with the skills, knowledge, and values necessary to thrive in an ever-changing global society.
                    </p>
                    <p>
                        As we navigate another exciting school year, I encourage all students to take advantage of the numerous opportunities Oxford Academy offers. Challenge yourselves, pursue your passions, and support one another along the way. Together, we will continue to uphold the traditions of excellence that define our school.
                    </p>
                    <p className={principalsmessage.principal}>
                        Sincerely,
                        <br />
                        Mrs. Amber Houston
                        <br />
                        Principal, Oxford Academy
                    </p>
                </div>
            </div>
        )
    },
    ptsa: {
        title: "PTSA",
        mainText: "PTSA",
        subText: "Parent Teacher Student Association",
        content: () => (
            <div className={ptsa.ptsa}>
                <iframe
                    className={ptsa.ptsaFrame}
                    title="ptsa"
                    src="https://oxford.auhsd.us/files/user/5529/file/Website%20OA%20PTSA%202023-2024%20Board%20-%20Google%20Docs.pdf"
                />
            </div>
        )
    },
    schoolsitecouncil: {
        title: "School Site Council",
        mainText: "School Site Council",
        subText: "",
        content: () => (
            <div className={schoolsitecouncil.schoolSiteCouncil}>
                <h1 className={`${schoolsitecouncil.schoolSiteCouncilTitle} pageSectionTitle`}>School Site Council</h1>
                <div className={schoolsitecouncil.schoolSiteCouncilContent}>
                    <p>The School Site Council (SSC) is a group of teachers, parents, staff, and students that works with the principal to develop, review, and evaluate school improvement programs and school budgets.</p>

                    <div className={schoolsitecouncil.membersSection}>
                        <h2 className={schoolsitecouncil.sectionTitle}>Current Members</h2>
                        <ul className={schoolsitecouncil.membersList}>
                            <li className={schoolsitecouncil.member}>Mrs. Amber Houston, Principal</li>
                            <li className={schoolsitecouncil.member}>Teacher Representatives</li>
                            <li className={schoolsitecouncil.member}>Parent Representatives</li>
                            <li className={schoolsitecouncil.member}>Student Representatives</li>
                            <li className={schoolsitecouncil.member}>Other Staff Representatives</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    },
    staff: {
        title: "Staff",
        mainText: "Staff",
        subText: "Meet the staff!",
        content: () => (
            <div className={staff.staffMain}>
                <h1 className={`${staff.titleText} pageSectionTitle`}>Staff</h1>
                <h1 className={staff.staffSecondary}>
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
            <div className={titleix.titleIX}>
                <iframe
                    className={titleix.titleIXFrame}
                    title="titleix"
                    src="https://oxford.auhsd.us/files/user/1/file/AUHSD%20-%20Website%20Info%20-%20Title%20IX%20-%20Students.pdf"
                />
            </div>
        )
    },
    tour: {
        title: "Tour",
        mainText: "Tour",
        subText: "",
        content: () => (
            <div className={tour.tourMain}>
                <h1 className={`${tour.titleText} pageSectionTitle`}>Tour</h1>
                <Photosphere src=""/>
            </div>
        )
    },
    transcript: {
        title: "Transcript",
        mainText: "Transcript",
        subText: "",
        content: () => (
            <div className={transcript.transcriptMain}>
                <h1 className={`${transcript.titleText} pageSectionTitle`}>Transcript</h1>

                <div className={transcript.parchment}>
                    <h1 className={transcript.parchmentMain}>What is Parchment?
                        <br />
                        <br />
                        Parchment is the exclusive site where current students, alumni, and third party companies can obtain digital copies of official transcripts, immunization record, and other documents. This process is done electronically and it is sent (digitally or physically, as requested) directly to the destination the student/alumnus/company chooses. Please note that you must create an account in order to request the documents (including transcripts).
                    </h1>

                    <br />
                    <br />

                    <div className={transcript.alumni}>
                        <h1 className={transcript.title}>Alumni Transcript Request</h1>
                        <h1 className={transcript.subTitle}>
                            Please visit the Parchment link below to request a digital copy of your official transcript.
                        </h1>

                        <a className={transcript.link} href="https://www.parchment.com/u/registration/5583/account" target="_blank">Parchment</a>
                    </div>

                    <br />
                    <br />

                    <div className={transcript.student}>
                        <h1 className={transcript.title}>Current Student Transcript Request Only</h1>
                        <h1 className={transcript.subTitle}>
                            If you are a current student and would like to obtain a paper copy, click on the link below
                        </h1>

                        <a className={transcript.link} href="https://docs.google.com/forms/d/1FflDpc3lq6b4KcJmymckDULAaSiygiBFy4zE6ZySF8o/viewform?edit_requested=true#response=ACYDBNjyMQ9R6VbU3JVJMURPpaiI-3TlMTxNn8k5GRteSwsLWkmwW42RjIRwNvpW-MHl6C4" target="_blank">Transcript Request Form</a>
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
            <div className={transportation.transportationMain}>
                <h1 className={`${transportation.titleText} pageSectionTitle`}>Transportation</h1>
                <Image className={transportation.busImage} src="images/BusStops.png" alt="BusImage" />
            </div>
        )
    },
    visionandslcs: {
        title: "Vision & SLCS",
        mainText: "Vision & SLCS",
        subText: "",
        content: () => (
            <div className={visionslcs.visionSLCSMain}>
                <h1 className={`${visionslcs.titleText} pageSectionTitle`}>Vision & SLCS</h1>
                <h1 className={visionslcs.visionMain}>Oxford Academy is a community of innovators dedicated to nurturing the holistic growth of life-long learners who will lead and serve an evolving local and global society.</h1>

                <hr />

                <div className={visionslcs.schoolLearnerOutcomes}>
                    <h1 className={visionslcs.schoolMainOutcomes}>Schoolwide Learner Outcomes</h1>
                    <h1 className={`${visionslcs.c5s} ${visionslcs.criticalThinking}`}>
                        Critical Thinking
                        <br />
                        OA students are critical thinkers whose curiosity inspires them to be innovative and find new ways to problem solve.
                    </h1>

                    <h1 className={`${visionslcs.c5s} ${visionslcs.communication}`}>
                        Communication
                        <br />
                        OA students are confident and eloquent individuals who advocate for their needs and express themselves effectively.
                    </h1>

                    <h1 className={`${visionslcs.c5s} ${visionslcs.collaboration}`}>
                        Collaboration
                        <br />
                        OA students help one another in diverse teams that demonstrate respect, flexibility, and recognize that they can accomplish more together than on their own.
                    </h1>

                    <h1 className={`${visionslcs.c5s} ${visionslcs.creativity}`}>
                        Creativity
                        <br />
                        OA students are imaginative and produce authentic products, projects and programs.
                    </h1>

                    <h1 className={`${visionslcs.c5s} ${visionslcs.character}`}>
                        Character
                        <br />
                        OA students are engaged, ethical, empathetic and respectful individuals who embrace diversity and provide a sense of belonging for everyone in the OA family.
                    </h1>

                    <h1 className={`${visionslcs.c5s} ${visionslcs.communityEngagement}`}>
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
            <div className={workpermit.workPermitMain}>
                <h1 className={`${workpermit.titleText} pageSectionTitle`}>Work Permit</h1>
                <div className={workpermit.content}>
                    <p>Content for work permit will be added soon.</p>
                </div>
            </div>
        )
    },
};

export default async function SubpageDynamic({ params }: { params: Promise<{ subpage: string }> }) {
    const { subpage } = await params;
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
export async function generateStaticParams() {
    return Object.keys(pageConfigs).map((subpage) => ({
        subpage,
    }));
}