import React from "react";
import Navbar from "../../components/ts/navbar/navbar";
import PageTitle from "../../components/ts/pagetitle/pagetitle";
import Footer from "../../components/ts/footer/Footer";
import '../../components/scss/pages/navtables/facultytable.scss';

const FacultyTable = () => {
    return (
        <div id="FacultyTable">
            <Navbar />
            <PageTitle height={80} mainText="Faculty Table" subText="Select relevant topics here!" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />
            <Footer title="Faculty Table" />
        </div>
    )
}

export default FacultyTable;