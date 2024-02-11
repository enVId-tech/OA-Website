import React from "react";
import ClassHelmet from "../../components/ts/pagetitle/title.global.module.tsx";
import Navbar from "../../components/ts/navbar/navbar.template.tsx";
import PageTitle from "../../components/ts/pagetitle/pagetitle.global.module.tsx";
import Footer from "../../components/ts/footer/footer.global.module.tsx";
import trackPageView from "../../components/ts/analytics/analytics.global.module.ts";

import pageCreateInformationCCDE from "../../components/ts/pages/ccde/names.ts";

import '../../components/scss/pages/subpages/ccdualenroll.subpage.scss';

const CCDualEnrollment: React.FC = (): React.JSX.Element => {
    const pathwayNames: string[] = pageCreateInformationCCDE("pathwayNames").flat();
    const pathwayImages: string[] = pageCreateInformationCCDE("pathwayImages").flat();
    const applicationSteps: string[] = pageCreateInformationCCDE("applicationSteps").flat();
    const videoEmbedLinks: string[] = pageCreateInformationCCDE("videoEmbedLinks").flat();

    React.useEffect((): void => {
        trackPageView();
    }, []);

    return (
        <div id="CCDualEnrollment">
            <ClassHelmet title="Cypress College Dual Enrollment" />
            <Navbar />
            <PageTitle height={75} mainText="Cypress College Dual Enrollment" oxfLogo={false} backgroundLink="CypressCollegeBanner.png" backgroundVhPreDown={-1300} backgroundVhDownRate={500} titleVhDownRate={100} percentageDown={6} titleVhPreDown={0} />

            <h1 id="CCDETitle">Dual Enrollment Information</h1>
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
                        pathwayNames.map((pathwayName: string, index: number): React.JSX.Element => {
                            return (
                                <button id={`DEP${index + 1}`} className="DEPButton" style={{backgroundImage:`url(${pathwayImages[index]})`}}>
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
                        applicationSteps.map((step: string, index: number): React.JSX.Element => {
                            return (
                                <div id={`AS${index + 1}`} className="ApplicationStep">
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
                        videoEmbedLinks.map((embeds: string, index: number): React.JSX.Element => {
                            return (
                                <div id={`VI${index + 1}`} className="EmbededVideo">
                                    <iframe title={`${embeds[index]} ${index}`} src={`${embeds}`} />
                                </div>
                            )
                        })
                    }
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default CCDualEnrollment;