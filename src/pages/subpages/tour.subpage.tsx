import React from 'react';
import ClassHelmet from '../../components/ts/pagetitle/title.global.module.tsx';
import Navbar from '../../components/ts/navbar/navbar.template.tsx';
import PageTitle from '../../components/ts/pagetitle/pagetitle.global.module.tsx';
import Footer from '../../components/ts/footer/footer.global.module.tsx';
import trackPageView from '../../components/ts/analytics/analytics.global.module.ts';
import Photosphere from '../../components/ts/photosphere/photosphere.global.module.tsx';

import '../../components/scss/pages/subpages/tour.subpage.scss';

const Tour: React.FC = (): React.JSX.Element => {
    React.useEffect((): void => {
        trackPageView();
    }, []);

    return (
        <div id="Tour">
            <ClassHelmet title="Tour" />
            <Navbar heightChange={790} />
            <PageTitle height={80} mainText="Tour" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />

            <div id="TourMain">
                <h1 id="TitleText" className="pageSectionTitle">Tour</h1>
                
                <Photosphere src="http://localhost:3000/static/media/Photosphere.3688c313d1cb6701ae50.webp"/>
            </div>

            <Footer />
        </div>
    )
}

export default Tour;