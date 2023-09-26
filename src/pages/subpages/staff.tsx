import React from "react";
import Navbar from "../../components/ts/navbar/navbar";
import PageTitle from "../../components/ts/pagetitle/pagetitle";
import Footer from "../../components/ts/footer/Footer";

const Staff = () => {
    return (
        <div id="Staff">
            <Navbar />
            <PageTitle height={80} mainText="Staff" subText="Meet the staff!" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />
            <Footer title="Staff" />
        </div>
    )
}

export default Staff;