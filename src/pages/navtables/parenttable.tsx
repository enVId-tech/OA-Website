import React from "react";
import Navbar from "../../components/ts/navbar/navbar";
import PageTitle from "../../components/ts/pagetitle/pagetitle";
import Footer from "../../components/ts/footer/Footer";
import '../../components/scss/pages/navtables/parenttable.scss';

const ParentTable: React.FC = (): React.JSX.Element => {
    return (
        <div id="ParentTable">
            <Navbar />
            <PageTitle height={80} mainText="Parent Table" subText="Select relevant topics here!" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />
            <Footer title="Parent Table" />
        </div>
    )
}

export default ParentTable;