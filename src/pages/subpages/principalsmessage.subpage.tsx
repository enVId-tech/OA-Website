import React from "react";
import ClassHelmet from "../../components/ts/pagetitle/title.global.module.tsx";
import Navbar from "../../components/ts/navbar/navbar.template.tsx";
import PageTitle from "../../components/ts/pagetitle/pagetitle.global.module.tsx";
import Footer from "../../components/ts/footer/footer.global.module.tsx";
import trackPageView from "../../components/ts/analytics/analytics.global.module.ts";

import "../../components/scss/pages/subpages/principalsmessage.subpage.scss";

const PrincipalsMessage: React.FC = (): React.JSX.Element => {
    React.useEffect((): void => {
        trackPageView();
    }, []);

    return (
        <div id="PrincipalsMessage">
            <ClassHelmet title="Principal's Message" />
            <Navbar heightChange={790} />
            <PageTitle height={80} mainText="Principal's Message" subText="A message from Principal Houston" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />

            <h1 id="PrincipalsMessageTitle" className="pageSectionTitle">
                Principal's Message
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

            <Footer />
        </div>
    )
}

export default PrincipalsMessage;