import React from "react";
import Navbar from "../../components/ts/navbar/navbar";
import PageTitle from "../../components/ts/pagetitle/pagetitle";
import Footer from "../../components/ts/footer/Footer";

const GeneralInformation = () => {
    return (
        <div id="GeneralInformation">
            <Navbar />
            <PageTitle height={80} mainText="General Information" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />
            <Footer title="General Information" />
        </div>
    )
}

export default GeneralInformation;