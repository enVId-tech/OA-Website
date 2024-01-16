import React from 'react';
import Navbar from '../../components/ts/navbar/navbar.template.tsx';
// import PageTitle from '../../components/ts/pagetitle/pagetitle.global.module.tsx';
import trackPageView from '../../components/ts/analytics/analytics.global.module.ts';
import Footer from '../../components/ts/footer/footer.global.module.tsx';

import ClassHelmet from '../../components/ts/pagetitle/title.global.module.tsx';
// import applyPageAnims from '../../components/ts/animations/animations.global.module.ts';

const AdminLogin: React.FC = (): React.JSX.Element => {
    React.useEffect((): void => {
        trackPageView();
    }, []);

    return (
        <div id="AdminLogin">
            <ClassHelmet title="Admin Login" />
            <Navbar />

            <Footer />
        </div>
    )
}

export default AdminLogin;