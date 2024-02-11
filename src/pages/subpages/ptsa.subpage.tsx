import React from 'react';
import ClassHelmet from '../../components/ts/pagetitle/title.global.module.tsx';
import Navbar from '../../components/ts/navbar/navbar.template.tsx';
import PageTitle from '../../components/ts/pagetitle/pagetitle.global.module.tsx';
import Footer from '../../components/ts/footer/footer.global.module.tsx';
import trackPageView from '../../components/ts/analytics/analytics.global.module.ts';

import '../../components/scss/pages/subpages/ptsa.subpage.scss';

const PTSA: React.FC = (): React.JSX.Element => {
    React.useEffect((): void => {
        trackPageView();
    }, []);

    return (
        <div id="PTSA">
            <ClassHelmet title="PTSA" />
            <Navbar />
            <PageTitle height={80} mainText="PTSA" subText="Parent Teacher Student Association" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />

            <iframe title="ptsa" src="https://oxford.auhsd.us/files/user/5529/file/Website%20OA%20PTSA%202023-2024%20Board%20-%20Google%20Docs.pdf" />

            <Footer />
        </div>
    )
}

export default PTSA;