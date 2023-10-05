import React from "react";
import Navbar from "../../components/ts/navbar/navbar";
import PageTitle from "../../components/ts/pagetitle/pagetitle";
import Footer from "../../components/ts/footer/Footer";
import '../../components/scss/pages/navtables/schooltable.scss';

const SchoolTable = (): React.JSX.Element => {
    return (
        <div id="SchoolTable">
            <Navbar />
            <PageTitle height={80} mainText="School Table" subText="Select relevant topics here!" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />
            <Footer title="School Table" />
        </div>
    )
}

export default SchoolTable;