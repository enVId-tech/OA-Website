import React from "react";
import Navbar from "../../components/ts/navbar/navbar";
import PageTitle from "../../components/ts/pagetitle/pagetitle";
import Footer from "../../components/ts/footer/Footer";

const OxfSitemap = () => {
    return (
        <div id="OxfSitemap">
            <Navbar />
            <PageTitle height={80} mainText="Oxford Academy Sitemap" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />
            <a href="https://oxford.auhsd.us/files/user/1/file/OXFORD%20SITE%20MAP%202023%20Back%20cover%20inside.pdf">Oxford Site Map</a>
            <Footer title="OA Sitemap" />
        </div>
    )
}

export default OxfSitemap;