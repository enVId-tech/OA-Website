import React from 'react';
import ClassHelmet from '../../components/ts/pagetitle/title.global.module.tsx';
import Navbar from '../../components/ts/navbar/navbar.template.tsx';
import PageTitle from '../../components/ts/pagetitle/pagetitle.global.module.tsx';
import Footer from '../../components/ts/footer/footer.global.module.tsx';
import trackPageView from '../../components/ts/analytics/analytics.global.module.ts';

import '../../components/scss/pages/subpages/504plan.subpage.scss';

const Plan504: React.FC = (): React.JSX.Element => {
    React.useEffect((): void => {
        trackPageView();
    }, []);

    return (
        <div id="Plan504">
            <ClassHelmet title="504 Plan" />
            <Navbar heightChange={790} />
            <PageTitle height={80} mainText="504 Plan" subText="Staff 504 Plan" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />

            <div id="Plan504Content">
                <h1 id="Plan504Title">504 Plan - Access Restricted</h1>

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
            <Footer />
        </div>
    )
}

export default Plan504;