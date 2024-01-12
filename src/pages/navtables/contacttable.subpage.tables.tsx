import React from "react";
import Navbar from "../../components/ts/navbar/navbar.template.tsx";
import PageTitle from "../../components/ts/pagetitle/pagetitle.global.module.tsx";
import Footer from "../../components/ts/footer/footer.global.module.tsx";
import trackPageView from "../../components/ts/analytics/analytics.global.module.ts";

import '../../components/scss/pages/navtables/contacttable.subpage.table.scss';

const ContactTable: React.FC = (): React.JSX.Element => {
    React.useEffect((): void => {
        trackPageView();
    }, []);
    
    return (
        <div id="ContactTable">
            <Navbar />
            <PageTitle height={80} mainText="Contact Table" subText="Select relevant topics here!" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />
            <Footer title="Contact Table" />
        </div>
    )
}

export default ContactTable;