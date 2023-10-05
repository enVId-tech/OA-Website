import React from "react";
import Navbar from "../../components/ts/navbar/navbar";
import PageTitle from "../../components/ts/pagetitle/pagetitle";
import Footer from "../../components/ts/footer/Footer";

const CCDualEnrollment = (): React.JSX.Element => {
    return (
        <div id="CCDualEnrollment">
            <Navbar />
            <PageTitle height={80} mainText="Cypress College Dual Enrollment" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />
            <Footer title="Cypress College Dual Enrollment" />
        </div>
    )
}

export default CCDualEnrollment;