import React from "react";
import ClassHelmet from "../../components/ts/pagetitle/title.global.module.tsx";
import Navbar from "../../components/ts/navbar/navbar.template.tsx";
import PageTitle from "../../components/ts/pagetitle/pagetitle.global.module.tsx";
import Footer from "../../components/ts/footer/footer.global.module.tsx";
import trackPageView from "../../components/ts/analytics/analytics.global.module.ts";

import '../../components/scss/pages/subpages/visionSLCS.subpage.scss';

const VisionSLCS: React.FC = (): React.JSX.Element => {
    React.useEffect((): void => {
        trackPageView();
    }, []);
    
    return (
        <div id="VisionSLCS">
            <ClassHelmet title="Vision & SLCS" />
            <Navbar />
            <PageTitle height={80} mainText="Vision & SLCS" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />
            <div id="VisionSLCSMain">
                <h1 id="TitleText">Vision & SLCS</h1>
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
            <Footer />
        </div>
    )
}

export default VisionSLCS;