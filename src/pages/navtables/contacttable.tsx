import React from "react";
import Navbar from "../../components/ts/navbar/navbar";
import PageTitle from "../../components/ts/pagetitle/pagetitle";
import Footer from "../../components/ts/footer/Footer";
import '../../components/scss/pages/navtables/contacttable.scss';
const ContactTable = (): React.JSX.Element => {
    return (
        <div id="ContactTable">
            <Navbar />
            <PageTitle height={80} mainText="Contact Table" subText="Select relevant topics here!" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />
            <Footer title="Contact Table" />
        </div>
    )
}

export default ContactTable;