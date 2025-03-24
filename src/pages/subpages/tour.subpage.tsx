import React from 'react';
import ClassHelmet from '../../components/ts/pagetitle/title.global.module.tsx';
import Navbar from '../../components/ts/navbar/navbar.template.tsx';
import PageTitle from '../../components/ts/pagetitle/pagetitle.global.module.tsx';
import Footer from '../../components/ts/footer/footer.global.module.tsx';
import trackPageView from '../../components/ts/analytics/analytics.global.module.ts';
import Photosphere from '../../components/ts/photosphere/photosphere.global.module.tsx';

import '../../components/scss/pages/subpages/tour.module.scss';

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
                
                <Photosphere src=""/>

                {/* <iframe src="https://www.google.com/maps/embed?pb=!4v1709016137056!6m8!1m7!1sCAoSLEFGMVFpcE5Fcm9GTjhCc0tubnJGaDgwX3R2VXRla3dDNFV2ZGVUVFRvTF9E!2m2!1d33.8238182!2d-118.0429382!3f356.36724021617965!4f-29.230983180823642!5f0.4000000000000002" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>

            <Footer />
        </div>
    )
}

export default Tour;