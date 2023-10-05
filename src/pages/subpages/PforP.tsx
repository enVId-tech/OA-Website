import React from "react";
import Navbar from "../../components/ts/navbar/navbar";
import PageTitle from "../../components/ts/pagetitle/pagetitle";
import Footer from "../../components/ts/footer/Footer";
import '../../components/scss/pages/subpages/PforP.scss';

const ProgramsForPatriots = (): React.JSX.Element => {
    return (
        <div id="ProgramsForPatriots">
            <Navbar />
            <PageTitle height={80} mainText="Programs 4 Patriots" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />
            <div id="ProgramsForPatriotsMain">
                <h1 id="TitleText">Programs 4 Patriots</h1>
                <h1 id="ProgramsForPatriotsSecondary">
                    Can't add content on this page due to limited access to the official Oxford Site. Sorry!
                    <br />
                    <br />
                    - Erick Tran
                </h1>
            </div>
            <Footer title="Programs 4 Patriots" />
        </div>
    )
}

export default ProgramsForPatriots;