import React from "react";
import Navbar from "../../components/ts/navbar/navbar";
import PageTitle from "../../components/ts/pagetitle/pagetitle";
import Footer from "../../components/ts/footer/Footer";
import '../../components/scss/pages/subpages/generalinformation.scss';

const GeneralInformation = () => {
    return (
        <div id="GeneralInformation">
            <Navbar />
            <PageTitle height={80} mainText="General Information" subText="Learn more about our school!" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />
            <div id="GeneralInformationMain">
                <h1 id="GenInfoHMain">General Information</h1>
                <span id="TopInfo">
                    <img id="GeneralInformationImage" src="images/OxfordAcademyFullLogo.webp" alt="GeneralInformation" />
                    <h1 id="MainText">is a seventh through twelfth grade college preparatory public school that opened in September of 1998.  Recognized as a California Distinguished School, OA draws students from the entire attendance area of the Anaheim Union High School District and its surrounding areas.</h1>
                </span>
                <hr />
                <div id="HS">
                    <h1 id="BestHSLabel">Oxford Academy leads with Excellence, Honor, Creativity, Caring & Fun</h1>
                    <img id="BestHSImage" src="images/HS2023.jpeg" alt="BestHS" />
                </div>
                <span id="ExtraInfo">
                
                </span>
                <span id="Awards">
                    <div id="BHS">

                    </div>
                    <div id="CDS">

                    </div>
                    <div id="BRS">

                    </div>
                    <div id="CDS">

                    </div>
                </span>
            </div>
            <Footer title="General Information" />
        </div>
    )
}

export default GeneralInformation;