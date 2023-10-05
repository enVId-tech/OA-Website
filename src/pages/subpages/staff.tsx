import React from "react";
import Navbar from "../../components/ts/navbar/navbar";
import PageTitle from "../../components/ts/pagetitle/pagetitle";
import Footer from "../../components/ts/footer/Footer";
import '../../components/scss/pages/subpages/staff.scss';

const Staff = (): React.JSX.Element => {
    return (
        <div id="Staff">
            <Navbar />
            <PageTitle height={80} mainText="Staff" subText="Meet the staff!" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />
            <div id="StaffMain">
                <h1 id="TitleText">Staff</h1>
                <h1 id="StaffSecondary">
                    <a href="https://oxford.auhsd.us/Oxford/Staff/" target="_blank" rel="noopener noreferrer">
                        Can't add content on this page due to outdated staff information on the official Oxford Site. Sorry!
                        <br />
                        <br />
                        - Erick Tran
                    </a>
                </h1>
            </div>
            <Footer title="Staff" />
        </div>
    )
}

export default Staff;