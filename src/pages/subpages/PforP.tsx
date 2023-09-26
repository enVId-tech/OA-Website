import React from "react";
import Navbar from "../../components/ts/navbar/navbar";
import PageTitle from "../../components/ts/pagetitle/pagetitle";
import Footer from "../../components/ts/footer/Footer";

const ProgramsForPatriots = () => {
    return (
        <div id="ProgramsForPatriots">
            <Navbar />
            <PageTitle height={80} mainText="Programs 4 Patriots" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />
            <Footer title="Programs 4 Patriots" />
        </div>
    )
}

export default ProgramsForPatriots;