import React from "react";
import ClassHelmet from "../../components/ts/pagetitle/title.global.module.tsx";
import Navbar from "../../components/ts/navbar/navbar.template.tsx";
import PageTitle from "../../components/ts/pagetitle/pagetitle.global.module.tsx";
import Footer from "../../components/ts/footer/footer.global.module.tsx";
import trackPageView from "../../components/ts/analytics/analytics.global.module.ts";

import '../../components/scss/pages/navtables/studenttable.subpage.table.scss';

const StudentTable: React.FC = (): React.JSX.Element => {
    React.useEffect((): void => {
        trackPageView();
    }, []);

    return (
        <div id="StudentTable">
            <ClassHelmet title="Student Table" />
            <Navbar heightChange={790} />
            <PageTitle height={80} mainText="Student Table" subText="Select relevant topics here!" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />

            <div className="table-container">
                <span className="top-elements">
                    <h1 className="table-title">Student Table</h1>
                    <span className="table-type">
                        <button className="grid">Grid</button>
                        <button className="list">List</button>
                    </span>
                </span>
            </div>

            <Footer />
        </div>
    )
}

export default StudentTable;