import React from 'react';
import ClassHelmet from '../../components/ts/pagetitle/title.global.module.tsx';
import Navbar from '../../components/ts/navbar/navbar.template.tsx';
import PageTitle from '../../components/ts/pagetitle/pagetitle.global.module.tsx';
import Footer from '../../components/ts/footer/footer.global.module.tsx';
import trackPageView from '../../components/ts/analytics/analytics.global.module.ts';

import '../../components/scss/pages/subpages/getdirections.subpage.scss';

const GetDirections: React.FC = (): React.JSX.Element => {
    React.useEffect((): void => {
        trackPageView();
    }, []);

    return (
        <div id="GetDirections">
            <ClassHelmet title="Get Directions" />
            <Navbar />
            <PageTitle height={80} mainText="Get Directions" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />

            <div id="GetDirectionsMain">
                <h1 id="GetDirectionsTitle">Directions to Oxford Academy</h1>

                <h1 id="Address">
                    5172 Orange Ave
                    <br />
                    Cypress, CA 90630
                </h1>

                <iframe title="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.5543081348337!2d-118.044468384791!3d33.823812980668826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd2e989ef215cf%3A0x6bf77d12dee0340!2s5172%20Orange%20Ave%2C%20Cypress%2C%20CA%2090630!5e0!3m2!1sen!2sus!4v1640026582184!5m2!1sen!2sus" width="100%" height="450" allowFullScreen={true} />
            </div>

            <Footer />
        </div>
    )
}

export default GetDirections;