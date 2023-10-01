import React from "react";
import Navbar from "../../components/ts/navbar/navbar";
import PageTitle from "../../components/ts/pagetitle/pagetitle";
import Footer from "../../components/ts/footer/Footer";
import '../../components/scss/pages/subpages/generalinformation.scss';

const GeneralInformation = () => {
    const Redirect = (type: string) => {
        switch (type) {
            case "Prof":
                window.open("https://oxford.auhsd.us/files/public_files/OA-Profile_web_2020-2021.pdf");
                break;
            case "Info":
                window.open("https://oxford.auhsd.us/files/user/3598/file/OA_InfoCard.pdf");
                break;
            case "Pathways":
                window.open("https://oxford.auhsd.us/files/user/3598/file/CareerPathways_OxfordAcademy.pdf");
                break;
            default:
                break;
        }
    }
    
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
                <div id="ExtraInfo">
                    <button id="Prof" className="buttonMain" onClick={() => Redirect("Prof")}>OA Profile</button>
                    <button id="Info" className="buttonMain" onClick={() => Redirect("Info")}>OA Info Card</button>
                    <button id="Pathways" className="buttonMain" onClick={() => Redirect("Pathways")}>OA Pathways</button>
                </div>
                <span id="Awards">
                    <div id="BHS" className="AwardTypes">
                        <img id="BHSImage" className="AwardImage" src="images/USN-Gold.png" alt="BestHS" />
                        <p className="MainText">#1 in CA, #9 in the US</p>
                        <p className="SubText">(2023)</p>
                    </div>
                    <div id="CalDistS" className="AwardTypes">
                        <img id="CDSImage" className="AwardImage" src="images/DistingSchool-logo.png" alt="BestHS" />
                        <p className="MainText">CA Distinguished School</p>
                        <p className="SubText">(2011, 2019, 2021)</p>
                    </div>
                    <div id="BRS" className="AwardTypes">
                        <img id="BRSImage" className="AwardImage" src="images/NatlBlueRibbon_USDE.png" alt="BestHS" />
                        <p className="MainText">National Blue Ribbon</p>
                        <p className="SubText">(2013, 2019)</p>
                    </div>
                    <div id="CalDemS" className="AwardTypes">
                        <img id="CDSImage" className="AwardImage" src="images/CalDemSchool.png" alt="BestHS" />
                        <p className="MainText">CA Democracy School</p>
                        <p className="SubText">(2020)</p>
                    </div>
                </span>
            </div>
            <Footer title="General Information" />
        </div>
    )
}

export default GeneralInformation;