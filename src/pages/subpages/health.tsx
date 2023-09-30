import React from "react";
import Navbar from "../../components/ts/navbar/navbar";
import PageTitle from "../../components/ts/pagetitle/pagetitle";
import Footer from "../../components/ts/footer/Footer";

const Health = () => {
    return (
        <div id="Health">
            <Navbar />
            <PageTitle height={80} mainText="Health" subText="Healthy Students Learn Better" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />
            <Footer title="Health" />
        </div>
    )
}

export default Health;