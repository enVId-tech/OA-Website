import React from "react";
import Navbar from "../../components/ts/navbar/navbar";
import PageTitle from "../../components/ts/pagetitle/pagetitle";
import Footer from "../../components/ts/footer/Footer";

const Administration = () => {
    return (
        <div id="Administration">
            <Navbar />
            <PageTitle height={80} mainText="Administration" subText="Meet the Oxford Administration!" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />
            <div id="AdministrationContent">
                <div className="container">
                    
                </div>
            </div>
            <Footer title="Administration" />
        </div>
    );
}

export default Administration;