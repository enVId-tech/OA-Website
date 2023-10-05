import React from "react";
import Navbar from "../../components/ts/navbar/navbar";
import PageTitle from "../../components/ts/pagetitle/pagetitle";
import Footer from "../../components/ts/footer/Footer";
import '../../components/scss/pages/subpages/transportation.scss';

const Transportation = (): React.JSX.Element => {
    return (
        <div id="Transportation">
            <Navbar />
            <PageTitle height={80} mainText="Transportation" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />
            <div id="TransportationMain">
                <h1 id="TitleText">Transportation</h1>
                <img id="BusImage" src="images/BusStops.png" alt="BusImage" />
            </div>
            <Footer title="Transportation" />
        </div>
    )
}

export default Transportation;