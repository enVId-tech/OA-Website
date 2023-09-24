import React from "react";
import Footer from "../../components/ts/footer/Footer";
import Navbar from "../../components/ts/navbar/navbar";
import PageTitle from "../../components/ts/pagetitle/pagetitle";


const Clubs = () => {
    return (
        <div id="Clubs">
            <Navbar />
            <PageTitle height={80} mainText="Clubs" subText="Get involved!" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0}/> 
            <Footer title="Clubs" />
        </div>
    );
}

export default Clubs;