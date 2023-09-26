import React from "react";
import Navbar from "../../components/ts/navbar/navbar";
import PageTitle from "../../components/ts/pagetitle/pagetitle";
import Footer from "../../components/ts/footer/Footer";

const DressCode = () => {
    return (
        <div id="DressCode">
            <Navbar />
            <PageTitle height={80} mainText="Dress Code" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />
            <h1>DressCode</h1>
            <Footer title="Dress Code" />
        </div>
    )
}

export default DressCode;