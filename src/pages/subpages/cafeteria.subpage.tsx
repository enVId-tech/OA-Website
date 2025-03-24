import React from 'react';
import ClassHelmet from '../../components/ts/pagetitle/title.global.module.tsx';
import Navbar from '../../components/ts/navbar/navbar.template.tsx';
import PageTitle from '../../components/ts/pagetitle/pagetitle.global.module.tsx';
import Footer from '../../components/ts/footer/footer.global.module.tsx';
import trackPageView from '../../components/ts/analytics/analytics.global.module.ts';

import '../../components/scss/pages/subpages/cafeteria.module.scss';

const Cafeteria: React.FC = (): React.JSX.Element => {
    React.useEffect((): void => {
        trackPageView();
    }, []);

    return (
        <div id="Cafeteria">
            <ClassHelmet title="Cafeteria" />
            <Navbar heightChange={790} />
            <PageTitle height={80} mainText="Cafeteria" subText="" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />

            <iframe title="cafeteria" src="https://oxford.auhsd.us/files/user/4305/file/September%20Menu.pdf" />

            <Footer />
        </div>
    )
}

export default Cafeteria;