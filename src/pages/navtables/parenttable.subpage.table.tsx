import React from "react";
import Navbar from "../../components/ts/navbar/navbar.template.tsx";
import PageTitle from "../../components/ts/pagetitle/pagetitle.global.module.tsx";
import Footer from "../../components/ts/footer/footer.global.module.tsx";
import trackPageView from "../../components/ts/analytics/analytics.global.module.ts";

import '../../components/scss/pages/navtables/parenttable.subpage.table.scss';

const ParentTable: React.FC = (): React.JSX.Element => {
    React.useEffect((): void => {
        trackPageView();
    }, []);

    return (
        <div id="ParentTable">
            <Navbar />
            <PageTitle height={80} mainText="Parent Table" subText="Select relevant topics here!" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />
            <Footer title="Parent Table" />
        </div>
    )
}

export default ParentTable;