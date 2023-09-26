import React from "react";
import Navbar from "../../components/ts/navbar/navbar";
import PageTitle from "../../components/ts/pagetitle/pagetitle";
import Footer from "../../components/ts/footer/Footer";

const VisionSLCS = () => {
    return (
        <div id="VisionSLCS">
            <Navbar />
            <PageTitle height={80} mainText="Vision & SLCS" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />
            <Footer title="Vision & SLCS" />
        </div>
    )
}

export default VisionSLCS;