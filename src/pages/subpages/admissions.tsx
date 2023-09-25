import React from "react";
import Navbar from "../../components/ts/navbar/navbar";
import Footer from "../../components/ts/footer/Footer";
import PageTitle from "../../components/ts/pagetitle/pagetitle";

const Admissions = () => {
    return (
        <div id="Admissions">
            <Navbar />
            <PageTitle height={80} mainText="Admissions" subText="Apply to Oxford!" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />
            <div id="AdmissionsMain">
                <h1 id="AdmissionsTitle">Admissions</h1>
            </div>
            <Footer title="Admissions" />
        </div>
    )
}

export default Admissions;